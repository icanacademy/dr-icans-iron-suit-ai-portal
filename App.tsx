import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import ToolCategory from './components/ToolCategory';
import SolomonsGuide from './components/SolomonsGuide';
import AICreatePage from './components/AICreatePage';
import AISubscriptionsPage from './components/AISubscriptionsPage';
import CreatorLoungePage from './components/CreatorLoungePage';
import AdminPage from './components/AdminPage';
import LatestIssueBanner from './components/LatestIssueBanner';
import ExpandableSegment from './components/ExpandableSegment';
import { AI_TOOLS_DATA } from './constants';
import { type Category, type Language, type Tool } from './types';
import { translations } from './translations';
import { getIconByName } from './iconLibrary';
import { api } from './api';

export type Page = 'home' | "Solomon's Guide" | 'AI Create' | 'AI Subscriptions' | 'Creator Lounge' | 'Admin';

const FAVORITES_KEY = 'iron-suit-favorites';
const LANGUAGE_KEY = 'iron-suit-language';
const CUSTOM_TOOLS_KEY = 'iron-suit-custom-tools';
const TOOL_OVERRIDES_KEY = 'iron-suit-tool-overrides';

const useFavorites = () => {
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const item = window.localStorage.getItem(FAVORITES_KEY);
        return item ? JSON.parse(item) : [];
      }
      return [];
    } catch (error) {
      console.error('Error reading favorites from localStorage', error);
      return [];
    }
  });

  useEffect(() => {
    try {
       if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
      }
    } catch (error) {
      console.error('Error saving favorites to localStorage', error);
    }
  }, [favorites]);
  
  const toggleFavorite = useCallback((toolName: string) => {
      setFavorites((prev) => {
          if (prev.includes(toolName)) {
              return prev.filter((name) => name !== toolName);
          } else {
              return [...prev, toolName];
          }
      });
  }, []);

  return { favorites, toggleFavorite };
};

const useLanguage = () => {
  const [language, setLanguage] = useState<Language>(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        const item = window.localStorage.getItem(LANGUAGE_KEY);
        return (item === 'en' || item === 'ko') ? item : 'en';
      }
      return 'en';
    } catch (error) {
      console.error('Error reading language from localStorage', error);
      return 'en';
    }
  });

  useEffect(() => {
    try {
      if (typeof window !== 'undefined' && window.localStorage) {
        window.localStorage.setItem(LANGUAGE_KEY, language);
      }
    } catch (error) {
      console.error('Error saving language to localStorage', error);
    }
  }, [language]);

  const toggleLanguage = useCallback(() => {
    setLanguage((prev) => (prev === 'en' ? 'ko' : 'en'));
  }, []);

  return { language, toggleLanguage };
};

interface ToolOverride {
  originalName: string;
  category: string;
  name: string;
  url: string;
  iconName: string;
}

const useCustomTools = () => {
  const [customTools, setCustomTools] = useState<Array<{ name: string; url: string; category: string; iconName: string }>>([]);
  const [toolOverrides, setToolOverrides] = useState<ToolOverride[]>([]);

  const loadTools = useCallback(async () => {
    try {
      const [customToolsData, overridesData] = await Promise.all([
        api.getCustomTools(),
        api.getToolOverrides()
      ]);
      setCustomTools(customToolsData);
      setToolOverrides(overridesData);
    } catch (error) {
      console.error('Error loading tools from API:', error);
    }
  }, []);

  useEffect(() => {
    loadTools();

    // Poll for updates every 3 seconds
    const interval = setInterval(loadTools, 3000);

    // Listen to custom event for immediate updates
    const handleToolsUpdated = () => {
      loadTools();
    };
    window.addEventListener('customToolsUpdated', handleToolsUpdated);

    return () => {
      clearInterval(interval);
      window.removeEventListener('customToolsUpdated', handleToolsUpdated);
    };
  }, [loadTools]);

  return { customTools, toolOverrides };
};

interface SegmentTool {
  id: string;
  name: string;
  url: string;
  iconName: string;
  description?: string;
}

interface SegmentsData {
  EDUSPACE: SegmentTool[];
  'RE-EARTH': SegmentTool[];
}

