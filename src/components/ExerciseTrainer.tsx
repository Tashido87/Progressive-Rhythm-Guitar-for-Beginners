import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, RotateCcw, Volume2, Gauge, Repeat, Sparkles, AlertCircle } from 'lucide-react';
import { ExerciseData, ChordProgressionItem } from '../types';
import { soundEngine } from '../services/soundEngine';
import { CHORDS_DICTIONARY } from '../data/chordsData';

interface ExerciseTrainerProps {
  exercise: ExerciseData;
}

export const ExerciseTrainer: React.FC<ExerciseTrainerProps> = ({ exercise }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentBarIndex, setCurrentBarIndex] = useState<number | null>(null);
  const [currentBeatInBar, setCurrentBeatInBar] = useState<number>(0);
  const [bpm, setBpm] = useState(exercise.recommendedBpm || 80);
  const [countIn, setCountIn] = useState<number | null>(null);
  const [isLooping, setIsLooping] = useState(true);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const barIndexRef = useRef(0);
  const beatInBarRef = useRef(0);

  const beatsPerBar = exercise.timeSignature === '3/4' ? 3 : exercise.timeSignature === '6/8' ? 6 : 4;

  const totalBars = exercise.chords.length;

  const getCleanChordName = (rawName: string): string => {
    // E.g. "G (3rd Fret)" -> "G", "F#m (2nd Fret)" -> "F#m"
    return rawName.split(' ')[0].replace(/[^a-zA-Z0-9#b]/g, '');
  };

  const getChordDef = (chordName: string) => {
    const clean = getCleanChordName(chordName);
    return CHORDS_DICTIONARY[clean] || CHORDS_DICTIONARY[chordName] || CHORDS_DICTIONARY['C'];
  };

  const playChordBeat = useCallback((chordItem: ChordProgressionItem, beatNum: number) => {
    const isFirstBeat = beatNum === 0;
    soundEngine.playMetronomeClick(isFirstBeat);

    const chordDef = getChordDef(chordItem.chordName);
    
    // Check if there are sub-chords in this bar (e.g. passing chords)
    if (chordItem.subChords && chordItem.subChords.length > 0) {
      let accumulatedBeats = 0;
      let targetSubChord = chordItem.subChords[0];
      for (const sub of chordItem.subChords) {
        accumulatedBeats += sub.beats;
        if (beatNum < accumulatedBeats) {
          targetSubChord = sub;
          break;
        }
      }
      const subChordDef = getChordDef(targetSubChord.chordName);
      soundEngine.playChord(subChordDef, 'down', 50);
    } else {
      // Default: Strum chord on beat
      soundEngine.playChord(chordDef, 'down', 50);
    }
  }, []);

  const tick = useCallback(() => {
    if (!isPlaying) return;

    const currentChordItem = exercise.chords[barIndexRef.current];
    setCurrentBarIndex(barIndexRef.current);
    setCurrentBeatInBar(beatInBarRef.current);

    playChordBeat(currentChordItem, beatInBarRef.current);

    const beatIntervalMs = (60 / bpm) * 1000;

    timerRef.current = setTimeout(() => {
      beatInBarRef.current += 1;
      if (beatInBarRef.current >= beatsPerBar) {
        beatInBarRef.current = 0;
        barIndexRef.current += 1;

        if (barIndexRef.current >= totalBars) {
          if (isLooping) {
            barIndexRef.current = 0;
          } else {
            setIsPlaying(false);
            setCurrentBarIndex(null);
            setCurrentBeatInBar(0);
            return;
          }
        }
      }
      tick();
    }, beatIntervalMs);
  }, [isPlaying, exercise.chords, playChordBeat, bpm, beatsPerBar, totalBars, isLooping]);

  useEffect(() => {
    if (isPlaying) {
      if (countIn !== null && countIn > 0) {
        soundEngine.playMetronomeClick(countIn === 4 || countIn === 1);
        const countTimer = setTimeout(() => {
          setCountIn(countIn - 1);
        }, (60 / bpm) * 1000);
        return () => clearTimeout(countTimer);
      } else if (countIn === 0) {
        setCountIn(null);
        barIndexRef.current = 0;
        beatInBarRef.current = 0;
        tick();
      } else {
        tick();
      }
    } else {
      if (timerRef.current) clearTimeout(timerRef.current);
      setCurrentBarIndex(null);
      setCurrentBeatInBar(0);
      barIndexRef.current = 0;
      beatInBarRef.current = 0;
    }

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isPlaying, countIn, bpm, tick]);

  const handleStart = () => {
    soundEngine.initAudio();
    setCountIn(beatsPerBar);
    setIsPlaying(true);
  };

  const handleStop = () => {
    if (timerRef.current) clearTimeout(timerRef.current);
    setIsPlaying(false);
    setCountIn(null);
    setCurrentBarIndex(null);
    setCurrentBeatInBar(0);
    barIndexRef.current = 0;
    beatInBarRef.current = 0;
  };

  return (
    <div className="bg-white border-2 border-slate-200 rounded-3xl p-5 sm:p-6 shadow-sm transition-all duration-300">
      {/* Exercise Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 text-xs font-mono font-bold rounded bg-slate-900 text-white">
              Ex #{exercise.exerciseNumber}
            </span>
            <span className="px-2 py-0.5 text-xs font-mono rounded bg-slate-100 text-slate-700 border border-slate-200">
              {exercise.timeSignature}
            </span>
            <h4 className="text-base font-bold text-slate-900">{exercise.title}</h4>
          </div>
          {exercise.titleMy && (
            <p className="text-xs text-slate-500 font-myanmar mt-1">{exercise.titleMy}</p>
          )}
        </div>

        {/* Count In indicator or BPM */}
        {countIn !== null ? (
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-orange-50 border border-orange-300 text-orange-600 font-mono text-sm font-bold animate-pulse">
            <span>Count-In:</span>
            <span className="text-lg">{countIn}</span>
          </div>
        ) : (
          <div className="flex items-center gap-2 text-xs font-mono text-slate-600 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
            <span>Tempo:</span>
            <span className="font-bold text-orange-600">{bpm} BPM</span>
          </div>
        )}
      </div>

      {/* Interactive Bar Progression Grid */}
      <div className="my-5 grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        {exercise.chords.map((chordItem, barIdx) => {
          const isBarActive = currentBarIndex === barIdx;
          const isNextBar = currentBarIndex !== null && (currentBarIndex + 1) % totalBars === barIdx;

          return (
            <div
              key={`bar-${barIdx}`}
              className={`p-3.5 rounded-2xl border transition-all duration-200 flex flex-col justify-between min-h-[95px] relative overflow-hidden ${
                isBarActive
                  ? 'bg-orange-50 border-orange-500 shadow-md shadow-orange-500/10 scale-102 ring-2 ring-orange-500/40'
                  : isNextBar
                  ? 'bg-slate-100 border-slate-300'
                  : 'bg-slate-50 border-slate-200'
              }`}
            >
              {/* Bar Number Indicator */}
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Bar {barIdx + 1}</span>
                {chordItem.bars > 1 && (
                  <span className="text-[10px] bg-white border border-slate-200 text-slate-600 px-1.5 py-0.5 rounded-md">
                    {chordItem.bars} Bars
                  </span>
                )}
              </div>

              {/* Chord Name */}
              <div className="my-1.5">
                <span
                  className={`text-base font-bold font-mono tracking-wide ${
                    isBarActive ? 'text-orange-600' : 'text-slate-900'
                  }`}
                >
                  {chordItem.chordName}
                </span>
                {chordItem.subChords && (
                  <div className="text-[10px] text-orange-600 font-mono mt-0.5">
                    {chordItem.subChords.map(s => `${s.chordName} (${s.beats}b)`).join(' → ')}
                  </div>
                )}
              </div>

              {/* Beat Tracker Indicator within Active Bar */}
              {isBarActive ? (
                <div className="flex items-center gap-1 mt-1">
                  {Array.from({ length: beatsPerBar }).map((_, beatIdx) => (
                    <div
                      key={`beat-dot-${beatIdx}`}
                      className={`h-1.5 flex-1 rounded-full transition-all duration-100 ${
                        currentBeatInBar === beatIdx
                          ? 'bg-orange-600 shadow-xs scale-110'
                          : currentBeatInBar > beatIdx
                          ? 'bg-orange-400'
                          : 'bg-slate-200'
                      }`}
                    />
                  ))}
                </div>
              ) : (
                <div className="h-1.5 w-full bg-slate-200/80 rounded-full" />
              )}
            </div>
          );
        })}
      </div>

      {/* Control Bar */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center bg-slate-50 p-4 rounded-2xl border border-slate-200">
        {/* Play/Pause Button */}
        <div className="flex items-center gap-2">
          {isPlaying ? (
            <button
              onClick={handleStop}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-red-600 hover:bg-red-700 text-white font-bold text-xs transition-all cursor-pointer shadow-xs"
            >
              <Pause className="w-4 h-4" />
              <span>Stop Backing Track</span>
            </button>
          ) : (
            <button
              onClick={handleStart}
              className="flex-1 flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs transition-all active:scale-95 cursor-pointer shadow-xs"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>Start Trainer (လေ့ကျင့်ရန်ဖွင့်ပါ)</span>
            </button>
          )}

          <button
            onClick={() => setIsLooping(!isLooping)}
            className={`p-2.5 rounded-xl border text-xs font-mono transition-colors cursor-pointer ${
              isLooping
                ? 'bg-orange-50 border-orange-200 text-orange-600'
                : 'bg-white border-slate-200 text-slate-400'
            }`}
            title="Loop progression"
          >
            <Repeat className="w-4 h-4" />
          </button>
        </div>

        {/* Speed presets */}
        <div className="flex items-center justify-center gap-1.5">
          <button
            onClick={() => setBpm(60)}
            className={`px-2.5 py-1 text-xs font-mono rounded-lg border transition-colors cursor-pointer ${
              bpm === 60 ? 'bg-slate-900 text-white font-bold border-slate-900' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            Slow (60)
          </button>
          <button
            onClick={() => setBpm(exercise.recommendedBpm || 80)}
            className={`px-2.5 py-1 text-xs font-mono rounded-lg border transition-colors cursor-pointer ${
              bpm === (exercise.recommendedBpm || 80) ? 'bg-orange-600 text-white font-bold border-orange-600' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            Normal ({exercise.recommendedBpm || 80})
          </button>
          <button
            onClick={() => setBpm(105)}
            className={`px-2.5 py-1 text-xs font-mono rounded-lg border transition-colors cursor-pointer ${
              bpm === 105 ? 'bg-slate-900 text-white font-bold border-slate-900' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-100'
            }`}
          >
            Fast (105)
          </button>
        </div>

        {/* BPM Slider */}
        <div className="flex flex-col gap-1">
          <div className="flex items-center justify-between text-xs text-slate-600 font-medium">
            <span>Custom BPM</span>
            <span className="font-mono font-bold text-orange-600">{bpm}</span>
          </div>
          <input
            type="range"
            min="45"
            max="140"
            step="5"
            value={bpm}
            onChange={(e) => setBpm(Number(e.target.value))}
            className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
          />
        </div>
      </div>

      {/* Exercise Notes in Myanmar */}
      {exercise.notesMy && (
        <div className="mt-4 flex items-start gap-2.5 p-3 rounded-2xl bg-orange-50/80 border border-orange-200 text-slate-700 text-xs font-myanmar leading-relaxed">
          <Sparkles className="w-4 h-4 text-orange-600 shrink-0 mt-0.5" />
          <div>
            <span className="font-semibold text-orange-700 mr-1.5">တီးခတ်နည်း အကြံပြုချက်:</span>
            <span>{exercise.notesMy}</span>
          </div>
        </div>
      )}
    </div>
  );
};
