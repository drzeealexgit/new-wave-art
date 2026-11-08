import React from 'react';
import { Instagram, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  lang: 'en' | 'ua';
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="mt-24 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="font-serif-art text-xl font-normal text-zinc-900 dark:text-zinc-100">
              {lang === 'en' ? 'Zvolinska' : 'Зволінська'}
            </span>
            <p className="text-xs text-zinc-500 font-light">
              {lang === 'en'
                ? 'Painter, Graphic Artist, Sculptor · Contemporary Ukrainian Art'
                : 'Живопис, графіка, скульптура · Сучасне українське мистецтво'}
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs text-zinc-600 dark:text-zinc-400">
            <a
              href="https://www.instagram.com/ttilda_._obako/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <Instagram className="w-4 h-4" />
              <span>@ttilda_._obako</span>
            </a>
            <a
              href="mailto:mary.zvolinskaya@gmail.com"
              className="flex items-center gap-1.5 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            >
              <Mail className="w-4 h-4" />
              <span>mary.zvolinskaya@gmail.com</span>
            </a>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
          >
            <span>{lang === 'en' ? 'Top' : 'Вгору'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-6 border-t border-zinc-200 dark:border-zinc-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400 font-mono">
          <div>
            © {new Date().getFullYear()} {lang === 'en' ? 'Zvolinska' : 'Зволінська'}. {lang === 'en' ? 'All rights reserved.' : 'Усі права захищено.'}
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>{lang === 'en' ? 'Original structure preserved' : 'Оригінальну структуру збережено'}</span>
            <span aria-hidden="true">·</span>
            <span>Kyiv / Odesa / Viinistu</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
