export type StrumDirection =
  | 'down'
  | 'up'
  | 'air-down'
  | 'air-up'
  | 'percussive-down'
  | 'percussive-up'
  | 'staccato-down'
  | 'staccato-up'
  | 'dampened-down'
  | 'rest'
  | 'bass-pick';

export interface BeatMarker {
  count: string; // e.g. "1", "+", "e", "a", "2", "3", "4"
  type: StrumDirection;
  accent?: boolean;
  bassString?: number; // 6, 5, 4
  glide?: boolean;
  hammerOn?: boolean;
  pullOff?: boolean;
  triplet?: boolean;
  sixteenth?: boolean;
  deadened?: boolean;
}

export type StrumBeat = BeatMarker;

export interface RhythmPattern {
  id: string;
  name: string;
  timeSignature: '4/4' | '3/4' | '6/8' | '2/4';
  descriptionMy: string;
  descriptionEn: string;
  spokenCount: string; // e.g. "Down Up Down Up ... Up Down Up" or "1 + 2 + 3 + 4 +"
  beats: BeatMarker[];
  defaultBpm?: number;
}

export interface ChordFingerPosition {
  string: number; // 1 (high E) to 6 (low E)
  fret: number;   // 0 = open, -1 = muted (X), 1..15 = fret number
  finger?: number; // 1=index, 2=middle, 3=ring, 4=pinky, 0=none
  isRoot?: boolean;
  noteName?: string;
}

export interface ChordDefinition {
  id: string;
  name: string;
  shortName: string; // e.g., "A", "Em", "Fmaj7"
  nameMy?: string;
  type?: 'open' | 'root6-barre' | 'root5-barre' | 'c-formation' | 'rock' | 'jazz' | 'dim-aug';
  category?: string;
  rootNote: string;
  rootString?: number; // 6, 5, 4, etc.
  formula?: string; // e.g., "1 - 3 - 5", "1 - b3 - 5 - b7"
  notes?: string[]; // e.g. ["C", "E", "G"]
  baseFret?: number; // start fret for barre (e.g. 3 for G barre)
  barre?: {
    fret: number;
    fromString: number;
    toString: number;
  };
  barreFret?: number;
  barreStartString?: number;
  barreEndString?: number;
  fingers: ChordFingerPosition[] | {
    1?: number;
    2?: number;
    3?: number;
    4?: number;
    5?: number;
    6?: number;
  };
  strings?: {
    1: number | 'x';
    2: number | 'x';
    3: number | 'x';
    4: number | 'x';
    5: number | 'x';
    6: number | 'x';
  };
  audioNotes?: number[];
  tipsMy?: string;
  tipsEn?: string;
}

export interface ChordProgressionItem {
  chordName: string;
  bars: number;
  beatsPerBar?: number;
  subChords?: { chordName: string; beats: number }[];
}

export interface ScoreBeat {
  beatNumber: string; // "1", "2", "3", "4", "+", "e", "a"
  type: 'bass' | 'down-strum' | 'up-strum' | 'percussive' | 'rest' | 'single-note';
  string?: number; // 1..6 (for bass note or single note)
  fret?: number | string; // 0..15 or 'x'
  staffPosition?: number; // 0 = middle C, 1 = D, etc. (for treble staff vertical notehead position)
  strumMark?: 'V' | '^' | '⋀' | 'X' | 'rest' | string;
  label?: string;
}

export interface SuggestedRhythmBeat {
  count: string; // e.g. "1", "+", "2", "3", "4"
  type: 'down' | 'up' | 'rest' | 'chuk' | 'bass-pick';
  stroke: 'V' | '⋀' | '^' | 'X' | '𝄽' | string;
  accent?: boolean;
}

export interface SuggestedRhythmDef {
  label?: string; // e.g. "Suggested Rhythm"
  timeSignature?: '4/4' | '3/4' | '6/8' | '2/4';
  spokenCount?: string; // e.g. "1, 2-and, 3"
  patternText?: string; // e.g. "| V  V ⋀  V |"
  beats: SuggestedRhythmBeat[];
}

export interface RhythmVariationItem {
  id: string;
  number: number; // 1, 2, 3, 4, 5, 6...
  name?: string;
  spokenCount: string; // e.g. "1 + 2 + 3"
  beats: SuggestedRhythmBeat[];
  defaultBpm?: number;
}

export interface RhythmVariationsBookData {
  title: string; // e.g. "Rhythm Variations in 3/4 time."
  titleMy?: string;
  timeSignature: '3/4' | '4/4' | '6/8' | '2/4';
  defaultChord: string; // e.g. "C"
  footerNoteEn?: string; // e.g. "Apply these rhythms to the turnaround progressions so far studied."
  footerNoteMy?: string;
  variations: RhythmVariationItem[];
}

export interface ScoreBar {
  barNumber: number;
  chordName: string;
  beats: ScoreBeat[];
}

export interface ExerciseData {
  id: string;
  title: string;
  titleMy: string;
  exerciseNumber?: number;
  timeSignature: '4/4' | '3/4' | '6/8' | '2/4';
  recommendedBpm: number;
  rhythmPatternId?: string;
  suggestedRhythm?: SuggestedRhythmDef;
  chords: ChordProgressionItem[];
  tabNotes?: {
    string: number;
    fret: number;
    duration: string; // "1/4", "1/8", "1/16", "triplet"
    technique?: 'H' | 'P' | 'slide' | 'glide' | 'mute';
    label?: string;
  }[];
  scoreNotation?: {
    bars: ScoreBar[];
    repeatEnd?: boolean;
    cassetteLabel?: string;
  };
  notesMy?: string;
  notesEn?: string;
}

export interface LessonData {
  id: number;
  section: 1 | 2 | 3;
  title: string;
  titleMy: string;
  subtitle: string;
  overviewMy: string;
  keyPointsMy: string[];
  keyPointsEn?: string[];
  chords: string[]; // Chord IDs introduced
  rhythms: RhythmPattern[];
  rhythmVariationsBook?: RhythmVariationsBookData;
  exercises: ExerciseData[];
  techniques: {
    nameEn: string;
    nameMy: string;
    explanationMy: string;
    proTipMy: string;
  }[];
  troubleshooting: {
    issueMy: string;
    fixMy: string;
  }[];
  songsReferenced?: string[];
}

export interface SongItem {
  id: string;
  title: string;
  artist: string;
  category: '12-bar-blues' | 'turnaround-1' | 'turnaround-2' | 'jazz-blues';
  key: string;
  tempo?: number;
  suggestedChords?: string[];
  notes?: string;
}

export interface GlossaryItem {
  term: string;
  pronunciation?: string;
  definitionEn: string;
  definitionMy: string;
  category: 'terms' | 'rhythm' | 'technique' | 'notation';
}

export interface UserProgress {
  completedLessons: number[];
  bookmarkedLessons: number[];
  practiceTimeMinutes: number;
  lastVisitedLesson: number;
}
