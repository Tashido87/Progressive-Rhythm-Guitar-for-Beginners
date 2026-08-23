import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  BookOpen,
  Radio,
  Sliders,
  Sparkles,
  Music,
  Share2,
  Trophy
} from 'lucide-react';
import { ALL_LESSONS, getLessonById } from './data/allLessons';
import { NavigationSidebar } from './components/NavigationSidebar';
import { LessonViewer } from './components/LessonViewer';
import { ChordDictionaryModal } from './components/ChordDictionaryModal';
import { GuitarTuner } from './components/GuitarTuner';
import { MetronomeTool } from './components/MetronomeTool';

export default function App() {
  // Restore last visited lesson or default to Lesson 1
  const [currentLessonId, setCurrentLessonId] = useState<number>(() => {
    const saved = localStorage.getItem('rhythm_guitar_last_lesson');
    return saved ? Number(saved) : 1;
  });

  // Restore completed lesson IDs from localStorage
  const [completedLessonIds, setCompletedLessonIds] = useState<number[]>(() => {
    const saved = localStorage.getItem('rhythm_guitar_completed_lessons');
    return saved ? JSON.parse(saved) : [];
  });

  // Modal / Tool States
  const [isDictionaryOpen, setIsDictionaryOpen] = useState(false);
  const [activeUtilityTool, setActiveUtilityTool] = useState<'none' | 'tuner' | 'metronome'>('none');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Sync to localStorage
  useEffect(() => {
    localStorage.setItem('rhythm_guitar_last_lesson', currentLessonId.toString());
  }, [currentLessonId]);

  useEffect(() => {
    localStorage.setItem('rhythm_guitar_completed_lessons', JSON.stringify(completedLessonIds));
  }, [completedLessonIds]);

  const currentLesson = getLessonById(currentLessonId) || ALL_LESSONS[0];

  const currentLessonIndex = ALL_LESSONS.findIndex((l) => l.id === currentLessonId);
  const hasPrev = currentLessonIndex > 0;
  const hasNext = currentLessonIndex < ALL_LESSONS.length - 1;

  const handlePrevLesson = () => {
    if (hasPrev) {
      setCurrentLessonId(ALL_LESSONS[currentLessonIndex - 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleNextLesson = () => {
    if (hasNext) {
      setCurrentLessonId(ALL_LESSONS[currentLessonIndex + 1].id);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleToggleComplete = (id: number) => {
    setCompletedLessonIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen bg-[#F8F7F2] text-slate-900 font-sans flex flex-col antialiased selection:bg-orange-500/20 selection:text-orange-900">
      {/* Navigation Sidebar */}
      <NavigationSidebar
        currentLessonId={currentLessonId}
        onSelectLesson={(id) => {
          setCurrentLessonId(id);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        completedLessonIds={completedLessonIds}
        onOpenDictionary={() => setIsDictionaryOpen(true)}
        onOpenTuner={() => setActiveUtilityTool((curr) => (curr === 'tuner' ? 'none' : 'tuner'))}
        onOpenMetronome={() =>
          setActiveUtilityTool((curr) => (curr === 'metronome' ? 'none' : 'metronome'))
        }
        isMobileOpen={isMobileMenuOpen}
        onCloseMobile={() => setIsMobileMenuOpen(false)}
      />

      {/* Main Content Area */}
      <div className="lg:pl-80 xl:pl-88 flex-1 flex flex-col min-w-0">
        {/* Top Navbar */}
        <header className="sticky top-0 z-30 bg-white border-b border-slate-200 px-4 sm:px-8 py-3.5 flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-slate-100 border border-slate-200 text-slate-700 hover:text-slate-900 cursor-pointer transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>

            <div>
              <div className="text-[11px] font-mono text-orange-600 font-bold uppercase tracking-wider">
                SESSION {currentLesson.id < 10 ? `0${currentLesson.id}` : currentLesson.id} • SECTION {currentLesson.section}
              </div>
              <h2 className="text-sm font-bold text-slate-900 tracking-tight truncate max-w-[200px] sm:max-w-md">
                {currentLesson.title}
              </h2>
            </div>
          </div>

          {/* Quick Action Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveUtilityTool((curr) => (curr === 'tuner' ? 'none' : 'tuner'))}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono transition-colors cursor-pointer ${
                activeUtilityTool === 'tuner'
                  ? 'bg-orange-50 text-orange-700 border-orange-300 font-semibold'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
              }`}
            >
              <Radio className="w-3.5 h-3.5 text-orange-600" />
              <span className="hidden sm:inline">Tuner</span>
            </button>

            <button
              onClick={() =>
                setActiveUtilityTool((curr) => (curr === 'metronome' ? 'none' : 'metronome'))
              }
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-mono transition-colors cursor-pointer ${
                activeUtilityTool === 'metronome'
                  ? 'bg-orange-50 text-orange-700 border-orange-300 font-semibold'
                  : 'bg-white hover:bg-slate-50 text-slate-700 border-slate-200'
              }`}
            >
              <Sliders className="w-3.5 h-3.5 text-orange-600" />
              <span className="hidden sm:inline">Metronome</span>
            </button>

            <button
              onClick={() => setIsDictionaryOpen(true)}
              className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-mono font-medium shadow-xs transition-colors cursor-pointer"
            >
              <BookOpen className="w-3.5 h-3.5 text-orange-400" />
              <span>Chords (၅၀+)</span>
            </button>
          </div>
        </header>

        {/* Collapsible Utility Drawer (Tuner or Metronome) */}
        {activeUtilityTool !== 'none' && (
          <div className="p-4 sm:p-6 bg-white/95 border-b border-slate-200 shadow-sm animate-slide-down">
            <div className="max-w-5xl mx-auto relative">
              <button
                onClick={() => setActiveUtilityTool('none')}
                className="absolute top-2 right-2 p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-500 hover:text-slate-900 cursor-pointer z-10"
              >
                <X className="w-4 h-4" />
              </button>
              {activeUtilityTool === 'tuner' ? <GuitarTuner /> : <MetronomeTool />}
            </div>
          </div>
        )}

        {/* Lesson Viewport */}
        <main className="flex-1 p-4 sm:p-6 lg:p-8">
          <LessonViewer
            lesson={currentLesson}
            isCompleted={completedLessonIds.includes(currentLesson.id)}
            onToggleComplete={handleToggleComplete}
            onPrevLesson={handlePrevLesson}
            onNextLesson={handleNextLesson}
            hasPrev={hasPrev}
            hasNext={hasNext}
          />
        </main>
      </div>

      {/* Chord Dictionary Modal */}
      <ChordDictionaryModal
        isOpen={isDictionaryOpen}
        onClose={() => setIsDictionaryOpen(false)}
      />

      {/* Backdrop for Mobile Sidebar */}
      {isMobileMenuOpen && (
        <div
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 z-30 bg-slate-900/40 backdrop-blur-xs lg:hidden"
        />
      )}
    </div>
  );
}
