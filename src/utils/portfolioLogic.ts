export interface Artwork {
  id: string;
  titleEn: string;
  titleUa: string;
  year: string;
  dimensions: string;
  techniqueEn: string;
  techniqueUa: string;
  category: 'kyiv-2025' | 'paints' | 'expositions' | 'graphics' | 'illustration' | 'objects' | 'collaborations' | 'performance';
  seriesEn?: string;
  seriesUa?: string;
  descriptionEn: string;
  descriptionUa: string;
  imageUrl: string;
  imageStatus: 'use' | 'needs_reupload';
  isCuratorPick?: boolean;
}

export interface GallerySection {
  id: string;
  slug: string;
  titleEn: string;
  titleUa: string;
  subtitleEn: string;
  subtitleUa: string;
  descriptionEn: string;
  descriptionUa: string;
  isOpen: boolean;
  order: number;
}

/**
 * Filter artworks by category and search keyword
 */
export function filterArtworks(
  artworks: Artwork[],
  activeCategory: string,
  searchQuery: string,
  lang: 'en' | 'ua'
): Artwork[] {
  let list = artworks;

  if (activeCategory && activeCategory !== 'all') {
    list = list.filter((item) => item.category === activeCategory);
  }

  const query = searchQuery.trim().toLowerCase();
  if (query) {
    list = list.filter((item) => {
      const title = lang === 'en' ? item.titleEn : item.titleUa;
      const desc = lang === 'en' ? item.descriptionEn : item.descriptionUa;
      const tech = lang === 'en' ? item.techniqueEn : item.techniqueUa;
      return (
        title.toLowerCase().includes(query) ||
        desc.toLowerCase().includes(query) ||
        tech.toLowerCase().includes(query) ||
        item.year.includes(query) ||
        item.dimensions.toLowerCase().includes(query)
      );
    });
  }

  return list;
}

/**
 * Determine if image quality is sufficient or needs high-res re-upload
 */
export function assessImageQuality(
  url: string,
  width?: number,
  height?: number
): 'use' | 'needs_reupload' {
  if (!url) return 'needs_reupload';
  // Small thumbnails or placeholders need re-upload
  if (width && height && (width < 600 || height < 400)) {
    return 'needs_reupload';
  }
  // Wix original images with proper hash usually have full resolution
  if (url.includes('static.wixstatic.com/media/')) {
    return 'use';
  }
  return 'use';
}

/**
 * Format artwork dimension string
 */
export function formatArtworkDimensions(dims: string, lang: 'en' | 'ua'): string {
  if (!dims) return '';
  const clean = dims.replace(/&times;/g, '×').replace(/x/g, '×').trim();
  if (clean.includes('cm') || clean.includes('см')) return clean;
  return lang === 'en' ? `${clean} cm` : `${clean} см`;
}

/**
 * Check if a section is currently open and has items
 */
export function isSectionAccessible(section: GallerySection, artworks: Artwork[]): boolean {
  if (!section.isOpen) return false;
  return artworks.some((a) => a.category === section.slug);
}
