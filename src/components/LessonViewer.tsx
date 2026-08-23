import React from 'react';
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  BookOpen,
  Music,
  Lightbulb,
  AlertTriangle,
  Sparkles,
  Trophy,
  Play
} from 'lucide-react';
import { LessonData } from '../types';
import { CHORDS_DICTIONARY } from '../data/chordsData';
import { InteractiveChordDiagram } from './InteractiveChordDiagram';
import { InteractiveRhythmPlayer } from './InteractiveRhythmPlayer';
import { ExerciseTrainer } from './ExerciseTrainer';

interface LessonViewerProps {
  lesson: LessonData;
  isCompleted: boolean;
  onToggleComplete: (id: number) => void;
  onPrevLesson: () => void;
  onNextLesson: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export const LessonViewer: React.FC<LessonViewerProps> = ({
  lesson,
  isCompleted,
  onToggleComplete,
  onPrevLesson,
  onNextLesson,
  hasPrev,
  hasNext
}) => {
  // Collect chord objects introduced or used in this lesson
  const lessonChords = (lesson.chords || [])
    .map((name) => CHORDS_DICTIONARY[name])
    .filter(Boolean);

  return (
    <div className="max-w-5xl mx-auto space-y-8 pb-16">
      {/* Top Banner & Navigation Header */}
      <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-orange-50 text-orange-600 border border-orange-200">
                SESSION {lesson.id < 10 ? `0${lesson.id}` : lesson.id} • SECTION 0{lesson.section}
              </span>
              {isCompleted && (
                <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Completed</span>
                </span>
              )}
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
              {lesson.title}
            </h1>
            <h2 className="text-lg sm:text-xl text-orange-600 font-myanmar font-semibold">
              {lesson.titleMy}
            </h2>
            {lesson.subtitle && (
              <p className="text-sm text-slate-600 font-myanmar leading-relaxed max-w-2xl">
                {lesson.subtitle}
              </p>
            )}
          </div>

          {/* Complete Toggle Button */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onToggleComplete(lesson.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold font-sans transition-all duration-200 cursor-pointer shadow-xs ${
                isCompleted
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  : 'bg-slate-900 hover:bg-slate-800 text-white'
              }`}
            >
              <CheckCircle2 className="w-4 h-4" />
              <span>{isCompleted ? 'Completed (ပြီးမြောက်ပြီ)' : 'Mark as Completed (ပြီးပြီဟု မှတ်မည်)'}</span>
            </button>
          </div>
        </div>

        {/* Previous / Next Top Quick Controls */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-slate-100 text-xs">
          <button
            onClick={onPrevLesson}
            disabled={!hasPrev}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border transition-colors cursor-pointer ${
              hasPrev
                ? 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 shadow-2xs'
                : 'opacity-40 cursor-not-allowed border-transparent text-slate-400'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Previous Lesson</span>
          </button>

          <button
            onClick={onNextLesson}
            disabled={!hasNext}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border transition-colors cursor-pointer ${
              hasNext
                ? 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 shadow-2xs'
                : 'opacity-40 cursor-not-allowed border-transparent text-slate-400'
            }`}
          >
            <span>Next Lesson</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Lesson Key Points Section (Concise Myanmar Summary) */}
      <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-sm">
        <div className="flex items-center gap-2.5 mb-4">
          <div className="p-2 rounded-xl bg-orange-50 text-orange-600 border border-orange-100">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-900">သင်ခန်းစာ အဓိကအချက်များ (Key Points)</h3>
            <p className="text-xs text-slate-500 font-myanmar">တိုတိုနှင့် လိုရင်းမှတ်သားရန် အနှစ်ချုပ်</p>
          </div>
        </div>

        {lesson.overviewMy && (
          <p className="text-sm text-slate-700 font-myanmar leading-relaxed mb-4 bg-slate-50 p-4 rounded-2xl border border-slate-200/80">
            {lesson.overviewMy}
          </p>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {lesson.keyPointsMy.map((point, idx) => (
            <div
              key={`key-point-${idx}`}
              className="flex items-start gap-3 p-3.5 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center font-mono text-xs font-bold shrink-0 mt-0.5 border border-orange-200">
                {idx + 1}
              </div>
              <p className="text-xs sm:text-sm text-slate-700 font-myanmar leading-relaxed">
                {point}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Lesson Chords (Interactive Visual Fretboards & Audio Strum) */}
      {lessonChords.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-orange-50 text-orange-600 border border-orange-100">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">ဤသင်ခန်းစာအတွက် Chord လက်ကွက်များ</h3>
              <p className="text-xs text-slate-500 font-myanmar">လက်ကွက်များကို စမ်းသပ်နှိပ်၍ အသံနားဆင်ပါ</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {lessonChords.map((chord) => (
              <InteractiveChordDiagram
                key={chord.name}
                chord={chord}
                showStrumButton={true}
                size="md"
              />
            ))}
          </div>
        </section>
      )}

      {/* Interactive Rhythm Patterns */}
      {lesson.rhythms && lesson.rhythms.length > 0 && (
        <section className="space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-orange-50 text-orange-600 border border-orange-100">
              <Music className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">ရစ်သမ် စည်းဝါးခတ်ကွက်များ (Rhythm Patterns)</h3>
              <p className="text-xs text-slate-500 font-myanmar">တိုက်ရိုက် အသံဖွင့်၍ လိုက်တီးလေ့ကျင့်ပါ</p>
            </div>
          </div>

          <div className="space-y-4">
            {lesson.rhythms.map((rhythm) => (
              <InteractiveRhythmPlayer
                key={rhythm.id}
                rhythm={rhythm}
                availableChords={lesson.chords || ['C', 'G', 'Am', 'Em']}
                defaultChord={lesson.chords && lesson.chords.length > 0 ? lesson.chords[0] : 'C'}
              />
            ))}
          </div>
        </section>
      )}

      {/* Interactive Exercises (Backing Trainer) */}
      {lesson.exercises && lesson.exercises.length > 0 && (
        <section id="exercises-section" className="space-y-4 scroll-mt-20">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-orange-50 text-orange-600 border border-orange-100">
              <Trophy className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">လေ့ကျင့်ခန်းများ (Interactive Exercises)</h3>
              <p className="text-xs text-slate-500 font-myanmar">ဂီတစာရွက် (Staff)၊ Guitar TAB နှင့် Backing Track ဖြင့် လက်တွေ့တီးခတ်ရန်</p>
            </div>
          </div>

          <div className="space-y-5">
            {lesson.exercises.map((exercise) => (
              <ExerciseTrainer key={exercise.id} exercise={exercise} />
            ))}
          </div>
        </section>
      )}

      {/* Pro Techniques & Tips */}
      {lesson.techniques && lesson.techniques.length > 0 && (
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-orange-50 text-orange-600 border border-orange-100">
              <Lightbulb className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">ပရော်ဖက်ရှင်နယ် တီးခတ်နည်းစနစ်များ (Pro Techniques)</h3>
              <p className="text-xs text-slate-500 font-myanmar">လက်ချောင်းအနေအထားနှင့် အသံအရည်အသွေး ကောင်းမွန်စေရန်</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {lesson.techniques.map((tech, idx) => (
              <div
                key={`tech-${idx}`}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2"
              >
                <div className="flex items-center justify-between">
                  <h4 className="text-sm font-bold text-slate-900">{tech.nameMy}</h4>
                  <span className="text-[10px] text-slate-400 font-mono uppercase">{tech.nameEn}</span>
                </div>
                <p className="text-xs text-slate-600 font-myanmar leading-relaxed">
                  {tech.explanationMy}
                </p>
                {tech.proTipMy && (
                  <div className="mt-2 pt-2 border-t border-slate-200 text-[11px] text-orange-700 font-myanmar flex items-start gap-1.5">
                    <span className="font-bold">⭐ Pro Tip:</span>
                    <span>{tech.proTipMy}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Common Mistakes & Troubleshooting */}
      {lesson.troubleshooting && lesson.troubleshooting.length > 0 && (
        <section className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-7 shadow-sm space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-red-50 text-red-600 border border-red-100">
              <AlertTriangle className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">အဖြစ်များသော အမှားများနှင့် ဖြေရှင်းနည်း (Troubleshooting)</h3>
              <p className="text-xs text-slate-500 font-myanmar">တီးခတ်ရာတွင် အခက်အခဲရှိပါက ဤအချက်များကို စစ်ဆေးပါ</p>
            </div>
          </div>

          <div className="space-y-3">
            {lesson.troubleshooting.map((item, idx) => (
              <div
                key={`trouble-${idx}`}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2"
              >
                <div className="flex items-start gap-2 text-xs font-semibold text-red-600 font-myanmar">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-1.5 shrink-0" />
                  <span>{item.issueMy}</span>
                </div>
                <div className="flex items-start gap-2 text-xs text-emerald-700 font-myanmar pl-3.5">
                  <span className="font-bold shrink-0">✓ ဖြေရှင်းနည်း:</span>
                  <span className="text-slate-600">{item.fixMy}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Bottom Navigation Buttons */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 border-t border-slate-200">
        <button
          onClick={onPrevLesson}
          disabled={!hasPrev}
          className={`w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border text-sm font-semibold transition-all cursor-pointer ${
            hasPrev
              ? 'bg-white hover:bg-slate-50 text-slate-800 border-slate-200 shadow-2xs'
              : 'opacity-40 cursor-not-allowed border-transparent text-slate-400 bg-slate-100'
          }`}
        >
          <ChevronLeft className="w-4 h-4" />
          <span>Previous Lesson (ရှေ့အခန်း)</span>
        </button>

        <button
          onClick={() => onToggleComplete(lesson.id)}
          className={`w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold font-sans transition-all shadow-md cursor-pointer ${
            isCompleted
              ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
              : 'bg-orange-600 hover:bg-orange-700 text-white'
          }`}
        >
          <CheckCircle2 className="w-5 h-5" />
          <span>{isCompleted ? 'Lesson Completed ✓' : 'Mark Lesson as Completed (အခန်းပြီးပြီ)'}</span>
        </button>

        <button
          onClick={onNextLesson}
          disabled={!hasNext}
          className={`w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-3 rounded-2xl border text-sm font-semibold transition-all cursor-pointer ${
            hasNext
              ? 'bg-slate-900 hover:bg-slate-800 text-white border-slate-900 shadow-md'
              : 'opacity-40 cursor-not-allowed border-transparent text-slate-400 bg-slate-100'
          }`}
        >
          <span>Next Lesson (နောက်အခန်း)</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
