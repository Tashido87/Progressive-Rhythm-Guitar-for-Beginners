import React, { useState } from 'react';
import { Volume2, Music, Sparkles } from 'lucide-react';
import { soundEngine } from '../services/soundEngine';
import { getGuitarNoteEngraving } from './SheetMusicTabViewer';

interface StringNoteDef {
  note: string;
  string: number;
  fret: number;
  fingering: number;
  fretLabel: string;
}

interface StringData {
  stringNumber: number;
  stringNameEn: string;
  stringNameMy: string;
  notes: StringNoteDef[];
  descriptionMy: string;
}

const STRING_NOTES_DATA: Record<number, StringData> = {
  4: {
    stringNumber: 1,
    stringNameEn: '1st String (High E)',
    stringNameMy: 'ပထမကြိုး (အသေးဆုံး ကြိုး ၁)',
    notes: [
      { note: 'E', string: 1, fret: 0, fingering: 0, fretLabel: 'Open (၀)' },
      { note: 'F', string: 1, fret: 1, fingering: 1, fretLabel: 'Fret 1 (လက်ညှိုး)' },
      { note: 'G', string: 1, fret: 3, fingering: 3, fretLabel: 'Fret 3 (လက်သူကြွယ်)' }
    ],
    descriptionMy: 'ကြိုး ၁ ပေါ်ရှိ အခြေခံ Notes ၃ လုံး (E, F, G) ဖြစ်သည်။ Fret 1 တွင် Finger 1 နှင့် Fret 3 တွင် Finger 3 ဖြင့် ဖိပါ။'
  },
  5: {
    stringNumber: 2,
    stringNameEn: '2nd String (B String)',
    stringNameMy: 'ဒုတိယကြိုး (ကြိုး ၂)',
    notes: [
      { note: 'B', string: 2, fret: 0, fingering: 0, fretLabel: 'Open (၀)' },
      { note: 'C', string: 2, fret: 1, fingering: 1, fretLabel: 'Fret 1 (လက်ညှိုး)' },
      { note: 'D', string: 2, fret: 3, fingering: 3, fretLabel: 'Fret 3 (လက်သူကြွယ်)' }
    ],
    descriptionMy: 'ကြိုး ၂ ပေါ်ရှိ Notes ၃ လုံး (B, C, D) ဖြစ်သည်။ B မှ C သည် Semitone (1 Fret) ဖြစ်ပြီး C မှ D သည် Tone (2 Frets) ဖြစ်သည်။'
  },
  6: {
    stringNumber: 3,
    stringNameEn: '3rd String (G String)',
    stringNameMy: 'တတိယကြိုး (ကြိုး ၃)',
    notes: [
      { note: 'G', string: 3, fret: 0, fingering: 0, fretLabel: 'Open (၀)' },
      { note: 'A', string: 3, fret: 2, fingering: 2, fretLabel: 'Fret 2 (လက်ခလယ်)' }
    ],
    descriptionMy: 'ကြိုး ၃ ပေါ်ရှိ Notes ၂ လုံး (G, A) ဖြစ်သည်။ Fret 2 ရှိ A Note ကို လက်ခလယ် (Finger 2) ဖြင့် ဖိပါ။'
  },
  7: {
    stringNumber: 4,
    stringNameEn: '4th String (D String)',
    stringNameMy: 'စတုတ္ထကြိုး (ကြိုး ၄)',
    notes: [
      { note: 'D', string: 4, fret: 0, fingering: 0, fretLabel: 'Open (၀)' },
      { note: 'E', string: 4, fret: 2, fingering: 2, fretLabel: 'Fret 2 (လက်ခလယ်)' },
      { note: 'F', string: 4, fret: 3, fingering: 3, fretLabel: 'Fret 3 (လက်သူကြွယ်)' }
    ],
    descriptionMy: 'ကြိုး ၄ ပေါ်ရှိ Notes ၃ လုံး (D, E, F) ဖြစ်သည်။ E မှ F သို့ Semitone (1 Fret) ကွာခြားသည်။'
  },
  8: {
    stringNumber: 5,
    stringNameEn: '5th String (A String)',
    stringNameMy: 'ပဉ္စမကြိုး (ကြိုး ၅)',
    notes: [
      { note: 'A', string: 5, fret: 0, fingering: 0, fretLabel: 'Open (၀)' },
      { note: 'B', string: 5, fret: 2, fingering: 2, fretLabel: 'Fret 2 (လက်ခလယ်)' },
      { note: 'C', string: 5, fret: 3, fingering: 3, fretLabel: 'Fret 3 (လက်သူကြွယ်)' }
    ],
    descriptionMy: 'ကြိုး ၅ ပေါ်ရှိ Notes ၃ လုံး (A, B, C) ဖြစ်သည်။ B မှ C သို့ Semitone (1 Fret) ဖြစ်ပြီး Middle C ကို Ledger Line ဖြင့် ဖော်ပြသည်။'
  },
  9: {
    stringNumber: 6,
    stringNameEn: '6th String (Low E String)',
    stringNameMy: 'ဆဋ္ဌမကြိုး (အကြီးဆုံး ဘေ့စ်ကြိုး ၆)',
    notes: [
      { note: 'E', string: 6, fret: 0, fingering: 0, fretLabel: 'Open (၀)' },
      { note: 'F', string: 6, fret: 1, fingering: 1, fretLabel: 'Fret 1 (လက်ညှိုး)' },
      { note: 'G', string: 6, fret: 3, fingering: 3, fretLabel: 'Fret 3 (လက်သူကြွယ်)' }
    ],
    descriptionMy: 'ကြိုး ၆ ပေါ်ရှိ Low Notes ၃ လုံး (E, F, G) ဖြစ်သည်။ Ledger Lines ၃ ကြောင်းအထိ အသုံးပြု၍ ရေးဆွဲရသည်။'
  }
};

