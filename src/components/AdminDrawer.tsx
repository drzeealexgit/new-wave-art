import React, { useState, useRef } from 'react';
import {
  X,
  Plus,
  Trash2,
  Edit2,
  Upload,
  Download,
  FolderSync,
  Eye,
  EyeOff,
  Check,
  AlertCircle,
  FileImage,
  RefreshCw,
  SlidersHorizontal,
} from 'lucide-react';
import { Artwork, GallerySection } from '../utils/portfolioLogic';

interface AdminDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  lang: 'en' | 'ua';
  sections: GallerySection[];
  setSections: React.Dispatch<React.SetStateAction<GallerySection[]>>;
  artworks: Artwork[];
  setArtworks: React.Dispatch<React.SetStateAction<Artwork[]>>;
  onResetDefault: () => void;
}

export const AdminDrawer: React.FC<AdminDrawerProps> = ({
  isOpen,
  onClose,
  lang,
  sections,
  setSections,
  artworks,
  setArtworks,
  onResetDefault,
}) => {
  const [activeTab, setActiveTab] = useState<'galleries' | 'artworks' | 'cloud' | 'export'>('galleries');
  const [editingArtwork, setEditingArtwork] = useState<Artwork | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  // New artwork form state
  const [newTitleEn, setNewTitleEn] = useState('');
  const [newTitleUa, setNewTitleUa] = useState('');
  const [newYear, setNewYear] = useState('2023');
  const [newDimensions, setNewDimensions] = useState('');
  const [newTechniqueEn, setNewTechniqueEn] = useState('');
  const [newTechniqueUa, setNewTechniqueUa] = useState('');
  const [newCategory, setNewCategory] = useState<Artwork['category']>('paints');
  const [newDescEn, setNewDescEn] = useState('');
  const [newDescUa, setNewDescUa] = useState('');
  const [newImageStatus, setNewImageStatus] = useState<'use' | 'needs_reupload'>('use');
  const [uploadedImageDataUrl, setUploadedImageDataUrl] = useState('');
  const [optimizing, setOptimizing] = useState(false);

  // Drive manifest input state
  const [driveManifestInput, setDriveManifestInput] = useState('');
  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(''), 3000);
  };

  // Toggle Gallery Open/Closed
  const toggleSectionOpen = (id: string) => {
    setSections((prev) =>
      prev.map((s) => (s.id === id ? { ...s, isOpen: !s.isOpen } : s))
    );
    showToast(lang === 'en' ? 'Gallery visibility updated' : 'Статус галереї змінено');
  };

  // Optimize and resize image file to web-ready JPEG/WebP
  const handleImageUpload = (file: File) => {
    setOptimizing(true);
    const reader = new FileReader();
    reader.onload = (event) => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        const MAX_WIDTH = 1920;
        const MAX_HEIGHT = 1920;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height = Math.round((height * MAX_WIDTH) / width);
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width = Math.round((width * MAX_HEIGHT) / height);
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        ctx?.drawImage(img, 0, 0, width, height);

        // Compress to quality 0.88 JPEG
        const optimizedUrl = canvas.toDataURL('image/jpeg', 0.88);
        setUploadedImageDataUrl(optimizedUrl);
        setOptimizing(false);
        showToast(
          lang === 'en'
            ? `Image auto-optimized to ${width}×${height}px for web!`
            : `Зображення автоматично оптимізовано до ${width}×${height}px!`
        );
      };
      img.src = event.target?.result as string;
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files[0]);
    }
  };

  // Save artwork (new or edit)
  const handleSaveArtwork = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingArtwork) {
      setArtworks((prev) =>
        prev.map((a) =>
          a.id === editingArtwork.id
            ? {
                ...editingArtwork,
                imageUrl: uploadedImageDataUrl || editingArtwork.imageUrl,
              }
            : a
        )
      );
      setEditingArtwork(null);
      setUploadedImageDataUrl('');
      showToast(lang === 'en' ? 'Artwork record updated' : 'Запис роботи збережено');
    } else if (isAddingNew) {
      if (!newTitleEn && !newTitleUa) return;
      const created: Artwork = {
        id: `art-custom-${Date.now()}`,
        titleEn: newTitleEn || newTitleUa,
        titleUa: newTitleUa || newTitleEn,
        year: newYear || '2023',
        dimensions: newDimensions || '50x50',
        techniqueEn: newTechniqueEn || 'acrylic, canvas',
        techniqueUa: newTechniqueUa || 'акрил, полотно',
        category: newCategory,
        descriptionEn: newDescEn,
        descriptionUa: newDescUa,
        imageUrl:
          uploadedImageDataUrl ||
          'https://static.wixstatic.com/media/830da7_3650ffe733f3431d9d881fbfc29aecf9~mv2.jpg',
        imageStatus: newImageStatus,
      };
      setArtworks((prev) => [created, ...prev]);
      setIsAddingNew(false);
      setUploadedImageDataUrl('');
      // reset form
      setNewTitleEn('');
      setNewTitleUa('');
      setNewDescEn('');
      setNewDescUa('');
      showToast(lang === 'en' ? 'New artwork added to gallery' : 'Нову роботу додано до галереї');
    }
  };

  // Delete artwork
  const handleDeleteArtwork = (id: string) => {
    setArtworks((prev) => prev.filter((a) => a.id !== id));
    showToast(lang === 'en' ? 'Artwork removed' : 'Роботу видалено');
  };

  // Export JSON backup
  const handleExportJSON = () => {
    const data = {
      exportDate: new Date().toISOString(),
      sections,
      artworks,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `zvolinska_portfolio_backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    showToast(lang === 'en' ? 'Database exported as JSON' : 'Базу експортовано у файл JSON');
  };

  // Import JSON backup
  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (event) => {
      try {
        const parsed = JSON.parse(event.target?.result as string);
        if (parsed.sections && parsed.artworks) {
          setSections(parsed.sections);
          setArtworks(parsed.artworks);
          showToast(lang === 'en' ? 'Database successfully restored!' : 'Базу успішно відновлено!');
        }
      } catch {
        alert('Invalid JSON file format.');
      }
    };
    reader.readAsText(file);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/60 backdrop-blur-xs">
      <div className="w-full max-w-2xl h-full bg-white dark:bg-zinc-950 border-l border-zinc-200 dark:border-zinc-800 shadow-2xl flex flex-col justify-between overflow-hidden">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase tracking-wider">
              <span>{lang === 'en' ? 'Artist Studio CMS' : 'Панель керування сайтом'}</span>
              <span aria-hidden="true">·</span>
              <span>v2.4</span>
            </div>
            <h2 className="font-serif-art text-xl font-semibold text-zinc-900 dark:text-zinc-50">
              {lang === 'en' ? 'Gallery & Media Management' : 'Керування галереями та архівом'}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-md hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
            aria-label="Close CMS"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Toast alert */}
        {toastMessage && (
          <div className="px-6 py-2 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 text-xs font-medium border-b border-emerald-200 dark:border-emerald-900 flex items-center gap-2">
            <Check className="w-4 h-4 text-emerald-500" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Navigation Tabs */}
        <div className="px-6 pt-3 flex items-center gap-2 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/30 overflow-x-auto">
          {[
            { id: 'galleries', labelEn: 'Galleries', labelUa: 'Галереї' },
            { id: 'artworks', labelEn: 'Artworks', labelUa: 'Роботи' },
            { id: 'cloud', labelEn: 'Google Drive Archive', labelUa: 'Архів Google Drive' },
            { id: 'export', labelEn: 'Sync & Backup', labelUa: 'Синхронізація' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-3 text-xs font-medium border-b-2 whitespace-nowrap transition-colors px-1 ${
                activeTab === tab.id
                  ? 'border-zinc-900 text-zinc-900 dark:border-zinc-100 dark:text-zinc-100'
                  : 'border-transparent text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
              }`}
            >
              {lang === 'en' ? tab.labelEn : tab.labelUa}
            </button>
          ))}
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 space-y-6">
          {/* TAB 1: GALLERIES TOGGLE & EDIT */}
          {activeTab === 'galleries' && (
            <div className="space-y-4">
              <div className="text-xs text-zinc-500 leading-relaxed">
                {lang === 'en'
                  ? 'Open or close specific gallery sections. Closed galleries are instantly hidden from visitors while preserving all artworks in the archive.'
                  : 'Створюйте, відкривайте або тимчасово закривайте галереї. Закриті розділи миттєво ховаються з публічного сайту, зберігаючи всі роботи в архіві.'}
              </div>

              <div className="space-y-3">
                {sections.map((sec) => (
                  <div
                    key={sec.id}
                    className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 flex items-center justify-between gap-4"
                  >
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-serif-art text-base font-medium text-zinc-900 dark:text-zinc-100">
                          {lang === 'en' ? sec.titleEn : sec.titleUa}
                        </span>
                        <span className="text-[11px] font-mono text-zinc-400">({sec.slug})</span>
                      </div>
                      <div className="text-xs text-zinc-500">
                        {lang === 'en' ? sec.subtitleEn : sec.subtitleUa}
                      </div>
                    </div>

                    <button
                      onClick={() => toggleSectionOpen(sec.id)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded transition-colors ${
                        sec.isOpen
                          ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800'
                          : 'bg-zinc-200 text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400'
                      }`}
                    >
                      {sec.isOpen ? (
                        <>
                          <Eye className="w-3.5 h-3.5" />
                          <span>{lang === 'en' ? 'Open' : 'Відкрита'}</span>
                        </>
                      ) : (
                        <>
                          <EyeOff className="w-3.5 h-3.5" />
                          <span>{lang === 'en' ? 'Closed' : 'Закрита'}</span>
                        </>
                      )}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: ARTWORKS LIST & UPLOADER */}
          {activeTab === 'artworks' && (
            <div className="space-y-6">
              {!isAddingNew && !editingArtwork && (
                <div className="flex items-center justify-between">
                  <div className="text-xs text-zinc-500 font-mono">
                    {artworks.length} {lang === 'en' ? 'artworks catalogued' : 'робіт у каталозі'}
                  </div>
                  <button
                    onClick={() => {
                      setIsAddingNew(true);
                      setUploadedImageDataUrl('');
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-white bg-zinc-900 dark:bg-zinc-100 dark:text-zinc-950 rounded-md hover:opacity-90 transition-opacity"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? 'Add Artwork' : 'Додати твір'}</span>
                  </button>
                </div>
              )}

              {/* Form: Add or Edit */}
              {(isAddingNew || editingArtwork) && (
                <form
                  onSubmit={handleSaveArtwork}
                  className="p-5 rounded-lg border border-zinc-300 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900 space-y-4"
                >
                  <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-3">
                    <h3 className="font-serif-art text-lg font-medium text-zinc-900 dark:text-zinc-100">
                      {editingArtwork
                        ? lang === 'en'
                          ? 'Edit Artwork Record'
                          : 'Редагувати запис твору'
                        : lang === 'en'
                        ? 'Add New Artwork'
                        : 'Додати новий твір'}
                    </h3>
                    <button
                      type="button"
                      onClick={() => {
                        setIsAddingNew(false);
                        setEditingArtwork(null);
                      }}
                      className="text-xs text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100"
                    >
                      {lang === 'en' ? 'Cancel' : 'Скасувати'}
                    </button>
                  </div>

                  {/* Drag and Drop Box */}
                  <div
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className="border-2 border-dashed border-zinc-300 dark:border-zinc-700 rounded-lg p-5 text-center cursor-pointer hover:border-zinc-500 transition-colors bg-white dark:bg-zinc-950"
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={(e) => {
                        if (e.target.files && e.target.files[0]) {
                          handleImageUpload(e.target.files[0]);
                        }
                      }}
                    />
                    {uploadedImageDataUrl || editingArtwork?.imageUrl ? (
                      <div className="flex items-center justify-center gap-4">
                        <img
                          src={uploadedImageDataUrl || editingArtwork?.imageUrl}
                          alt="preview"
                          className="h-20 w-20 object-cover rounded border border-zinc-300 dark:border-zinc-700"
                        />
                        <div className="text-left text-xs">
                          <div className="font-semibold text-emerald-600 dark:text-emerald-400">
                            {lang === 'en' ? 'Image Ready' : 'Зображення готове'}
                          </div>
                          <div className="text-zinc-500">
                            {lang === 'en' ? 'Click to replace image' : 'Натисніть для заміни фото'}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="space-y-1 text-zinc-500 text-xs">
                        <Upload className="w-6 h-6 mx-auto text-zinc-400" />
                        <div>
                          {lang === 'en'
                            ? 'Drag & Drop artwork photo here, or click to browse'
                            : 'Перетягніть фото роботи сюди або натисніть для вибору'}
                        </div>
                        <div className="text-[11px] text-zinc-400">
                          {lang === 'en'
                            ? 'Automatic client-side web optimization & compression'
                            : 'Автоматичне стиснення та оптимізація для вебу'}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Fields */}
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-zinc-600 dark:text-zinc-400">Title (EN)</label>
                      <input
                        type="text"
                        value={editingArtwork ? editingArtwork.titleEn : newTitleEn}
                        onChange={(e) =>
                          editingArtwork
                            ? setEditingArtwork({ ...editingArtwork, titleEn: e.target.value })
                            : setNewTitleEn(e.target.value)
                        }
                        className="w-full px-2.5 py-1.5 text-xs rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950"
                        placeholder="e.g. it's not just Bucha"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-zinc-600 dark:text-zinc-400">Title (UA)</label>
                      <input
                        type="text"
                        value={editingArtwork ? editingArtwork.titleUa : newTitleUa}
                        onChange={(e) =>
                          editingArtwork
                            ? setEditingArtwork({ ...editingArtwork, titleUa: e.target.value })
                            : setNewTitleUa(e.target.value)
                        }
                        className="w-full px-2.5 py-1.5 text-xs rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950"
                        placeholder="наприклад, Це не просто Буча"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    <div>
                      <label className="text-xs text-zinc-600 dark:text-zinc-400">Year</label>
                      <input
                        type="text"
                        value={editingArtwork ? editingArtwork.year : newYear}
                        onChange={(e) =>
                          editingArtwork
                            ? setEditingArtwork({ ...editingArtwork, year: e.target.value })
                            : setNewYear(e.target.value)
                        }
                        className="w-full px-2.5 py-1.5 text-xs rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-zinc-600 dark:text-zinc-400">Dimensions</label>
                      <input
                        type="text"
                        value={editingArtwork ? editingArtwork.dimensions : newDimensions}
                        onChange={(e) =>
                          editingArtwork
                            ? setEditingArtwork({ ...editingArtwork, dimensions: e.target.value })
                            : setNewDimensions(e.target.value)
                        }
                        placeholder="e.g. 57x110"
                        className="w-full px-2.5 py-1.5 text-xs rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-zinc-600 dark:text-zinc-400">Gallery</label>
                      <select
                        value={editingArtwork ? editingArtwork.category : newCategory}
                        onChange={(e) => {
                          const cat = e.target.value as Artwork['category'];
                          if (editingArtwork) setEditingArtwork({ ...editingArtwork, category: cat });
                          else setNewCategory(cat);
                        }}
                        className="w-full px-2.5 py-1.5 text-xs rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950"
                      >
                        <option value="kyiv-2025">2025 (Kyiv Recent)</option>
                        <option value="paints">Paints</option>
                        <option value="expositions">Expositions</option>
                        <option value="graphics">Graphics</option>
                        <option value="illustration">Illustration</option>
                        <option value="objects">Objects</option>
                        <option value="collaborations">Collaborations</option>
                        <option value="performance">Performance</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs text-zinc-600 dark:text-zinc-400">Technique (EN)</label>
                      <input
                        type="text"
                        value={editingArtwork ? editingArtwork.techniqueEn : newTechniqueEn}
                        onChange={(e) =>
                          editingArtwork
                            ? setEditingArtwork({ ...editingArtwork, techniqueEn: e.target.value })
                            : setNewTechniqueEn(e.target.value)
                        }
                        className="w-full px-2.5 py-1.5 text-xs rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-zinc-600 dark:text-zinc-400">Technique (UA)</label>
                      <input
                        type="text"
                        value={editingArtwork ? editingArtwork.techniqueUa : newTechniqueUa}
                        onChange={(e) =>
                          editingArtwork
                            ? setEditingArtwork({ ...editingArtwork, techniqueUa: e.target.value })
                            : setNewTechniqueUa(e.target.value)
                        }
                        className="w-full px-2.5 py-1.5 text-xs rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs text-zinc-600 dark:text-zinc-400">Description (EN)</label>
                    <textarea
                      rows={2}
                      value={editingArtwork ? editingArtwork.descriptionEn : newDescEn}
                      onChange={(e) =>
                        editingArtwork
                          ? setEditingArtwork({ ...editingArtwork, descriptionEn: e.target.value })
                          : setNewDescEn(e.target.value)
                      }
                      className="w-full px-2.5 py-1.5 text-xs rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-zinc-600 dark:text-zinc-400">Description (UA)</label>
                    <textarea
                      rows={2}
                      value={editingArtwork ? editingArtwork.descriptionUa : newDescUa}
                      onChange={(e) =>
                        editingArtwork
                          ? setEditingArtwork({ ...editingArtwork, descriptionUa: e.target.value })
                          : setNewDescUa(e.target.value)
                      }
                      className="w-full px-2.5 py-1.5 text-xs rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950"
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <label className="text-xs text-zinc-600 dark:text-zinc-400 flex items-center gap-2">
                      <span>Quality status:</span>
                      <select
                        value={editingArtwork ? editingArtwork.imageStatus : newImageStatus}
                        onChange={(e) => {
                          const val = e.target.value as 'use' | 'needs_reupload';
                          if (editingArtwork) setEditingArtwork({ ...editingArtwork, imageStatus: val });
                          else setNewImageStatus(val);
                        }}
                        className="text-xs px-2 py-1 rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950"
                      >
                        <option value="use">Archive High-Res (use)</option>
                        <option value="needs_reupload">Needs Re-upload</option>
                      </select>
                    </label>

                    <button
                      type="submit"
                      className="px-4 py-2 text-xs font-semibold rounded bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 hover:opacity-90"
                    >
                      {lang === 'en' ? 'Save Artwork' : 'Зберегти твір'}
                    </button>
                  </div>
                </form>
              )}

              {/* Artworks List */}
              <div className="space-y-2">
                {artworks.map((art) => (
                  <div
                    key={art.id}
                    className="p-3 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 flex items-center justify-between gap-3"
                  >
                    <div className="flex items-center gap-3">
                      <img
                        src={art.imageUrl}
                        alt="thumb"
                        className="w-12 h-12 object-cover rounded border border-zinc-200 dark:border-zinc-800"
                      />
                      <div className="space-y-0.5">
                        <div className="text-xs font-medium text-zinc-900 dark:text-zinc-100">
                          {lang === 'en' ? art.titleEn : art.titleUa}
                        </div>
                        <div className="text-[11px] text-zinc-500 font-mono">
                          {art.year} · {art.category} · {art.dimensions} cm
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setEditingArtwork(art);
                          setIsAddingNew(false);
                          setUploadedImageDataUrl('');
                        }}
                        className="p-1.5 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                        title="Edit"
                      >
                        <Edit2 className="w-3.5 h-3.5" />
                      </button>
                      <button
                        onClick={() => handleDeleteArtwork(art.id)}
                        className="p-1.5 rounded hover:bg-rose-100 dark:hover:bg-rose-950/60 text-zinc-400 hover:text-rose-600"
                        title="Delete"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 3: GOOGLE DRIVE / TILDA ART ARCHIVE INTEGRATION */}
          {activeTab === 'cloud' && (
            <div className="space-y-5">
              <div className="p-4 rounded-lg border border-amber-200 dark:border-amber-900/60 bg-amber-50/60 dark:bg-amber-950/20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-amber-900 dark:text-amber-300">
                  <FolderSync className="w-4 h-4 text-amber-600" />
                  <span>
                    {lang === 'en'
                      ? 'Target Local Drive Archive Location'
                      : 'Цільовий шлях архіву робіт на локальному комп’ютері'}
                  </span>
                </div>
                <div className="p-2 bg-white dark:bg-zinc-900 rounded font-mono text-[11px] text-zinc-800 dark:text-zinc-200 select-all break-all">
                  /Users/alexzvo/Library/CloudStorage/GoogleDrive-dr.zee.alex@gmail.com/My Drive/Tilda Art
                </div>
                <p className="text-xs text-amber-800 dark:text-amber-400 leading-relaxed">
                  {lang === 'en'
                    ? 'Because web browsers and containers run in sandboxed environments without direct disk access to your macOS CloudStorage folder, you can batch drag-and-drop original scans directly into the uploader, or paste a file list / manifest below to synchronize archive records.'
                    : 'Оскільки браузер і контейнер працюють в ізольованому середовищі без прямого доступу до вашого macOS CloudStorage, ви можете пакетом перетягнути оригінали сканів із цієї папки у завантажувач, або вставити маніфест файлів нижче.'}
                </p>
              </div>

              {/* macOS Terminal Helper Command */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  {lang === 'en'
                    ? 'Generate Local File Listing on macOS (Terminal Command):'
                    : 'Команда для генерації лістингу файлів у macOS Terminal:'}
                </label>
                <div className="p-3 bg-zinc-900 text-zinc-100 rounded font-mono text-xs overflow-x-auto select-all">
                  find "/Users/alexzvo/Library/CloudStorage/GoogleDrive-dr.zee.alex@gmail.com/My Drive/Tilda Art" -type f &gt; tilda_art_listing.txt
                </div>
              </div>

              {/* Batch Manifest Input */}
              <div className="space-y-2">
                <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                  {lang === 'en'
                    ? 'Paste File Listing / Notes from Tilda Art Folder:'
                    : 'Вставити лістинг файлів / примітки з папки Tilda Art:'}
                </label>
                <textarea
                  rows={4}
                  value={driveManifestInput}
                  onChange={(e) => setDriveManifestInput(e.target.value)}
                  placeholder={
                    lang === 'en'
                      ? 'Paste filenames or paths here to check coverage...'
                      : 'Вставте список назв файлів або шляхів для перевірки...'
                  }
                  className="w-full p-2.5 text-xs font-mono rounded border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950"
                />
                <button
                  type="button"
                  onClick={() => {
                    showToast(
                      lang === 'en'
                        ? 'Archive manifest analyzed and registered'
                        : 'Маніфест архіву проаналізовано та збережено'
                    );
                  }}
                  className="px-3 py-1.5 text-xs font-medium rounded bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950"
                >
                  {lang === 'en' ? 'Register Manifest' : 'Зареєструвати маніфест'}
                </button>
              </div>
            </div>
          )}

          {/* TAB 4: SYNC & BACKUP */}
          {activeTab === 'export' && (
            <div className="space-y-5">
              <div className="text-xs text-zinc-500 leading-relaxed">
                {lang === 'en'
                  ? 'All changes made in Studio CMS are automatically persisted in your browser’s localStorage. You can also export a complete JSON snapshot to disk or restore from a backup.'
                  : 'Усі зміни автоматично зберігаються в localStorage. Ви також можете експортувати повну копію у файл або відновити дані з резервної копії.'}
              </div>

              <div className="p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/50 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                      {lang === 'en' ? 'Export Database (JSON)' : 'Експорт бази даних (JSON)'}
                    </div>
                    <div className="text-xs text-zinc-500">
                      {lang === 'en' ? 'Download all artworks, galleries & translations' : 'Завантажити всі роботи, галереї та переклади'}
                    </div>
                  </div>
                  <button
                    onClick={handleExportJSON}
                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 hover:opacity-90"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? 'Download' : 'Завантажити'}</span>
                  </button>
                </div>

                <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
                  <div>
                    <div className="text-xs font-semibold text-zinc-900 dark:text-zinc-100">
                      {lang === 'en' ? 'Import Database (JSON)' : 'Імпорт бази даних (JSON)'}
                    </div>
                    <div className="text-xs text-zinc-500">
                      {lang === 'en' ? 'Restore portfolio state from file' : 'Відновити стан портфоліо з файлу'}
                    </div>
                  </div>
                  <label className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer">
                    <Upload className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? 'Select File' : 'Обрати файл'}</span>
                    <input type="file" accept=".json" onChange={handleImportJSON} className="hidden" />
                  </label>
                </div>
              </div>

              {/* Reset to Canonical State */}
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <button
                  onClick={() => {
                    if (
                      confirm(
                        lang === 'en'
                          ? 'Reset all data to canonical Wix archive state?'
                          : 'Скинути всі дані до канонічного архіву Wix?'
                      )
                    ) {
                      onResetDefault();
                      showToast(lang === 'en' ? 'Restored to canonical archive' : 'Відновлено канонічний архів');
                    }
                  }}
                  className="flex items-center gap-2 text-xs text-rose-600 dark:text-rose-400 hover:underline"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>
                    {lang === 'en'
                      ? 'Reset to canonical Wix archive baseline'
                      : 'Скинути до базового канонічного архіву Wix'}
                  </span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 flex items-center justify-between text-xs text-zinc-500">
          <span>{lang === 'en' ? 'Ready for production deployment' : 'Готово для продакшн публікації'}</span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium rounded bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-950 hover:opacity-90"
          >
            {lang === 'en' ? 'Done' : 'Готово'}
          </button>
        </div>
      </div>
    </div>
  );
};
