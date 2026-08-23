import { LessonData } from '../types';
import { SECTION_1_LESSONS } from './lessonsSection1';
import { SECTION_2_LESSONS } from './lessonsSection2';
import { SECTION_2_PART2_LESSONS } from './lessonsSection2Part2';
import { SECTION_3_LESSONS } from './lessonsSection3';

export const ALL_LESSONS: LessonData[] = [
  ...SECTION_1_LESSONS,
  ...SECTION_2_LESSONS,
  ...SECTION_2_PART2_LESSONS,
  ...SECTION_3_LESSONS
];

export const SECTIONS = [
  {
    id: 1,
    titleEn: 'Section 1: Open Chords & Basic Rhythms',
    titleMy: 'အပိုင်း ၁ - Open Chords နှင့် အခြေခံ စည်းဝါးခတ်ကွက်များ',
    subtitleMy: 'အခန်း ၁ မှ ၂၁ ထိ (Open Chords, 4/4, 3/4, Triplets, 16ths, 12 Bar Blues, Rock Forms)',
    lessonsRange: 'Lessons 1 - 21',
    lessonCount: 21,
    color: 'from-amber-500 to-orange-600',
    badge: 'Beginner to Intermediate'
  },
  {
    id: 2,
    titleEn: 'Section 2: Barre Chords & Applied Techniques',
    titleMy: 'အပိုင်း ၂ - Barre Chords နှင့် အဆင့်မြင့် လက်ခတ်နည်းစနစ်များ',
    subtitleMy: 'အခန်း ၂၂ မှ ၄၄ ထိ (Root 6 & 5 Barre, Muting, Staccato, Arpeggio, Reggae, 6/8 Time)',
    lessonsRange: 'Lessons 22 - 44',
    lessonCount: 23,
    color: 'from-blue-500 to-cyan-600',
    badge: 'Intermediate to Advanced'
  },
  {
    id: 3,
    titleEn: 'Section 3: Advanced Harmony, Jazz & Chord Construction',
    titleMy: 'အပိုင်း ၃ - Jazz Harmony၊ အဆင့်မြင့် Chord များနှင့် Rhythm စုံလင်ခြင်း',
    subtitleMy: 'အခန်း ၄၅ မှ ၅၄ ထိ (C-Form, 9th, Maj7, Aug, Dim, Bossa Nova, Advanced 16ths)',
    lessonsRange: 'Lessons 45 - 54',
    lessonCount: 10,
    color: 'from-emerald-500 to-teal-600',
    badge: 'Advanced Mastery'
  }
];

export function getLessonById(id: number): LessonData | undefined {
  return ALL_LESSONS.find(l => l.id === id);
}

export function getLessonsBySection(section: number): LessonData[] {
  return ALL_LESSONS.filter(l => l.section === section);
}