const useSegments = () => {
  const [segments, setSegments] = useState<SegmentsData>({
    EDUSPACE: [],
    'RE-EARTH': []
  });

  const loadSegments = useCallback(async () => {
    try {
      const data = await api.getSegments();
      setSegments(data);
    } catch (error) {
      console.error('Error loading segments from API:', error);
    }
  }, []);

  useEffect(() => {
    loadSegments();

    // Poll for updates every 5 seconds
    const interval = setInterval(loadSegments, 5000);

    // Listen to custom event for immediate updates
    const handleSegmentsUpdated = () => {
      loadSegments();
    };
    window.addEventListener('segmentsUpdated', handleSegmentsUpdated);

    return () => {
      clearInterval(interval);
      window.removeEventListener('segmentsUpdated', handleSegmentsUpdated);
    };
  }, [loadSegments]);

  return segments;
};

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home');
  const { favorites, toggleFavorite } = useFavorites();
  const { language, toggleLanguage } = useLanguage();
  const { customTools, toolOverrides } = useCustomTools();
  const segments = useSegments();
  const t = translations[language];

  // Merge default tools with custom tools and apply overrides
  const mergedCategories = AI_TOOLS_DATA.map(category => {
    // Apply overrides to default tools
    const modifiedDefaultTools = category.tools.map(tool => {
      const override = toolOverrides.find(
        o => o.originalName === tool.name && o.category === category.title
      );

      if (override) {
        return {
          ...tool,
          name: override.name,
          url: override.url,
          icon: getIconByName(override.iconName)
        };
      }

      return tool;
    });

    // Add custom tools with icons
    const customToolsInCategory = customTools
      .filter(ct => ct.category === category.title)
      .map(ct => ({
        name: ct.name,
        url: ct.url,
        icon: getIconByName(ct.iconName)
      }));

    return {
      ...category,
      tools: [...modifiedDefaultTools, ...customToolsInCategory]
    };
  });

  const favoriteTools = mergedCategories.flatMap(category => category.tools)
                                       .filter(tool => favorites.includes(tool.name));

  const favoritesCategory: Category | null = favoriteTools.length > 0 ? {
    title: t.category_favorites,
    tools: favoriteTools,
  } : null;

  const translatedCategories = mergedCategories.map(category => {
    let title = category.title;
    if (category.title === 'AI Agent') title = t.category_ai_agent;
    else if (category.title === 'Class Management') title = t.category_class_management;
    else if (category.title === 'Image') title = t.category_image;
    else if (category.title === 'Video') title = t.category_video;
    else if (category.title === 'Voice/Lip-Sync') title = t.category_voice_lipsync;

    return { ...category, title };
  });

  const renderContent = () => {
    switch (currentPage) {
      case "Solomon's Guide":
        return <SolomonsGuide language={language} />;
      case 'AI Create':
        return <AICreatePage language={language} />;
      case 'AI Subscriptions':
        return <AISubscriptionsPage language={language} />;
      case 'Creator Lounge':
        return <CreatorLoungePage language={language} />;
      case 'Admin':
        return <AdminPage language={language} />;
      case 'home':
      default:
        return (
          <div className="max-w-7xl mx-auto space-y-12">
             <LatestIssueBanner language={language} />

             {/* Expandable Segments */}
             <div className="space-y-4">
               <ExpandableSegment
                 segmentId="EDUSPACE"
                 tools={segments.EDUSPACE || []}
                 language={language}
               />
               <ExpandableSegment
                 segmentId="RE-EARTH"
                 tools={segments['RE-EARTH'] || []}
                 language={language}
               />
             </div>

             {favoritesCategory && (
              <ToolCategory
                key={favoritesCategory.title}
                category={favoritesCategory}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                language={language}
              />
            )}
            {translatedCategories.map((category) => (
              <ToolCategory
                key={category.title}
                category={category}
                favorites={favorites}
                onToggleFavorite={toggleFavorite}
                language={language}
              />
            ))}
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      <Header 
        onNavigate={setCurrentPage} 
        currentPage={currentPage}
        language={language}
        onToggleLanguage={toggleLanguage}
       />
      <main className="p-4 sm:p-8 md:p-12">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;