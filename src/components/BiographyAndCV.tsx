import React from 'react';
import { Award, GraduationCap, Briefcase, Eye, Calendar, MapPin, Instagram, Mail } from 'lucide-react';
import {
  artistBiography,
  artistExpositions,
  artistEducation,
  artistAwards,
  artistEmployment,
} from '../data/portfolioData';

interface BiographyAndCVProps {
  lang: 'en' | 'ua';
}

export const BiographyAndCV: React.FC<BiographyAndCVProps> = ({ lang }) => {
  return (
    <section id="biography" className="scroll-mt-20 pt-16 border-t border-zinc-200 dark:border-zinc-800 space-y-16">
      {/* Bio Header & Curatorial Introduction */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-5 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-zinc-500 dark:text-zinc-400">
            <span>{lang === 'en' ? 'Curriculum Vitae' : 'Біографія та резюме'}</span>
            <span aria-hidden="true">·</span>
            <span>2014 — 2024</span>
          </div>

          <h2 className="font-serif-art text-3xl sm:text-4xl font-normal text-zinc-900 dark:text-zinc-50 tracking-tight">
            {lang === 'en' ? artistBiography.nameEn : artistBiography.nameUa}
          </h2>

          <div className="space-y-2 text-xs text-zinc-600 dark:text-zinc-400">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-zinc-400" />
              <span>{lang === 'en' ? artistBiography.locationEn : artistBiography.locationUa}</span>
            </div>
            <div className="flex items-center gap-2">
              <Instagram className="w-3.5 h-3.5 text-zinc-400" />
              <a
                href={artistBiography.instagram}
                target="_blank"
                rel="noreferrer"
                className="hover:underline text-zinc-800 dark:text-zinc-200"
              >
                {artistBiography.instagramHandle}
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-zinc-400" />
              <a
                href={`mailto:${artistBiography.email}`}
                className="hover:underline text-zinc-800 dark:text-zinc-200"
              >
                {artistBiography.email}
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 font-light leading-relaxed">
          <p>
            {lang === 'en'
              ? 'Zvolinska is a 21-year-old Ukrainian visual artist working across monumental painting, intricate graphic cycles, spatial sculpture, and live performance. Her creative coming-of-age unfolds in direct confrontation with the realities of war, forced displacement, and geopolitical upheaval, shaping an artistic voice characterized by profound psychological dignity rather than ornamental sentiment.'
              : 'Зволінська — 21-річна українська мисткиня, яка працює на перетині монументального живопису, ювелірної графіки, пластичних об’єктів та перформансу. Її становлення як художниці та особистості відбувається у безпосередньому зіткненні з реаліями війни, вимушеним переміщенням і геополітичним зламом, що сформувало голос надзвичайної психологічної глибини та гідності.'}
          </p>

          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 italic">
            {lang === 'en'
              ? 'Currently mastering contemporary experimental animation techniques and directing two ongoing object-art cycles exploring collective trauma and memory reconstruction.'
              : 'Нині опановує експериментальну анімацію та керує двома проєктами просторового об’єктного мистецтва, досліджуючи пам’ять, тілесність та відновлення після катастрофи.'}
          </p>
        </div>
      </div>

      {/* CV Grid (Timeline blocks in exact original sequence: Expositions -> Employment -> Education -> Achievements) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-14">
        {/* Block 1: Expositions */}
        <div className="space-y-6">
          <div className="flex items-center gap-2.5 pb-3 border-b border-zinc-200 dark:border-zinc-800">
            <Eye className="w-4 h-4 text-zinc-500" />
            <h3 className="font-serif-art text-xl font-normal text-zinc-900 dark:text-zinc-100">
              {lang === 'en' ? 'Exhibitions & Presentations' : 'Виставкова діяльність'}
            </h3>
          </div>

          <div className="space-y-4">
            {artistExpositions.map((exp) => (
              <div key={exp.id} className="relative pl-4 border-l border-zinc-200 dark:border-zinc-800 space-y-1">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>{exp.year}</span>
                  <span>{lang === 'en' ? exp.locationEn : exp.locationUa}</span>
                </div>
                <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100 font-serif-art">
                  {lang === 'en' ? exp.titleEn : exp.titleUa}
                </div>
                <div className="text-xs text-zinc-500 dark:text-zinc-400">
                  {lang === 'en' ? exp.venueEn : exp.venueUa}
                </div>
                {exp.descriptionEn && (
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 pt-0.5">
                    {lang === 'en' ? exp.descriptionEn : exp.descriptionUa}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Block 2: Achievements & Awards */}
        <div className="space-y-6">
          <div className="flex items-center gap-2.5 pb-3 border-b border-zinc-200 dark:border-zinc-800">
            <Award className="w-4 h-4 text-amber-500" />
            <h3 className="font-serif-art text-xl font-normal text-zinc-900 dark:text-zinc-100">
              {lang === 'en' ? 'Competition Victories & Laurels' : 'Конкурсні нагороди та визнання'}
            </h3>
          </div>

          <div className="space-y-4">
            {artistAwards.map((award, i) => (
              <div key={i} className="relative pl-4 border-l border-zinc-200 dark:border-zinc-800 space-y-1">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>{award.year}</span>
                  <span>{lang === 'en' ? award.countryEn : award.countryUa}</span>
                </div>
                <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100 font-serif-art">
                  {lang === 'en' ? award.titleEn : award.titleUa}
                </div>
                <div className="text-xs font-semibold text-amber-600 dark:text-amber-400">
                  {lang === 'en' ? award.awardEn : award.awardUa}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Block 3: Education & Residencies */}
        <div className="space-y-6">
          <div className="flex items-center gap-2.5 pb-3 border-b border-zinc-200 dark:border-zinc-800">
            <GraduationCap className="w-4 h-4 text-zinc-500" />
            <h3 className="font-serif-art text-xl font-normal text-zinc-900 dark:text-zinc-100">
              {lang === 'en' ? 'Academic Background & Residencies' : 'Освіта та резиденції'}
            </h3>
          </div>

          <div className="space-y-4">
            {artistEducation.map((edu, i) => (
              <div key={i} className="relative pl-4 border-l border-zinc-200 dark:border-zinc-800 space-y-1">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>{edu.period}</span>
                  <span>{lang === 'en' ? edu.locationEn : edu.locationUa}</span>
                </div>
                <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100 font-serif-art">
                  {lang === 'en' ? edu.institutionEn : edu.institutionUa}
                </div>
                <div className="text-xs text-zinc-600 dark:text-zinc-400">
                  {lang === 'en' ? edu.facultyEn : edu.facultyUa}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Block 4: Employment & Collaborations History */}
        <div className="space-y-6">
          <div className="flex items-center gap-2.5 pb-3 border-b border-zinc-200 dark:border-zinc-800">
            <Briefcase className="w-4 h-4 text-zinc-500" />
            <h3 className="font-serif-art text-xl font-normal text-zinc-900 dark:text-zinc-100">
              {lang === 'en' ? 'Professional Experience' : 'Професійний досвід'}
            </h3>
          </div>

          <div className="space-y-4">
            {artistEmployment.map((emp, i) => (
              <div key={i} className="relative pl-4 border-l border-zinc-200 dark:border-zinc-800 space-y-1">
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                  <span>{emp.year}</span>
                  <span>{lang === 'en' ? emp.locationEn : emp.locationUa}</span>
                </div>
                <div className="text-sm font-medium text-zinc-900 dark:text-zinc-100 font-serif-art">
                  {lang === 'en' ? emp.roleEn : emp.roleUa}
                </div>
                <div className="text-xs text-zinc-500 font-medium">
                  {lang === 'en' ? emp.companyEn : emp.companyUa}
                </div>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 pt-0.5">
                  {lang === 'en' ? emp.detailsEn : emp.detailsUa}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
