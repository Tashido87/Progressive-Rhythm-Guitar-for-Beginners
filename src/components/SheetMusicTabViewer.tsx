import React from 'react';
import { Volume2, Music, Sparkles, Disc } from 'lucide-react';
import { ExerciseData, ScoreBar, ScoreBeat } from '../types';
import { CHORDS_DICTIONARY } from '../data/chordsData';
import { soundEngine } from '../services/soundEngine';

interface SheetMusicTabViewerProps {
  exercise: ExerciseData;
  activeBarIndex?: number | null;
  activeBeatIndex?: number | null;
  isPlaying?: boolean;
  bpm?: number;
  onBarClick?: (barIndex: number) => void;
  onBeatClick?: (barIndex: number, beatIndex: number) => void;
}

// Precise staff and ledger line mapping according to standard guitar notation
export interface NoteEngravingInfo {
  staffY: number; // Y coordinate of notehead center
  ledgerLines: number[]; // Array of Y coordinates for horizontal ledger lines
  tabStringY: number; // Y coordinate on TAB (1..6)
  stemDirection: 'up' | 'down';
  fret: number | string;
  stringNum: number;
}

// 5-line Treble Staff:
// Line 5 (top, F5): 24
// Line 4 (D5): 36
// Line 3 (B4): 48
// Line 2 (G4): 60
// Line 1 (bottom, E4): 72
// 1st Ledger line below (Middle C4): 84
// 2nd Ledger line below (A3): 96
// 3rd Ledger line below (Low F3): 108
export function getGuitarNoteEngraving(stringNum: number, fret: number | string): NoteEngravingInfo {
  const f = typeof fret === 'number' ? fret : parseInt(fret as string, 10) || 0;
  
  // TAB Y mapping: String 1 (top) is 150, String 6 (bottom) is 205 (spaced by 11px)
  const tabStringY = 150 + (stringNum - 1) * 11;

  if (stringNum === 6) {
    if (f === 0) {
      // Low E: space below 3rd ledger line
      return { staffY: 114, ledgerLines: [84, 96, 108], tabStringY, stemDirection: 'up', fret: 0, stringNum: 6 };
    }
    if (f === 1) {
      // Low F: centered on 3rd ledger line
      return { staffY: 108, ledgerLines: [84, 96, 108], tabStringY, stemDirection: 'up', fret: 1, stringNum: 6 };
    }
    if (f === 2) {
      // F#: space below 2nd ledger line
      return { staffY: 105, ledgerLines: [84, 96], tabStringY, stemDirection: 'up', fret: 2, stringNum: 6 };
    }
    // Low G (fret 3): space below 2nd ledger line
    return { staffY: 102, ledgerLines: [84, 96], tabStringY, stemDirection: 'up', fret: f, stringNum: 6 };
  }

  if (stringNum === 5) {
    if (f === 0) {
      // Open A: centered on 2nd ledger line
      return { staffY: 96, ledgerLines: [84, 96], tabStringY, stemDirection: 'up', fret: 0, stringNum: 5 };
    }
    if (f === 1) {
      // A# / Bb: space below 1st ledger line
      return { staffY: 93, ledgerLines: [84], tabStringY, stemDirection: 'up', fret: 1, stringNum: 5 };
    }
    if (f === 2) {
      // B: space directly below 1st ledger line (Middle C line)
      return { staffY: 90, ledgerLines: [84], tabStringY, stemDirection: 'up', fret: 2, stringNum: 5 };
    }
    // Middle C (fret 3): centered on 1st ledger line
    return { staffY: 84, ledgerLines: [84], tabStringY, stemDirection: 'up', fret: f, stringNum: 5 };
  }

  if (stringNum === 4) {
    if (f === 0) {
      // Open D: space below Line 1
      return { staffY: 78, ledgerLines: [], tabStringY, stemDirection: 'up', fret: 0, stringNum: 4 };
    }
    if (f === 1) {
      // D#
      return { staffY: 75, ledgerLines: [], tabStringY, stemDirection: 'up', fret: 1, stringNum: 4 };
    }
    if (f === 2) {
      // E: centered on Line 1
      return { staffY: 72, ledgerLines: [], tabStringY, stemDirection: 'up', fret: 2, stringNum: 4 };
    }
    // F (fret 3): in Space 1
    return { staffY: 66, ledgerLines: [], tabStringY, stemDirection: 'up', fret: f, stringNum: 4 };
  }

  if (stringNum === 3) {
    if (f === 0) {
      // Open G: centered on Line 2
      return { staffY: 60, ledgerLines: [], tabStringY, stemDirection: 'up', fret: 0, stringNum: 3 };
    }
    if (f === 1) {
      return { staffY: 57, ledgerLines: [], tabStringY, stemDirection: 'up', fret: 1, stringNum: 3 };
    }
    if (f === 2) {
      // A: in Space 2
      return { staffY: 54, ledgerLines: [], tabStringY, stemDirection: 'up', fret: 2, stringNum: 3 };
    }
    // B / Bb (fret 3)
    return { staffY: 48, ledgerLines: [], tabStringY, stemDirection: 'up', fret: f, stringNum: 3 };
  }

  if (stringNum === 2) {
    if (f === 0) {
      // Open B: centered on Line 3 (Middle line)
      return { staffY: 48, ledgerLines: [], tabStringY, stemDirection: 'up', fret: 0, stringNum: 2 };
    }
    if (f === 1) {
      // C: in Space 3
      return { staffY: 42, ledgerLines: [], tabStringY, stemDirection: 'down', fret: 1, stringNum: 2 };
    }
    if (f === 2) {
      return { staffY: 39, ledgerLines: [], tabStringY, stemDirection: 'down', fret: 2, stringNum: 2 };
    }
    // D (fret 3): centered on Line 4
    return { staffY: 36, ledgerLines: [], tabStringY, stemDirection: 'down', fret: f, stringNum: 2 };
  }

  if (stringNum === 1) {
    if (f === 0) {
      // High E: in Space 4
      return { staffY: 30, ledgerLines: [], tabStringY, stemDirection: 'down', fret: 0, stringNum: 1 };
    }
    if (f === 1) {
      // High F: centered on Line 5 (Top line)
      return { staffY: 24, ledgerLines: [], tabStringY, stemDirection: 'down', fret: 1, stringNum: 1 };
    }
    if (f === 2) {
      return { staffY: 21, ledgerLines: [], tabStringY, stemDirection: 'down', fret: 2, stringNum: 1 };
    }
    if (f === 3) {
      // High G: space above Line 5
      return { staffY: 18, ledgerLines: [], tabStringY, stemDirection: 'down', fret: 3, stringNum: 1 };
    }
    // High A (fret 5): centered on 1st ledger line above staff (y = 12)
    return { staffY: 12, ledgerLines: [12], tabStringY, stemDirection: 'down', fret: f, stringNum: 1 };
  }

  return { staffY: 84, ledgerLines: [84], tabStringY, stemDirection: 'up', fret: f, stringNum: 5 };
}

