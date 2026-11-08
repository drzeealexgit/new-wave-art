import React, { useState, useEffect } from 'react';
import { Send, CheckCircle2, Instagram, Mail, MessageSquare, Sparkles } from 'lucide-react';
import { Artwork } from '../utils/portfolioLogic';

interface ContactAndInquiryProps {
  lang: 'en' | 'ua';
  prefilledArtwork: Artwork | null;
  onClearPrefilled: () => void;
}

export const ContactAndInquiry: React.FC<ContactAndInquiryProps> = ({
  lang,
  prefilledArtwork,
  onClearPrefilled,
}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('acquisition');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (prefilledArtwork) {
      setInquiryType('acquisition');
      const pieceName = lang === 'en' ? prefilledArtwork.titleEn : prefilledArtwork.titleUa;
      setMessage(
        lang === 'en'
          ? `Hello,\n\nI am inquiring regarding the artwork "${pieceName}" (${prefilledArtwork.year}, ${prefilledArtwork.dimensions} cm). Could you provide details regarding availability, loan conditions, or acquisition?\n\nSincerely,`
          : `Вітаю,\n\nЗвертаюся з приводу роботи «${pieceName}» (${prefilledArtwork.year}, ${prefilledArtwork.dimensions} см). Підкажіть, будь ласка, щодо доступності для експонування, умов передачі або придбання.\n\nЗ повагою,`
      );
    }
  }, [prefilledArtwork, lang]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) {
      setError(
        lang === 'en' ? 'Please complete all required fields.' : 'Будь ласка, заповніть усі обов’язкові поля.'
      );
      return;
    }
    setError('');
    setSubmitted(true);
  };

  return (
    <section id="contacts" className="scroll-mt-20 pt-16 border-t border-zinc-200 dark:border-zinc-800 space-y-12">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        {/* Left: Contact Info & Channels */}
        <div className="lg:col-span-5 space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            <span>{lang === 'en' ? 'Direct Communication' : 'Прямий зв’язок'}</span>
            <span aria-hidden="true">·</span>
            <span>{lang === 'en' ? 'Inquiries & Orders' : 'Замовлення та запити'}</span>
          </div>

          <h2 className="font-serif-art text-3xl sm:text-4xl font-normal text-zinc-900 dark:text-zinc-50 tracking-tight">
            {lang === 'en' ? 'Start a dialogue.' : 'Розпочати діалог.'}
          </h2>

          <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed font-light">
            {lang === 'en'
              ? 'Zvolinska is available for institutional museum exhibitions, curatorial collaborations, gallery representation, private acquisitions, and site-specific commissions.'
              : 'Зволінська відкрита до музейних та кураторських проєктів, галерейної співпраці, приватних колекцій та створення індивідуальних робіт.'}
          </p>

          <div className="pt-4 space-y-4">
            <a
              href="mailto:mary.zvolinskaya@gmail.com"
              className="flex items-center gap-3 p-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors bg-zinc-50 dark:bg-zinc-900/40 group"
            >
              <div className="p-2 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 group-hover:scale-110 transition-transform">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-zinc-500">{lang === 'en' ? 'Primary Email' : 'Офіційний e-mail'}</div>
                <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  mary.zvolinskaya@gmail.com
                </div>
              </div>
            </a>

            <a
              href="https://www.instagram.com/ttilda_._obako/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 p-3.5 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 transition-colors bg-zinc-50 dark:bg-zinc-900/40 group"
            >
              <div className="p-2 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 group-hover:scale-110 transition-transform">
                <Instagram className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs text-zinc-500">Instagram Studio Archive</div>
                <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100">
                  @ttilda_._obako
                </div>
              </div>
            </a>
          </div>
        </div>

        {/* Right: Interactive Form */}
        <div className="lg:col-span-7 bg-white dark:bg-zinc-900/90 border border-zinc-200 dark:border-zinc-800 rounded-lg p-6 sm:p-8 shadow-xs">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-12 h-12 mx-auto rounded-full bg-emerald-50 dark:bg-emerald-950/50 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif-art text-2xl font-medium text-zinc-900 dark:text-zinc-100">
                {lang === 'en' ? 'Inquiry Dispatched' : 'Запит успішно надіслано'}
              </h3>
              <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 max-w-md mx-auto">
                {lang === 'en'
                  ? 'Thank you for reaching out. The artist or curatorial representative will respond to your inquiry shortly.'
                  : 'Дякуємо за звернення. Художниця або кураторський представник зв’яжуться з вами найближчим часом.'}
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setName('');
                  setEmail('');
                  setMessage('');
                  onClearPrefilled();
                }}
                className="mt-4 px-4 py-2 text-xs font-medium rounded-md border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                {lang === 'en' ? 'Send another message' : 'Надіслати інше повідомлення'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {prefilledArtwork && (
                <div className="p-3 rounded bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 flex items-center justify-between text-xs">
                  <span className="text-zinc-700 dark:text-zinc-300">
                    {lang === 'en' ? 'Referencing artwork:' : 'Запит щодо твору:'}{' '}
                    <strong>{lang === 'en' ? prefilledArtwork.titleEn : prefilledArtwork.titleUa}</strong>
                  </span>
                  <button
                    type="button"
                    onClick={onClearPrefilled}
                    className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 underline text-[11px]"
                  >
                    {lang === 'en' ? 'Clear' : 'Очистити'}
                  </button>
                </div>
              )}

              {/* Inquiry Type Radio / Segmented Control */}
              <div className="space-y-1.5">
                <label className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                  {lang === 'en' ? 'Subject / Type of Inquiry' : 'Тема / Тип звернення'}
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {[
                    { id: 'acquisition', labelEn: 'Acquisition', labelUa: 'Придбання' },
                    { id: 'exhibition', labelEn: 'Exhibition', labelUa: 'Виставка' },
                    { id: 'commission', labelEn: 'Commission', labelUa: 'Замовлення' },
                    { id: 'media', labelEn: 'Press / Other', labelUa: 'Преса / Інше' },
                  ].map((type) => (
                    <button
                      key={type.id}
                      type="button"
                      onClick={() => setInquiryType(type.id)}
                      className={`px-3 py-2 text-xs font-medium rounded-md border text-center transition-colors ${
                        inquiryType === type.id
                          ? 'border-zinc-900 bg-zinc-900 text-white dark:border-zinc-100 dark:bg-zinc-100 dark:text-zinc-950'
                          : 'border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700'
                      }`}
                    >
                      {lang === 'en' ? type.labelEn : type.labelUa}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label htmlFor="name-input" className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                    {lang === 'en' ? 'Your Name / Institution' : 'Ваше ім’я / Організація'} *
                  </label>
                  <input
                    id="name-input"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={lang === 'en' ? 'e.g. Elena Frank (Curator)' : 'наприклад, Олена Франк (Куратор)'}
                    className="w-full px-3 py-2 text-xs rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-600"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="email-input" className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                    {lang === 'en' ? 'Email Address' : 'Електронна пошта'} *
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="email@example.com"
                    className="w-full px-3 py-2 text-xs rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-600"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <label htmlFor="message-input" className="text-xs font-medium text-zinc-700 dark:text-zinc-300">
                  {lang === 'en' ? 'Message' : 'Повідомлення'} *
                </label>
                <textarea
                  id="message-input"
                  required
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={
                    lang === 'en'
                      ? 'Describe your proposal, desired dates, or piece of interest...'
                      : 'Опишіть вашу пропозицію, терміни або твір, що цікавить...'
                  }
                  className="w-full px-3 py-2 text-xs rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 placeholder-zinc-400 focus:outline-none focus:ring-1 focus:ring-zinc-600"
                />
              </div>

              {error && <div className="text-xs text-rose-500 font-medium">{error}</div>}

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-zinc-900 hover:bg-zinc-800 dark:bg-zinc-100 dark:text-zinc-950 dark:hover:bg-zinc-200 rounded-md transition-colors shadow-xs"
              >
                <Send className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Dispatch Inquiry' : 'Надіслати запит'}</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
