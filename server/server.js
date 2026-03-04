import express from 'express';
import cors from 'cors';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = 7778;

// Middleware
app.use(cors());
app.use(express.json());

// JSON file database
const DB_FILE = join(__dirname, 'database.json');

// Initialize database file
const initDB = () => {
  if (!fs.existsSync(DB_FILE)) {
    fs.writeFileSync(DB_FILE, JSON.stringify({
      customTools: [],
      toolOverrides: [],
      hotIssueBanner: {
        en: {
          title: "This Week's AI Hot Issue",
          subtitle: "The Rise of Multimodal AI",
          description: "Exploring the latest advancements combining text, image, and audio for revolutionary new applications."
        },
        ko: {
          title: "이번 주 AI 핫 이슈",
          subtitle: "멀티모달 AI의 부상",
          description: "텍스트, 이미지, 오디오를 결합한 최신 기술 발전을 탐구하여 혁신적인 새로운 애플리케이션을 만듭니다."
        }
      },
      segments: {
        EDUSPACE: [],
        'RE-EARTH': []
      }
    }, null, 2));
  } else {
    // Ensure segments exist in existing database
    const db = readDB();
    if (!db.segments) {
      db.segments = { EDUSPACE: [], 'RE-EARTH': [] };
      writeDB(db);
    }
  }
};

const readDB = () => {
  try {
    return JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
  } catch (error) {
    return { customTools: [], toolOverrides: [] };
  }
};

const writeDB = (data) => {
  fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
};

initDB();

// API Routes

