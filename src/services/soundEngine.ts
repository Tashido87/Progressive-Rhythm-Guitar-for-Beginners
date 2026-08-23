/**
 * High quality Web Audio API Synthesizer for Guitar Strums, Notes, Metronome & Tuner.
 */

import { ChordDefinition } from '../types';

class SoundEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private masterGain: GainNode | null = null;

  // Initialize AudioContext on user interaction
  public initAudio() {
    this.initContext();
  }

  private initContext() {
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.ctx = new AudioCtx();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.8, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
  }

  public getMuted() {
    return this.isMuted;
  }

  // MIDI Note to Frequency converter (A4 = 440Hz = MIDI 69)
  public midiToFreq(midi: number): number {
    return 440 * Math.pow(2, (midi - 69) / 12);
  }

  // Standard Guitar Tuning MIDI numbers:
  // String 6 (Low E) = E2 (40)
  // String 5 (A) = A2 (45)
  // String 4 (D) = D3 (50)
  // String 3 (G) = G3 (55)
  // String 2 (B) = B3 (59)
  // String 1 (High E) = E4 (64)
  public stringBaseMidi = [0, 64, 59, 55, 50, 45, 40]; // 1-indexed for strings 1..6

  /**
   * Synthesize a plucked acoustic/electric guitar string
   */
  public playPluckedString(
    midiNote: number,
    startTime?: number,
    duration = 1.6,
    isDampened = false,
    isMuted = false,
    volume = 0.5
  ) {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    const t0 = startTime !== undefined ? startTime : this.ctx.currentTime;
    const freq = this.midiToFreq(midiNote);

    if (isMuted) {
      // Noise burst for percussive chuck
      const bufferSize = this.ctx.sampleRate * 0.04;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        output[i] = Math.random() * 2 - 1;
      }
      const whiteNoise = this.ctx.createBufferSource();
      whiteNoise.buffer = buffer;

      const filter = this.ctx.createBiquadFilter();
      filter.type = 'bandpass';
      filter.frequency.setValueAtTime(800, t0);
      filter.Q.setValueAtTime(1.5, t0);

      const gain = this.ctx.createGain();
      gain.gain.setValueAtTime(volume * 0.4, t0);
      gain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.05);

      whiteNoise.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      whiteNoise.start(t0);
      whiteNoise.stop(t0 + 0.06);
      return;
    }

    // Rich dual-oscillator acoustic guitar tone generator
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const subOsc = this.ctx.createOscillator();

    osc1.type = 'triangle';
    osc2.type = 'sawtooth';
    subOsc.type = 'sine';

    osc1.frequency.setValueAtTime(freq, t0);
    osc2.frequency.setValueAtTime(freq * 1.002, t0); // Slight detune for chorus warmth
    subOsc.frequency.setValueAtTime(freq, t0);

    // Body resonance filter
    const bodyFilter = this.ctx.createBiquadFilter();
    bodyFilter.type = 'lowpass';
    const cutoff = isDampened ? 450 : Math.min(3200, freq * 4);
    bodyFilter.frequency.setValueAtTime(cutoff, t0);
    bodyFilter.frequency.exponentialRampToValueAtTime(
      isDampened ? 200 : Math.max(200, freq * 1.2),
      t0 + (isDampened ? 0.2 : duration)
    );

    // String pluck attack & decay envelope
    const gainNode = this.ctx.createGain();
    const actualDuration = isDampened ? 0.3 : duration;

    gainNode.gain.setValueAtTime(0.001, t0);
    gainNode.gain.linearRampToValueAtTime(volume, t0 + 0.005); // Rapid attack

    if (isDampened) {
      gainNode.gain.exponentialRampToValueAtTime(0.001, t0 + 0.25);
    } else {
      // Natural exponential guitar ring
      gainNode.gain.exponentialRampToValueAtTime(volume * 0.4, t0 + 0.15);
      gainNode.gain.exponentialRampToValueAtTime(0.0001, t0 + actualDuration);
    }

    osc1.connect(bodyFilter);
    osc2.connect(bodyFilter);
    subOsc.connect(bodyFilter);
    bodyFilter.connect(gainNode);
    gainNode.connect(this.masterGain);

    osc1.start(t0);
    osc2.start(t0);
    subOsc.start(t0);

    osc1.stop(t0 + actualDuration + 0.05);
    osc2.stop(t0 + actualDuration + 0.05);
    subOsc.stop(t0 + actualDuration + 0.05);
  }

  /**
   * Helper to extract frets array from ChordDefinition
   */
  public extractFrets(chord: ChordDefinition): number[] {
    const frets: number[] = [-1, -1, -1, -1, -1, -1]; // [s6, s5, s4, s3, s2, s1]

    if (Array.isArray(chord.fingers)) {
      for (const f of chord.fingers) {
        if (f.string >= 1 && f.string <= 6) {
          frets[6 - f.string] = f.fret;
        }
      }
    } else if (chord.strings) {
      for (let s = 1; s <= 6; s++) {
        const val = chord.strings[s as keyof typeof chord.strings];
        frets[6 - s] = val === 'x' ? -1 : val;
      }
    }
    return frets;
  }

  /**
   * Play a full chord strum
   */
  public playChord(
    chord: ChordDefinition,
    direction: 'down' | 'up' | 'percussive' | 'staccato' | 'dampened' = 'down',
    bpm: number = 90
  ) {
    const frets = this.extractFrets(chord);
    this.playChordStrum(frets, direction, bpm);
  }

  /**
   * Play individual string note from a chord
   */
  public playChordNote(chord: ChordDefinition, stringIndex: number) {
    this.initContext();
    const frets = this.extractFrets(chord);
    const fret = frets[6 - stringIndex];
    if (fret !== undefined && fret >= 0) {
      const baseMidi = this.stringBaseMidi[stringIndex];
      this.playPluckedString(baseMidi + fret, undefined, 1.8, false, false, 0.7);
    }
  }

  /**
   * Play percussive chuk
   */
  public playPercussiveChuk() {
    this.initContext();
    if (!this.ctx) return;
    this.playPluckedString(50, undefined, 0.1, false, true, 0.6);
  }

  /**
   * Play dampened chord
   */
  public playDampenedChord(chord: ChordDefinition) {
    const frets = this.extractFrets(chord);
    this.playChordStrum(frets, 'dampened', 90);
  }

  /**
   * Play staccato chord
   */
  public playStaccatoChord(chord: ChordDefinition) {
    const frets = this.extractFrets(chord);
    this.playChordStrum(frets, 'staccato', 90);
  }

  /**
   * Play bass note of a chord
   */
  public playBassNote(chord: ChordDefinition, stringNum: number = 6) {
    this.initContext();
    const frets = this.extractFrets(chord);
    const fret = frets[6 - stringNum];
    if (fret !== undefined && fret >= 0) {
      const baseMidi = this.stringBaseMidi[stringNum];
      this.playPluckedString(baseMidi + fret, undefined, 1.2, false, false, 0.8);
    }
  }

  /**
   * Play single note by specific guitar string (1..6) and fret (0..15)
   */
  public playNoteByStringFret(stringNum: number, fret: number | string, duration = 1.4) {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;
    if (fret === 'x' || fret === 'X' || fret === -1) {
      this.playPercussiveChuk();
      return;
    }
    const numFret = typeof fret === 'number' ? fret : parseInt(fret, 10);
    if (isNaN(numFret) || numFret < 0) return;
    const baseMidi = this.stringBaseMidi[stringNum] || 40;
    this.playPluckedString(baseMidi + numFret, undefined, duration, false, false, 0.75);
  }

  /**
   * Play a full chord strum with down/up direction stagger
   * fretPositions: Array of frets for strings 6 down to 1. (-1 = muted/X, 0 = open, 1..n = fret)
   */
  public playChordStrum(
    frets: number[], // [s6, s5, s4, s3, s2, s1]
    direction: 'down' | 'up' | 'percussive' | 'staccato' | 'dampened' = 'down',
    bpm: number = 90,
    startTime?: number,
    volume: number = 0.6
  ) {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx) return;

    const t0 = startTime !== undefined ? startTime : this.ctx.currentTime;
    const isPercussive = direction === 'percussive';
    const isStaccato = direction === 'staccato';
    const isDampened = direction === 'dampened';

    // Calculate active string notes from string 6 to 1
    const activeStrings: { stringNum: number; midi: number }[] = [];
    for (let s = 6; s >= 1; s--) {
      const fretIndex = 6 - s; // 0 for s6, 5 for s1
      const fret = frets[fretIndex];
      if (fret !== undefined && fret >= 0) {
        const baseMidi = this.stringBaseMidi[s];
        activeStrings.push({
          stringNum: s,
          midi: baseMidi + fret,
        });
      }
    }

    if (activeStrings.length === 0) return;

    // Order of picking depends on downstrum (6 -> 1) vs upstrum (1 -> 6)
    const strumOrder = direction === 'up' ? [...activeStrings].reverse() : activeStrings;

    const strumSpeedFactor = Math.max(0.008, 0.025 * (90 / bpm));
    const noteDuration = isStaccato ? 0.18 : isDampened ? 0.35 : 1.4;

    strumOrder.forEach((item, index) => {
      const stringDelay = isPercussive ? 0 : index * strumSpeedFactor;
      this.playPluckedString(
        item.midi,
        t0 + stringDelay,
        noteDuration,
        isDampened,
        isPercussive,
        volume
      );
    });
  }

  /**
   * Play metronome click
   */
  public playMetronomeClick(isHigh: boolean = false, startTime?: number) {
    if (this.isMuted) return;
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    const t0 = startTime !== undefined ? startTime : this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(isHigh ? 1200 : 800, t0);
    osc.frequency.exponentialRampToValueAtTime(100, t0 + 0.04);

    gain.gain.setValueAtTime(0.3, t0);
    gain.gain.exponentialRampToValueAtTime(0.001, t0 + 0.04);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t0);
    osc.stop(t0 + 0.05);
  }

  /**
   * Play single tuner pitch
   */
  public playTunerTone(freq: number, duration: number = 3.0) {
    this.initContext();
    if (!this.ctx || !this.masterGain) return;

    const t0 = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, t0);

    gain.gain.setValueAtTime(0.01, t0);
    gain.gain.linearRampToValueAtTime(0.4, t0 + 0.05);
    gain.gain.setValueAtTime(0.4, t0 + duration - 0.2);
    gain.gain.exponentialRampToValueAtTime(0.001, t0 + duration);

    osc.connect(gain);
    gain.connect(this.masterGain);

    osc.start(t0);
    osc.stop(t0 + duration);
  }

  public playTuningTone(freq: number, duration: number = 3.0) {
    this.playTunerTone(freq, duration);
  }
}

export const soundEngine = new SoundEngine();
