import React from 'react';
import { type Category, type Language } from '../types';
import ToolIcon from './ToolIcon';

interface ToolCategoryProps {
  category: Category;
  favorites: string[];
  onToggleFavorite: (toolName: string) => void;
  language: Language;
}

const GridIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-400">
    <rect x="4" y="4" width="6" height="6" rx="1" fill="currentColor"/>
    <rect x="14" y="4" width="6" height="6" rx="1" fill="currentColor"/>
    <rect x="4" y="14" width="6" height="6" rx="1" fill="currentColor"/>
    <rect x="14" y="14" width="6" height="6" rx="1" fill="currentColor"/>
  </svg>
);


const ToolCategory: React.FC<ToolCategoryProps> = ({ category, favorites, onToggleFavorite, language }) => {
  return (
    <section>
      <div className="flex items-center gap-3 mb-6">
        <GridIcon />
        <h2 className="text-2xl font-bold text-gray-800">{category.title}</h2>
      </div>
      <div className="flex flex-wrap gap-x-8 gap-y-10">
        {category.tools.map((tool) => (
          <ToolIcon
            key={tool.name}
            tool={tool}
            isFavorite={favorites.includes(tool.name)}
            onToggleFavorite={onToggleFavorite}
            language={language}
          />
        ))}
      </div>
    </section>
  );
};

export default ToolCategory;