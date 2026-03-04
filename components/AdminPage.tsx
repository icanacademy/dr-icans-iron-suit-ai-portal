import React, { useState, useEffect } from 'react';
import { type Language, type Tool } from '../types';
import { translations } from '../translations';
import { AI_TOOLS_DATA } from '../constants';
import { ICON_LIBRARY, getIconByName } from '../iconLibrary';
import { api } from '../api';

interface AdminPageProps {
  language: Language;
}

const ADMIN_PASSWORD = '14411441'; // Change this to your desired password

interface CustomTool {
  name: string;
  url: string;
  category: string;
  iconName: string;
}

interface ToolOverride {
  originalName: string;
  category: string;
  name: string;
  url: string;
  iconName: string;
}

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

const AdminPage: React.FC<AdminPageProps> = ({ language }) => {
  const t = translations[language];
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [customTools, setCustomTools] = useState<CustomTool[]>([]);
  const [toolOverrides, setToolOverrides] = useState<ToolOverride[]>([]);
  const [editingTool, setEditingTool] = useState<{ tool: CustomTool | ToolOverride | Tool; isDefault: boolean; category: string } | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showIconPicker, setShowIconPicker] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    category: 'AI Agent',
    iconName: 'Default'
  });
  const [hotIssueBanner, setHotIssueBanner] = useState({
    en: { title: '', subtitle: '', description: '' },
    ko: { title: '', subtitle: '', description: '' }
  });
  const [showBannerEditor, setShowBannerEditor] = useState(false);

  // Segment management state
  const [segments, setSegments] = useState<SegmentsData>({ EDUSPACE: [], 'RE-EARTH': [] });
  const [currentSegment, setCurrentSegment] = useState<'EDUSPACE' | 'RE-EARTH'>('EDUSPACE');
  const [showSegmentManager, setShowSegmentManager] = useState(false);
  const [editingSegmentTool, setEditingSegmentTool] = useState<SegmentTool | null>(null);
  const [segmentFormData, setSegmentFormData] = useState({
    name: '',
    url: '',
    iconName: 'Default',
    description: ''
  });
  const [showSegmentIconPicker, setShowSegmentIconPicker] = useState(false);

  // Load custom tools, overrides, and segments from API
  useEffect(() => {
    loadTools();
    loadBanner();
    loadSegments();
  }, []);

  const loadTools = async () => {
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
  };

  const loadBanner = async () => {
    try {
      const bannerData = await api.getHotIssueBanner();
      if (bannerData?.en && bannerData?.ko) {
        setHotIssueBanner(bannerData);
      }
    } catch (error) {
      console.error('Error loading banner from API:', error);
    }
  };

  const loadSegments = async () => {
    try {
      const segmentsData = await api.getSegments();
      setSegments(segmentsData);
    } catch (error) {
      console.error('Error loading segments from API:', error);
    }
  };

  const notifyUpdate = () => {
    window.dispatchEvent(new Event('customToolsUpdated'));
  };

  const notifySegmentsUpdate = () => {
    window.dispatchEvent(new Event('segmentsUpdated'));
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      setIsAuthenticated(true);
      setPassword('');
    } else {
      alert('Incorrect password');
      setPassword('');
    }
  };

  const handleAddTool = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.url) {
      alert('Please fill in all fields');
      return;
    }

    try {
      await api.addCustomTool({
        name: formData.name,
        url: formData.url,
        category: formData.category,
        iconName: formData.iconName
      });
      await loadTools();
      notifyUpdate();
      setFormData({ name: '', url: '', category: 'AI Agent', iconName: 'Default' });
      setShowAddForm(false);
    } catch (error) {
      console.error('Error adding tool:', error);
      alert('Failed to add tool');
    }
  };

  const handleUpdateTool = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingTool || !formData.name || !formData.url) {
      alert('Please fill in all fields');
      return;
    }

    try {
      if (editingTool.isDefault) {
        // Update default tool via override
        const defaultTool = editingTool.tool as Tool;
        console.log('Updating default tool:', { originalName: defaultTool.name, category: editingTool.category, newData: formData });
        await api.saveToolOverride({
          originalName: defaultTool.name,
          category: editingTool.category,
          name: formData.name,
          url: formData.url,
          iconName: formData.iconName
        });
      } else {
        // Update custom tool
        const customTool = editingTool.tool as CustomTool;
        console.log('Updating custom tool:', { oldName: customTool.name, oldCategory: customTool.category, newData: formData });
        const response = await api.updateCustomTool(customTool.name, customTool.category, {
          name: formData.name,
          url: formData.url,
          category: formData.category,
          iconName: formData.iconName
        });
        console.log('Update response:', response);
      }

      await loadTools();
      notifyUpdate();
      setEditingTool(null);
      setFormData({ name: '', url: '', category: 'AI Agent', iconName: 'Default' });
      alert('Tool updated successfully!');
    } catch (error: any) {
      console.error('Error updating tool:', error);
      alert(`Failed to update tool: ${error.message || 'Unknown error'}`);
    }
  };

  const handleDeleteCustomTool = async (toolToDelete: CustomTool) => {
    if (confirm(`Are you sure you want to delete "${toolToDelete.name}"?`)) {
      try {
        await api.deleteCustomTool(toolToDelete.name, toolToDelete.category);
        await loadTools();
        notifyUpdate();
      } catch (error) {
        console.error('Error deleting tool:', error);
        alert('Failed to delete tool');
      }
    }
  };

  const handleResetDefaultTool = async (tool: Tool, category: string) => {
    if (confirm(`Reset "${tool.name}" to default settings?`)) {
      try {
        await api.deleteToolOverride(tool.name, category);
        await loadTools();
        notifyUpdate();
      } catch (error) {
        console.error('Error resetting tool:', error);
        alert('Failed to reset tool');
      }
    }
  };

  const handleEditClick = (tool: CustomTool | Tool, isDefault: boolean, category: string) => {
    setEditingTool({ tool, isDefault, category });

    if (isDefault) {
      // Check if there's an override
      const override = toolOverrides.find(
        o => o.originalName === tool.name && o.category === category
      );

      if (override) {
        setFormData({
          name: override.name,
          url: override.url,
          category: override.category,
          iconName: override.iconName
        });
      } else {
        setFormData({
          name: tool.name,
          url: tool.url,
          category: category,
          iconName: 'Default'
        });
      }
    } else {
      const customTool = tool as CustomTool;
      setFormData({
        name: customTool.name,
        url: customTool.url,
        category: customTool.category,
        iconName: customTool.iconName || 'Default'
      });
    }
    setShowAddForm(false);
  };

  const cancelEdit = () => {
    setEditingTool(null);
    setFormData({ name: '', url: '', category: 'AI Agent', iconName: 'Default' });
  };

  const selectIcon = (iconName: string) => {
    setFormData({ ...formData, iconName });
    setShowIconPicker(false);
  };

  const handleSaveBanner = async () => {
    try {
      await api.updateHotIssueBanner({ ...hotIssueBanner, isCustom: true });
      alert('Hot Issue Banner updated successfully! (Custom mode)');
      await loadBanner();
    } catch (error: any) {
      console.error('Error updating banner:', error);
      alert(`Failed to update banner: ${error.message || 'Unknown error'}`);
    }
  };

  const handleResetBanner = async () => {
    if (confirm('Reset banner to auto-rotation mode? This will use weekly curated articles.')) {
      try {
        await api.resetHotIssueBanner();
        alert('Banner reset to auto-rotation mode!');
        await loadBanner();
        setShowBannerEditor(false);
      } catch (error: any) {
        console.error('Error resetting banner:', error);
        alert(`Failed to reset banner: ${error.message || 'Unknown error'}`);
      }
    }
  };

  // Segment tool handlers
  const handleAddSegmentTool = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!segmentFormData.name || !segmentFormData.url) {
      alert('Please fill in name and URL');
      return;
    }

    try {
      await api.addSegmentTool(currentSegment, {
        name: segmentFormData.name,
        url: segmentFormData.url,
        iconName: segmentFormData.iconName,
        description: segmentFormData.description
      });
      await loadSegments();
      notifySegmentsUpdate();
      setSegmentFormData({ name: '', url: '', iconName: 'Default', description: '' });
      setEditingSegmentTool(null);
      alert('Tool added successfully!');
    } catch (error: any) {
      console.error('Error adding segment tool:', error);
      alert(`Failed to add tool: ${error.message || 'Unknown error'}`);
    }
  };

  const handleUpdateSegmentTool = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingSegmentTool || !segmentFormData.name || !segmentFormData.url) {
      alert('Please fill in name and URL');
      return;
    }

    try {
      await api.updateSegmentTool(currentSegment, editingSegmentTool.id, {
        name: segmentFormData.name,
        url: segmentFormData.url,
        iconName: segmentFormData.iconName,
        description: segmentFormData.description
      });
      await loadSegments();
      notifySegmentsUpdate();
      setSegmentFormData({ name: '', url: '', iconName: 'Default', description: '' });
      setEditingSegmentTool(null);
      alert('Tool updated successfully!');
    } catch (error: any) {
      console.error('Error updating segment tool:', error);
      alert(`Failed to update tool: ${error.message || 'Unknown error'}`);
    }
  };

  const handleDeleteSegmentTool = async (tool: SegmentTool) => {
    if (confirm(`Are you sure you want to delete "${tool.name}"?`)) {
      try {
        await api.deleteSegmentTool(currentSegment, tool.id);
        await loadSegments();
        notifySegmentsUpdate();
      } catch (error: any) {
        console.error('Error deleting segment tool:', error);
        alert(`Failed to delete tool: ${error.message || 'Unknown error'}`);
      }
    }
  };

  const handleEditSegmentTool = (tool: SegmentTool) => {
    setEditingSegmentTool(tool);
    setSegmentFormData({
      name: tool.name,
      url: tool.url,
      iconName: tool.iconName || 'Default',
      description: tool.description || ''
    });
  };

  const cancelSegmentEdit = () => {
    setEditingSegmentTool(null);
    setSegmentFormData({ name: '', url: '', iconName: 'Default', description: '' });
  };

  const selectSegmentIcon = (iconName: string) => {
    setSegmentFormData({ ...segmentFormData, iconName });
    setShowSegmentIconPicker(false);
  };

  const isToolModified = (tool: Tool, category: string) => {
    return toolOverrides.some(o => o.originalName === tool.name && o.category === category);
  };

  if (!isAuthenticated) {
    return (
      <div className="max-w-md mx-auto mt-16">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Admin Login</h1>
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label className="block text-gray-700 font-medium mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter admin password"
                autoFocus
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }

  const categories = ['AI Agent', 'Image', 'Video', 'Voice/Lip-Sync', 'Class Management'];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">Admin Panel</h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
          >
            Logout
          </button>
        </div>

        <div className="mb-8 flex gap-4">
          <button
            onClick={() => {
              setShowAddForm(!showAddForm);
              setEditingTool(null);
              setShowBannerEditor(false);
              setFormData({ name: '', url: '', category: 'AI Agent', iconName: 'Default' });
            }}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            {showAddForm ? 'Cancel' : '+ Add New Tool'}
          </button>
          <button
            onClick={() => {
              setShowBannerEditor(!showBannerEditor);
              setShowAddForm(false);
              setEditingTool(null);
              setShowSegmentManager(false);
            }}
            className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
          >
            {showBannerEditor ? 'Cancel' : '📰 Edit Hot Issue Banner'}
          </button>
          <button
            onClick={() => {
              setShowSegmentManager(!showSegmentManager);
              setShowAddForm(false);
              setEditingTool(null);
              setShowBannerEditor(false);
            }}
            className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
          >
            {showSegmentManager ? 'Cancel' : '🌍 Manage Segments'}
          </button>
        </div>

        {/* Hot Issue Banner Editor */}
        {showBannerEditor && (
          <div className="bg-purple-50 rounded-lg p-6 mb-8 border-2 border-purple-200">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold text-gray-800">Edit "This Week's Hot Issue" Banner</h2>
              <button
                onClick={handleResetBanner}
                className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors text-sm font-medium"
              >
                🔄 Reset to Auto-Rotation
              </button>
            </div>
            <div className="mb-4 p-3 bg-blue-100 border border-blue-300 rounded-lg text-sm text-blue-800">
              <strong>📅 Auto-Rotation Mode:</strong> The banner automatically changes every week with curated AI news articles. Custom edits will override auto-rotation.
            </div>

            {/* English Version */}
            <div className="mb-6 bg-white rounded-lg p-4">
              <h3 className="font-semibold text-lg text-gray-800 mb-3">🇺🇸 English Version</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-gray-700 font-medium mb-1 text-sm">Title</label>
                  <input
                    type="text"
                    value={hotIssueBanner.en.title}
                    onChange={(e) => setHotIssueBanner({ ...hotIssueBanner, en: { ...hotIssueBanner.en, title: e.target.value } })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                    placeholder="This Week's AI Hot Issue"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1 text-sm">Subtitle</label>
                  <input
                    type="text"
                    value={hotIssueBanner.en.subtitle}
                    onChange={(e) => setHotIssueBanner({ ...hotIssueBanner, en: { ...hotIssueBanner.en, subtitle: e.target.value } })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="The Rise of Multimodal AI"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1 text-sm">Description</label>
                  <textarea
                    value={hotIssueBanner.en.description}
                    onChange={(e) => setHotIssueBanner({ ...hotIssueBanner, en: { ...hotIssueBanner.en, description: e.target.value } })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                    rows={2}
                    placeholder="Exploring the latest advancements..."
                  />
                </div>
              </div>
            </div>

            {/* Korean Version */}
            <div className="mb-6 bg-white rounded-lg p-4">
              <h3 className="font-semibold text-lg text-gray-800 mb-3">🇰🇷 Korean Version</h3>
              <div className="space-y-3">
                <div>
                  <label className="block text-gray-700 font-medium mb-1 text-sm">제목 (Title)</label>
                  <input
                    type="text"
                    value={hotIssueBanner.ko.title}
                    onChange={(e) => setHotIssueBanner({ ...hotIssueBanner, ko: { ...hotIssueBanner.ko, title: e.target.value } })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                    placeholder="이번 주 AI 핫 이슈"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1 text-sm">부제 (Subtitle)</label>
                  <input
                    type="text"
                    value={hotIssueBanner.ko.subtitle}
                    onChange={(e) => setHotIssueBanner({ ...hotIssueBanner, ko: { ...hotIssueBanner.ko, subtitle: e.target.value } })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                    placeholder="멀티모달 AI의 부상"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1 text-sm">설명 (Description)</label>
                  <textarea
                    value={hotIssueBanner.ko.description}
                    onChange={(e) => setHotIssueBanner({ ...hotIssueBanner, ko: { ...hotIssueBanner.ko, description: e.target.value } })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
                    rows={2}
                    placeholder="텍스트, 이미지, 오디오를 결합한..."
                  />
                </div>
              </div>
            </div>

            <button
              onClick={handleSaveBanner}
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors font-medium"
            >
              💾 Save Banner
            </button>
          </div>
        )}

        {/* Segment Manager */}
        {showSegmentManager && (
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-lg p-6 mb-8 border-2 border-teal-200">
            <h2 className="text-xl font-bold text-gray-800 mb-4">Manage Segments (EDUSPACE & RE-EARTH)</h2>

            {/* Segment Selector */}
            <div className="flex gap-3 mb-6">
              <button
                onClick={() => {
                  setCurrentSegment('EDUSPACE');
                  cancelSegmentEdit();
                }}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                  currentSegment === 'EDUSPACE'
                    ? 'bg-gradient-to-r from-[#0a1929] via-[#1a237e] to-[#00bcd4] text-white shadow-lg'
                    : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-cyan-400'
                }`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                  <path d="M2 12h20" />
                </svg>
                EDUSPACE ({segments.EDUSPACE?.length || 0} tools)
              </button>
              <button
                onClick={() => {
                  setCurrentSegment('RE-EARTH');
                  cancelSegmentEdit();
                }}
                className={`flex-1 py-3 px-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
                  currentSegment === 'RE-EARTH'
                    ? 'bg-gradient-to-r from-[#0d2818] via-[#1b5e20] to-[#00897b] text-white shadow-lg'
                    : 'bg-white border-2 border-gray-300 text-gray-700 hover:border-green-400'
                }`}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M6.5 9.5c1-1 2.5-1 3.5 0s2.5 1.5 3 .5c.5-1 1.5-1.5 2.5-1s2 1 2.5.5" />
                </svg>
                RE-EARTH ({segments['RE-EARTH']?.length || 0} tools)
              </button>
            </div>

            {/* Add/Edit Segment Tool Form */}
            <div className="bg-white rounded-lg p-4 mb-6 border border-gray-200">
              <h3 className="font-semibold text-lg text-gray-800 mb-4">
                {editingSegmentTool ? `Edit Tool in ${currentSegment}` : `Add Tool to ${currentSegment}`}
              </h3>
              <form onSubmit={editingSegmentTool ? handleUpdateSegmentTool : handleAddSegmentTool}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">Tool Name *</label>
                    <input
                      type="text"
                      value={segmentFormData.name}
                      onChange={(e) => setSegmentFormData({ ...segmentFormData, name: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="Enter tool name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-medium mb-2 text-sm">Tool URL *</label>
                    <input
                      type="url"
                      value={segmentFormData.url}
                      onChange={(e) => setSegmentFormData({ ...segmentFormData, url: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                      placeholder="https://..."
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2 text-sm">Description (Optional)</label>
                  <input
                    type="text"
                    value={segmentFormData.description}
                    onChange={(e) => setSegmentFormData({ ...segmentFormData, description: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                    placeholder="Brief description of the tool"
                  />
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 font-medium mb-2 text-sm">Icon</label>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center border border-gray-300">
                      {getIconByName(segmentFormData.iconName)}
                    </div>
                    <button
                      type="button"
                      onClick={() => setShowSegmentIconPicker(!showSegmentIconPicker)}
                      className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors text-sm"
                    >
                      {showSegmentIconPicker ? 'Hide Icons' : 'Choose Icon'}
                    </button>
                    <span className="text-sm text-gray-600">{segmentFormData.iconName}</span>
                  </div>

                  {showSegmentIconPicker && (
                    <div className="mt-4 grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-2 p-4 bg-gray-50 rounded-lg border border-gray-200 max-h-48 overflow-y-auto">
                      {ICON_LIBRARY.map((iconOption) => (
                        <button
                          key={iconOption.name}
                          type="button"
                          onClick={() => selectSegmentIcon(iconOption.name)}
                          className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all ${
                            segmentFormData.iconName === iconOption.name
                              ? 'bg-teal-100 border-2 border-teal-500'
                              : 'bg-white border border-gray-300 hover:bg-gray-100'
                          }`}
                          title={iconOption.name}
                        >
                          {iconOption.icon}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <button
                    type="submit"
                    className="px-6 py-2 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors font-medium"
                  >
                    {editingSegmentTool ? 'Update Tool' : 'Add Tool'}
                  </button>
                  {editingSegmentTool && (
                    <button
                      type="button"
                      onClick={cancelSegmentEdit}
                      className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
                    >
                      Cancel
                    </button>
                  )}
                </div>
              </form>
            </div>

            {/* Current Tools List */}
            <div>
              <h3 className="font-semibold text-lg text-gray-800 mb-3">
                Current Tools in {currentSegment}
              </h3>
              {(segments[currentSegment]?.length || 0) === 0 ? (
                <div className="bg-white rounded-lg p-8 text-center text-gray-500 border border-gray-200">
                  No tools in {currentSegment} yet. Add one above!
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {segments[currentSegment]?.map((tool) => (
                    <div key={tool.id} className="bg-white rounded-lg p-4 border border-gray-200 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0">
                        {getIconByName(tool.iconName)}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-gray-800 truncate">{tool.name}</div>
                        <div className="text-sm text-gray-500 truncate">{tool.url}</div>
                        {tool.description && (
                          <div className="text-xs text-gray-400 truncate">{tool.description}</div>
                        )}
                      </div>
                      <div className="flex gap-2 flex-shrink-0">
                        <button
                          onClick={() => handleEditSegmentTool(tool)}
                          className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteSegmentTool(tool)}
                          className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Add/Edit Form */}
        {(showAddForm || editingTool) && (
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              {editingTool ? 'Edit Tool' : 'Add New Tool'}
            </h2>
            <form onSubmit={editingTool ? handleUpdateTool : handleAddTool}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Tool Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="e.g., ChatGPT"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    {categories.map(cat => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">URL</label>
                <input
                  type="url"
                  value={formData.url}
                  onChange={(e) => setFormData({ ...formData, url: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://example.com"
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-2">Icon</label>
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md border border-gray-300">
                    {getIconByName(formData.iconName)}
                  </div>
                  <button
                    type="button"
                    onClick={() => setShowIconPicker(!showIconPicker)}
                    className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
                  >
                    {showIconPicker ? 'Hide Icons' : 'Choose Icon'}
                  </button>
                  <span className="text-sm text-gray-600">{formData.iconName}</span>
                </div>

                {showIconPicker && (
                  <div className="mt-4 grid grid-cols-6 sm:grid-cols-8 md:grid-cols-10 gap-3 p-4 bg-white rounded-lg border border-gray-300 max-h-64 overflow-y-auto">
                    {ICON_LIBRARY.map((iconOption) => (
                      <button
                        key={iconOption.name}
                        type="button"
                        onClick={() => selectIcon(iconOption.name)}
                        className={`w-12 h-12 rounded-lg flex items-center justify-center transition-all ${
                          formData.iconName === iconOption.name
                            ? 'bg-blue-100 border-2 border-blue-500'
                            : 'bg-gray-50 border border-gray-300 hover:bg-gray-100'
                        }`}
                        title={iconOption.name}
                      >
                        {iconOption.icon}
                      </button>
                    ))}
                  </div>
                )}
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium"
                >
                  {editingTool ? 'Update Tool' : 'Add Tool'}
                </button>
                {editingTool && (
                  <button
                    type="button"
                    onClick={cancelEdit}
                    className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors font-medium"
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>
        )}

        {/* Tools List */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Manage All Tools</h2>

          {AI_TOOLS_DATA.map(category => {
            const customToolsInCategory = customTools.filter(t => t.category === category.title);

            return (
              <div key={category.title} className="mb-8">
                <h3 className="text-lg font-semibold text-gray-700 mb-3 flex items-center gap-2">
                  {category.title}
                  <span className="text-sm text-gray-500 font-normal">
                    ({category.tools.length} default + {customToolsInCategory.length} custom)
                  </span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                  {/* Default Tools */}
                  {category.tools.map(tool => {
                    const isModified = isToolModified(tool, category.title);
                    const override = toolOverrides.find(
                      o => o.originalName === tool.name && o.category === category.title
                    );
                    const displayName = override ? override.name : tool.name;
                    const displayUrl = override ? override.url : tool.url;

                    return (
                      <div key={tool.name} className={`p-3 rounded-lg ${isModified ? 'bg-yellow-50 border-2 border-yellow-400' : 'bg-gray-100'}`}>
                        <div className="flex items-center gap-2 mb-1">
                          {override ? getIconByName(override.iconName) : tool.icon}
                          <div className="flex-1">
                            <div className="font-medium text-gray-800 flex items-center gap-2">
                              {displayName}
                              {isModified && <span className="text-xs bg-yellow-500 text-white px-2 py-0.5 rounded">Modified</span>}
                            </div>
                            <div className="text-sm text-gray-600 truncate">{displayUrl}</div>
                          </div>
                        </div>
                        <div className="flex gap-2 mt-2">
                          <button
                            onClick={() => handleEditClick(tool, true, category.title)}
                            className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors"
                          >
                            Edit
                          </button>
                          {isModified && (
                            <button
                              onClick={() => handleResetDefaultTool(tool, category.title)}
                              className="px-3 py-1 bg-orange-500 text-white text-sm rounded hover:bg-orange-600 transition-colors"
                            >
                              Reset
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}

                  {/* Custom Tools */}
                  {customToolsInCategory.map((tool, idx) => (
                    <div key={idx} className="bg-green-50 border-2 border-green-400 p-3 rounded-lg">
                      <div className="flex items-center gap-2 mb-1">
                        {getIconByName(tool.iconName)}
                        <div className="flex-1">
                          <div className="font-medium text-gray-800 flex items-center gap-2">
                            {tool.name}
                            <span className="text-xs bg-green-500 text-white px-2 py-0.5 rounded">Custom</span>
                          </div>
                          <div className="text-sm text-gray-600 truncate">{tool.url}</div>
                        </div>
                      </div>
                      <div className="flex gap-2 mt-2">
                        <button
                          onClick={() => handleEditClick(tool, false, tool.category)}
                          className="px-3 py-1 bg-blue-500 text-white text-sm rounded hover:bg-blue-600 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteCustomTool(tool)}
                          className="px-3 py-1 bg-red-500 text-white text-sm rounded hover:bg-red-600 transition-colors"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
