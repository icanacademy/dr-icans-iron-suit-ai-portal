# Dr. ICAN's Iron Suit AI Portal - Setup Guide

## Overview
This is a full-stack application with:
- **Frontend**: React + Vite (Port 7777)
- **Backend**: Node.js + Express (Port 7778)
- **Database**: JSON file storage (server/database.json)

## Quick Start

### Option 1: Double-Click Launch
Simply double-click the **"Iron Suit AI Portal.command"** file in the project root.

This will:
1. Start the backend API server on port 7778
2. Start the frontend dev server on port 7777
3. Open Terminal with status information

### Option 2: Manual Launch

#### Terminal 1 - Backend:
```bash
cd "/Users/icanacademy/dr.ican's-iron-suit-ai-portal/server"
npm start
```

#### Terminal 2 - Frontend:
```bash
cd "/Users/icanacademy/dr.ican's-iron-suit-ai-portal"
npm run dev
```

## Access URLs

### From This Computer:
- **Frontend**: http://localhost:7777
- **Backend API**: http://localhost:7778

### From Other Devices on Network:
- **Frontend**: http://192.168.68.106:7777
- **Backend API**: http://192.168.68.106:7778

## Features

### Shared Data
All users accessing the portal see the same:
- ✅ Custom tools added by admin
- ✅ Modified default tools
- ✅ Tool icon changes
- ✅ "This Week's Hot Issue" banner content (English & Korean)

Data is stored in: `server/database.json`

### Personal Data (Browser-Specific)
Each user has their own:
- 📌 Favorite tools
- 🌐 Language preference (EN/KO)

### Admin Panel
- **URL**: Click "Admin" in the header
- **Password**: `14411441`
- **Features**:
  - Add custom tools
  - Edit existing tools
  - Change tool icons
  - Delete custom tools
  - Reset modified tools to defaults
  - **Edit "This Week's Hot Issue" banner** (both English & Korean versions)
  - **Auto-rotation mode**: Banner automatically changes weekly with 52 curated AI articles
  - **Custom mode**: Override auto-rotation with your own custom content

## How It Works

### Before (localStorage only):
- Each browser had its own data
- Admin changes only visible on that browser
- No synchronization between users

### After (Backend API):
- Central database stores all tool data
- Changes made by admin are visible to all users
- Frontend polls for updates every 3 seconds
- Immediate update when admin makes changes

## API Endpoints

```
GET    /api/health              - Health check
GET    /api/custom-tools        - Get all custom tools
POST   /api/custom-tools        - Add custom tool
PUT    /api/custom-tools        - Update custom tool
DELETE /api/custom-tools/:name/:category - Delete custom tool
GET    /api/tool-overrides      - Get all tool overrides
POST   /api/tool-overrides      - Save tool override
DELETE /api/tool-overrides/:originalName/:category - Delete override
```

## Database Schema

### Custom Tools
```json
{
  "name": "Tool Name",
  "url": "https://example.com",
  "category": "AI Agent",
  "iconName": "IconName"
}
```

### Tool Overrides
```json
{
  "originalName": "Original Tool Name",
  "category": "AI Agent",
  "name": "New Name",
  "url": "https://new-url.com",
  "iconName": "NewIconName"
}
```

## Troubleshooting

### Backend Not Starting
```bash
cd server
npm install
npm start
```

### Frontend Not Starting
```bash
npm install
npm run dev
```

### Port Already in Use
Check if something is using port 7777 or 7778:
```bash
lsof -i :7777
lsof -i :7778
```

Kill the process:
```bash
kill -9 <PID>
```

### Changes Not Appearing
1. Check backend is running (http://localhost:7778/api/health)
2. Check browser console for errors
3. Verify database.json exists in server folder
4. Try refreshing the page

## Tech Stack

### Frontend
- React 19.2.0
- TypeScript 5.8.2
- Vite 6.2.0
- Tailwind CSS (inline utilities)

### Backend
- Node.js (ES Modules)
- Express 4.18.2
- CORS enabled
- JSON file database

## Notes

- The Gemini API key in `.env.local` is **not used** - this is a pure portal/directory app
- Favorites are still stored locally (per browser)
- Backend uses polling for real-time updates (3-second intervals)
- Database is a simple JSON file for easy backup and portability
