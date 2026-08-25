import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, RotateCcw, Volume2, VolumeX, Gauge, Sparkles, Disc } from 'lucide-react';
import { RhythmVariationsBookData, RhythmVariationItem, SuggestedRhythmBeat } from '../types';
import { soundEngine } from '../services/soundEngine';
import { CHORDS_DICTIONARY } from '../data/chordsData';

interface BookRhythmVariationsProps {
  data: RhythmVariationsBookData;
  availableChords?: string[];
}

export const BookRhythmVariations: React.FC<BookRhythmVariationsProps> = ({
  data,
  availableChords = ['C', 'Em', 'F', 'G', 'Am', 'D', 'A', 'E']
}) => {
  const [selectedChordKey, setSelectedChordKey] = useState<string>(data.defaultChord || 'C');
  const [activeVariationId, setActiveVariationId] = useState<string | null>(null);
  const [activeBeatIndex, setActiveBeatIndex] = useState<number | null>(null);
  const [bpm, setBpm] = useState<number>(90);
  const [metronomeClick, setMetronomeClick] = useState<boolean>(true);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const beatIndexRef = useRef<number>(0);

  const currentChord = CHORDS_DICTIONARY[selectedChordKey] || CHORDS_DICTIONARY['C'];

  const calculateBeatDurationMs = useCallback((beat: SuggestedRhythmBeat, currentBpm: number) => {
    const quarterNoteMs = (60 / currentBpm) * 1000;
    // If it's an eighth note (+ or &) or half-beat subdivision
    return quarterNoteMs / 2;
  }, []);

  const playBeatSound = useCallback(
    (beat: SuggestedRhythmBeat) => {
      // Play metronome click on primary numbered counts (1, 2, 3, 4)
      if (metronomeClick && ['1', '2', '3', '4'].includes(beat.count)) {
        soundEngine.playMetronomeClick(beat.count === '1');
      }

      // Play chord strum
      if (beat.type === 'down' || beat.stroke === 'V') {
        soundEngine.playChord(currentChord, 'down', 45);
      } else if (beat.type === 'up' || beat.stroke === '⋀' || beat.stroke === '^') {
        soundEngine.playChord(currentChord, 'up', 40);
      } else if (beat.type === 'chuk' || beat.stroke === 'X') {
        soundEngine.playPercussiveChuk();
      }
    },
    [currentChord, metronomeClick]
  );

  const activeVariation = data.variations.find((v) => v.id === activeVariationId);

  const scheduleNextBeat = useCallback(() => {
    if (!activeVariationId || !activeVariation) return;

    const beats = activeVariation.beats;
    const currentIdx = beatIndexRef.current;
    const beat = beats[currentIdx];

    setActiveBeatIndex(currentIdx);
    playBeatSound(beat);

    const duration = calculateBeatDurationMs(beat, bpm);

    timerRef.current = setTimeout(() => {
      beatIndexRef.current = (beatIndexRef.current + 1) % beats.length;
      scheduleNextBeat();
    }, duration);
  }, [activeVariationId, activeVariation, bpm, calculateBeatDurationMs, playBeatSound]);

  useEffect(() => {
    if (activeVariationId && activeVariation) {
      beatIndexRef.current = 0;
      scheduleNextBeat();
    } else {
      if (timerRef.current) clearTimeout(timerRef.current);
      setActiveBeatIndex(null);
      beatIndexRef.current = 0;
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [activeVariationId, scheduleNextBeat]);

  const toggleVariationPlay = (variation: RhythmVariationItem) => {
    soundEngine.initAudio();
    if (activeVariationId === variation.id) {
      // Stop
      if (timerRef.current) clearTimeout(timerRef.current);
      setActiveVariationId(null);
      setActiveBeatIndex(null);
    } else {
      // Start this variation
      if (timerRef.current) clearTimeout(timerRef.current);
      setActiveVariationId(variation.id);
    }
  };

  const handleStopAll = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setActiveVariationId(null);
    setActiveBeatIndex(null);
    beatIndexRef.current = 0;
  };

  const handleSingleStrokeClick = (beat: SuggestedRhythmBeat) => {
    soundEngine.initAudio();
    playBeatSound(beat);
  };

  return (
    <div className="w-full bg-[#fbf9f5] border-2 border-slate-300 rounded-3xl p-5 sm:p-7 shadow-sm font-sans select-none overflow-hidden transition-all">
      {/* Authentic Book Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b-2 border-slate-300">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight font-serif">
              {data.title}
            </h3>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-orange-100 text-orange-700 border border-orange-200">
              {data.timeSignature}
            </span>
          </div>
          {data.titleMy && (
            <p className="text-xs sm:text-sm text-slate-600 font-myanmar">{data.titleMy}</p>
          )}
        </div>

        {/* Global Chord Picker & Sound Test */}
        <div className="flex items-center gap-3 bg-white px-3.5 py-2 rounded-2xl border border-slate-300 shadow-2xs">
          <label className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
            Chord:
          </label>
          <select
            value={selectedChordKey}
            onChange={(e) => setSelectedChordKey(e.target.value)}
            className="bg-slate-50 border border-slate-300 text-slate-900 text-sm rounded-xl px-2.5 py-1 font-mono font-black focus:outline-none focus:border-orange-500"
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

          <button
            onClick={() => {
              soundEngine.initAudio();
              soundEngine.playChord(currentChord, 'down');
            }}
            className="px-2 py-1 text-xs font-bold font-mono bg-orange-50 hover:bg-orange-100 text-orange-700 rounded-lg border border-orange-200 cursor-pointer transition-colors"
            title="Strum Chord Preview"
          >
            Strum
          </button>
        </div>
      </div>

      {/* Control Toolbar (Tempo, Metronome, Stop) */}
      <div className="my-4 flex flex-wrap items-center justify-between gap-3 bg-white p-3 rounded-2xl border border-slate-200 text-xs">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1.5 text-slate-700 font-medium">
            <Gauge className="w-4 h-4 text-orange-600" />
            <span className="font-mono font-bold">{bpm} BPM</span>
          </div>
          <input
            type="range"
            min="50"
            max="150"
            step="5"
            value={bpm}
            onChange={(e) => setBpm(Number(e.target.value))}
            className="w-28 sm:w-40 h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
          />
          <button
            onClick={() => setBpm(90)}
            className="text-[10px] text-slate-400 hover:text-slate-700 underline font-mono cursor-pointer"
          >
            Reset (90)
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setMetronomeClick(!metronomeClick)}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-xl text-xs font-mono font-semibold border transition-colors cursor-pointer ${
              metronomeClick
                ? 'bg-orange-50 border-orange-200 text-orange-700'
                : 'bg-white border-slate-200 text-slate-400'
            }`}
            title="Toggle Metronome Click on 1, 2, 3"
          >
            {metronomeClick ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span>Click</span>
          </button>

          {activeVariationId && (
            <button
              onClick={handleStopAll}
              className="flex items-center gap-1 px-3 py-1 bg-red-600 hover:bg-red-700 text-white rounded-xl font-bold font-mono text-xs cursor-pointer shadow-xs transition-colors"
            >
              <Pause className="w-3.5 h-3.5" />
              <span>Stop</span>
            </button>
          )}
        </div>
      </div>

      {/* 6 Variations Grid - Authentic Book Style */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 my-5">
        {data.variations.map((variation) => {
          const isCurrentActive = activeVariationId === variation.id;

          return (
            <div
              key={variation.id}
              className={`bg-white border-2 rounded-2xl p-4 sm:p-5 transition-all duration-200 relative ${
                isCurrentActive
                  ? 'border-orange-500 shadow-md shadow-orange-500/10 bg-orange-50/20'
                  : 'border-slate-300 hover:border-slate-400 shadow-2xs'
              }`}
            >
              {/* Variation Header: Cassette Badge + Play Button */}
              <div className="flex items-center justify-between mb-3">
                {/* Cassette Icon + Circled Number ①, ②, ③ */}
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-slate-900 text-white flex items-center justify-center shadow-xs">
                    <Disc className={`w-4 h-4 text-orange-400 ${isCurrentActive ? 'animate-spin' : ''}`} />
                  </div>
                  <div className="w-6 h-6 rounded-full border-2 border-slate-900 flex items-center justify-center font-serif font-bold text-sm text-slate-900 bg-slate-100">
                    {variation.number}
                  </div>
                </div>

                {/* Individual Play / Pause Trigger */}
                <button
                  onClick={() => toggleVariationPlay(variation)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs font-bold transition-all cursor-pointer shadow-xs ${
                    isCurrentActive
                      ? 'bg-orange-600 hover:bg-orange-700 text-white'
                      : 'bg-slate-900 hover:bg-slate-800 text-white active:scale-95'
                  }`}
                >
                  {isCurrentActive ? (
                    <>
                      <Pause className="w-3.5 h-3.5" />
                      <span>Pause</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Play</span>
                    </>
                  )}
                </button>
              </div>

              {/* Authentic Book Measure Engraving Box: | V  ⋀   V  ⋀   V | */}
              <div className="bg-[#fcfbf9] border border-slate-300 rounded-xl p-3 sm:p-4 my-2 text-center select-none shadow-inner">
                {/* Visual Measure Container */}
                <div className="flex items-center justify-between font-mono font-black text-slate-900 px-1">
                  {/* Left Initial Barline */}
                  <div className="text-2xl font-light text-slate-800 shrink-0">|</div>

                  {/* Beats in this measure */}
                  <div className="flex-1 flex items-center justify-around px-2">
                    {variation.beats.map((beat, bIdx) => {
                      const isBeatActive = isCurrentActive && activeBeatIndex === bIdx;
                      const strokeDisplay = beat.stroke === '^' ? '⋀' : beat.stroke;

                      return (
                        <div
                          key={`var-${variation.id}-beat-${bIdx}`}
                          onClick={() => handleSingleStrokeClick(beat)}
                          className={`flex flex-col items-center cursor-pointer px-1.5 py-1 rounded-lg transition-all duration-100 ${
                            isBeatActive
                              ? 'bg-orange-500 text-white scale-110 shadow-xs'
                              : 'hover:bg-orange-100/60 text-slate-900'
                          }`}
                          title={`Beat ${beat.count} (${beat.type}): Click to test stroke`}
                        >
                          {/* Strum Symbol: V (Down) or ⋀ (Up - Inverted V) */}
                          <span
                            className={`text-xl sm:text-2xl font-black font-mono leading-none ${
                              isBeatActive
                                ? 'text-white'
                                : strokeDisplay === '⋀'
                                ? 'text-slate-800'
                                : 'text-slate-900'
                            }`}
                          >
                            {strokeDisplay}
                          </span>

                          {/* Count: 1, +, 2, +, 3 */}
                          <span
                            className={`text-xs sm:text-sm font-bold font-mono mt-1.5 ${
                              isBeatActive ? 'text-white' : 'text-slate-700'
                            }`}
                          >
                            {beat.count}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* Right Ending Barline */}
                  <div className="text-2xl font-light text-slate-800 shrink-0">|</div>
                </div>
              </div>

              {/* Spoken count footer */}
              <div className="mt-2 text-center">
                <span className="text-[11px] font-mono font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md border border-slate-200">
                  Count: {variation.spokenCount}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Authentic Book Instruction Footer */}
      <div className="mt-4 pt-4 border-t-2 border-slate-300 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-slate-600">
        <div className="space-y-0.5">
          <p className="font-serif italic text-slate-800 text-sm font-medium">
            {data.footerNoteEn || 'Apply these rhythms to the turnaround progressions so far studied.'}
          </p>
          <p className="font-myanmar text-slate-500 text-[11px]">
            {data.footerNoteMy ||
              'ယခင်သင်ယူခဲ့သော Turnaround Progression များတွင် ဤရစ်သမ်များကို အစားထိုး၍ လက်တွေ့လေ့ကျင့်ပါ။'}
          </p>
        </div>

        <div className="flex items-center gap-3 font-mono text-[11px] shrink-0 bg-white px-3 py-1.5 rounded-xl border border-slate-200">
          <span className="flex items-center gap-1 font-bold text-slate-900">
            <span className="text-orange-600 text-sm font-black">V</span> = Down Strum
          </span>
          <span className="flex items-center gap-1 font-bold text-slate-900">
            <span className="text-orange-600 text-sm font-black">⋀</span> = Up Strum (Inverted V)
          </span>
        </div>
      </div>
    </div>
  );
};
