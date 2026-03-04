import React, { useState } from 'react';
import { translations } from '../translations';
import type { Language } from '../types';
import { getIconByName } from '../iconLibrary';

interface SegmentTool {
  id: string;
  name: string;
  url: string;
  iconName: string;
  description?: string;
}

interface ExpandableSegmentProps {
  segmentId: 'EDUSPACE' | 'RE-EARTH';
  tools: SegmentTool[];
  language: Language;
}

const ExpandableSegment: React.FC<ExpandableSegmentProps> = ({ segmentId, tools, language }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const t = translations[language];

  const isEduspace = segmentId === 'EDUSPACE';

  const segmentConfig = {
    EDUSPACE: {
      title: t.segment_eduspace_title,
      subtitle: t.segment_eduspace_subtitle,
      gradientFrom: 'from-[#0a1929]',
      gradientVia: 'via-[#1a237e]',
      gradientTo: 'to-[#00bcd4]',
      hoverGradient: 'hover:from-[#0d2035] hover:via-[#1f2a8a] hover:to-[#00d4f0]',
      iconBg: 'bg-gradient-to-br from-cyan-400/20 to-indigo-500/20',
      iconShadow: 'shadow-[0_0_20px_rgba(0,188,212,0.3)]',
      emptyIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 text-cyan-300/50">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      ),
      headerIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7 text-cyan-300">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
          <path d="M2 12h20" />
        </svg>
      ),
    },
    'RE-EARTH': {
      title: t.segment_reearth_title,
      subtitle: t.segment_reearth_subtitle,
      gradientFrom: 'from-[#0d2818]',
      gradientVia: 'via-[#1b5e20]',
      gradientTo: 'to-[#00897b]',
      hoverGradient: 'hover:from-[#0f3020] hover:via-[#227028] hover:to-[#009d8c]',
      iconBg: 'bg-gradient-to-br from-green-400/20 to-teal-500/20',
      iconShadow: 'shadow-[0_0_20px_rgba(76,175,80,0.3)]',
      emptyIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-12 h-12 text-green-300/50">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M6 12c0-3.5 2-6 6-6s6 2.5 6 6-2 6-6 6-6-2.5-6-6" />
        </svg>
      ),
      headerIcon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-7 h-7 text-green-300">
          <circle cx="12" cy="12" r="10" />
          <path d="M6.5 9.5c1-1 2.5-1 3.5 0s2.5 1.5 3 .5c.5-1 1.5-1.5 2.5-1s2 1 2.5.5" />
          <path d="M8 14c.5.5 1.5 1 2.5 1s2-.5 2.5-1c.5-.5 1.5-.5 2 0s1.5.5 2 0" />
        </svg>
      ),
    },
  };

  const config = segmentConfig[segmentId];

  return (
    <div
      className={`rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 hover:shadow-3xl hover:-translate-y-1 ${
        isExpanded ? 'ring-2 ring-white/30' : ''
      }`}
    >
      {/* Header */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-full flex items-center justify-between p-5 sm:p-6 bg-gradient-to-r ${config.gradientFrom} ${config.gradientVia} ${config.gradientTo} ${config.hoverGradient} transition-all duration-300 relative overflow-hidden`}
      >
        {/* Decorative elements */}
        {isEduspace ? (
          // Stars for EDUSPACE
          <div className="absolute inset-0 opacity-60">
            <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ top: '20%', left: '10%' }} />
            <div className="absolute w-1.5 h-1.5 bg-white/70 rounded-full animate-pulse" style={{ top: '30%', left: '25%', animationDelay: '0.5s' }} />
            <div className="absolute w-1 h-1 bg-white/50 rounded-full animate-pulse" style={{ top: '60%', left: '15%', animationDelay: '1s' }} />
            <div className="absolute w-1 h-1 bg-white rounded-full animate-pulse" style={{ top: '40%', right: '20%', animationDelay: '0.3s' }} />
            <div className="absolute w-1.5 h-1.5 bg-cyan-300/60 rounded-full animate-pulse" style={{ top: '70%', right: '30%', animationDelay: '0.7s' }} />
          </div>
        ) : (
          // Leaves for RE-EARTH
          <div className="absolute inset-0 opacity-40">
            <div className="absolute w-3 h-3 bg-green-400/30 rounded-full blur-sm" style={{ top: '25%', left: '8%' }} />
            <div className="absolute w-4 h-4 bg-teal-400/20 rounded-full blur-sm" style={{ top: '50%', left: '20%' }} />
            <div className="absolute w-3 h-3 bg-green-300/30 rounded-full blur-sm" style={{ top: '35%', right: '15%' }} />
            <div className="absolute w-5 h-5 bg-teal-300/20 rounded-full blur-sm" style={{ top: '65%', right: '25%' }} />
          </div>
        )}

        <div className="flex items-center gap-4 z-10">
          <div className={`w-12 h-12 rounded-xl ${config.iconBg} ${config.iconShadow} flex items-center justify-center`}>
            {config.headerIcon}
          </div>
          <div className="text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white tracking-wide">
              {config.title}
            </h3>
            <p className="text-xs sm:text-sm text-white/70">
              {config.subtitle}
            </p>
          </div>
        </div>

        <div className="flex items-center gap-3 z-10">
          <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold text-white">
            {tools.length} {t.segment_tools_count}
          </span>
          <div className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6 text-white">
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </div>
        </div>
      </button>

      {/* Content */}
      <div
        className={`overflow-hidden transition-all duration-400 ease-in-out bg-gradient-to-b ${
          isEduspace ? 'from-[#0a1929]/95 to-[#1a237e]/90' : 'from-[#0d2818]/95 to-[#1b5e20]/90'
        } ${isExpanded ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <div className="p-6">
          {tools.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              {config.emptyIcon}
              <p className="mt-4 text-white/60 text-sm">
                {t.segment_no_tools}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-4">
              {tools.map((tool) => (
                <a
                  key={tool.id}
                  href={tool.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={tool.description || tool.name}
                  className="group flex flex-col items-center gap-2 p-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/10 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {getIconByName(tool.iconName)}
                  </div>
                  <span className="text-xs font-medium text-white text-center line-clamp-2">
                    {tool.name}
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpandableSegment;
