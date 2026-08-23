import React, { useState } from 'react';
import { Volume2, Music, RefreshCw, Radio } from 'lucide-react';
import { soundEngine } from '../services/soundEngine';

interface TunerString {
  stringNumber: number;
  noteName: string;
  octave: number;
  frequency: number;
  labelMy: string;
}

const STRINGS_INFO: TunerString[] = [
  { stringNumber: 1, noteName: 'E', octave: 4, frequency: 329.63, labelMy: 'ကြိုး ၁ (High E - 330 Hz)' },
  { stringNumber: 2, noteName: 'B', octave: 3, frequency: 246.94, labelMy: 'ကြိုး ၂ (B - 247 Hz)' },
  { stringNumber: 3, noteName: 'G', octave: 3, frequency: 196.00, labelMy: 'ကြိုး ၃ (G - 196 Hz)' },
  { stringNumber: 4, noteName: 'D', octave: 3, frequency: 146.83, labelMy: 'ကြိုး ၄ (D - 147 Hz)' },
  { stringNumber: 5, noteName: 'A', octave: 2, frequency: 110.00, labelMy: 'ကြိုး ၅ (A - 110 Hz)' },
  { stringNumber: 6, noteName: 'E', octave: 2, frequency: 82.41, labelMy: 'ကြိုး ၆ (Low E - 82 Hz)' }
];

export const GuitarTuner: React.FC = () => {
  const [activeString, setActiveString] = useState<number | null>(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(false);

  const playStringTone = (str: TunerString) => {
    setActiveString(str.stringNumber);
    soundEngine.playTuningTone(str.frequency, 2.5);
    setTimeout(() => {
      setActiveString((curr) => (curr === str.stringNumber ? null : curr));
    }, 2500);
  };

  const handleAutoTuneAll = async () => {
    if (isAutoPlaying) return;
    setIsAutoPlaying(true);
    soundEngine.initAudio();

    for (let i = 5; i >= 0; i--) {
      const str = STRINGS_INFO[i];
      setActiveString(str.stringNumber);
      soundEngine.playTuningTone(str.frequency, 2.2);
      await new Promise((resolve) => setTimeout(resolve, 2400));
    }
    setActiveString(null);
    setIsAutoPlaying(false);
  };

  return (
    <div className="bg-white border-2 border-slate-200 rounded-3xl p-5 sm:p-6 shadow-sm">
      <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="p-2 rounded-xl bg-orange-50 text-orange-600 border border-orange-100">
            <Radio className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-base font-bold text-slate-900">Standard Guitar Tuner (E A D G B e)</h3>
            <p className="text-xs text-slate-500 font-myanmar">ဂစ်တာအသံညှိရန် စံအသံထွက် Tone Generator</p>
          </div>
        </div>

        <button
          onClick={handleAutoTuneAll}
          disabled={isAutoPlaying}
          className={`flex items-center gap-2 px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
            isAutoPlaying
              ? 'bg-orange-50 text-orange-600 border-orange-300 animate-pulse'
              : 'bg-slate-900 hover:bg-slate-800 text-white border-slate-900 shadow-xs'
          }`}
        >
          <RefreshCw className={`w-3.5 h-3.5 ${isAutoPlaying ? 'animate-spin' : ''}`} />
          <span>{isAutoPlaying ? 'Playing All...' : 'Play All Strings (၆ ကြိုးလုံးသံစဉ်)'}</span>
        </button>
      </div>

      {/* Strings Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {STRINGS_INFO.map((str) => {
          const isActive = activeString === str.stringNumber;

          return (
            <button
              key={`tuner-str-${str.stringNumber}`}
              onClick={() => playStringTone(str)}
              className={`p-3.5 rounded-2xl border flex flex-col items-center justify-between text-center transition-all duration-200 cursor-pointer ${
                isActive
                  ? 'bg-orange-50 border-orange-500 shadow-md shadow-orange-500/10 scale-105'
                  : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100/80'
              }`}
            >
              <div className="text-[11px] font-mono text-slate-400 mb-1 font-bold">
                String {str.stringNumber}
              </div>

              {/* Note Circle */}
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center font-mono text-lg font-bold my-1 transition-all ${
                  isActive
                    ? 'bg-orange-600 text-white shadow-md shadow-orange-600/30 scale-110'
                    : 'bg-white text-slate-900 border border-slate-200 shadow-2xs'
                }`}
              >
                {str.noteName}
                <span className="text-[10px] ml-0.5 opacity-60">{str.octave}</span>
              </div>

              {/* Frequency */}
              <div className="text-[10px] font-mono text-slate-500 font-bold mt-1">
                {str.frequency} Hz
              </div>

              <div className="mt-2 text-[10px] text-orange-600 font-bold font-myanmar">
                {str.labelMy.split(' ')[0]} {str.labelMy.split(' ')[1]}
              </div>
            </button>
          );
        })}
      </div>

      <div className="mt-4 p-3 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 font-myanmar leading-relaxed">
        💡 <strong className="text-slate-900">အသံညှိနည်း:</strong> သက်ဆိုင်ရာ ကြိုးခလုတ်ကို နှိပ်၍ ထွက်ပေါ်လာသော အသံလှိုင်းနှင့် သင့်ဂစ်တာ၏ ကြိုးအသံ တူညီအောင် တင်း/လျှော့ ချိန်ညှိပါ။
      </div>
    </div>
  );
};