// Determine root string & fret for standard chords
function getChordRootInfo(chordName: string): { string: number; fret: number } {
  const cleanName = chordName.split(' ')[0].trim();
  const def = CHORDS_DICTIONARY[cleanName];

  if (def && Array.isArray(def.fingers)) {
    const rootPos = def.fingers.find((f) => f.isRoot);
    if (rootPos) {
      return {
        string: rootPos.string,
        fret: rootPos.fret === -1 ? 0 : rootPos.fret
      };
    }
  }

  switch (cleanName) {
    case 'C':
    case 'Cmaj7':
    case 'C7':
      return { string: 5, fret: 3 }; // Middle C
    case 'Em':
    case 'E':
    case 'E7':
      return { string: 5, fret: 2 }; // B on 5th string (or 6th string fret 0)
    case 'F':
    case 'Fmaj7':
      return { string: 4, fret: 0 }; // Open D / F on 4th string
    case 'G':
    case 'G7':
    case 'Gmaj7':
      return { string: 6, fret: 3 }; // Low G
    case 'A':
    case 'Am':
    case 'A7':
      return { string: 5, fret: 0 }; // Open A
    case 'D':
    case 'Dm':
    case 'D7':
      return { string: 4, fret: 0 }; // Open D
    default:
      return { string: 5, fret: 2 };
  }
}

