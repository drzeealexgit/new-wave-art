import React from 'react';
import { ArrowDown, Maximize2, Sparkles, Award } from 'lucide-react';
import { Artwork } from '../utils/portfolioLogic';

interface HeroProps {
  lang: 'en' | 'ua';
  featuredArtwork: Artwork;
  onOpenArtwork: (artwork: Artwork) => void;
  onInquire: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  lang,
  featuredArtwork,
  onOpenArtwork,
  onInquire,
}) => {
  return (
    <section id="top" className="relative pt-8 pb-16 lg:pt-14 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Left Column: Typographic Narrative */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="space-y-6">
              {/* Kicker (Zero-Pill clean text with separators) */}
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-[10px] sm:text-xs uppercase tracking-wider sm:tracking-widest text-zinc-500 dark:text-zinc-400 font-medium">
                <span>{lang === 'en' ? 'Contemporary Ukrainian Art' : 'Сучасне українське мистецтво'}</span>
                <span aria-hidden="true">·</span>
                <span>21 {lang === 'en' ? 'Years' : 'Рік'}</span>
                <span aria-hidden="true">·</span>
                <span>{lang === 'en' ? 'War Period Chronicles' : 'Хроніки часів війни'}</span>
              </div>

              {/* Display Headline */}
              <h1 className="font-serif-art text-4xl sm:text-5xl lg:text-6xl font-light text-zinc-900 dark:text-zinc-50 leading-[1.1] tracking-tight">
                {lang === 'en' ? (
                  <>
                    Art as a <span className="italic font-normal">biological code</span> of human resilience.
                  </>
                ) : (
                  <>
                    Мистецтво як <span className="italic font-normal">біологічний код</span> людської незламності.
                  </>
                )}
              </h1>

              {/* Artist Statement / Manifesto */}
              <div className="relative pl-5 border-l border-zinc-300 dark:border-zinc-700 py-1 space-y-3">
                <p className="text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
                  {lang === 'en'
                    ? '"Sometimes may be good, sometimes maybe war", but creativity cannot leave us even in such times, operating biologically like genuine self-expression. The way of understanding the world\'s senses and self-awareness.'
                    : '«Sometimes may be good, sometimes maybe war», але творчість не може покинути нас навіть у такі часи, діючи біологічно — як самовираження самого життя. Спосіб пізнання сенсів світу та самоусвідомлення.'}
                </p>
                <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {lang === 'en'
                    ? 'When art is a code of broadcast — your inner CODE-reactor instantly produces an authentic reaction through every stylistic movement to the endless manifestations of reality.'
                    : 'Коли мистецтво стає кодом трансляції — твій внутрішній КОД-реактор миттєво генерує відгук у кожному русі стилістичних течій, відповідаючи на нескінченні виклики світу.'}
                </p>
              </div>

              {/* Author disciplines */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-zinc-600 dark:text-zinc-400">
                <span className="font-semibold text-zinc-900 dark:text-zinc-200">
                  {lang === 'en' ? 'Disciplines:' : 'Дисципліни:'}
                </span>
                <span>{lang === 'en' ? 'Painting' : 'Живопис'}</span>
                <span aria-hidden="true">/</span>
                <span>{lang === 'en' ? 'Graphics' : 'Графіка'}</span>
                <span aria-hidden="true">/</span>
                <span>{lang === 'en' ? 'Sculpture & Objects' : 'Скульптура та об’єкти'}</span>
                <span aria-hidden="true">/</span>
                <span>{lang === 'en' ? 'Performance' : 'Перформанс'}</span>
              </div>
            </div>

            {/* CTAs & Quick Anchors */}
            <div className="pt-8 flex flex-wrap items-center gap-4">
              <a
                href="#paints"
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-900 rounded-md hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-xs"
              >
                {lang === 'en' ? 'Explore Works' : 'Переглянути роботи'}
              </a>
              <button
                onClick={onInquire}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-800 dark:text-zinc-200 bg-transparent border border-zinc-300 dark:border-zinc-700 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
              >
                {lang === 'en' ? 'Inquire / Orders' : 'Запит на співпрацю'}
              </button>
              <a
                href="#biography"
                className="text-xs text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 underline underline-offset-4 transition-colors ml-auto sm:ml-0"
              >
                {lang === 'en' ? 'Read CV & Exhibitions' : 'Читати CV та виставки'}
              </a>
            </div>
          </div>

          {/* Right Column: Hero Visual Anchor */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="group relative rounded-lg overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-zinc-100 dark:bg-zinc-900 shadow-md">
              <div className="relative aspect-4/5 w-full overflow-hidden">
                <img
                  src={featuredArtwork.imageUrl}
                  alt={lang === 'en' ? featuredArtwork.titleEn : featuredArtwork.titleUa}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                {/* Subtle scrim for metadata clarity */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />

                {/* Top badge indicating verified work */}
                <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
                  <span className="text-[11px] font-mono tracking-wider uppercase text-zinc-300 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded">
                    {lang === 'en' ? 'Featured Masterwork' : 'Ключовий твір'}
                  </span>
                </div>

                {/* Inspect trigger button */}
                <button
                  onClick={() => onOpenArtwork(featuredArtwork)}
                  className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-black/85 backdrop-blur-md transition-transform hover:scale-110"
                  title={lang === 'en' ? 'View in fullscreen' : 'Переглянути у повному екрані'}
                  aria-label="Inspect artwork"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>

                {/* Bottom Overlay Card */}
                <div className="absolute bottom-0 inset-x-0 p-5 text-white z-10 space-y-1.5">
                  <div className="text-xs text-zinc-300 font-serif-art italic">
                    {lang === 'en' ? featuredArtwork.seriesEn : featuredArtwork.seriesUa} · {featuredArtwork.year}
                  </div>
                  <h3 className="font-serif-art text-xl font-normal text-white tracking-tight">
                    {lang === 'en' ? featuredArtwork.titleEn : featuredArtwork.titleUa}
                  </h3>
                  <div className="text-xs text-zinc-300 flex items-center gap-2">
                    <span>{featuredArtwork.dimensions} cm</span>
                    <span aria-hidden="true">·</span>
                    <span className="truncate">
                      {lang === 'en' ? featuredArtwork.techniqueEn : featuredArtwork.techniqueUa}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full-width strip below hero (Metrics / Accolades) */}
        <div className="mt-16 pt-8 border-t border-zinc-200 dark:border-zinc-800 grid grid-cols-2 md:grid-cols-4 gap-6 text-left">
          <div className="space-y-1">
            <div className="text-2xl font-light text-zinc-900 dark:text-zinc-50 font-serif-art">6+</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
              {lang === 'en' ? 'International Awards (Japan, TR, UA)' : 'Міжнародних перемог (Японія, ТР, УА)'}
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-light text-zinc-900 dark:text-zinc-50 font-serif-art">4</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
              {lang === 'en' ? 'Exhibition Countries (BE, EE, SI, UA)' : 'Країни виставок (Бельгія, Естонія, Словенія, Україна)'}
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-light text-zinc-900 dark:text-zinc-50 font-serif-art">2022</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
              {lang === 'en' ? 'Viinistu Art Museum Solo Pavilion' : 'Персональний павільйон у Музеї Війністу'}
            </div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-light text-zinc-900 dark:text-zinc-50 font-serif-art">21</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
              {lang === 'en' ? 'Years of Age · Ongoing Evolution' : 'Рік авторці · Нове покоління митців'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
