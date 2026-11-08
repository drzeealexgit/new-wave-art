import test from 'node:test';
import assert from 'node:assert/strict';
import {
  filterArtworks,
  assessImageQuality,
  formatArtworkDimensions,
  isSectionAccessible,
  Artwork,
  GallerySection,
} from './portfolioLogic.ts';

const mockArtworks: Artwork[] = [
  {
    id: 'art-1',
    titleEn: "it's not just Bucha",
    titleUa: 'Це не просто Буча',
    year: '2022',
    dimensions: '57x110',
    techniqueEn: 'acrylic, marker, canvas',
    techniqueUa: 'акрил, маркер, полотно',
    category: 'paints',
    descriptionEn: 'The canvas shows the world of a happy and bright childhood',
    descriptionUa: 'Полотно показує світ щасливого дитинства',
    imageUrl: 'https://static.wixstatic.com/media/830da7_3650ffe733f3431d9d881fbfc29aecf9~mv2.jpg',
    imageStatus: 'use',
  },
  {
    id: 'art-2',
    titleEn: 'figures digging up blur contours',
    titleUa: 'Постаті, що розкопують розмиті контури',
    year: '2022',
    dimensions: '150x90',
    techniqueEn: 'acrylic, oils, canvas',
    techniqueUa: 'акрил, олія, полотно',
    category: 'paints',
    descriptionEn: 'Three figures digging the soil',
    descriptionUa: 'Три постаті копають землю',
    imageUrl: 'https://static.wixstatic.com/media/830da7_f41aab1d9cfe4ee3bf83b1b6995b1ca6~mv2.jpg',
    imageStatus: 'use',
  },
  {
    id: 'art-3',
    titleEn: 'My pain is beautiful',
    titleUa: 'Мій біль прекрасний',
    year: '2022',
    dimensions: '40x30x25',
    techniqueEn: 'plaster, plastic brain',
    techniqueUa: 'гіпс, пластиковий мозок',
    category: 'objects',
    descriptionEn: 'Imprint in a mask',
    descriptionUa: 'Відбиток у масці',
    imageUrl: 'https://static.wixstatic.com/media/830da7_39769e00a4cb4d7fb5a5fa3f4fa7cd29~mv2.jpg',
    imageStatus: 'use',
  },
];

test('filterArtworks by category works correctly', () => {
  const result = filterArtworks(mockArtworks, 'objects', '', 'en');
  assert.equal(result.length, 1);
  assert.equal(result[0].id, 'art-3');
});

test('filterArtworks by keyword searches both title and description', () => {
  const result = filterArtworks(mockArtworks, 'all', 'Bucha', 'en');
  assert.equal(result.length, 1);
  assert.equal(result[0].id, 'art-1');

  const uaResult = filterArtworks(mockArtworks, 'all', 'Буча', 'ua');
  assert.equal(uaResult.length, 1);
  assert.equal(uaResult[0].id, 'art-1');
});

test('assessImageQuality detects low-res and valid images', () => {
  assert.equal(assessImageQuality('', 0, 0), 'needs_reupload');
  assert.equal(assessImageQuality('https://example.com/thumb.jpg', 120, 90), 'needs_reupload');
  assert.equal(
    assessImageQuality('https://static.wixstatic.com/media/test.jpg', 1200, 900),
    'use'
  );
});

test('formatArtworkDimensions formats dimension strings cleanly', () => {
  assert.equal(formatArtworkDimensions('57x110', 'en'), '57×110 cm');
  assert.equal(formatArtworkDimensions('57x110', 'ua'), '57×110 см');
  assert.equal(formatArtworkDimensions('150×100 cm', 'en'), '150×100 cm');
});

test('isSectionAccessible returns true when open and containing works', () => {
  const section: GallerySection = {
    id: 'sec-1',
    slug: 'paints',
    titleEn: 'Paintings',
    titleUa: 'Живопис',
    subtitleEn: 'War period',
    subtitleUa: 'Період війни',
    descriptionEn: '',
    descriptionUa: '',
    isOpen: true,
    order: 1,
  };
  assert.equal(isSectionAccessible(section, mockArtworks), true);

  const closedSection: GallerySection = { ...section, isOpen: false };
  assert.equal(isSectionAccessible(closedSection, mockArtworks), false);

  const emptySection: GallerySection = { ...section, slug: 'performance' };
  assert.equal(isSectionAccessible(emptySection, mockArtworks), false);
});
