import React from 'react';
import type { Language } from '../types';
import { translations } from '../translations';

interface CreatorLoungePageProps {
  language: Language;
}

const CreatorLoungePage: React.FC<CreatorLoungePageProps> = ({ language }) => {
  const t = translations[language];
  return (
    <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8 bg-white shadow-lg rounded-lg border border-gray-200">
      <header className="text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          {t.creatorlounge_title}
        </h1>
        <p className="mt-6 text-lg text-gray-600 leading-relaxed">
          {t.creatorlounge_text}
        </p>
        <div className="mt-10">
            <a
                href="http://192.168.68.106:3010"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
            >
                ICAN APP MARKETPLACE
            </a>
        </div>
      </header>
    </div>
  );
};

export default CreatorLoungePage;