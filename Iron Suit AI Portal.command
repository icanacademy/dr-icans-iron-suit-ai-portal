#!/bin/bash

# Dr. ICAN's Iron Suit AI Portal Launcher
# Frontend: 7777, Backend: 7778

cd "$(dirname "$0")"

echo "🤖 Starting Dr. ICAN's Iron Suit AI Portal..."
echo ""
echo "📡 Frontend: http://localhost:7777"
echo "🌐 Network:  http://192.168.68.106:7777"
echo ""
echo "🔧 Backend API: http://localhost:7778"
echo "🌐 Network API: http://192.168.68.106:7778"
echo ""

# Start Cloudflare tunnel if not already running
if ! pgrep -f "cloudflared tunnel run cosmodrive" > /dev/null 2>&1; then
    echo "🌐 Starting Cloudflare Tunnel..."
    cloudflared tunnel run cosmodrive &
    sleep 2
    echo "✅ Cloudflare Tunnel started"
else
    echo "🌐 Cloudflare Tunnel already running"
fi
echo "🌍 Public URL: https://ironsuit.icanacademy.work"
echo ""

# Start backend in background
echo "Starting backend server..."
cd server
npm start &
BACKEND_PID=$!
cd ..

# Wait for backend to be ready
sleep 2

# Start frontend
echo "Starting frontend..."
npm run dev

# Cleanup: Kill backend when frontend stops
kill $BACKEND_PID 2>/dev/null
