import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Play, Pause, Plus, Minus, Volume2, Music2, Sliders } from 'lucide-react';
import { soundEngine } from '../services/soundEngine';

export const MetronomeTool: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [bpm, setBpm] = useState(80);
  const [timeSignature, setTimeSignature] = useState<'4/4' | '3/4' | '2/4' | '6/8'>('4/4');
  const [currentBeat, setCurrentBeat] = useState(0);

  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const beatRef = useRef(0);
  const tapTimesRef = useRef<number[]>([]);

  const beatsInBar = timeSignature === '3/4' ? 3 : timeSignature === '2/4' ? 2 : timeSignature === '6/8' ? 6 : 4;

  const tick = useCallback(() => {
    if (!isPlaying) return;

    const isFirstBeat = beatRef.current === 0;
    soundEngine.playMetronomeClick(isFirstBeat);
    setCurrentBeat(beatRef.current);

    const intervalMs = (60 / bpm) * 1000;

    timerRef.current = setTimeout(() => {
      beatRef.current = (beatRef.current + 1) % beatsInBar;
      tick();
    }, intervalMs);
  }, [isPlaying, bpm, beatsInBar]);

  useEffect(() => {
    if (isPlaying) {
      beatRef.current = 0;
      tick();
    } else {
      if (timerRef.current) clearTimeout(timerRef.current);
      setCurrentBeat(0);
      beatRef.current = 0;
    }
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [isPlaying, tick]);

  const togglePlay = () => {
    soundEngine.initAudio();
    setIsPlaying(!isPlaying);
  };

  const handleTapTempo = () => {
    soundEngine.initAudio();
    const now = performance.now();
    const times = tapTimesRef.current;
    times.push(now);

    // Keep only last 4 taps
    if (times.length > 4) times.shift();

    if (times.length >= 2) {
      const intervals: number[] = [];
      for (let i = 1; i < times.length; i++) {
        intervals.push(times[i] - times[i - 1]);
      }
      const avgInterval = intervals.reduce((a, b) => a + b, 0) / intervals.length;
      const calculatedBpm = Math.round(60000 / avgInterval);
      if (calculatedBpm >= 40 && calculatedBpm <= 220) {
        setBpm(calculatedBpm);
      }
    }
  };

  return (
    <div className="bg-white border-2 border-slate-200 rounded-3xl p-5 sm:p-6 shadow-sm">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-orange-50 text-orange-600 border border-orange-100">
            <Music2 className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">Interactive Metronome (မက်ထရိုနုန်း)</h3>
            <p className="text-xs text-slate-500 font-myanmar">စည်းဝါးမှန်ကန်မှု လေ့ကျင့်ရန်</p>
          </div>
        </div>

        {/* Time Signature selector */}
        <div className="flex items-center gap-1 bg-slate-50 p-1 rounded-xl border border-slate-200">
          {(['4/4', '3/4', '2/4', '6/8'] as const).map((ts) => (
            <button
              key={ts}
              onClick={() => {
                setTimeSignature(ts);
                beatRef.current = 0;
              }}
              className={`px-2.5 py-1 text-xs font-mono rounded-lg transition-colors cursor-pointer ${
                timeSignature === ts
                  ? 'bg-slate-900 text-white font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {ts}
            </button>
          ))}
        </div>
      </div>

      {/* Visual Beats */}
      <div className="flex items-center justify-center gap-3 my-6">
        {Array.from({ length: beatsInBar }).map((_, i) => {
          const isActive = isPlaying && currentBeat === i;
          const isAccent = i === 0;

          return (
            <div
              key={`metro-beat-${i}`}
              className={`flex flex-col items-center justify-center rounded-2xl transition-all duration-100 ${
                isAccent ? 'w-16 h-20' : 'w-14 h-16'
              } ${
                isActive
                  ? isAccent
                    ? 'bg-orange-600 text-white scale-110 shadow-lg shadow-orange-600/30 border-2 border-orange-500'
                    : 'bg-slate-900 text-white scale-105 shadow-md shadow-slate-900/20 border-2 border-slate-700'
                  : 'bg-slate-50 border border-slate-200 text-slate-400'
              }`}
            >
              <span className="font-mono text-xl font-bold">{i + 1}</span>
              <span className="text-[10px] uppercase font-mono mt-0.5 font-semibold">
                {isAccent ? 'Accent' : 'Beat'}
              </span>
            </div>
          );
        })}
      </div>

      {/* BPM Dial and Adjuster */}
      <div className="flex items-center justify-center gap-6 my-4">
        <button
          onClick={() => setBpm(Math.max(40, bpm - 5))}
          className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 cursor-pointer transition-transform active:scale-95 shadow-2xs"
          title="-5 BPM"
        >
          <Minus className="w-5 h-5" />
        </button>

        <div className="flex flex-col items-center">
          <span className="text-4xl font-black font-mono text-slate-900 tracking-tight">{bpm}</span>
          <span className="text-xs text-slate-400 font-mono uppercase tracking-widest mt-0.5 font-bold">Beats Per Minute</span>
        </div>

        <button
          onClick={() => setBpm(Math.min(220, bpm + 5))}
          className="p-3 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 cursor-pointer transition-transform active:scale-95 shadow-2xs"
          title="+5 BPM"
        >
          <Plus className="w-5 h-5" />
        </button>
      </div>

      {/* Slider */}
      <div className="my-3 px-4">
        <input
          type="range"
          min="40"
          max="200"
          value={bpm}
          onChange={(e) => setBpm(Number(e.target.value))}
          className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-orange-600"
        />
      </div>

      {/* Bottom Action Bar (Play, Tap Tempo, Presets) */}
      <div className="flex flex-wrap items-center justify-between gap-3 mt-4 pt-3 border-t border-slate-100">
        <div className="flex items-center gap-2">
          <button
            onClick={togglePlay}
            className={`flex items-center gap-2 py-2.5 px-6 rounded-xl font-bold text-xs transition-all cursor-pointer shadow-xs ${
              isPlaying
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : 'bg-orange-600 hover:bg-orange-700 text-white active:scale-95'
            }`}
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-current" />}
            <span>{isPlaying ? 'Stop' : 'Start Metronome'}</span>
          </button>

          <button
            onClick={handleTapTempo}
            className="py-2.5 px-4 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 border border-slate-200 text-xs font-mono font-bold transition-all active:scale-95 cursor-pointer shadow-2xs"
          >
            Tap Tempo (စည်းချက်နှိပ်)
          </button>
        </div>

        {/* Speed presets */}
        <div className="flex items-center gap-1 text-xs font-mono">
          {[
            { label: 'Slow', val: 60 },
            { label: 'Andante', val: 76 },
            { label: 'Moderato', val: 100 },
            { label: 'Fast', val: 120 }
          ].map((p) => (
            <button
              key={p.label}
              onClick={() => setBpm(p.val)}
              className="px-2.5 py-1 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-600 hover:text-slate-900 border border-slate-200 text-[11px] font-medium cursor-pointer"
            >
              {p.label} ({p.val})
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
