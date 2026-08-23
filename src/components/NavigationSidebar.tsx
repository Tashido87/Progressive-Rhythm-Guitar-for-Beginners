import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  CheckCircle2,
  Circle,
  ChevronDown,
  ChevronRight,
  Search,
  Sliders,
  Music,
  Radio,
  Sparkles,
  Trophy,
  Flame
} from 'lucide-react';
import { ALL_LESSONS, SECTIONS } from '../data/allLessons';
import { LessonData } from '../types';

interface NavigationSidebarProps {
  currentLessonId: number;
  onSelectLesson: (id: number) => void;
  completedLessonIds: number[];
  onOpenDictionary: () => void;
  onOpenTuner: () => void;
  onOpenMetronome: () => void;
  isMobileOpen?: boolean;
  onCloseMobile?: () => void;
}

export const NavigationSidebar: React.FC<NavigationSidebarProps> = ({
  currentLessonId,
  onSelectLesson,
  completedLessonIds,
  onOpenDictionary,
  onOpenTuner,
  onOpenMetronome,
  isMobileOpen = false,
  onCloseMobile
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [expandedSections, setExpandedSections] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true
  });

  const toggleSection = (sectionId: number) => {
    setExpandedSections((prev) => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const progressPercentage = Math.round((completedLessonIds.length / ALL_LESSONS.length) * 100);

  const filteredLessons = useMemo(() => {
    if (!searchTerm.trim()) return ALL_LESSONS;
    const term = searchTerm.toLowerCase();
    return ALL_LESSONS.filter(
      (l) =>
        l.title.toLowerCase().includes(term) ||
        l.titleMy.toLowerCase().includes(term) ||
        l.subtitle.toLowerCase().includes(term) ||
        l.id.toString() === term ||
        (l.chords && l.chords.some((c) => c.toLowerCase().includes(term)))
    );
  }, [searchTerm]);

  const handleLessonClick = (id: number) => {
    onSelectLesson(id);
    if (onCloseMobile) onCloseMobile();
  };

  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 w-80 lg:w-88 bg-white border-r border-slate-200 flex flex-col transition-transform duration-300 ${
        isMobileOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}
    >
      {/* App Brand Header */}
      <div className="p-4 sm:p-5 border-b border-slate-200 bg-white">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 bg-orange-600 rounded-sm flex items-center justify-center text-white font-bold shadow-xs">
            <Music className="w-5 h-5 fill-current" />
          </div>
          <div>
            <h1 className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-1.5">
              <span>STRUMS & STRINGS</span>
            </h1>
            <p className="text-[11px] text-slate-500 font-myanmar">ဂစ်တာ ရစ်သမ် သင်တန်း (အခြေခံမှ အဆင့်မြင့်)</p>
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-3 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
          <div className="flex items-center justify-between text-xs mb-1.5">
            <span className="text-slate-600 flex items-center gap-1 font-medium">
              <Trophy className="w-3.5 h-3.5 text-orange-600" />
              <span>သင်တန်းတိုးတက်မှု</span>
            </span>
            <span className="font-mono font-bold text-orange-600">{progressPercentage}%</span>
          </div>
          <div className="w-full h-1.5 bg-slate-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-orange-500 rounded-full transition-all duration-500"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="text-[10px] text-slate-400 font-mono mt-1 text-right">
            {completedLessonIds.length} / {ALL_LESSONS.length} Lessons Completed
          </div>
        </div>

        {/* Quick Tools Grid */}
        <div className="grid grid-cols-3 gap-1.5 mt-3">
          <button
            onClick={onOpenDictionary}
            className="flex flex-col items-center gap-1 p-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-orange-600 border border-slate-200 transition-colors text-[10px] font-mono cursor-pointer"
          >
            <BookOpen className="w-3.5 h-3.5 text-orange-600" />
            <span>Chords</span>
          </button>
          <button
            onClick={onOpenTuner}
            className="flex flex-col items-center gap-1 p-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-orange-600 border border-slate-200 transition-colors text-[10px] font-mono cursor-pointer"
          >
            <Radio className="w-3.5 h-3.5 text-slate-600" />
            <span>Tuner</span>
          </button>
          <button
            onClick={onOpenMetronome}
            className="flex flex-col items-center gap-1 p-2 rounded-lg bg-slate-50 hover:bg-slate-100 text-slate-700 hover:text-orange-600 border border-slate-200 transition-colors text-[10px] font-mono cursor-pointer"
          >
            <Sliders className="w-3.5 h-3.5 text-slate-600" />
            <span>Metronome</span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative mt-3">
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search lessons, rhythms, chords..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full bg-slate-50 border border-slate-200 rounded-lg pl-8 pr-3 py-1.5 text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-orange-500 focus:bg-white font-sans"
          />
        </div>
      </div>

      {/* Lesson List Container */}
      <div className="flex-1 overflow-y-auto p-3 space-y-3 scrollbar-thin">
        {searchTerm ? (
          // Search Results Flat List
          <div className="space-y-1">
            <div className="text-[11px] font-mono text-slate-400 px-2 py-1">
              Found {filteredLessons.length} lessons:
            </div>
            {filteredLessons.map((lesson) => {
              const isSelected = lesson.id === currentLessonId;
              const isCompleted = completedLessonIds.includes(lesson.id);

              return (
                <button
                  key={`search-lesson-${lesson.id}`}
                  onClick={() => handleLessonClick(lesson.id)}
                  className={`w-full text-left p-2.5 rounded-xl border flex items-start gap-2.5 transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-orange-50 border-orange-300 text-orange-900 shadow-2xs'
                      : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="mt-0.5 shrink-0">
                    {isCompleted ? (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Circle className="w-4 h-4 text-slate-300" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-xs font-bold truncate">
                      <span className="font-mono text-orange-600 mr-1">L{lesson.id}:</span> {lesson.title}
                    </div>
                    <div className="text-[11px] text-slate-500 font-myanmar truncate mt-0.5">
                      {lesson.titleMy}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        ) : (
          // Grouped Accordion List by Section
          SECTIONS.map((sec) => {
            const isExpanded = expandedSections[sec.id];
            const sectionLessons = ALL_LESSONS.filter((l) => l.section === sec.id);
            const sectionCompletedCount = sectionLessons.filter((l) =>
              completedLessonIds.includes(l.id)
            ).length;

            return (
              <div key={`section-${sec.id}`} className="rounded-xl overflow-hidden border border-slate-200 bg-white shadow-2xs">
                {/* Section Header */}
                <button
                  onClick={() => toggleSection(sec.id)}
                  className="w-full flex items-center justify-between p-3 bg-slate-50/80 hover:bg-slate-100 text-left transition-colors cursor-pointer"
                >
                  <div className="flex-1 min-w-0 pr-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase font-mono font-bold px-1.5 py-0.5 rounded bg-white text-orange-600 border border-slate-200">
                        Section {sec.id}
                      </span>
                      <span className="text-[10px] text-slate-400 font-mono">
                        {sectionCompletedCount}/{sectionLessons.length}
                      </span>
                    </div>
                    <h3 className="text-xs font-bold text-slate-900 mt-1 truncate">
                      {sec.titleEn.split(':')[1] || sec.titleEn}
                    </h3>
                    <p className="text-[11px] text-slate-500 font-myanmar truncate mt-0.5">
                      {sec.titleMy}
                    </p>
                  </div>

                  <div className="text-slate-400">
                    {isExpanded ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />}
                  </div>
                </button>

                {/* Lessons in Section */}
                {isExpanded && (
                  <div className="p-1.5 space-y-0.5 bg-white border-t border-slate-100">
                    {sectionLessons.map((lesson) => {
                      const isSelected = lesson.id === currentLessonId;
                      const isCompleted = completedLessonIds.includes(lesson.id);

                      return (
                        <button
                          key={`nav-lesson-${lesson.id}`}
                          onClick={() => handleLessonClick(lesson.id)}
                          className={`w-full text-left p-2 rounded-lg flex items-start gap-2.5 transition-all cursor-pointer ${
                            isSelected
                              ? 'bg-slate-100 text-slate-900 font-medium border border-slate-200 shadow-2xs'
                              : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50 border border-transparent'
                          }`}
                        >
                          <div className="mt-0.5 shrink-0">
                            {isCompleted ? (
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                            ) : (
                              <Circle className="w-3.5 h-3.5 text-slate-300" />
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs truncate font-medium">
                              <span className="w-6 text-orange-600 font-mono text-xs font-bold mr-1.5">
                                {lesson.id < 10 ? `0${lesson.id}` : lesson.id}
                              </span>
                              <span className={isSelected ? 'text-slate-900 font-semibold' : 'text-slate-700'}>
                                {lesson.title}
                              </span>
                            </div>
                            <div className="text-[10px] text-slate-400 font-myanmar truncate mt-0.5">
                              {lesson.titleMy.replace(/^အခန်း\s+\d+\s+-\s+/, '')}
                            </div>
                          </div>
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>

      {/* Bottom Practice Goal Box */}
      <div className="p-3 border-t border-slate-200 bg-white">
        <div className="bg-slate-900 text-white p-3.5 rounded-xl space-y-2 shadow-xs">
          <div className="flex items-center justify-between">
            <p className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Practice Goal</p>
            <span className="text-[10px] font-mono text-orange-400">15 min/day</span>
          </div>
          <p className="text-xs font-semibold text-slate-100">Daily Rhythm Mastery</p>
          <div className="flex gap-1 pt-1">
            <div className="w-full h-1 bg-orange-500 rounded-full"></div>
            <div className="w-full h-1 bg-orange-500 rounded-full"></div>
            <div className="w-full h-1 bg-orange-500 rounded-full"></div>
            <div className="w-full h-1 bg-slate-700 rounded-full"></div>
            <div className="w-full h-1 bg-slate-700 rounded-full"></div>
          </div>
        </div>
      </div>
    </aside>
  );
};
