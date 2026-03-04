import React from 'react';
import { type Category } from './types';

// Generic placeholder icons
// FIX: Changed props type to React.PropsWithChildren to resolve type inference errors.
const PlaceholderIcon = ({ children }: React.PropsWithChildren<{}>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
    {children}
  </svg>
);

// Specific Icons (simplified representations)
const MonitoringReportIcon = () => <PlaceholderIcon><path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.09-4-4L2 17.08z"/></PlaceholderIcon>;
const ChatGPTIcon = () => <PlaceholderIcon><path d="M21.36,13.25a2.5,2.5,0,0,1-3.23.47,7.44,7.44,0,0,0-2.6-1.42,7.5,7.5,0,0,0-6.12,0,7.44,7.44,0,0,0-2.6,1.42,2.5,2.5,0,1,1-2.76-3.72,12.5,12.5,0,0,1,14.32,0,2.5,2.5,0,0,1,.47,3.23m-3.23-7.48a2.5,2.5,0,1,1,2.76,3.72,12.5,12.5,0,0,1-14.32,0,2.5,2.5,0,0,1,2.76-3.72,7.44,7.44,0,0,0,2.6,1.42,7.5,7.5,0,0,0,6.12,0,7.44,7.44,0,0,0,2.6-1.42"/></PlaceholderIcon>;
const PerplexityIcon = () => <PlaceholderIcon><path d="M15.5 12h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1m0-3h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1m-5 6h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1m10-7a7 7 0 1 1-14 0 7 7 0 0 1 14 0"/></PlaceholderIcon>;
const GeminiIcon = () => <PlaceholderIcon><path d="M12 2l2.35 6.95L22 9.5l-5.35 5.05L18 22l-6-3.5L6 22l1.35-7.45L2 9.5l7.65-.55z"/></PlaceholderIcon>;
const GensparkIcon = () => <PlaceholderIcon><path d="M12 3a9 9 0 0 0-9 9 9 9 0 0 0 9 9 9 9 0 0 0 9-9 9 9 0 0 0-9-9m0 16a7 7 0 0 1-7-7 7 7 0 0 1 7-7 7 7 0 0 1 7 7 7 7 0 0 1-7 7m-1-11v6l5-3z"/></PlaceholderIcon>;
const FlowithIcon = () => <PlaceholderIcon><path d="M12 4a8 8 0 0 0-8 8 8 8 0 0 0 8 8 8 8 0 0 0 8-8 8 8 0 0 0-8-8m0 11a3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3 3 3 3 0 0 1-3 3"/></PlaceholderIcon>;
const ClaudeIcon = () => <PlaceholderIcon><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2m0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m-2-8h4v2h-4v-2z"/></PlaceholderIcon>;
const ManusIcon = () => <PlaceholderIcon><path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2m0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8m-2-9a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2h-2a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1"/></PlaceholderIcon>;
const MidjourneyIcon = () => <PlaceholderIcon><path d="M12 2.5c-5.25 0-9.5 4.25-9.5 9.5s4.25 9.5 9.5 9.5 9.5-4.25 9.5-9.5S17.25 2.5 12 2.5zm0 17c-4.14 0-7.5-3.36-7.5-7.5S7.86 4.5 12 4.5s7.5 3.36 7.5 7.5-3.36 7.5-7.5 7.5z M12 6.5l-4 4h8l-4-4z m0 11l4-4h-8l4 4z"/></PlaceholderIcon>;
const NanoBananaIcon = () => <PlaceholderIcon><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Zm4-8H8V10h8Z"/></PlaceholderIcon>;
const FluxIcon = () => <PlaceholderIcon><path d="M3 17h18v-2H3v2zm0-5h18v-2H3v2zm0-5h18V5H3v2z"/></PlaceholderIcon>;
const SoraIcon = () => <PlaceholderIcon><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></PlaceholderIcon>;
const WhiskIcon = () => <PlaceholderIcon><path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/></PlaceholderIcon>;
const DreaminaIcon = () => <PlaceholderIcon><path d="M21 12.79c-1.12 4.07-4.91 7.21-9 7.21s-7.88-3.14-9-7.21C2.52 10.9 4.3 9.42 6.35 8.71 8.35 8 10.23 8.38 12 9.51c1.77-1.13 3.65-1.51 5.65-.8 2.05.71 3.83 2.19 4.35 3.08z"/></PlaceholderIcon>;
const QwenIcon = () => <PlaceholderIcon><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z m-1-5h2v2h-2zm0-8h2v6h-2z"/></PlaceholderIcon>;
const VideoIcon = () => <PlaceholderIcon><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/></PlaceholderIcon>;
const RunwayIcon = () => <PlaceholderIcon><path d="M20 7H4c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2zM4 15V9h16v6H4z"/></PlaceholderIcon>;
const PikaLabsIcon = () => <PlaceholderIcon><path d="M12 2c1.1 0 2 .9 2 2v1h-4V4c0-1.1.9-2 2-2zM5 7v11c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V7H5zm9 5h-2v4h2v-4z"/></PlaceholderIcon>;
const LumaAiIcon = () => <PlaceholderIcon><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zm-1-11h2v7h-2z"/></PlaceholderIcon>;
const TopazIcon = () => <PlaceholderIcon><path d="M12 2L2 7l10 5 10-5-10-5zm0 11.5L5.5 10 12 7l6.5 3L12 13.5zM2 17l10 5 10-5-10-5-10 5z"/></PlaceholderIcon>;
const FreepikIcon = () => <PlaceholderIcon><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20ZM10,14.5l6-4.5-6-4.5Z"/></PlaceholderIcon>;
const ElevenlabsIcon = () => <PlaceholderIcon><path d="M11 7h2v10h-2V7zm-4 4h2v6H7v-6zm8 0h2v6h-2v-6z"/></PlaceholderIcon>;
const PersoIcon = () => <PlaceholderIcon><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/></PlaceholderIcon>;
const SupertoneIcon = () => <PlaceholderIcon><path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/></PlaceholderIcon>;
const TypecastIcon = () => <PlaceholderIcon><path d="M20,4H4A2,2,0,0,0,2,6V18a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V6A2,2,0,0,0,20,4Zm-4,12H8v-2h8Zm0-4H8v-2h8Zm0-4H8V6h8Z"/></PlaceholderIcon>;

