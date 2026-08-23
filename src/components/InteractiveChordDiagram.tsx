import React, { useState } from 'react';
import { Volume2, Play, Info } from 'lucide-react';
import { ChordDefinition, ChordFingerPosition } from '../types';
import { soundEngine } from '../services/soundEngine';

interface InteractiveChordDiagramProps {
  chord: ChordDefinition;
  showStrumButton?: boolean;
  size?: 'sm' | 'md' | 'lg';
  compact?: boolean;
}

export const InteractiveChordDiagram: React.FC<InteractiveChordDiagramProps> = ({
  chord,
  showStrumButton = true,
  size = 'md',
  compact = false
}) => {
  const [playingString, setPlayingString] = useState<number | null>(null);
  const [isStrumming, setIsStrumming] = useState(false);

  const numFrets = 4;
  const strings = [6, 5, 4, 3, 2, 1]; // Low E to High E
  const stringNames = ['E', 'A', 'D', 'G', 'B', 'e'];

  const width = size === 'sm' ? 140 : size === 'lg' ? 220 : 180;
  const height = size === 'sm' ? 180 : size === 'lg' ? 260 : 210;
  const paddingX = size === 'sm' ? 20 : 26;
  const paddingTop = size === 'sm' ? 32 : 40;
  const paddingBottom = size === 'sm' ? 20 : 24;

  const fretWidth = (width - paddingX * 2) / (strings.length - 1);
  const fretHeight = (height - paddingTop - paddingBottom) / numFrets;

  // Normalized data helper
  const getStringFretAndFinger = (strNum: number): { fret: number; finger: number; isRoot: boolean } => {
    if (Array.isArray(chord.fingers)) {
      const pos = chord.fingers.find((f: ChordFingerPosition) => f.string === strNum);
      if (pos) {
        return {
          fret: pos.fret,
          finger: pos.finger || 0,
          isRoot: !!pos.isRoot || chord.rootString === strNum
        };
      }
    } else if (chord.strings) {
      const sVal = chord.strings[strNum as keyof typeof chord.strings];
      const fret = sVal === 'x' ? -1 : typeof sVal === 'number' ? sVal : -1;
      let finger = 0;
      if (chord.fingers && typeof chord.fingers === 'object') {
        finger = (chord.fingers as Record<number, number>)[strNum] || 0;
      }
      return {
        fret,
        finger,
        isRoot: chord.rootString === strNum
      };
    }
    return { fret: -1, finger: 0, isRoot: false };
  };

  const baseFret = chord.baseFret || 1;

  const handlePluckString = (stringIndex: number) => {
    setPlayingString(stringIndex);
    soundEngine.playChordNote(chord, stringIndex);
    setTimeout(() => setPlayingString(null), 400);
  };

  const handleStrum = () => {
    setIsStrumming(true);
    soundEngine.playChord(chord, 'down', 60);
    setTimeout(() => setIsStrumming(false), 500);
  };

  return (
    <div
      className={`bg-white border-2 border-slate-200 rounded-2xl p-4 flex flex-col items-center transition-all duration-200 hover:border-slate-300 shadow-sm hover:shadow-md ${
        compact ? 'py-3' : 'py-4'
      }`}
    >
      {/* Chord Header */}
      <div className="flex items-center justify-between w-full mb-2">
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-bold font-mono text-slate-900 tracking-wide">
            {chord.shortName || chord.name}
          </span>
          {chord.nameMy && (
            <span className="text-xs text-slate-500 font-myanmar truncate max-w-[90px]">
              {chord.nameMy}
            </span>
          )}
        </div>
        {chord.category && (
          <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 border border-slate-200">
            {chord.category}
          </span>
        )}
      </div>

      {/* SVG Chord Chart */}
      <div className="relative my-1 select-none">
        <svg width={width} height={height} className="overflow-visible">
          {/* Top Nut or Fret indicator */}
          {baseFret === 1 ? (
            <line
              x1={paddingX}
              y1={paddingTop}
              x2={width - paddingX}
              y2={paddingTop}
              stroke="#0f172a"
              strokeWidth="5"
              strokeLinecap="round"
            />
          ) : (
            <>
              <line
                x1={paddingX}
                y1={paddingTop}
                x2={width - paddingX}
                y2={paddingTop}
                stroke="#64748b"
                strokeWidth="2"
              />
              <text
                x={paddingX - 12}
                y={paddingTop + fretHeight * 0.65}
                fill="#ea580c"
                fontSize="11"
                fontWeight="bold"
                fontFamily="monospace"
                textAnchor="middle"
              >
                {baseFret}fr
              </text>
            </>
          )}

          {/* Frets (Horizontal lines) */}
          {Array.from({ length: numFrets + 1 }).map((_, i) => (
            <line
              key={`fret-${i}`}
              x1={paddingX}
              y1={paddingTop + i * fretHeight}
              x2={width - paddingX}
              y2={paddingTop + i * fretHeight}
              stroke="#cbd5e1"
              strokeWidth="1.5"
            />
          ))}

          {/* Strings (Vertical lines) */}
          {strings.map((strNum, i) => {
            const x = paddingX + i * fretWidth;
            const isPlaying = playingString === strNum;
            return (
              <g
                key={`string-${strNum}`}
                className="cursor-pointer group"
                onClick={() => handlePluckString(strNum)}
              >
                {/* Hit target line */}
                <line
                  x1={x}
                  y1={paddingTop - 15}
                  x2={x}
                  y2={height - paddingBottom + 12}
                  stroke="transparent"
                  strokeWidth="16"
                />
                {/* Visual String */}
                <line
                  x1={x}
                  y1={paddingTop}
                  x2={x}
                  y2={height - paddingBottom}
                  stroke={isPlaying ? '#ea580c' : '#64748b'}
                  strokeWidth={1.5 + (6 - strNum) * 0.4}
                  className="transition-colors duration-150 group-hover:stroke-orange-500"
                />
              </g>
            );
          })}

          {/* String Markers (X / O at the top) */}
          {strings.map((strNum, i) => {
            const x = paddingX + i * fretWidth;
            const info = getStringFretAndFinger(strNum);
            const isPlaying = playingString === strNum;

            if (info.fret === -1) {
              return (
                <text
                  key={`marker-x-${strNum}`}
                  x={x}
                  y={paddingTop - 10}
                  fill="#ef4444"
                  fontSize="12"
                  fontWeight="bold"
                  fontFamily="monospace"
                  textAnchor="middle"
                >
                  ✕
                </text>
              );
            }
            if (info.fret === 0) {
              return (
                <circle
                  key={`marker-o-${strNum}`}
                  cx={x}
                  cy={paddingTop - 10}
                  r="4.5"
                  fill={isPlaying ? '#ea580c' : 'none'}
                  stroke={isPlaying ? '#ea580c' : '#64748b'}
                  strokeWidth="2"
                  className="cursor-pointer"
                  onClick={() => handlePluckString(strNum)}
                />
              );
            }
            return null;
          })}

          {/* Barre Indicator if present */}
          {chord.barre && (
            <g>
              <rect
                x={paddingX + (6 - chord.barre.fromString) * fretWidth - 6}
                y={paddingTop + (chord.barre.fret - 0.5) * fretHeight - 8}
                width={(chord.barre.fromString - chord.barre.toString) * fretWidth + 12}
                height="16"
                rx="8"
                fill="#ea580c"
                fillOpacity="0.9"
              />
              <text
                x={paddingX + (6 - chord.barre.fromString) * fretWidth - 1}
                y={paddingTop + (chord.barre.fret - 0.5) * fretHeight + 4}
                fill="#ffffff"
                fontSize="10"
                fontWeight="bold"
                fontFamily="sans-serif"
              >
                1
              </text>
            </g>
          )}

          {/* Finger Dots on Frets */}
          {strings.map((strNum, i) => {
            const x = paddingX + i * fretWidth;
            const info = getStringFretAndFinger(strNum);
            const isPlaying = playingString === strNum;

            if (info.fret > 0) {
              // Convert fret to relative fret on diagram if baseFret is > 1
              const displayFret = baseFret > 1 ? info.fret - baseFret + 1 : info.fret;

              if (displayFret >= 1 && displayFret <= numFrets) {
                const y = paddingTop + (displayFret - 0.5) * fretHeight;

                // Skip individual dot if covered by barre finger 1
                if (
                  chord.barre &&
                  chord.barre.fret === displayFret &&
                  info.finger === 1 &&
                  strNum <= chord.barre.fromString &&
                  strNum >= chord.barre.toString
                ) {
                  return null;
                }

                return (
                  <g
                    key={`dot-${strNum}`}
                    className="cursor-pointer"
                    onClick={() => handlePluckString(strNum)}
                  >
                    <circle
                      cx={x}
                      cy={y}
                      r={size === 'sm' ? 8 : 10}
                      fill={isPlaying ? '#ea580c' : info.isRoot ? '#ea580c' : '#0f172a'}
                      stroke={info.isRoot ? '#c2410c' : '#1e293b'}
                      strokeWidth="2"
                      className="transition-all duration-150 filter drop-shadow-xs"
                    />
                    {info.finger > 0 && (
                      <text
                        x={x}
                        y={y + 3.5}
                        fill="#ffffff"
                        fontSize={size === 'sm' ? '10' : '11'}
                        fontWeight="bold"
                        fontFamily="sans-serif"
                        textAnchor="middle"
                      >
                        {info.finger}
                      </text>
                    )}
                  </g>
                );
              }
            }
            return null;
          })}

          {/* String bottom labels */}
          {strings.map((strNum, i) => {
            const x = paddingX + i * fretWidth;
            return (
              <text
                key={`label-${strNum}`}
                x={x}
                y={height - 4}
                fill="#94a3b8"
                fontSize="10"
                fontFamily="monospace"
                textAnchor="middle"
                className="cursor-pointer hover:fill-orange-600"
                onClick={() => handlePluckString(strNum)}
              >
                {stringNames[6 - strNum]}
              </text>
            );
          })}
        </svg>
      </div>

      {/* Formula / Root Info */}
      {chord.formula && (
        <div className="w-full flex items-center justify-between text-xs border-t border-slate-100 pt-2 mt-1">
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500 truncate">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-500 shrink-0"></span>
            <span className="font-mono truncate">{chord.formula}</span>
          </div>
        </div>
      )}

      {/* Strum Sound Button */}
      {showStrumButton && (
        <button
          onClick={handleStrum}
          disabled={isStrumming}
          className="mt-3 w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold shadow-xs transition-all duration-150 active:scale-95 cursor-pointer"
        >
          <Volume2 className={`w-3.5 h-3.5 ${isStrumming ? 'animate-bounce text-orange-400' : ''}`} />
          <span>{isStrumming ? 'Strumming...' : 'Play Reference (နားဆင်ရန်)'}</span>
        </button>
      )}
    </div>
  );
};