// Generate fallback bars if scoreNotation is not explicitly provided
function getOrGenerateScoreBars(exercise: ExerciseData): ScoreBar[] {
  if (exercise.scoreNotation && exercise.scoreNotation.bars && exercise.scoreNotation.bars.length > 0) {
    return exercise.scoreNotation.bars;
  }

  const timeSig = exercise.timeSignature || '4/4';
  const beatsInBar = timeSig === '3/4' ? 3 : timeSig === '6/8' ? 6 : 4;
  const isBassStrumExercise =
    exercise.id === 'ex_18' ||
    exercise.rhythmPatternId === 'r_bass_pick' ||
    exercise.rhythmPatternId === 'r_bass_pick_1' ||
    exercise.title.toLowerCase().includes('bass') ||
    exercise.titleMy.includes('Bass');

  const isAlternatingBass =
    exercise.id === 'ex_19' ||
    exercise.rhythmPatternId === 'r_country_alternating' ||
    exercise.title.toLowerCase().includes('alternating') ||
    exercise.titleMy.includes('အလှည့်ကျ');

  const isAllEighths =
    exercise.rhythmPatternId === 'r_eighth_full' ||
    exercise.rhythmPatternId === 'r_8ths' ||
    exercise.rhythmPatternId === 'r_rock_8ths';

  const isBeat2Eighths =
    exercise.rhythmPatternId === 'r_down_up_beat2' ||
    exercise.rhythmPatternId === 'r_du_beat2';

  const generatedBars: ScoreBar[] = [];
  let currentBarNum = 1;

  exercise.chords.forEach((chordItem) => {
    for (let b = 0; b < chordItem.bars; b++) {
      const rootInfo = getChordRootInfo(chordItem.chordName);
      const altBassString = rootInfo.string === 5 ? 4 : rootInfo.string === 6 ? 5 : 5;
      const altBassFret = rootInfo.string === 5 ? (chordItem.chordName.startsWith('C') ? 2 : 2) : 2;
      const beats: ScoreBeat[] = [];

      if (isAlternatingBass) {
        // Exercise 19 pattern: Beat 1: Root Bass, Beat 2: Strum V, Beat 3: Alternate Bass, Beat 4: Strum V
        beats.push({
          beatNumber: '1',
          type: 'bass',
          string: rootInfo.string,
          fret: rootInfo.fret,
          label: 'Bass 1'
        });
        beats.push({
          beatNumber: '2',
          type: 'down-strum',
          strumMark: 'V',
          label: 'Strum'
        });
        beats.push({
          beatNumber: '3',
          type: 'bass',
          string: altBassString,
          fret: altBassFret,
          label: 'Bass 2'
        });
        beats.push({
          beatNumber: '4',
          type: 'down-strum',
          strumMark: 'V',
          label: 'Strum'
        });
      } else if (isBassStrumExercise) {
        // Exercise 18 pattern: Beat 1: Bass, Beat 2: Down-strum (V), Beat 3: Down-strum (V), Beat 4: Bass
        beats.push({
          beatNumber: '1',
          type: 'bass',
          string: rootInfo.string,
          fret: rootInfo.fret,
          label: 'Bass'
        });
        beats.push({
          beatNumber: '2',
          type: 'down-strum',
          strumMark: 'V',
          label: 'Strum'
        });
        beats.push({
          beatNumber: '3',
          type: 'down-strum',
          strumMark: 'V',
          label: 'Strum'
        });
        beats.push({
          beatNumber: '4',
          type: 'bass',
          string: rootInfo.string,
          fret: rootInfo.fret,
          label: 'Bass'
        });
      } else if (isAllEighths) {
        // 8 eighth notes: V ⋀ V ⋀ V ⋀ V ⋀
        for (let i = 1; i <= 4; i++) {
          beats.push({
            beatNumber: i.toString(),
            type: 'down-strum',
            strumMark: 'V',
            label: `${i}`
          });
          beats.push({
            beatNumber: '+',
            type: 'up-strum',
            strumMark: '⋀',
            label: `+`
          });
        }
      } else if (isBeat2Eighths) {
        // 1, 2+, 3, 4 : V  V ⋀  V  V
        beats.push({ beatNumber: '1', type: 'down-strum', strumMark: 'V', label: '1' });
        beats.push({ beatNumber: '2', type: 'down-strum', strumMark: 'V', label: '2' });
        beats.push({ beatNumber: '+', type: 'up-strum', strumMark: '⋀', label: '+' });
        beats.push({ beatNumber: '3', type: 'down-strum', strumMark: 'V', label: '3' });
        beats.push({ beatNumber: '4', type: 'down-strum', strumMark: 'V', label: '4' });
      } else {
        // Standard down strums for 4/4, 3/4, etc.
        for (let i = 1; i <= beatsInBar; i++) {
          beats.push({
            beatNumber: i.toString(),
            type: 'down-strum',
            strumMark: 'V',
            label: `Beat ${i}`
          });
        }
      }

      generatedBars.push({
        barNumber: currentBarNum++,
        chordName: chordItem.chordName,
        beats
      });
    }
  });

  return generatedBars;
}

