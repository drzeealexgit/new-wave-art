import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut, Share2, Mail, Check, AlertCircle } from 'lucide-react';
import { Artwork, formatArtworkDimensions } from '../utils/portfolioLogic';

interface ArtworkModalProps {
  artwork: Artwork | null;
  allArtworks: Artwork[];
  onClose: () => void;
  onSelectArtwork: (artwork: Artwork) => void;
  onInquirePiece: (artwork: Artwork) => void;
  lang: 'en' | 'ua';
}

export const ArtworkModal: React.FC<ArtworkModalProps> = ({
  artwork,
  allArtworks,
  onClose,
  onSelectArtwork,
  onInquirePiece,
  lang,
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setIsZoomed(false);
    setCopied(false);
  }, [artwork]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!artwork) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [artwork, allArtworks]);

  if (!artwork) return null;

  const currentIndex = allArtworks.findIndex((a) => a.id === artwork.id);
  const handlePrev = () => {
    if (currentIndex > 0) {
      onSelectArtwork(allArtworks[currentIndex - 1]);
    } else {
      onSelectArtwork(allArtworks[allArtworks.length - 1]);
    }
  };

  const handleNext = () => {
    if (currentIndex < allArtworks.length - 1) {
      onSelectArtwork(allArtworks[currentIndex + 1]);
    } else {
      onSelectArtwork(allArtworks[0]);
    }
  };

  const handleShare = async () => {
    const shareData = {
      title: `${lang === 'en' ? artwork.titleEn : artwork.titleUa} — ${lang === 'en' ? 'Zvolinska' : 'Зволінська'}`,
      text: `${lang === 'en' ? artwork.descriptionEn : artwork.descriptionUa}`,
      url: window.location.href,
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch {
        // user cancelled or failed
      }
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-2 sm:p-4 lg:p-6 transition-all"
    >
      {/* Top Controls Bar */}
      <div className="absolute top-3 right-3 sm:top-5 sm:right-6 z-20 flex items-center gap-2">
        <button
          onClick={() => setIsZoomed(!isZoomed)}
          className="p-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors border border-zinc-700"
          title={isZoomed ? 'Zoom out' : 'Zoom in'}
          aria-label="Toggle zoom"
        >
          {isZoomed ? <ZoomOut className="w-4 h-4" /> : <ZoomIn className="w-4 h-4" />}
        </button>

        <button
          onClick={handleShare}
          className="p-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors border border-zinc-700"
          title={copied ? 'Copied link!' : 'Share piece'}
          aria-label="Share artwork"
        >
          {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Share2 className="w-4 h-4" />}
        </button>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white transition-colors border border-zinc-700"
          title="Close (Esc)"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Prev / Next Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-2 sm:left-4 z-20 p-2 sm:p-3 rounded-full bg-zinc-900/70 hover:bg-zinc-800 text-white transition-all hover:scale-105 border border-zinc-700/50"
        title="Previous work (Left arrow)"
        aria-label="Previous artwork"
      >
        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-2 sm:right-4 z-20 p-2 sm:p-3 rounded-full bg-zinc-900/70 hover:bg-zinc-800 text-white transition-all hover:scale-105 border border-zinc-700/50"
        title="Next work (Right arrow)"
        aria-label="Next artwork"
      >
        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      {/* Main Container */}
      <div className="w-full h-full max-w-7xl flex flex-col lg:flex-row items-center justify-between gap-6 overflow-y-auto lg:overflow-hidden p-2 sm:p-6">
        {/* Left: Artwork Visual Viewport */}
        <div className="flex-1 w-full h-[55vh] lg:h-full flex items-center justify-center overflow-hidden relative">
          <img
            src={artwork.imageUrl}
            alt={lang === 'en' ? artwork.titleEn : artwork.titleUa}
            className={`max-w-full max-h-full object-contain transition-transform duration-300 select-none ${
              isZoomed ? 'scale-150 cursor-zoom-out' : 'cursor-zoom-in'
            }`}
            onClick={() => setIsZoomed(!isZoomed)}
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Right: Curatorial Passport & Acquisition Actions */}
        <div className="w-full lg:w-96 shrink-0 bg-zinc-900/90 border border-zinc-800 rounded-lg p-5 sm:p-6 text-zinc-100 space-y-5 max-h-[40vh] lg:max-h-full overflow-y-auto">
          {/* Header Info */}
          <div className="space-y-1">
            <div className="text-xs uppercase tracking-wider text-zinc-400 font-mono">
              {artwork.year} · {artwork.category.toUpperCase()}
            </div>
            <h2 className="font-serif-art text-2xl font-normal text-white">
              {lang === 'en' ? artwork.titleEn : artwork.titleUa}
            </h2>
            {artwork.seriesEn && (
              <div className="text-xs text-zinc-400 italic font-serif-art">
                {lang === 'en' ? artwork.seriesEn : artwork.seriesUa}
              </div>
            )}
          </div>

          {/* Technical Specs (Zero-Pill with hairlines) */}
          <div className="pt-3 border-t border-zinc-800 space-y-2 text-xs">
            <div className="flex justify-between py-1 border-b border-zinc-800/60">
              <span className="text-zinc-400">{lang === 'en' ? 'Dimensions' : 'Розміри'}</span>
              <span className="font-medium text-zinc-200">
                {formatArtworkDimensions(artwork.dimensions, lang)}
              </span>
            </div>
            <div className="flex justify-between py-1 border-b border-zinc-800/60">
              <span className="text-zinc-400">{lang === 'en' ? 'Technique' : 'Техніка'}</span>
              <span className="font-medium text-zinc-200 text-right ml-4">
                {lang === 'en' ? artwork.techniqueEn : artwork.techniqueUa}
              </span>
            </div>
            <div className="flex justify-between py-1">
              <span className="text-zinc-400">{lang === 'en' ? 'Quality Status' : 'Статус якості'}</span>
              <span className="font-medium flex items-center gap-1.5 text-zinc-300">
                {artwork.imageStatus === 'use' ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>{lang === 'en' ? 'Archived High-Res' : 'Архівний оригінал'}</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="w-3.5 h-3.5 text-amber-400" />
                    <span>{lang === 'en' ? 'Needs re-upload' : 'Потребує перезавантаження'}</span>
                  </>
                )}
              </span>
            </div>
          </div>

          {/* Curatorial Annotation */}
          <div className="pt-3 border-t border-zinc-800 space-y-1.5">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
              {lang === 'en' ? 'Curatorial Note' : 'Кураторський опис'}
            </h4>
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-light">
              {lang === 'en' ? artwork.descriptionEn : artwork.descriptionUa}
            </p>
          </div>

          {/* Action Trigger: Inquire */}
          <div className="pt-4 border-t border-zinc-800">
            <button
              onClick={() => {
                onInquirePiece(artwork);
                onClose();
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-zinc-950 bg-white hover:bg-zinc-200 rounded-md transition-colors shadow-xs"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>{lang === 'en' ? 'Inquire About This Work' : 'Запит щодо цієї роботи'}</span>
            </button>
            <p className="text-[11px] text-center text-zinc-500 mt-2">
              {lang === 'en'
                ? 'Available for exhibition loans, private collections, or commissions.'
                : 'Доступно для експонування, приватних колекцій або замовлень.'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
