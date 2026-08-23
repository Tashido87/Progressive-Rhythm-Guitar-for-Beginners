import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, RotateCcw, Volume2, Music, Gauge, VolumeX } from 'lucide-react';
import { RhythmPattern, BeatMarker, ChordDefinition } from '../types';
import { soundEngine } from '../services/soundEngine';
import { CHORDS_DICTIONARY } from '../data/chordsData';

interface InteractiveRhythmPlayerProps {
  rhythm: RhythmPattern;
  availableChords?: string[];
  defaultChord?: string;
}

export const InteractiveRhythmPlayer: React.FC<InteractiveRhythmPlayerProps> = ({
  rhythm,
  availableChords = ['C', 'G', 'Am', 'Em', 'D', 'F_barre'],
  defaultChord = 'C'
}) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBeatIndex, setCurrentBeatIndex] = useState<number | null>(null);
  const [bpm, setBpm] = useState(rhythm.defaultBpm || 80);
  const [selectedChordKey, setSelectedChordKey] = useState(defaultChord);
  const [metronomeClick, setMetronomeClick] = useState(true);
  const [loopMode, setLoopMode] = useState(true);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const beatIndexRef = useRef(0);

  const currentChord = CHORDS_DICTIONARY[selectedChordKey] || CHORDS_DICTIONARY['C'];

  const beats = rhythm.beats;

  const calculateBeatDurationMs = useCallback((beat: BeatMarker, currentBpm: number) => {
    const quarterNoteMs = (60 / currentBpm) * 1000;
    if (beat.triplet) {
      return quarterNoteMs / 3;
    }
    if (beat.sixteenth) {
      return quarterNoteMs / 4;
    }
    if (beat.count === '+' || beat.count === '&') {
      return quarterNoteMs / 2;
    }
    return quarterNoteMs / 2; // default sub-division duration
  }, []);

  const playBeatSound = useCallback((beat: BeatMarker, index: number) => {
    // Play metronome click on primary on-beats (1, 2, 3, 4)
    if (metronomeClick && (beat.count === '1' || beat.count === '2' || beat.count === '3' || beat.count === '4')) {
      soundEngine.playMetronomeClick(beat.count === '1');
    }

    // Play guitar strum sound based on beat type
    if (beat.type === 'down') {
      soundEngine.playChord(currentChord, 'down', 50);
    } else if (beat.type === 'up') {
      soundEngine.playChord(currentChord, 'up', 45);
    } else if (beat.type === 'percussive-down' || beat.type === 'percussive-up') {
      soundEngine.playPercussiveChuk();
    } else if (beat.type === 'dampened-down') {
      soundEngine.playDampenedChord(currentChord);
    } else if (beat.type === 'staccato-down' || beat.type === 'staccato-up') {
      soundEngine.playStaccatoChord(currentChord);
    } else if (beat.type === 'bass-pick') {
      soundEngine.playBassNote(currentChord, beat.bassString || currentChord.rootString);
    }
  }, [currentChord, metronomeClick]);

  const scheduleNextBeat = useCallback(() => {
    if (!isPlaying) return;

    const beat = beats[beatIndexRef.current];
    setCurrentBeatIndex(beatIndexRef.current);
    playBeatSound(beat, beatIndexRef.current);

    const duration = calculateBeatDurationMs(beat, bpm);

    timerRef.current = setTimeout(() => {
      beatIndexRef.current = (beatIndexRef.current + 1) % beats.length;
      if (!loopMode && beatIndexRef.current === 0) {
        setIsPlaying(false);
        setCurrentBeatIndex(null);
        return;
      }
      scheduleNextBeat();
    }, duration);
  }, [isPlaying, beats, bpm, calculateBeatDurationMs, loopMode, playBeatSound]);

  useEffect(() => {
    if (isPlaying) {
      scheduleNextBeat();
    } else {
      if (timerRef.current) clearTimeout(timerRef.current);
      setCurrentBeatIndex(null);
      beatIndexRef.current = 0;
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isPlaying, scheduleNextBeat]);

  const togglePlay = () => {
    soundEngine.initAudio();
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsPlaying(false);
    setCurrentBeatIndex(null);
    beatIndexRef.current = 0;
  };

  // Helper symbol renderers
  const getSymbol = (beat: BeatMarker) => {
    switch (beat.type) {
      case 'down':
        return '⨅'; // Down strum wedge
      case 'up':
        return '⋁'; // Up strum wedge
      case 'percussive-down':
      case 'percussive-up':
        return '✖'; // Chuk
      case 'dampened-down':
        return '⨅ (D)';
      case 'staccato-down':
        return '⨅ (•)';
      case 'bass-pick':
        return `B(${beat.bassString || 6})`;
      case 'air-down':
        return '(⨅)';
      case 'rest':
        return '𝄽';
      default:
        return '⨅';
    }
  };

  const getStrokeLabel = (beat: BeatMarker) => {
    switch (beat.type) {
      case 'down':
        return 'Down';
      case 'up':
        return 'Up';
      case 'percussive-down':
      case 'percussive-up':
        return 'Chuk';
      case 'dampened-down':
        return 'Palm Mute';
      case 'staccato-down':
        return 'Staccato';
      case 'bass-pick':
        return 'Bass Note';
      case 'air-down':
        return 'Air';
      case 'rest':
        return 'Rest';
      default:
        return 'Strum';
    }
  };

  return (
    <div className="bg-white border-2 border-slate-200 rounded-3xl p-5 sm:p-6 shadow-sm transition-all duration-300">
      {/* Rhythm Title and Badges */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 text-xs font-mono font-bold rounded bg-orange-50 text-orange-600 border border-orange-200">
              {rhythm.timeSignature}
            </span>
            <h4 className="text-base font-bold text-slate-900">{rhythm.name}</h4>
          </div>
          {rhythm.descriptionMy && (
            <p className="text-xs text-slate-500 font-myanmar mt-1">{rhythm.descriptionMy}</p>
          )}
        </div>

        {/* Count spoken representation */}
        <div className="flex items-center gap-2 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
          <span className="text-[11px] text-slate-400 uppercase tracking-wider font-mono font-bold">Count:</span>
          <span className="text-xs font-mono font-bold text-orange-600">{rhythm.spokenCount}</span>
        </div>
      </div>

      {/* Visual Animated Beat Strip */}
      <div className="my-5 p-4 rounded-2xl bg-slate-50 border border-slate-200 overflow-x-auto scrollbar-thin">
        <div className="flex items-center justify-between min-w-[320px] gap-2">
          {beats.map((beat, idx) => {
            const isActive = currentBeatIndex === idx;
            const isDown = beat.type.includes('down');
            const isChuk = beat.type.includes('percussive');
            const isRest = beat.type === 'rest' || beat.deadened;

            return (
              <div
                key={`beat-${idx}`}
                className={`flex-1 flex flex-col items-center p-2.5 rounded-xl transition-all duration-150 relative ${
                  isActive
                    ? 'bg-orange-100 border-2 border-orange-500 scale-105 shadow-md shadow-orange-500/10 -translate-y-1'
                    : 'bg-white border border-slate-200 hover:border-slate-300'
                }`}
              >
                {/* Visual Bouncing indicator dot */}
                <div
                  className={`w-2 h-2 rounded-full mb-1 transition-all duration-150 ${
                    isActive ? 'bg-orange-600 scale-150 shadow-xs' : 'bg-slate-300'
                  }`}
                />

                {/* Strum Notation Symbol */}
                <div
                  className={`text-xl font-mono font-bold mb-1 ${
                    isActive
                      ? 'text-orange-600'
                      : isChuk
                      ? 'text-red-500'
                      : isRest
                      ? 'text-slate-400'
                      : isDown
                      ? 'text-slate-900'
                      : 'text-slate-600'
                  }`}
                >
                  {getSymbol(beat)}
                </div>

                {/* Count text (1, +, 2, e, etc.) */}
                <div
                  className={`text-xs font-mono font-bold px-1.5 py-0.5 rounded ${
                    isActive ? 'bg-orange-600 text-white' : 'text-slate-700 bg-slate-100'
                  }`}
                >
                  {beat.count}
                </div>

                {/* Type label */}
                <span className="text-[9px] text-slate-500 font-mono mt-1 uppercase tracking-tight">
                  {getStrokeLabel(beat)}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Control Bar (Play, Tempo, Chord Selector, Metronome) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-center bg-slate-50 p-4 rounded-2xl border border-slate-200">
        {/* Play & Reset Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={togglePlay}
            className={`flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl font-bold text-xs transition-all duration-200 cursor-pointer shadow-xs ${
              isPlaying
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : 'bg-slate-900 hover:bg-slate-800 text-white active:scale-95'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-4 h-4" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-4 h-4 fill-current" />
                <span>Play Rhythm (စည်းချက်ဖွင့်ရန်)</span>
              </>
            )}
          </button>

          <button
            onClick={handleReset}
            className="p-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer border border-slate-200 shadow-2xs"
            title="Reset"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>

        {/* BPM Slider Control */}
        <div className="flex flex-col gap-1 px-1">
          <div className="flex items-center justify-between text-xs text-slate-600">
            <span className="flex items-center gap-1.5 font-medium">
              <Gauge className="w-3.5 h-3.5 text-orange-600" />
              <span>Tempo</span>
            </span>
            <span className="font-mono font-bold text-orange-600">{bpm} BPM</span>
          </div>
          <input
            type="range"
            min="40"
            max="160"
            step="5"
            value={bpm}
            onChange={(e) => setBpm(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
          />
          <div className="flex justify-between text-[10px] text-slate-400 font-mono">
            <button onClick={() => setBpm(Math.max(40, bpm - 10))} className="hover:text-slate-700 cursor-pointer">-10</button>
            <button onClick={() => setBpm(rhythm.defaultBpm || 80)} className="hover:text-orange-600 cursor-pointer">Default ({rhythm.defaultBpm || 80})</button>
            <button onClick={() => setBpm(Math.min(160, bpm + 10))} className="hover:text-slate-700 cursor-pointer">+10</button>
          </div>
        </div>

        {/* Chord Selector & Metronome toggle */}
        <div className="flex items-center gap-2">
          {/* Chord dropdown */}
          <div className="flex-1">
            <label className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">
              Sound Chord:
            </label>
            <select
              value={selectedChordKey}
              onChange={(e) => setSelectedChordKey(e.target.value)}
              className="w-full bg-white border border-slate-200 text-slate-800 text-xs rounded-xl px-2.5 py-1.5 font-mono focus:outline-none focus:border-orange-500"
            >
              {availableChords.map((chordKey) => {
                const c = CHORDS_DICTIONARY[chordKey];
                return (
                  <option key={chordKey} value={chordKey}>
                    {c ? c.name : chordKey}
                  </option>
                );
              })}
            </select>
          </div>

          {/* Metronome sound toggle */}
          <div>
            <label className="block text-[10px] text-slate-500 font-bold uppercase tracking-wider mb-1">
              Click:
            </label>
            <button
              onClick={() => setMetronomeClick(!metronomeClick)}
              className={`p-2 rounded-xl border text-xs font-mono transition-colors cursor-pointer ${
                metronomeClick
                  ? 'bg-orange-50 border-orange-200 text-orange-600'
                  : 'bg-white border-slate-200 text-slate-400'
              }`}
              title="Metronome click toggle"
            >
              {metronomeClick ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
