import React from 'react';
import { Maximize2, Sparkles, CheckCircle2, AlertTriangle, ArrowUpRight } from 'lucide-react';
import { Artwork, GallerySection } from '../utils/portfolioLogic';

interface GallerySectionViewProps {
  sections: GallerySection[];
  artworks: Artwork[];
  lang: 'en' | 'ua';
  onOpenArtwork: (artwork: Artwork) => void;
  onInquirePiece: (artwork: Artwork) => void;
}

export const GallerySectionView: React.FC<GallerySectionViewProps> = ({
  sections,
  artworks,
  lang,
  onOpenArtwork,
  onInquirePiece,
}) => {
  const sortedSections = [...sections].sort((a, b) => a.order - b.order);

  return (
    <div className="space-y-24 sm:space-y-32">
      {sortedSections.map((section, idx) => {
        if (!section.isOpen) return null;

        const sectionArtworks = artworks.filter((a) => a.category === section.slug);
        const isAlternate = idx % 2 === 1;

        return (
          <section
            key={section.id}
            id={section.slug}
            className="scroll-mt-20 pt-6 border-t border-zinc-200 dark:border-zinc-800"
          >
            {/* Section Curatorial Header */}
            <div className="max-w-4xl space-y-4 mb-10">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
                <span>0{idx + 1}</span>
                <span aria-hidden="true">/</span>
                <span>{lang === 'en' ? section.subtitleEn : section.subtitleUa}</span>
              </div>

              <h2 className="font-serif-art text-3xl sm:text-4xl lg:text-5xl font-normal text-zinc-900 dark:text-zinc-50 tracking-tight">
                {lang === 'en' ? section.titleEn : section.titleUa}
              </h2>

              <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-light">
                {lang === 'en' ? section.descriptionEn : section.descriptionUa}
              </p>
            </div>

            {/* Media Bento & Masonry Grid */}
            {sectionArtworks.length === 0 ? (
              <div className="p-8 text-center border border-dashed border-zinc-300 dark:border-zinc-800 rounded-lg text-sm text-zinc-500">
                {lang === 'en'
                  ? 'No artworks currently in this gallery. Add works via the Studio CMS.'
                  : 'У цій галереї поки немає робіт. Додайте твори через панель Studio CMS.'}
              </div>
            ) : (
              <div
                className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 ${
                  isAlternate ? 'lg:grid-cols-3' : 'lg:grid-cols-3'
                }`}
              >
                {sectionArtworks.map((item, itemIdx) => {
                  const isLarge = item.isCuratorPick && itemIdx === 0;

                  return (
                    <article
                      key={item.id}
                      className={`group relative flex flex-col justify-between bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800/80 rounded-lg overflow-hidden transition-all duration-300 hover:border-zinc-400 dark:hover:border-zinc-600 ${
                        isLarge ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                      }`}
                    >
                      {/* Image Frame */}
                      <div
                        className={`relative w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900 cursor-pointer ${
                          isLarge ? 'aspect-16/10' : 'aspect-4/3'
                        }`}
                        onClick={() => onOpenArtwork(item)}
                      >
                        <img
                          src={item.imageUrl}
                          alt={lang === 'en' ? item.titleEn : item.titleUa}
                          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                          loading="lazy"
                          referrerPolicy="no-referrer"
                        />

                        {/* Subtle scrim on hover */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                          <span className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-black/75 backdrop-blur-md rounded-md">
                            <Maximize2 className="w-3.5 h-3.5" />
                            {lang === 'en' ? 'Expand Work' : 'Розгорнути'}
                          </span>
                        </div>

                        {/* Quality Badge Indicator */}
                        <div className="absolute top-3 right-3 z-10">
                          {item.imageStatus === 'use' ? (
                            <span
                              title={
                                lang === 'en'
                                  ? 'Archive quality verified: Available for web'
                                  : 'Якість перевірена: оригінал з архіву'
                              }
                              className="inline-flex items-center gap-1 text-[10px] text-zinc-300 bg-black/60 backdrop-blur-md px-2 py-0.5 rounded font-mono"
                            >
                              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                              <span>{lang === 'en' ? 'Archive' : 'Архів'}</span>
                            </span>
                          ) : (
                            <span
                              title={
                                lang === 'en'
                                  ? 'Marked for high-res re-upload'
                                  : 'Позначено для перезавантаження у високій якості'
                              }
                              className="inline-flex items-center gap-1 text-[10px] text-amber-300 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded font-mono"
                            >
                              <AlertTriangle className="w-3 h-3 text-amber-400" />
                              <span>{lang === 'en' ? 'Re-upload' : 'Перезавантажити'}</span>
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Curatorial Card Footer */}
                      <div className="p-5 flex flex-col justify-between flex-1 space-y-3">
                        <div className="space-y-1.5">
                          <div className="flex items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                            <span>{item.year}</span>
                            <span>{item.dimensions} cm</span>
                          </div>

                          <h3
                            onClick={() => onOpenArtwork(item)}
                            className="font-serif-art text-xl font-normal text-zinc-900 dark:text-zinc-100 tracking-tight cursor-pointer hover:underline"
                          >
                            {lang === 'en' ? item.titleEn : item.titleUa}
                          </h3>

                          <div className="text-xs text-zinc-500 dark:text-zinc-400 line-clamp-1 font-light">
                            {lang === 'en' ? item.techniqueEn : item.techniqueUa}
                          </div>

                          <p className="text-xs text-zinc-600 dark:text-zinc-300 line-clamp-2 leading-relaxed pt-1">
                            {lang === 'en' ? item.descriptionEn : item.descriptionUa}
                          </p>
                        </div>

                        {/* Interactive affordances */}
                        <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between text-xs">
                          <button
                            onClick={() => onOpenArtwork(item)}
                            className="text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white font-medium inline-flex items-center gap-1 transition-colors"
                          >
                            <span>{lang === 'en' ? 'View Details' : 'Детальніше'}</span>
                            <ArrowUpRight className="w-3 h-3" />
                          </button>

                          <button
                            onClick={() => onInquirePiece(item)}
                            className="text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 text-[11px] underline underline-offset-2 transition-colors"
                          >
                            {lang === 'en' ? 'Inquire' : 'Замовити'}
                          </button>
                        </div>
                      </div>
                    </article>
                  );
                })}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
};
