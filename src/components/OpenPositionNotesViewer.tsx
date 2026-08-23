import React, { useState } from 'react';
import { Volume2, Music, Sparkles } from 'lucide-react';
import { soundEngine } from '../services/soundEngine';
import { getGuitarNoteEngraving } from './SheetMusicTabViewer';

interface OpenPositionNote {
  note: string;
  string: number;
  fret: number;
  fingering: number;
}

export const OPEN_POSITION_NOTES: OpenPositionNote[] = [
  { note: 'E', string: 6, fret: 0, fingering: 0 },
  { note: 'F', string: 6, fret: 1, fingering: 1 },
  { note: 'G', string: 6, fret: 3, fingering: 3 },
  { note: 'A', string: 5, fret: 0, fingering: 0 },
  { note: 'B', string: 5, fret: 2, fingering: 2 },
  { note: 'C', string: 5, fret: 3, fingering: 3 },
  { note: 'D', string: 4, fret: 0, fingering: 0 },
  { note: 'E', string: 4, fret: 2, fingering: 2 },
  { note: 'F', string: 4, fret: 3, fingering: 3 },
  { note: 'G', string: 3, fret: 0, fingering: 0 },
  { note: 'A', string: 3, fret: 2, fingering: 2 },
  { note: 'B', string: 2, fret: 0, fingering: 0 },
  { note: 'C', string: 2, fret: 1, fingering: 1 },
  { note: 'D', string: 2, fret: 3, fingering: 3 },
  { note: 'E', string: 1, fret: 0, fingering: 0 },
  { note: 'F', string: 1, fret: 1, fingering: 1 },
  { note: 'G', string: 1, fret: 3, fingering: 3 },
];

