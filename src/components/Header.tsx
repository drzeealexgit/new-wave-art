import React from 'react';
import { Sun, Moon, Globe, Settings2, LayoutGrid, Rows3 } from 'lucide-react';

interface HeaderProps {
  lang: 'en' | 'ua';
  setLang: (lang: 'en' | 'ua') => void;
  isDark: boolean;
  setIsDark: (dark: boolean) => void;
  navMode: 'curatorial' | 'index';
  setNavMode: (mode: 'curatorial' | 'index') => void;
  onOpenAdmin: () => void;
  activeSection: string;
}

export const Header: React.FC<HeaderProps> = ({
  lang,
  setLang,
  isDark,
  setIsDark,
  navMode,
  setNavMode,
  onOpenAdmin,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 dark:bg-zinc-950/90 border-b border-zinc-200 dark:border-zinc-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark (Single text element) */}
        <a
          href="#top"
          className="font-serif-art text-2xl tracking-tight font-semibold text-zinc-900 dark:text-zinc-50 whitespace-nowrap shrink-0 hover:opacity-80 transition-opacity"
        >
          {lang === 'en' ? 'Zvolinska' : 'Зволінська'}
        </a>

        {/* Zone 2: Primary Nav Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-zinc-600 dark:text-zinc-400">
          <a
            href="#kyiv-2025"
            className="text-amber-700 dark:text-amber-400 font-semibold hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0"
          >
            2025
          </a>
          <a
            href="#paints"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0"
          >
            {lang === 'en' ? 'War Paintings' : 'Живопис війни'}
          </a>
          <a
            href="#expositions"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0"
          >
            {lang === 'en' ? 'Exhibitions' : 'Виставки'}
          </a>
          <a
            href="#graphics"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0"
          >
            {lang === 'en' ? 'Graphics & Books' : 'Графіка та книги'}
          </a>
          <a
            href="#objects"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0"
          >
            {lang === 'en' ? 'Objects & Action' : 'Об’єкти та перформанс'}
          </a>
          <a
            href="#biography"
            className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors whitespace-nowrap shrink-0"
          >
            {lang === 'en' ? 'CV & Bio' : 'Біографія та CV'}
          </a>
        </nav>

        {/* Zone 3: Functional Controls */}
        <div className="flex items-center gap-2 sm:gap-3 shrink-0">
          {/* Navigation Paradigm Switcher (Acceptance criteria: 2 options with rationale) */}
          <div className="hidden lg:flex items-center p-0.5 rounded-md bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
            <button
              onClick={() => setNavMode('curatorial')}
              title={
                lang === 'en'
                  ? 'Variant A: Monograph Narrative View (recommended)'
                  : 'Варіант А: Монографічний наративний вигляд (рекомендовано)'
              }
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                navMode === 'curatorial'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              <Rows3 className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Story' : 'Наратив'}</span>
            </button>
            <button
              onClick={() => setNavMode('index')}
              title={
                lang === 'en'
                  ? 'Variant B: Contemporary Art Index View'
                  : 'Варіант Б: Сучасний арт-індекс творів'
              }
              className={`flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                navMode === 'index'
                  ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs'
                  : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
              }`}
            >
              <LayoutGrid className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Index' : 'Індекс'}</span>
            </button>
          </div>

          {/* Language Switcher */}
          <button
            onClick={() => setLang(lang === 'en' ? 'ua' : 'en')}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs font-semibold rounded-md border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-800 dark:text-zinc-200 transition-colors whitespace-nowrap"
            aria-label="Switch language"
          >
            <Globe className="w-3.5 h-3.5 text-zinc-500" />
            <span>{lang === 'en' ? 'UA' : 'EN'}</span>
          </button>

          {/* Theme Switcher */}
          <button
            onClick={() => setIsDark(!isDark)}
            className="p-1.5 rounded-md border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300 transition-colors"
            aria-label="Toggle theme"
            title={isDark ? 'Switch to light theme' : 'Switch to dark gallery theme'}
          >
            {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Studio CMS Panel Trigger */}
          <button
            onClick={onOpenAdmin}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-950 rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors whitespace-nowrap shrink-0 shadow-xs"
            title={lang === 'en' ? 'Open Artist Admin CMS' : 'Відкрити адмін-панель керування'}
          >
            <Settings2 className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">{lang === 'en' ? 'Studio CMS' : 'Керування'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};
