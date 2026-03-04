import React from 'react';
import { type Tool, type Language } from '../types';
import { translations } from '../translations';

interface ToolIconProps {
  tool: Tool;
  isFavorite: boolean;
  onToggleFavorite: (toolName: string) => void;
  language: Language;
}

const ToolIcon: React.FC<ToolIconProps> = ({ tool, isFavorite, onToggleFavorite, language }) => {
  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onToggleFavorite(tool.name);
  };

  const t = translations[language];

  const getDisplayName = (toolName: string): string => {
    if (toolName === 'ICAN Stellar Daily Monitoring Report') {
      return t.tool_monitoring_report;
    }
    return toolName;
  }

  return (
    <a
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col items-center justify-start text-center w-24"
    >
      <div className="relative w-16 h-16">
        <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 ease-in-out transform group-hover:-translate-y-1">
          {tool.icon}
        </div>
        <button
          onClick={handleFavoriteClick}
          className={`absolute -top-1 -right-1 p-1 bg-white rounded-full text-gray-400 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-yellow-500 z-10 shadow-sm transition-opacity ${
            isFavorite ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'
          }`}
          aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          {isFavorite ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.524 4.674a1 1 0 00.95.69h4.91c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.524 4.674c.3.921-.755 1.688-1.54 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.784.57-1.838-.197-1.539-1.118l1.524-4.674a1 1 0 00-.363-1.118L2.05 10.1c-.783-.57-.38-1.81.588-1.81h4.91a1 1 0 00.95-.69L9.141 2.927z" />
            </svg>
          )}
        </button>
      </div>
      <span className="mt-2 text-sm text-gray-700 group-hover:text-gray-900 font-medium transition-colors">
        {getDisplayName(tool.name)}
      </span>
    </a>
  );
};

export default ToolIcon;