export const OpenPositionNotesViewer: React.FC = () => {
  const [activeNoteIdx, setActiveNoteIdx] = useState<number | null>(null);

  const handlePlayNote = (idx: number, n: OpenPositionNote) => {
    setActiveNoteIdx(idx);
    soundEngine.playNoteByStringFret(n.string, n.fret, 1.2);
    setTimeout(() => {
      setActiveNoteIdx((curr) => (curr === idx ? null : curr));
    }, 600);
  };

  const playAllAscending = () => {
    OPEN_POSITION_NOTES.forEach((n, idx) => {
      setTimeout(() => {
        handlePlayNote(idx, n);
      }, idx * 450);
    });
  };

  // Dimensions for SVG score
  const itemWidth = 44;
  const startOffset = 50;
  const totalSvgWidth = startOffset + OPEN_POSITION_NOTES.length * itemWidth + 25;
  const svgHeight = 185;

  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-5 sm:p-7 shadow-sm space-y-6">
      {/* Title Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pb-4 border-b border-slate-100">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-orange-100 text-orange-700">
              LESSON 11 COURSE
            </span>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight font-sans">
              NOTE SUMMARY: OPEN POSITION
            </h3>
          </div>
          <p className="text-xs text-slate-500 font-myanmar mt-1">
            ဂစ်တာကြိုး ၆ ချောင်းစလုံး၏ Open Position Notes များ (E မှ အပေါ်ဆုံး G အထိ)
          </p>
        </div>

        <button
          onClick={playAllAscending}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-xs font-bold font-sans transition-colors cursor-pointer shadow-xs shrink-0 self-start sm:self-auto"
        >
          <Volume2 className="w-4 h-4" />
          <span>Play All (အစုံနားဆင်ရန်)</span>
        </button>
      </div>

      {/* Interactive Sheet Music Graphic matching Page 31 exactly */}
      <div className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-300">
        <div className="min-w-max bg-[#fcfbf9] border border-slate-300 rounded-2xl p-4 shadow-inner">
          <svg
            width={totalSvgWidth}
            height={svgHeight}
            className="overflow-visible block"
            style={{ minWidth: `${totalSvgWidth}px` }}
          >
            {/* 5 Continuous Staff Lines */}
            <g stroke="#0f172a" strokeWidth="1.2">
              <line x1={15} y1={24} x2={totalSvgWidth - 15} y2={24} />
              <line x1={15} y1={36} x2={totalSvgWidth - 15} y2={36} />
              <line x1={15} y1={48} x2={totalSvgWidth - 15} y2={48} />
              <line x1={15} y1={60} x2={totalSvgWidth - 15} y2={60} />
              <line x1={15} y1={72} x2={totalSvgWidth - 15} y2={72} />
            </g>

            {/* Treble Clef */}
            <text x={18} y={68} fontSize="46" fontFamily="serif" fill="#0f172a">
              𝄞
            </text>

            {/* Initial Barline & End Barline */}
            <line x1={startOffset - 5} y1={24} x2={startOffset - 5} y2={72} stroke="#0f172a" strokeWidth="1.5" />
            <line x1={totalSvgWidth - 20} y1={24} x2={totalSvgWidth - 20} y2={72} stroke="#0f172a" strokeWidth="2" />

            {/* Note column labels on the left */}
            <text x={startOffset - 18} y={12} fontSize="9" fontWeight="900" fontFamily="sans-serif" fill="#64748b" textAnchor="end">
              NOTE
            </text>
            <text x={startOffset - 18} y={142} fontSize="9" fontWeight="900" fontFamily="sans-serif" fill="#64748b" textAnchor="end">
              STRING
            </text>
            <text x={startOffset - 18} y={162} fontSize="9" fontWeight="900" fontFamily="sans-serif" fill="#64748b" textAnchor="end">
              FRET &
            </text>
            <text x={startOffset - 18} y={174} fontSize="9" fontWeight="900" fontFamily="sans-serif" fill="#64748b" textAnchor="end">
              FINGERING
            </text>

            {/* Notes Rendering */}
            {OPEN_POSITION_NOTES.map((n, idx) => {
              const x = startOffset + idx * itemWidth + itemWidth / 2;
              const noteInfo = getGuitarNoteEngraving(n.string, n.fret);
              const isActive = activeNoteIdx === idx;

              return (
                <g
                  key={`op-note-${idx}`}
                  onClick={() => handlePlayNote(idx, n)}
                  className="cursor-pointer hover:opacity-80"
                >
                  {/* Highlight Beam */}
                  {isActive && (
                    <rect
                      x={x - 18}
                      y={4}
                      width={36}
                      height={176}
                      fill="#ea580c"
                      fillOpacity="0.15"
                      rx="6"
                    />
                  )}

                  {/* Note Name above staff (E, F, G...) */}
                  <text
                    x={x}
                    y={12}
                    fontSize="13"
                    fontWeight="bold"
                    fontFamily="monospace"
                    fill={isActive ? '#ea580c' : '#0f172a'}
                    textAnchor="middle"
                  >
                    {n.note}
                  </text>

                  {/* Ledger lines */}
                  {noteInfo.ledgerLines.map((ledgerY, lIdx) => (
                    <line
                      key={`ledger-${idx}-${lIdx}`}
                      x1={x - 9}
                      y1={ledgerY}
                      x2={x + 9}
                      y2={ledgerY}
                      stroke={isActive ? '#ea580c' : '#0f172a'}
                      strokeWidth="1.5"
                    />
                  ))}

                  {/* Notehead (Rotated Solid Ellipse) */}
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

                  {/* STRING NUMBER (6, 5, 4, 3, 2, 1) */}
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

                  {/* FRET & FINGERING (0, 1, 3...) */}
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

      {/* Book Explanation Notes & Semitone Pattern */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm text-slate-700 font-myanmar leading-relaxed">
        <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 space-y-2">
          <h4 className="font-bold text-slate-900 flex items-center gap-1.5 font-sans">
            <Sparkles className="w-4 h-4 text-orange-600" />
            <span>Open Position လေ့ကျင့်နည်း</span>
          </h4>
          <p className="text-slate-600">
            The open position on the guitar includes all the notes so far studied. You will need to be familiar with all of them, as they will be used in future exercises.
          </p>
          <p className="text-orange-950 font-medium">
            အောက်ခြေ Bass Note E မှ အပေါ်ဆုံး G အထိ တစ်လုံးချင်းစီ အသံထွက်ဆိုပြီး ဖြည်းဖြည်းမှန်မှန် တီးခတ်လေ့ကျင့်ပါ။ ပြီးလျှင် အထက်မှ အောက်သို့ ပြန်ဆင်းပါ။
          </p>
        </div>

        {/* Tones & Semitones rule */}
        <div className="p-4 rounded-2xl bg-orange-50/60 border border-orange-200/80 space-y-3">
          <h4 className="font-bold text-orange-950 flex items-center gap-1.5 font-sans">
            <span>TONES & SEMITONES (တစ်သံပြည့် နှင့် တစ်ဝက်သံ)</span>
          </h4>
          <p className="text-xs text-orange-900 font-sans">
            By playing through the notes you will notice that <strong className="text-orange-950">B to C</strong> and <strong className="text-orange-950">E to F</strong> are only one fret apart (called a <strong>semitone</strong>), whereas all other notes are two frets apart (called a <strong>tone</strong>).
          </p>
          <div className="flex items-center justify-center gap-3 sm:gap-4 py-2 px-3 bg-white rounded-xl border border-orange-200 font-mono text-sm sm:text-base font-black text-slate-900 tracking-wider">
            <span>A</span>
            <span className="text-orange-600 border-b-2 border-orange-500 pb-0.5">B ‿ C</span>
            <span>D</span>
            <span className="text-orange-600 border-b-2 border-orange-500 pb-0.5">E ‿ F</span>
            <span>G</span>
            <span>A</span>
          </div>
          <p className="text-[11px] text-center text-orange-800 font-sans font-semibold">
            ‿ = a semitone (i.e. one fret apart)
          </p>
        </div>
      </div>

      {/* NOTE VALUES SUMMARY TABLE (From Page 31) */}
      <div className="space-y-3 pt-2">
        <div className="flex items-center gap-2">
          <Music className="w-4 h-4 text-orange-600" />
          <h4 className="text-sm font-bold uppercase tracking-wider text-slate-900 font-mono">
            NOTE VALUES SUMMARY TABLE (မှတ်သားရန် Note တန်ဖိုးများ)
          </h4>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-xs text-slate-800 border-collapse bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-2xs font-sans">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200 text-slate-700 text-left font-mono">
                <th className="py-2.5 px-4 font-bold">COUNTS (စည်းချက်)</th>
                <th className="py-2.5 px-4 font-bold text-center">NOTATION SYMBOL</th>
                <th className="py-2.5 px-4 font-bold">NAME (အမည်)</th>
                <th className="py-2.5 px-4 font-bold font-myanmar">ရှင်းလင်းချက်</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono font-bold text-orange-600">4 COUNTS</td>
                <td className="py-3 px-4 text-center font-serif text-2xl">𝅝</td>
                <td className="py-3 px-4 font-bold">WHOLE NOTE (SEMIBREVE)</td>
                <td className="py-3 px-4 text-slate-600 font-myanmar">၄ ချက်ပြည့် အသံဆွဲထားရသည် (၁ Bar လုံး)</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono font-bold text-orange-600">2 COUNTS</td>
                <td className="py-3 px-4 text-center font-serif text-2xl">𝅗𝅥 𝅗𝅥</td>
                <td className="py-3 px-4 font-bold">HALF NOTE (MINIM)</td>
                <td className="py-3 px-4 text-slate-600 font-myanmar">၂ ချက်ဆွဲရသည် (တစ် Bar လျှင် ၂ လုံး)</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono font-bold text-orange-600">1 COUNT</td>
                <td className="py-3 px-4 text-center font-serif text-2xl">♩ ♩ ♩ ♩</td>
                <td className="py-3 px-4 font-bold">QUARTER NOTE (CROTCHET)</td>
                <td className="py-3 px-4 text-slate-600 font-myanmar">၁ ချက်လျှင် ၁ လုံး စည်းချက်မှန်မှန်ခတ်ရသည်</td>
              </tr>
              <tr className="hover:bg-slate-50">
                <td className="py-3 px-4 font-mono font-bold text-orange-600">1/2 COUNT</td>
                <td className="py-3 px-4 text-center font-serif text-2xl">♫ ♫ ♫ ♫</td>
                <td className="py-3 px-4 font-bold">EIGHTH NOTE (QUAVER)</td>
                <td className="py-3 px-4 text-slate-600 font-myanmar">ခွဲခြမ်းထားသော တစ်ဝက်စည်းချက် (1 & 2 & 3 & 4 &)</td>
              </tr>
              <tr className="bg-orange-50/40">
                <td className="py-3 px-4 font-mono font-bold text-slate-900">3 COUNTS</td>
                <td className="py-3 px-4 text-center font-serif text-2xl">𝅗𝅥.</td>
                <td className="py-3 px-4 font-bold">DOTTED HALF NOTE</td>
                <td className="py-3 px-4 text-slate-600 font-myanmar">၃ ချက်ဆွဲ (3/4 Waltz Time တွင် ၁ Bar လုံး)</td>
              </tr>
              <tr className="bg-orange-50/40">
                <td className="py-3 px-4 font-mono font-bold text-slate-900">1 1/2 COUNTS</td>
                <td className="py-3 px-4 text-center font-serif text-2xl">♩.</td>
                <td className="py-3 px-4 font-bold">DOTTED QUARTER NOTE</td>
                <td className="py-3 px-4 text-slate-600 font-myanmar">၁ ချက်ခွဲ တန်ဖိုး</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
