import React, { useState } from 'react';
import { Search, Filter, Maximize2, CheckCircle2, AlertTriangle, ArrowUpDown } from 'lucide-react';
import { Artwork, filterArtworks } from '../utils/portfolioLogic';

interface CuratorialIndexViewProps {
  artworks: Artwork[];
  lang: 'en' | 'ua';
  onOpenArtwork: (artwork: Artwork) => void;
  onInquirePiece: (artwork: Artwork) => void;
}

export const CuratorialIndexView: React.FC<CuratorialIndexViewProps> = ({
  artworks,
  lang,
  onOpenArtwork,
  onInquirePiece,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [sortOrder, setSortOrder] = useState<'desc' | 'asc'>('desc');

  const filtered = filterArtworks(artworks, selectedCategory, searchQuery, lang);
  const sorted = [...filtered].sort((a, b) => {
    if (sortOrder === 'desc') {
      return b.year.localeCompare(a.year);
    }
    return a.year.localeCompare(b.year);
  });

  const categories = [
    { id: 'all', labelEn: 'Complete Archive', labelUa: 'Повний архів' },
    { id: 'kyiv-2025', labelEn: '2025 Recent', labelUa: '2025 Нові' },
    { id: 'paints', labelEn: 'War Paintings', labelUa: 'Живопис війни' },
    { id: 'expositions', labelEn: 'Exhibitions', labelUa: 'Виставки' },
    { id: 'graphics', labelEn: 'Graphics', labelUa: 'Графіка' },
    { id: 'illustration', labelEn: 'Illustrations', labelUa: 'Ілюстрації' },
    { id: 'objects', labelEn: 'Objects & Masks', labelUa: 'Об’єкти та маски' },
    { id: 'collaborations', labelEn: 'Collaborations', labelUa: 'Колаборації' },
    { id: 'performance', labelEn: 'Performance Art', labelUa: 'Перформанс' },
  ];

  return (
    <div className="space-y-8 pt-4">
      {/* Editorial Explanatory Banner for Variant B */}
      <div className="p-4 sm:p-5 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-wider">
            <span>{lang === 'en' ? 'Navigation Mode: Variant B' : 'Режим навігації: Варіант Б'}</span>
            <span aria-hidden="true">·</span>
            <span className="text-amber-600 dark:text-amber-400 font-semibold">
              {lang === 'en' ? 'Awaiting Artist Choice' : 'Очікує вибору авторки'}
            </span>
          </div>
          <h3 className="text-sm sm:text-base font-semibold text-zinc-900 dark:text-zinc-100 mt-1">
            {lang === 'en'
              ? 'Exhaustive Curatorial Index & Catalogue Raisonné'
              : 'Вичерпний кураторський індекс та каталог творів'}
          </h3>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
            {lang === 'en'
              ? 'Direct non-linear exploration of all catalogue items with live filtering, dimensional metadata, and acquisition states.'
              : 'Швидкий нелінійний огляд усього каталогу з фільтрацією, технічними параметрами та статусом якості.'}
          </p>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
                selectedCategory === cat.id
                  ? 'bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 shadow-xs'
                  : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-200 border border-transparent hover:border-zinc-300 dark:hover:border-zinc-700'
              }`}
            >
              {lang === 'en' ? cat.labelEn : cat.labelUa}
            </button>
          ))}
        </div>

        {/* Search & Sort Input */}
        <div className="flex items-center gap-2">
          <div className="relative flex-1 sm:w-64">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-400" />
            <input
              type="text"
              placeholder={lang === 'en' ? 'Search by title, medium, year...' : 'Пошук за назвою, технікою, роком...'}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-500"
            />
          </div>

          <button
            onClick={() => setSortOrder(sortOrder === 'desc' ? 'asc' : 'desc')}
            className="flex items-center gap-1 px-2.5 py-1.5 text-xs rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            title="Toggle year sort order"
          >
            <ArrowUpDown className="w-3 h-3" />
            <span className="font-mono">{sortOrder === 'desc' ? '2023 → 2018' : '2018 → 2023'}</span>
          </button>
        </div>
      </div>

      {/* Index Table / Visual Cards List */}
      <div className="border border-zinc-200 dark:border-zinc-800 rounded-lg overflow-hidden bg-white dark:bg-zinc-950">
        <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
          {sorted.length === 0 ? (
            <div className="p-12 text-center text-sm text-zinc-500">
              {lang === 'en'
                ? 'No artworks match your filter criteria.'
                : 'За цими критеріями творів не знайдено.'}
            </div>
          ) : (
            sorted.map((item) => (
              <div
                key={item.id}
                className="p-4 sm:p-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 hover:bg-zinc-50/80 dark:hover:bg-zinc-900/40 transition-colors"
              >
                {/* Left: Thumbnail & Title */}
                <div className="flex items-center gap-4 flex-1">
                  <div
                    onClick={() => onOpenArtwork(item)}
                    className="w-16 h-16 sm:w-20 sm:h-20 shrink-0 rounded overflow-hidden bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 cursor-pointer relative group"
                  >
                    <img
                      src={item.imageUrl}
                      alt={lang === 'en' ? item.titleEn : item.titleUa}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <Maximize2 className="w-4 h-4 text-white" />
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-xs text-zinc-500 dark:text-zinc-400 font-mono">
                      <span>{item.year}</span>
                      <span aria-hidden="true">·</span>
                      <span className="uppercase">{item.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{item.dimensions} cm</span>
                    </div>

                    <h4
                      onClick={() => onOpenArtwork(item)}
                      className="font-serif-art text-lg font-medium text-zinc-900 dark:text-zinc-100 hover:underline cursor-pointer"
                    >
                      {lang === 'en' ? item.titleEn : item.titleUa}
                    </h4>

                    <div className="text-xs text-zinc-600 dark:text-zinc-400 font-light">
                      {lang === 'en' ? item.techniqueEn : item.techniqueUa}
                    </div>
                  </div>
                </div>

                {/* Right: Status & Actions */}
                <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end border-t sm:border-t-0 pt-3 sm:pt-0 border-zinc-100 dark:border-zinc-800">
                  <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-mono">
                    {item.imageStatus === 'use' ? (
                      <span className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span className="hidden md:inline">{lang === 'en' ? 'Archived' : 'В архіві'}</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-1 text-amber-600 dark:text-amber-400">
                        <AlertTriangle className="w-3.5 h-3.5" />
                        <span className="hidden md:inline">{lang === 'en' ? 'Re-upload' : 'Перезавантажити'}</span>
                      </span>
                    )}
                  </div>

                  <button
                    onClick={() => onOpenArtwork(item)}
                    className="px-3 py-1.5 text-xs font-medium rounded border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors"
                  >
                    {lang === 'en' ? 'Passport' : 'Паспорт'}
                  </button>

                  <button
                    onClick={() => onInquirePiece(item)}
                    className="px-3 py-1.5 text-xs font-medium rounded text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-950 hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-xs"
                  >
                    {lang === 'en' ? 'Inquire' : 'Запит'}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