interface StringNotesViewerProps {
  lessonId: number;
}

export const StringNotesViewer: React.FC<StringNotesViewerProps> = ({ lessonId }) => {
  const data = STRING_NOTES_DATA[lessonId];
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  if (!data) return null;

  const handlePlay = (idx: number, n: StringNoteDef) => {
    setActiveIdx(idx);
    soundEngine.playNoteByStringFret(n.string, n.fret, 1.2);
    setTimeout(() => {
      setActiveIdx((curr) => (curr === idx ? null : curr));
    }, 600);
  };

  const playSequence = () => {
    data.notes.forEach((n, idx) => {
      setTimeout(() => {
        handlePlay(idx, n);
      }, idx * 500);
    });
  };

  const itemWidth = 70;
  const startOffset = 55;
  const totalSvgWidth = startOffset + data.notes.length * itemWidth + 25;
  const svgHeight = 185;

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-6 shadow-sm space-y-4 font-sans">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-3 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-orange-100 text-orange-700">
              STRING NOTES COURSE
            </span>
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">
              {data.stringNameEn} — {data.stringNameMy}
            </h3>
          </div>
          <p className="text-xs text-slate-500 font-myanmar mt-1">{data.descriptionMy}</p>
        </div>

        <button
          onClick={playSequence}
          className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold font-sans transition-colors cursor-pointer shadow-xs shrink-0 self-start sm:self-auto"
        >
          <Volume2 className="w-4 h-4" />
          <span>Play Notes</span>
        </button>
      </div>

      {/* SVG Score Display */}
      <div className="overflow-x-auto pb-2">
        <div className="min-w-max bg-[#fcfbf9] border border-slate-300 rounded-2xl p-4 shadow-inner">
          <svg width={totalSvgWidth} height={svgHeight} className="overflow-visible block">
            {/* 5 Staff Lines */}
            <g stroke="#0f172a" strokeWidth="1.2">
              <line x1={15} y1={24} x2={totalSvgWidth - 15} y2={24} />
              <line x1={15} y1={36} x2={totalSvgWidth - 15} y2={36} />
              <line x1={15} y1={48} x2={totalSvgWidth - 15} y2={48} />
              <line x1={15} y1={60} x2={totalSvgWidth - 15} y2={60} />
              <line x1={15} y1={72} x2={totalSvgWidth - 15} y2={72} />
            </g>

            {/* Treble Clef */}
            <text x={16} y={68} fontSize="46" fontFamily="serif" fill="#0f172a">
              𝄞
            </text>

            <line x1={startOffset - 5} y1={24} x2={startOffset - 5} y2={72} stroke="#0f172a" strokeWidth="1.5" />
            <line x1={totalSvgWidth - 15} y1={24} x2={totalSvgWidth - 15} y2={72} stroke="#0f172a" strokeWidth="2" />

            {/* Labels */}
            <text x={startOffset - 18} y={12} fontSize="9" fontWeight="900" fontFamily="sans-serif" fill="#64748b" textAnchor="end">
              NOTE
            </text>
            <text x={startOffset - 18} y={142} fontSize="9" fontWeight="900" fontFamily="sans-serif" fill="#64748b" textAnchor="end">
              STRING
            </text>
            <text x={startOffset - 18} y={168} fontSize="9" fontWeight="900" fontFamily="sans-serif" fill="#64748b" textAnchor="end">
              FRET
            </text>

            {/* Notes */}
            {data.notes.map((n, idx) => {
              const x = startOffset + idx * itemWidth + itemWidth / 2;
              const noteInfo = getGuitarNoteEngraving(n.string, n.fret);
              const isActive = activeIdx === idx;

              return (
                <g key={`note-${idx}`} onClick={() => handlePlay(idx, n)} className="cursor-pointer hover:opacity-80">
                  {isActive && (
                    <rect x={x - 22} y={4} width={44} height={176} fill="#ea580c" fillOpacity="0.15" rx="6" />
                  )}

                  {/* Note Letter */}
                  <text
                    x={x}
                    y={12}
                    fontSize="14"
                    fontWeight="bold"
                    fontFamily="monospace"
                    fill={isActive ? '#ea580c' : '#0f172a'}
                    textAnchor="middle"
                  >
                    {n.note}
                  </text>

                  {/* Ledger Lines */}
                  {noteInfo.ledgerLines.map((ledgerY, lIdx) => (
                    <line
                      key={`l-${lIdx}`}
                      x1={x - 11}
                      y1={ledgerY}
                      x2={x + 11}
                      y2={ledgerY}
                      stroke={isActive ? '#ea580c' : '#0f172a'}
                      strokeWidth="1.5"
                    />
                  ))}

                  {/* Notehead */}
                  <ellipse
                    cx={x}
                    cy={noteInfo.staffY}
                    rx="5.5"
                    ry="4"
                    transform={`rotate(-20 ${x} ${noteInfo.staffY})`}
                    fill={isActive ? '#ea580c' : '#0f172a'}
                  />

                  {/* Stem */}
                  {noteInfo.stemDirection === 'up' ? (
                    <line
                      x1={x + 4.8}
                      y1={noteInfo.staffY}
                      x2={x + 4.8}
                      y2={Math.min(noteInfo.staffY - 32, 48)}
                      stroke={isActive ? '#ea580c' : '#0f172a'}
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  ) : (
                    <line
                      x1={x - 4.8}
                      y1={noteInfo.staffY}
                      x2={x - 4.8}
                      y2={Math.max(noteInfo.staffY + 32, 54)}
                      stroke={isActive ? '#ea580c' : '#0f172a'}
                      strokeWidth="1.6"
                      strokeLinecap="round"
                    />
                  )}

                  {/* String */}
                  <text
                    x={x}
                    y={142}
                    fontSize="12"
                    fontWeight="bold"
                    fontFamily="monospace"
                    fill={isActive ? '#ea580c' : '#0f172a'}
                    textAnchor="middle"
                  >
                    {n.string}
                  </text>

                  {/* Fret */}
                  <text
                    x={x}
                    y={168}
                    fontSize="12"
                    fontWeight="bold"
                    fontFamily="monospace"
                    fill={isActive ? '#ea580c' : '#0f172a'}
                    textAnchor="middle"
                  >
                    {n.fret}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Note Description Pills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 pt-1">
        {data.notes.map((n, idx) => (
          <button
            key={`pill-${idx}`}
            onClick={() => handlePlay(idx, n)}
            className={`p-3 rounded-2xl border text-left transition-all cursor-pointer ${
              activeIdx === idx
                ? 'bg-orange-50 border-orange-500 ring-2 ring-orange-500/20 shadow-xs'
                : 'bg-slate-50 border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="font-mono text-base font-black text-slate-900">
                Note {n.note}
              </span>
              <span className="text-[10px] font-mono font-bold px-1.5 py-0.5 rounded bg-white border border-slate-200 text-slate-600">
                Str {n.string}
              </span>
            </div>
            <p className="text-xs text-orange-700 font-medium mt-1">{n.fretLabel}</p>
          </button>
        ))}
      </div>
    </div>
  );
};