export const SheetMusicTabViewer: React.FC<SheetMusicTabViewerProps> = ({
  exercise,
  activeBarIndex = null,
  activeBeatIndex = null,
  isPlaying = false,
  onBarClick,
  onBeatClick
}) => {
  const bars = getOrGenerateScoreBars(exercise);
  const timeSig = exercise.timeSignature || '4/4';
  const exerciseNum = exercise.exerciseNumber || 18;

  // Handle clicking on a specific note/beat in the sheet music
  const handleBeatInteraction = (barIdx: number, beatIdx: number, beat: ScoreBeat, chordName: string) => {
    if (beat.type === 'bass' && beat.string !== undefined && beat.fret !== undefined) {
      soundEngine.playNoteByStringFret(beat.string, beat.fret, 1.2);
    } else {
      const def = CHORDS_DICTIONARY[chordName.split(' ')[0]];
      if (def) {
        soundEngine.playChord(def, beat.strumMark === '⋀' ? 'up' : 'down');
      } else {
        soundEngine.playPercussiveChuk();
      }
    }

    if (onBeatClick) {
      onBeatClick(barIdx, beatIdx);
    }
  };

  // Dimensions for SVG score rendering
  const barWidth = 150; // width in px per measure
  const headerLeftWidth = 60; // width for clef & time signature
  const totalSvgWidth = headerLeftWidth + bars.length * barWidth + 30;
  const svgHeight = 245;

  return (
    <div className="w-full bg-[#fcfbf9] border-2 border-slate-300 rounded-3xl p-4 sm:p-6 shadow-sm font-sans select-none overflow-hidden transition-all">
      {/* Score Header (Method Book Style with Cassette Badge) */}
      <div className="flex items-center justify-between pb-3 mb-4 border-b-2 border-slate-300">
        <div className="flex items-center gap-2.5">
          <div className="p-1.5 rounded-lg bg-orange-100 border border-orange-200 text-orange-700">
            <Music className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-black tracking-wider uppercase text-slate-800 font-mono">
              Standard Notation & Guitar TAB Score
            </h4>
            <p className="text-[11px] text-slate-500 font-myanmar">
              စာအုပ်ပါ မူရင်းအတိုင်း Standard Staff (၅ ကြောင်း) နှင့် Guitar TAB (၆ ကြောင်း)
            </p>
          </div>
        </div>

        {/* Cassette Icon + Exercise Number Badge */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900 text-white shadow-xs font-mono">
          <div className="flex items-center gap-1.5 text-xs font-black tracking-widest uppercase">
            <Disc className="w-4 h-4 text-orange-400 animate-spin-slow" />
            <span>EXERCISE {exerciseNum}</span>
          </div>
        </div>
      </div>

      {/* Sheet Music & TAB Area with SVG Engraving */}
      <div className="overflow-x-auto pb-3 pt-1 scrollbar-thin scrollbar-thumb-slate-300">
        <div className="min-w-max bg-white border border-slate-300 rounded-2xl p-3 sm:p-4 relative shadow-inner">
          <svg
            width={totalSvgWidth}
            height={svgHeight}
            className="overflow-visible block"
            style={{ minWidth: `${totalSvgWidth}px` }}
          >
            {/* 1. Global Continuous Staff Lines (5 lines: y = 24, 36, 48, 60, 72) */}
            <g id="staff-lines" stroke="#0f172a" strokeWidth="1.2">
              <line x1={15} y1={24} x2={totalSvgWidth - 15} y2={24} />
              <line x1={15} y1={36} x2={totalSvgWidth - 15} y2={36} />
              <line x1={15} y1={48} x2={totalSvgWidth - 15} y2={48} />
              <line x1={15} y1={60} x2={totalSvgWidth - 15} y2={60} />
              <line x1={15} y1={72} x2={totalSvgWidth - 15} y2={72} />
            </g>

            {/* 2. Global Continuous TAB Lines (6 lines: y = 150, 161, 172, 183, 194, 205) */}
            <g id="tab-lines" stroke="#475569" strokeWidth="1">
              <line x1={15} y1={150} x2={totalSvgWidth - 15} y2={150} />
              <line x1={15} y1={161} x2={totalSvgWidth - 15} y2={161} />
              <line x1={15} y1={172} x2={totalSvgWidth - 15} y2={172} />
              <line x1={15} y1={183} x2={totalSvgWidth - 15} y2={183} />
              <line x1={15} y1={194} x2={totalSvgWidth - 15} y2={194} />
              <line x1={15} y1={205} x2={totalSvgWidth - 15} y2={205} />
            </g>

            {/* 3. Clef, Time Signature & TAB Title */}
            <g id="score-header-symbols">
              {/* Treble Clef Symbol */}
              <text
                x={20}
                y={68}
                fontSize="46"
                fontFamily="serif"
                fill="#0f172a"
                className="select-none"
              >
                𝄞
              </text>

              {/* Time Signature (4/4) */}
              <text
                x={48}
                y={46}
                fontSize="16"
                fontWeight="900"
                fontFamily="monospace"
                fill="#0f172a"
                textAnchor="middle"
              >
                {timeSig.split('/')[0]}
              </text>
              <text
                x={48}
                y={66}
                fontSize="16"
                fontWeight="900"
                fontFamily="monospace"
                fill="#0f172a"
                textAnchor="middle"
              >
                {timeSig.split('/')[1] || '4'}
              </text>

              {/* T - A - B Vertical Header */}
              <text
                x={26}
                y={160}
                fontSize="12"
                fontWeight="900"
                fontFamily="monospace"
                fill="#0f172a"
                textAnchor="middle"
              >
                T
              </text>
              <text
                x={26}
                y={180}
                fontSize="12"
                fontWeight="900"
                fontFamily="monospace"
                fill="#0f172a"
                textAnchor="middle"
              >
                A
              </text>
              <text
                x={26}
                y={200}
                fontSize="12"
                fontWeight="900"
                fontFamily="monospace"
                fill="#0f172a"
                textAnchor="middle"
              >
                B
              </text>

              {/* COUNT label in count row */}
              <text
                x={26}
                y={232}
                fontSize="10"
                fontWeight="bold"
                fontFamily="monospace"
                fill="#64748b"
                textAnchor="middle"
              >
                COUNT
              </text>
            </g>

            {/* 4. Measures (Bars) with Chord Names, Notes, Strum marks, TAB Numbers */}
            {bars.map((bar, barIdx) => {
              const startX = headerLeftWidth + barIdx * barWidth;
              const isBarActive = isPlaying && activeBarIndex === barIdx;
              const beatsCount = bar.beats.length;
              const beatSpacing = barWidth / (beatsCount || 4);

              return (
                <g
                  key={`bar-${bar.barNumber}-${barIdx}`}
                  onClick={() => onBarClick && onBarClick(barIdx)}
                  className="cursor-pointer"
                >
                  {/* Active Bar Highlight Backdrop */}
                  {isBarActive && (
                    <rect
                      x={startX}
                      y={10}
                      width={barWidth}
                      height={230}
                      fill="#ea580c"
                      fillOpacity="0.08"
                      rx="8"
                    />
                  )}

                  {/* Chord Name Header above Staff */}
                  <g>
                    <rect
                      x={startX + barWidth / 2 - 20}
                      y={0}
                      width={40}
                      height={18}
                      rx="4"
                      fill={isBarActive ? '#ea580c' : '#f1f5f9'}
                    />
                    <text
                      x={startX + barWidth / 2}
                      y={13}
                      fontSize="14"
                      fontWeight="900"
                      fontFamily="monospace"
                      fill={isBarActive ? '#ffffff' : '#0f172a'}
                      textAnchor="middle"
                    >
                      {bar.chordName}
                    </text>
                  </g>

                  {/* Measure Initial Barline */}
                  {barIdx === 0 && (
                    <g stroke="#0f172a" strokeWidth="1.5">
                      <line x1={startX} y1={24} x2={startX} y2={72} />
                      <line x1={startX} y1={150} x2={startX} y2={205} />
                    </g>
                  )}

                  {/* Beats in this Bar */}
                  {bar.beats.map((beat, beatIdx) => {
                    const beatX = startX + (beatIdx + 0.5) * beatSpacing;
                    const isBeatActive = isBarActive && activeBeatIndex === beatIdx;

                    const isBassOrSingle = beat.type === 'bass' || beat.type === 'single-note';
                    const stringNum = beat.string || 5;
                    const fretNum = beat.fret !== undefined ? beat.fret : 0;
                    const noteInfo = getGuitarNoteEngraving(stringNum, fretNum);

                    return (
                      <g
                        key={`bar-${barIdx}-beat-${beatIdx}`}
                        onClick={(e) => {
                          e.stopPropagation();
                          handleBeatInteraction(barIdx, beatIdx, beat, bar.chordName);
                        }}
                        className="hover:opacity-80 transition-opacity"
                      >
                        {/* Active Beat Subtle Vertical Beam */}
                        {isBeatActive && (
                          <rect
                            x={beatX - 14}
                            y={14}
                            width={28}
                            height={222}
                            fill="#ea580c"
                            fillOpacity="0.15"
                            rx="6"
                          />
                        )}

                        {/* --- STAFF RENDERING --- */}
                        {isBassOrSingle ? (
                          <g id="staff-notehead-stem">
                            {/* Horizontal Ledger lines if note is below or above staff */}
                            {noteInfo.ledgerLines.map((ledgerY, lIdx) => (
                              <line
                                key={`ledger-${lIdx}`}
                                x1={beatX - 9}
                                y1={ledgerY}
                                x2={beatX + 9}
                                y2={ledgerY}
                                stroke={isBeatActive ? '#ea580c' : '#0f172a'}
                                strokeWidth="1.5"
                              />
                            ))}

                            {/* Solid Notehead (rotated oval) */}
                            <ellipse
                              cx={beatX}
                              cy={noteInfo.staffY}
                              rx="5.5"
                              ry="4"
                              transform={`rotate(-20 ${beatX} ${noteInfo.staffY})`}
                              fill={isBeatActive ? '#ea580c' : '#0f172a'}
                            />

                            {/* Vertical Stem */}
                            {noteInfo.stemDirection === 'up' ? (
                              <line
                                x1={beatX + 4.8}
                                y1={noteInfo.staffY}
                                x2={beatX + 4.8}
                                y2={Math.min(noteInfo.staffY - 32, 48)}
                                stroke={isBeatActive ? '#ea580c' : '#0f172a'}
                                strokeWidth="1.6"
                                strokeLinecap="round"
                              />
                            ) : (
                              <line
                                x1={beatX - 4.8}
                                y1={noteInfo.staffY}
                                x2={beatX - 4.8}
                                y2={Math.max(noteInfo.staffY + 32, 54)}
                                stroke={isBeatActive ? '#ea580c' : '#0f172a'}
                                strokeWidth="1.6"
                                strokeLinecap="round"
                              />
                            )}
                          </g>
                        ) : (
                          /* Down Strum (V) or Up Strum (⋀) on Staff (No white boxes, pure engraving) */
                          <g id="staff-strum-mark">
                            <text
                              x={beatX}
                              y={54}
                              fontSize="17"
                              fontWeight="900"
                              fontFamily="monospace, serif"
                              fill={isBeatActive ? '#ea580c' : '#0f172a'}
                              textAnchor="middle"
                            >
                              {beat.strumMark === '^' || beat.strumMark === '⋀' || beat.type === 'up-strum'
                                ? '⋀'
                                : 'V'}
                            </text>
                          </g>
                        )}

                        {/* --- TAB RENDERING --- */}
                        {isBassOrSingle ? (
                          <g id="tab-fret-number">
                            {/* White cutout behind fret number so string line does not cut through */}
                            <rect
                              x={beatX - 7}
                              y={noteInfo.tabStringY - 7}
                              width={14}
                              height={14}
                              fill="white"
                            />
                            <text
                              x={beatX}
                              y={noteInfo.tabStringY + 4.5}
                              fontSize="13"
                              fontWeight="900"
                              fontFamily="monospace"
                              fill={isBeatActive ? '#ea580c' : '#0f172a'}
                              textAnchor="middle"
                            >
                              {beat.fret !== undefined ? beat.fret : '0'}
                            </text>
                          </g>
                        ) : (
                          /* Strum mark (V or ⋀) on TAB */
                          <g id="tab-strum-mark">
                            {/* White cutout behind strum symbol */}
                            <rect
                              x={beatX - 8}
                              y={170}
                              width={16}
                              height={16}
                              fill="white"
                            />
                            <text
                              x={beatX}
                              y={183}
                              fontSize="15"
                              fontWeight="900"
                              fontFamily="monospace, serif"
                              fill={isBeatActive ? '#ea580c' : '#0f172a'}
                              textAnchor="middle"
                            >
                              {beat.strumMark === '^' || beat.strumMark === '⋀' || beat.type === 'up-strum'
                                ? '⋀'
                                : 'V'}
                            </text>
                          </g>
                        )}

                        {/* --- COUNT DIGIT (1, 2, 3, 4) --- */}
                        <text
                          x={beatX}
                          y={232}
                          fontSize="12"
                          fontWeight={isBeatActive ? '900' : 'bold'}
                          fontFamily="monospace"
                          fill={isBeatActive ? '#ea580c' : '#475569'}
                          textAnchor="middle"
                        >
                          {beat.beatNumber}
                        </text>
                      </g>
                    );
                  })}

                  {/* Measure Dividing Barline */}
                  {barIdx < bars.length - 1 ? (
                    <g stroke="#0f172a" strokeWidth="1.5">
                      <line x1={startX + barWidth} y1={24} x2={startX + barWidth} y2={72} />
                      <line x1={startX + barWidth} y1={150} x2={startX + barWidth} y2={205} />
                    </g>
                  ) : (
                    /* Final Repeat Sign (Double Barline + 2 Dots) */
                    <g id="final-repeat-barline">
                      <line
                        x1={startX + barWidth - 4}
                        y1={24}
                        x2={startX + barWidth - 4}
                        y2={72}
                        stroke="#0f172a"
                        strokeWidth="1.5"
                      />
                      <line
                        x1={startX + barWidth}
                        y1={24}
                        x2={startX + barWidth}
                        y2={72}
                        stroke="#0f172a"
                        strokeWidth="3.5"
                      />
                      {/* Repeat Dots on Staff */}
                      <circle cx={startX + barWidth - 10} cy={42} r="2.2" fill="#0f172a" />
                      <circle cx={startX + barWidth - 10} cy={54} r="2.2" fill="#0f172a" />

                      {/* Repeat on TAB */}
                      <line
                        x1={startX + barWidth - 4}
                        y1={150}
                        x2={startX + barWidth - 4}
                        y2={205}
                        stroke="#0f172a"
                        strokeWidth="1.5"
                      />
                      <line
                        x1={startX + barWidth}
                        y1={150}
                        x2={startX + barWidth}
                        y2={205}
                        stroke="#0f172a"
                        strokeWidth="3.5"
                      />
                      {/* Repeat Dots on TAB */}
                      <circle cx={startX + barWidth - 10} cy={172} r="2.2" fill="#0f172a" />
                      <circle cx={startX + barWidth - 10} cy={183} r="2.2" fill="#0f172a" />
                    </g>
                  )}
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      {/* Interactive Helper Footer */}
      <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500">
        <div className="flex items-center gap-1.5 font-myanmar">
          <Sparkles className="w-3.5 h-3.5 text-orange-600" />
          <span>စာရွက်ပေါ်ရှိ မည်သည့် Note သို့မဟုတ် Strum အမှတ်အသားကိုမဆို နှိပ်၍ ဂစ်တာသံ နားဆင်နိုင်ပါသည်။</span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[11px]">
          <span className="flex items-center gap-1 text-slate-700">
            <span className="font-bold text-orange-600">V</span> = Down Strum
          </span>
          <span className="flex items-center gap-1 text-slate-700">
            <span className="font-bold text-orange-600">⋀</span> = Up Strum (Inverted V)
          </span>
          <span className="flex items-center gap-1 text-slate-700">
            <span className="font-bold text-slate-900">3, 2, 0</span> = Fret on Guitar String
          </span>
        </div>
      </div>
    </div>
  );
};