// Get all custom tools
app.get('/api/custom-tools', (req, res) => {
  try {
    const db = readDB();
    res.json(db.customTools);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add custom tool
app.post('/api/custom-tools', (req, res) => {
  try {
    const { name, url, category, iconName } = req.body;
    const db = readDB();
    const newTool = { name, url, category, iconName };
    db.customTools.push(newTool);
    writeDB(db);
    res.json(newTool);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update custom tool
app.put('/api/custom-tools', (req, res) => {
  try {
    const { oldName, oldCategory, name, url, category, iconName } = req.body;
    const db = readDB();
    const index = db.customTools.findIndex(t => t.name === oldName && t.category === oldCategory);
    if (index !== -1) {
      db.customTools[index] = { name, url, category, iconName };
      writeDB(db);
      res.json(db.customTools[index]);
    } else {
      res.status(404).json({ error: 'Tool not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete custom tool
app.delete('/api/custom-tools/:name/:category', (req, res) => {
  try {
    const { name, category } = req.params;
    const db = readDB();
    db.customTools = db.customTools.filter(t => !(t.name === name && t.category === decodeURIComponent(category)));
    writeDB(db);
    res.json({ message: 'Tool deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all tool overrides
app.get('/api/tool-overrides', (req, res) => {
  try {
    const db = readDB();
    res.json(db.toolOverrides);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add or update tool override
app.post('/api/tool-overrides', (req, res) => {
  try {
    const { originalName, category, name, url, iconName } = req.body;
    const db = readDB();
    const index = db.toolOverrides.findIndex(o => o.originalName === originalName && o.category === category);
    const override = { originalName, category, name, url, iconName };

    if (index !== -1) {
      db.toolOverrides[index] = override;
    } else {
      db.toolOverrides.push(override);
    }

    writeDB(db);
    res.json(override);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete tool override
app.delete('/api/tool-overrides/:originalName/:category', (req, res) => {
  try {
    const { originalName, category } = req.params;
    const db = readDB();
    db.toolOverrides = db.toolOverrides.filter(o => !(o.originalName === originalName && o.category === decodeURIComponent(category)));
    writeDB(db);
    res.json({ message: 'Override deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Helper function to get current week number (1-52)
const getCurrentWeek = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const diff = now - start;
  const oneWeek = 1000 * 60 * 60 * 24 * 7;
  return Math.ceil(diff / oneWeek);
};

// Helper function to load weekly articles
const loadWeeklyArticles = () => {
  try {
    const articlesFile = join(__dirname, 'weekly-articles.json');
    if (fs.existsSync(articlesFile)) {
      return JSON.parse(fs.readFileSync(articlesFile, 'utf8'));
    }
  } catch (error) {
    console.error('Error loading weekly articles:', error);
  }
  return null;
};

// Hot Issue Banner
app.get('/api/hot-issue', (req, res) => {
  try {
    const db = readDB();

    // Check if admin has set custom banner
    if (db.hotIssueBanner && db.hotIssueBanner.isCustom) {
      return res.json(db.hotIssueBanner);
    }

    // Otherwise, use auto-rotation from weekly articles
    const weeklyData = loadWeeklyArticles();
    if (weeklyData && weeklyData.articles) {
      const currentWeek = getCurrentWeek();
      const article = weeklyData.articles.find(a => a.week === currentWeek) || weeklyData.articles[0];

      return res.json({
        en: article.en,
        ko: article.ko,
        isAuto: true,
        week: currentWeek
      });
    }

    // Fallback to database
    res.json(db.hotIssueBanner || {});
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/api/hot-issue', (req, res) => {
  try {
    const { en, ko, isCustom } = req.body;
    const db = readDB();
    db.hotIssueBanner = { en, ko, isCustom: isCustom !== false };
    writeDB(db);
    res.json(db.hotIssueBanner);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Reset banner to auto-rotation
app.delete('/api/hot-issue', (req, res) => {
  try {
    const db = readDB();
    delete db.hotIssueBanner;
    writeDB(db);
    res.json({ message: 'Banner reset to auto-rotation' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// ==================== SEGMENTS API ====================

// Get all segments
app.get('/api/segments', (req, res) => {
  try {
    const db = readDB();
    res.json(db.segments || { EDUSPACE: [], 'RE-EARTH': [] });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Add tool to segment
app.post('/api/segments/:segmentId/tools', (req, res) => {
  try {
    const segmentId = req.params.segmentId.toUpperCase() === 'RE-EARTH' ? 'RE-EARTH' : req.params.segmentId.toUpperCase();
    const { name, url, iconName, description } = req.body;

    if (!['EDUSPACE', 'RE-EARTH'].includes(segmentId)) {
      return res.status(400).json({ error: 'Invalid segment ID. Must be EDUSPACE or RE-EARTH' });
    }

    if (!name || !url) {
      return res.status(400).json({ error: 'Name and URL are required' });
    }

    const db = readDB();
    if (!db.segments) {
      db.segments = { EDUSPACE: [], 'RE-EARTH': [] };
    }
    if (!db.segments[segmentId]) {
      db.segments[segmentId] = [];
    }

    const newTool = {
      id: Date.now().toString(),
      name,
      url,
      iconName: iconName || 'default',
      description: description || ''
    };

    db.segments[segmentId].push(newTool);
    writeDB(db);
    res.json(newTool);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update tool in segment
app.put('/api/segments/:segmentId/tools/:toolId', (req, res) => {
  try {
    const segmentId = req.params.segmentId.toUpperCase() === 'RE-EARTH' ? 'RE-EARTH' : req.params.segmentId.toUpperCase();
    const toolId = req.params.toolId;
    const { name, url, iconName, description } = req.body;

    if (!['EDUSPACE', 'RE-EARTH'].includes(segmentId)) {
      return res.status(400).json({ error: 'Invalid segment ID. Must be EDUSPACE or RE-EARTH' });
    }

    const db = readDB();
    if (!db.segments || !db.segments[segmentId]) {
      return res.status(404).json({ error: 'Segment not found' });
    }

    const index = db.segments[segmentId].findIndex(t => t.id === toolId);
    if (index === -1) {
      return res.status(404).json({ error: 'Tool not found' });
    }

    db.segments[segmentId][index] = {
      ...db.segments[segmentId][index],
      name: name || db.segments[segmentId][index].name,
      url: url || db.segments[segmentId][index].url,
      iconName: iconName || db.segments[segmentId][index].iconName,
      description: description !== undefined ? description : db.segments[segmentId][index].description
    };

    writeDB(db);
    res.json(db.segments[segmentId][index]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Delete tool from segment
app.delete('/api/segments/:segmentId/tools/:toolId', (req, res) => {
  try {
    const segmentId = req.params.segmentId.toUpperCase() === 'RE-EARTH' ? 'RE-EARTH' : req.params.segmentId.toUpperCase();
    const toolId = req.params.toolId;

    if (!['EDUSPACE', 'RE-EARTH'].includes(segmentId)) {
      return res.status(400).json({ error: 'Invalid segment ID. Must be EDUSPACE or RE-EARTH' });
    }

    const db = readDB();
    if (!db.segments || !db.segments[segmentId]) {
      return res.status(404).json({ error: 'Segment not found' });
    }

    const initialLength = db.segments[segmentId].length;
    db.segments[segmentId] = db.segments[segmentId].filter(t => t.id !== toolId);

    if (db.segments[segmentId].length === initialLength) {
      return res.status(404).json({ error: 'Tool not found' });
    }

    writeDB(db);
    res.json({ message: 'Tool deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Iron Suit Backend API is running' });
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Iron Suit Backend API running on http://localhost:${PORT}`);
  console.log(`🌐 Network access: http://192.168.68.106:${PORT}`);
});
