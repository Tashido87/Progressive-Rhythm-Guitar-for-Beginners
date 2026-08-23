import React, { useState, useMemo } from 'react';
import { X, Search, Volume2, BookOpen, Filter } from 'lucide-react';
import { CHORDS_DICTIONARY } from '../data/chordsData';
import { ChordDefinition } from '../types';
import { InteractiveChordDiagram } from './InteractiveChordDiagram';

interface ChordDictionaryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChordDictionaryModal: React.FC<ChordDictionaryModalProps> = ({ isOpen, onClose }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedRoot, setSelectedRoot] = useState<string>('all');
  const [activeChord, setActiveChord] = useState<ChordDefinition | null>(null);

  const allChords = useMemo(() => Object.values(CHORDS_DICTIONARY), []);

  const categories = [
    { id: 'all', label: 'All Chords (အားလုံး)' },
    { id: 'open', label: 'Open Chords' },
    { id: 'barre', label: 'Barre Chords' },
    { id: 'dominant7', label: '7th Dominant' },
    { id: 'minor', label: 'Minor Chords' },
    { id: 'major7', label: 'Major 7th' },
    { id: 'minor7', label: 'Minor 7th' },
    { id: 'extended', label: '9th / 6th / Jazz' },
    { id: 'special', label: 'Sus / Aug / Dim' }
  ];

  const roots = ['all', 'C', 'D', 'E', 'F', 'G', 'A', 'B'];

  const filteredChords = useMemo(() => {
    return allChords.filter((chord) => {
      const matchesSearch =
        chord.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (chord.nameMy && chord.nameMy.includes(searchTerm));

      const matchesCategory =
        selectedCategory === 'all' || chord.category === selectedCategory;

      const matchesRoot =
        selectedRoot === 'all' || chord.rootNote === selectedRoot;

      return matchesSearch && matchesCategory && matchesRoot;
    });
  }, [allChords, searchTerm, selectedCategory, selectedRoot]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in">
      <div className="bg-white border-2 border-slate-200 rounded-3xl w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200 bg-white">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-orange-50 text-orange-600 border border-orange-100">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Guitar Chord Dictionary (ဂစ်တာလက်ကွက် အဘိဓာန်)</h2>
              <p className="text-xs text-slate-500 font-myanmar">စာအုပ်တွင်ပါဝင်သော Chord ၅၀+ အားလုံး၏ အသံနှင့် လက်ကွက်များ</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 hover:text-slate-900 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 border-b border-slate-200 bg-slate-50/70 space-y-3">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search chord (e.g. C, F#m, B7, Fmaj7, E9, Bb...)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-slate-200 rounded-xl pl-10 pr-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-orange-500 font-mono shadow-2xs"
            />
          </div>

          {/* Categories & Roots */}
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="text-slate-400 font-mono font-bold">Category:</span>
            <div className="flex flex-wrap gap-1.5 overflow-x-auto">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1 rounded-lg font-mono transition-colors cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-slate-900 text-white font-bold'
                      : 'bg-white border border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>

          {/* Root Note selector */}
          <div className="flex items-center gap-2 text-xs">
            <span className="text-slate-400 font-mono font-bold">Root Note:</span>
            <div className="flex gap-1.5">
              {roots.map((r) => (
                <button
                  key={r}
                  onClick={() => setSelectedRoot(r)}
                  className={`w-7 h-7 rounded-lg font-mono font-bold transition-colors cursor-pointer text-xs flex items-center justify-center ${
                    selectedRoot === r
                      ? 'bg-orange-600 text-white shadow-xs'
                      : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  {r === 'all' ? 'All' : r}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Chords Grid */}
        <div className="flex-1 overflow-y-auto p-5 scrollbar-thin bg-slate-50/30">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {filteredChords.map((chord) => (
              <InteractiveChordDiagram
                key={chord.name}
                chord={chord}
                size="sm"
                compact
              />
            ))}
          </div>

          {filteredChords.length === 0 && (
            <div className="text-center py-16 text-slate-400 font-mono">
              No chords found matching &quot;{searchTerm}&quot;
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