export const AI_TOOLS_DATA: Category[] = [
  {
    title: 'Class Management',
    tools: [
      { name: 'ICAN Stellar Daily Monitoring Report', icon: <MonitoringReportIcon />, url: 'http://192.168.68.106:3010' },
    ],
  },
  {
    title: 'AI Agent',
    tools: [
      { name: 'ChatGPT', icon: <ChatGPTIcon />, url: 'https://chat.openai.com/' },
      { name: 'Perplexity', icon: <PerplexityIcon />, url: 'https://www.perplexity.ai/' },
      { name: 'Gemini', icon: <GeminiIcon />, url: 'https://gemini.google.com/' },
      { name: 'Genspark', icon: <GensparkIcon />, url: 'https://www.genspark.com/' },
      { name: 'Flowith', icon: <FlowithIcon />, url: 'https://flowith.me/' },
      { name: 'Claude', icon: <ClaudeIcon />, url: 'https://claude.ai/' },
      { name: 'Manus', icon: <ManusIcon />, url: 'https://www.manus.app/' },
    ],
  },
  {
    title: 'Image',
    tools: [
      { name: 'Midjourney', icon: <MidjourneyIcon />, url: 'https://www.midjourney.com/' },
      { name: 'Nano Banana', icon: <NanoBananaIcon />, url: 'https://www.bban.me/' },
      { name: 'Flux', icon: <FluxIcon />, url: 'https://flux1.ai/' },
      { name: 'Sora', icon: <SoraIcon />, url: 'https://openai.com/sora' },
      { name: 'Whisk', icon: <WhiskIcon />, url: 'https://labs.google/fx/tools/whisk' },
      { name: 'Dreamina', icon: <DreaminaIcon />, url: 'https://dreamina.capcut.com/' },
      { name: 'Qwen', icon: <QwenIcon />, url: 'https://qwenlm.github.io/' },
    ],
  },
  {
    title: 'Video',
    tools: [
      { name: 'Sora 2', icon: <VideoIcon />, url: 'https://openai.com/sora' },
      { name: 'VEO 3', icon: <VideoIcon />, url: 'https://deepmind.google/technologies/veo/' },
      { name: 'Midjourney', icon: <MidjourneyIcon />, url: 'https://www.midjourney.com/' },
      { name: 'Hailuo', icon: <VideoIcon />, url: 'https://hailuoai.com/' },
      { name: 'Higgsfiled', icon: <VideoIcon />, url: 'https://higgsfield.ai/' },
      { name: 'Kling', icon: <VideoIcon />, url: 'https://klingai.com/' },
      { name: 'Runway', icon: <RunwayIcon />, url: 'https://runwayml.com/' },
      { name: 'Pika Labs', icon: <PikaLabsIcon />, url: 'https://pika.art/' },
      { name: 'Luma AI', icon: <LumaAiIcon />, url: 'https://lumalabs.ai/' },
      { name: 'Topaz', icon: <TopazIcon />, url: 'https://www.topazlabs.com/' },
      { name: 'Freepik', icon: <FreepikIcon />, url: 'https://www.freepik.com/' },
    ],
  },
  {
    title: 'Voice/Lip-Sync',
    tools: [
      { name: 'Elevenlabs', icon: <ElevenlabsIcon />, url: 'https://elevenlabs.io/' },
      { name: 'Perso', icon: <PersoIcon />, url: 'https://www.perso.ai/' },
      { name: 'Supertone', icon: <SupertoneIcon />, url: 'https://supertone.ai/' },
      { name: 'Typecast', icon: <TypecastIcon />, url: 'https://typecast.ai/' },
    ],
  },
];