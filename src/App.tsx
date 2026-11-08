import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { GallerySectionView } from './components/GallerySectionView';
import { CuratorialIndexView } from './components/CuratorialIndexView';
import { BiographyAndCV } from './components/BiographyAndCV';
import { ContactAndInquiry } from './components/ContactAndInquiry';
import { Footer } from './components/Footer';
import { ArtworkModal } from './components/ArtworkModal';
import { AdminDrawer } from './components/AdminDrawer';
import {
  initialSections,
  initialArtworks,
} from './data/portfolioData';
import { Artwork, GallerySection } from './utils/portfolioLogic';

export default function App() {
  const [lang, setLang] = useState<'en' | 'ua'>('en');
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('zvolinska_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }
    return false;
  });

  const [navMode, setNavMode] = useState<'curatorial' | 'index'>('curatorial');
  const [activeSection, setActiveSection] = useState<string>('top');
  const [isAdminOpen, setIsAdminOpen] = useState<boolean>(false);

  // Persistent portfolio data
  const [sections, setSections] = useState<GallerySection[]>(() => {
    const saved = localStorage.getItem('zvolinska_sections');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // fallback
      }
    }
    return initialSections;
  });

  const [artworks, setArtworks] = useState<Artwork[]>(() => {
    const saved = localStorage.getItem('zvolinska_artworks');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // fallback
      }
    }
    return initialArtworks;
  });

  // Modal & inquiry states
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);
  const [prefilledArtwork, setPrefilledArtwork] = useState<Artwork | null>(null);

  // Sync dark theme class on document element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('zvolinska_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('zvolinska_theme', 'light');
    }
  }, [isDark]);

  // Sync sections & artworks to localStorage
  useEffect(() => {
    localStorage.setItem('zvolinska_sections', JSON.stringify(sections));
  }, [sections]);

  useEffect(() => {
    localStorage.setItem('zvolinska_artworks', JSON.stringify(artworks));
  }, [artworks]);

  const handleResetDefault = () => {
    setSections(initialSections);
    setArtworks(initialArtworks);
    localStorage.removeItem('zvolinska_sections');
    localStorage.removeItem('zvolinska_artworks');
  };

  const featuredArtwork =
    artworks.find((a) => a.id === 'art-2025-portrait-yellow') ||
    artworks.find((a) => a.id === 'art-bucha') ||
    artworks[0];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 selection:bg-zinc-900 selection:text-white dark:selection:bg-zinc-100 dark:selection:text-zinc-950 transition-colors">
      {/* Top Bar Header */}
      <Header
        lang={lang}
        setLang={setLang}
        isDark={isDark}
        setIsDark={setIsDark}
        navMode={navMode}
        setNavMode={setNavMode}
        onOpenAdmin={() => setIsAdminOpen(true)}
        activeSection={activeSection}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 sm:space-y-24">
        {/* Split Screen Hero */}
        <Hero
          lang={lang}
          featuredArtwork={featuredArtwork}
          onOpenArtwork={(art) => setSelectedArtwork(art)}
          onInquire={() => {
            const el = document.getElementById('contacts');
            el?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Dynamic Presentation: Variant A (Curatorial Story Narrative) or Variant B (Catalogue Index) */}
        {navMode === 'curatorial' ? (
          <GallerySectionView
            sections={sections}
            artworks={artworks}
            lang={lang}
            onOpenArtwork={(art) => setSelectedArtwork(art)}
            onInquirePiece={(art) => {
              setPrefilledArtwork(art);
              const el = document.getElementById('contacts');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        ) : (
          <CuratorialIndexView
            artworks={artworks}
            lang={lang}
            onOpenArtwork={(art) => setSelectedArtwork(art)}
            onInquirePiece={(art) => {
              setPrefilledArtwork(art);
              const el = document.getElementById('contacts');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
          />
        )}

        {/* Complete CV & Academic / Exhibition Biography */}
        <BiographyAndCV lang={lang} />

        {/* Inquiries & Direct Collaboration Orders */}
        <ContactAndInquiry
          lang={lang}
          prefilledArtwork={prefilledArtwork}
          onClearPrefilled={() => setPrefilledArtwork(null)}
        />
      </main>

      {/* Global Footer */}
      <Footer lang={lang} />

      {/* Fullscreen Art Lightbox Modal */}
      <ArtworkModal
        artwork={selectedArtwork}
        allArtworks={artworks}
        onClose={() => setSelectedArtwork(null)}
        onSelectArtwork={(art) => setSelectedArtwork(art)}
        onInquirePiece={(art) => {
          setPrefilledArtwork(art);
          const el = document.getElementById('contacts');
          el?.scrollIntoView({ behavior: 'smooth' });
        }}
        lang={lang}
      />

      {/* Studio CMS Admin Drawer with Image Optimization & Cloud Integration */}
      <AdminDrawer
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        lang={lang}
        sections={sections}
        setSections={setSections}
        artworks={artworks}
        setArtworks={setArtworks}
        onResetDefault={handleResetDefault}
      />
    </div>
  );
}
