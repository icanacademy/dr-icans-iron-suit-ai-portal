import React, { useState, useEffect } from 'react';
import { translations } from '../translations';
import type { Language } from '../types';
import { api } from '../api';

interface LatestIssueBannerProps {
  language: Language;
}

const LatestIssueBanner: React.FC<LatestIssueBannerProps> = ({ language }) => {
  const t = translations[language];
  const [bannerData, setBannerData] = useState<any>(null);

  useEffect(() => {
    const loadBanner = async () => {
      try {
        const data = await api.getHotIssueBanner();
        setBannerData(data);
      } catch (error) {
        console.error('Error loading hot issue banner:', error);
      }
    };

    loadBanner();

    // Poll for updates every 10 seconds
    const interval = setInterval(loadBanner, 10000);

    return () => clearInterval(interval);
  }, []);

  const displayData = bannerData?.[language] || {
    title: t.hot_issue_title,
    subtitle: t.hot_issue_text_title,
    description: t.hot_issue_text_desc,
    link: null
  };

  const BannerContent = () => (
    <section
      aria-labelledby="hot-issue-title"
      className={`relative w-full h-56 bg-gray-900 rounded-2xl overflow-hidden shadow-2xl group transition-all duration-300 ${displayData.link ? 'cursor-pointer hover:shadow-blue-500/50 hover:scale-[1.02] hover:ring-2 hover:ring-blue-400' : ''}`}
      onClick={() => displayData.link && window.open(displayData.link, '_blank', 'noopener,noreferrer')}
      title={displayData.link ? 'Click to read the full article' : ''}
    >
      {/* AI Generated Background */}
      <div className="absolute inset-0 w-full h-full">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" viewBox="0 0 400 100">
            <defs>
                <radialGradient id="space_grad" cx="50%" cy="100%" r="100%" fx="50%" fy="100%">
                    <stop offset="0%" stopColor="#0d1a2f" />
                    <stop offset="100%" stopColor="#02040a" />
                </radialGradient>
                <filter id="stars" x="0" y="0" width="100%" height="100%">
                    <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="1" stitchTiles="stitch" result="noise"/>
                    <feColorMatrix type="matrix" values="0 0 0 0 1, 0 0 0 0 1, 0 0 0 0 1, 0 0 0 -0.5 0.5" in="noise" result="stars"/>
                    <feGaussianBlur in="stars" stdDeviation="0.5" />
                </filter>
                 <linearGradient id="nebula_grad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="rgba(107, 33, 168, 0.4)" />
                    <stop offset="50%" stopColor="rgba(59, 130, 246, 0.3)" />
                    <stop offset="100%" stopColor="rgba(219, 39, 119, 0.4)" />
                </linearGradient>
            </defs>
            <rect width="100%" height="100%" fill="url(#space_grad)" />
            <rect width="100%" height="100%" filter="url(#stars)" />
            <ellipse cx="25%" cy="40%" rx="30%" ry="25%" fill="url(#nebula_grad)" opacity="0.6" transform="rotate(-15 100 40)"/>
            <ellipse cx="75%" cy="60%" rx="25%" ry="20%" fill="url(#nebula_grad)" opacity="0.5" transform="rotate(20 300 60)"/>
        </svg>
      </div>

      <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>
      
      <div className="relative h-full flex flex-col justify-center items-start p-8 sm:p-12 text-white">
        <h2 id="hot-issue-title" className="text-sm font-bold uppercase tracking-widest text-blue-300 mb-2 flex items-center gap-2">
          {displayData.title}
          {displayData.link && (
            <span className="text-xs bg-blue-500 px-2 py-1 rounded">Click to read →</span>
          )}
        </h2>
        <p className="text-2xl sm:text-3xl font-bold max-w-2xl group-hover:text-blue-300 transition-colors">
          {displayData.subtitle}
        </p>
         <p className="mt-4 text-gray-300 max-w-2xl">
          {displayData.description}
        </p>
      </div>
    </section>
  );

  return <BannerContent />;
};

export default LatestIssueBanner;
