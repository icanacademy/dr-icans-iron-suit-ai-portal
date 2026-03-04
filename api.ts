// API client for Iron Suit Backend
const API_BASE = 'http://192.168.68.106:7778/api';

export const api = {
  // Custom Tools
  async getCustomTools() {
    const response = await fetch(`${API_BASE}/custom-tools`);
    return response.json();
  },

  async addCustomTool(tool: { name: string; url: string; category: string; iconName: string }) {
    const response = await fetch(`${API_BASE}/custom-tools`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tool)
    });
    return response.json();
  },

  async updateCustomTool(oldName: string, oldCategory: string, tool: { name: string; url: string; category: string; iconName: string }) {
    const response = await fetch(`${API_BASE}/custom-tools`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ oldName, oldCategory, ...tool })
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || `HTTP ${response.status}`);
    }
    return response.json();
  },

  async deleteCustomTool(name: string, category: string) {
    const response = await fetch(`${API_BASE}/custom-tools/${encodeURIComponent(name)}/${encodeURIComponent(category)}`, {
      method: 'DELETE'
    });
    return response.json();
  },

  // Tool Overrides
  async getToolOverrides() {
    const response = await fetch(`${API_BASE}/tool-overrides`);
    return response.json();
  },

  async saveToolOverride(override: { originalName: string; category: string; name: string; url: string; iconName: string }) {
    const response = await fetch(`${API_BASE}/tool-overrides`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(override)
    });
    return response.json();
  },

  async deleteToolOverride(originalName: string, category: string) {
    const response = await fetch(`${API_BASE}/tool-overrides/${encodeURIComponent(originalName)}/${encodeURIComponent(category)}`, {
      method: 'DELETE'
    });
    return response.json();
  },

  // Hot Issue Banner
  async getHotIssueBanner() {
    const response = await fetch(`${API_BASE}/hot-issue`);
    return response.json();
  },

  async updateHotIssueBanner(banner: { en: { title: string; subtitle: string; description: string; link?: string }; ko: { title: string; subtitle: string; description: string; link?: string }; isCustom?: boolean }) {
    const response = await fetch(`${API_BASE}/hot-issue`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(banner)
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || `HTTP ${response.status}`);
    }
    return response.json();
  },

  async resetHotIssueBanner() {
    const response = await fetch(`${API_BASE}/hot-issue`, {
      method: 'DELETE'
    });
    return response.json();
  },

  // Health check
  async checkHealth() {
    try {
      const response = await fetch(`${API_BASE}/health`);
      return response.json();
    } catch (error) {
      return { status: 'error', message: 'Backend not reachable' };
    }
  },

  // Segments API
  async getSegments() {
    const response = await fetch(`${API_BASE}/segments`);
    return response.json();
  },

  async addSegmentTool(segmentId: string, tool: { name: string; url: string; iconName: string; description?: string }) {
    const response = await fetch(`${API_BASE}/segments/${segmentId}/tools`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tool)
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || `HTTP ${response.status}`);
    }
    return response.json();
  },

  async updateSegmentTool(segmentId: string, toolId: string, tool: { name: string; url: string; iconName: string; description?: string }) {
    const response = await fetch(`${API_BASE}/segments/${segmentId}/tools/${toolId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tool)
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || `HTTP ${response.status}`);
    }
    return response.json();
  },

  async deleteSegmentTool(segmentId: string, toolId: string) {
    const response = await fetch(`${API_BASE}/segments/${segmentId}/tools/${toolId}`, {
      method: 'DELETE'
    });
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || `HTTP ${response.status}`);
    }
    return response.json();
  }
};
