import React from 'react';
import type { Language } from '../types';
import { translations } from '../translations';

interface SolomonsGuideProps {
  language: Language;
}

const SolomonsGuide: React.FC<SolomonsGuideProps> = ({ language }) => {
  const t = translations[language];

  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 bg-white shadow-lg rounded-lg border border-gray-200">
      <div className="space-y-12">
        <header>
          <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl text-center">
            {t.solomon_title}
          </h1>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed text-center">
            {t.solomon_subtitle}
          </p>
        </header>

        <div className="space-y-10">
          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-500 pl-4">
              {t.solomon_section1_title}
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              {t.solomon_section1_text}
            </p>
            <ul className="mt-5 space-y-4 list-disc list-inside bg-gray-50 p-6 rounded-md border border-gray-200">
              <li>
                <span className="font-semibold text-gray-900">{t.solomon_section1_li1_title}</span>
                <p className="inline ml-2 text-gray-600">{t.solomon_section1_li1_text}</p>
              </li>
              <li>
                <span className="font-semibold text-gray-900">{t.solomon_section1_li2_title}</span>
                <p className="inline ml-2 text-gray-600">{t.solomon_section1_li2_text}</p>
              </li>
              <li>
                <span className="font-semibold text-gray-900">{t.solomon_section1_li3_title}</span>
                <p className="inline ml-2 text-gray-600">{t.solomon_section1_li3_text}</p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-500 pl-4">
              {t.solomon_section2_title}
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              {t.solomon_section2_text}
            </p>
            <ul className="mt-5 space-y-4 list-disc list-inside bg-gray-50 p-6 rounded-md border border-gray-200">
              <li>
                <span className="font-semibold text-gray-900">{t.solomon_section2_li1_title}</span>
                <p className="inline ml-2 text-gray-600">{t.solomon_section2_li1_text}</p>
              </li>
              <li>
                <span className="font-semibold text-gray-900">{t.solomon_section2_li2_title}</span>
                <p className="inline ml-2 text-gray-600">{t.solomon_section2_li2_text}</p>
              </li>
              <li>
                <span className="font-semibold text-gray-900">{t.solomon_section2_li3_title}</span>
                <p className="inline ml-2 text-gray-600">{t.solomon_section2_li3_text}</p>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-800 border-l-4 border-blue-500 pl-4">
              {t.solomon_section3_title}
            </h2>
            <p className="mt-4 text-gray-700 leading-relaxed">
              {t.solomon_section3_text}
            </p>
            <ul className="mt-5 space-y-4 list-disc list-inside bg-gray-50 p-6 rounded-md border border-gray-200">
              <li>
                <span className="font-semibold text-gray-900">{t.solomon_section3_li1_title}</span>
                <p className="inline ml-2 text-gray-600">{t.solomon_section3_li1_text}</p>
              </li>
              <li>
                <span className="font-semibold text-gray-900">{t.solomon_section3_li2_title}</span>
                <p className="inline ml-2 text-gray-600">{t.solomon_section3_li2_text}</p>
              </li>
              <li>
                <span className="font-semibold text-gray-900">{t.solomon_section3_li3_title}</span>
                <p className="inline ml-2 text-gray-600">{t.solomon_section3_li3_text}</p>
              </li>
            </ul>
          </section>
        </div>

        <hr className="my-12 border-gray-300" />

        <footer className="mt-8 text-center bg-blue-50 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-gray-800">{t.solomon_conclusion_title}</h3>
            <p className="mt-4 text-gray-700 leading-relaxed">
                {t.solomon_conclusion_text}
            </p>
        </footer>
      </div>
    </div>
  );
};

export default SolomonsGuide;