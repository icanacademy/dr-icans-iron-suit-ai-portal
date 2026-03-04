import React from 'react';
import type { Page } from '../App';
import type { Language } from '../types';
import { translations } from '../translations';

const IronSuitLogo = ({ onNavigate }: { onNavigate: (page: 'home') => void }) => (
    <button onClick={() => onNavigate('home')} className="flex items-center gap-3 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 rounded-md p-1">
        <img
            src="/assets/ican-logo.png"
            alt="Logo"
            className="h-10 w-auto bg-gradient-to-br from-blue-500 to-blue-700 p-2 rounded-lg shadow-md"
        />
        <span className="text-xl font-bold tracking-tight text-gray-900">IRON SUIT</span>
    </button>
);

const LanguageToggle = ({ language, onToggleLanguage }: { language: Language, onToggleLanguage: () => void }) => (
  <button
    onClick={onToggleLanguage}
    className="px-3 py-2 rounded-md text-sm font-medium bg-blue-600 text-white hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
    aria-label={`Switch to ${language === 'en' ? 'Korean' : 'English'}`}
  >
    EN/KO
  </button>
);


interface HeaderProps {
    onNavigate: (page: Page) => void;
    currentPage: Page;
    language: Language;
    onToggleLanguage: () => void;
}


const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage, language, onToggleLanguage }) => {
  const t = translations[language];
  const navItems = [
    { label: t.nav_ai_shortcuts, page: 'home' as Page },
    { label: t.nav_ai_create, page: 'AI Create' as Page },
    { label: t.nav_ai_subscriptions, page: 'AI Subscriptions' as Page },
    { label: t.nav_creator_lounge, page: 'Creator Lounge' as Page },
    { label: t.nav_solomons_guide, page: "Solomon's Guide" as Page },
    { label: 'Admin', page: 'Admin' as Page },
  ];

  const getNavItem = (item: {label: string, page: Page}) => {
    const isCurrent = currentPage === item.page;
    
    const activeClasses = 'bg-gray-200 text-gray-900';
    const inactiveClasses = 'text-gray-600 hover:bg-gray-200 hover:text-gray-900';
    
    const commonClasses = "px-3 py-2 rounded-md text-sm font-medium transition-colors";

     return (
        <button
            key={item.label}
            onClick={() => onNavigate(item.page)}
            className={`${commonClasses} ${isCurrent ? activeClasses : inactiveClasses}`}
            aria-current={isCurrent ? 'page' : undefined}
        >
            {item.label}
        </button>
     )
  }

  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Main navigation">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <IronSuitLogo onNavigate={onNavigate} />
          </div>
          <div className="hidden md:flex items-center">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => getNavItem(item))}
            </div>
            <div className="ml-4">
              <LanguageToggle language={language} onToggleLanguage={onToggleLanguage} />
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;