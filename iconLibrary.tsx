import React from 'react';

export interface IconOption {
  name: string;
  icon: React.ReactElement;
}

// Icon Library for users to choose from
export const ICON_LIBRARY: IconOption[] = [
  {
    name: 'Default',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8m-1-13h2v6h-2zm0 8h2v2h-2z"/>
    </svg>
  },
  {
    name: 'Star',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M12 2l2.35 6.95L22 9.5l-5.35 5.05L18 22l-6-3.5L6 22l1.35-7.45L2 9.5l7.65-.55z"/>
    </svg>
  },
  {
    name: 'Lightning',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M7 2v11h3v9l7-12h-4l4-8z"/>
    </svg>
  },
  {
    name: 'Brain',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M21.33 12.91c.09 1.55-.62 3.04-1.89 3.95l.77 1.49c.23.45.26.98.06 1.45s-.62.84-1.12 1.02l-1.29.47c-.45.15-.94.09-1.35-.17-.41-.26-.7-.7-.78-1.18l-.44-2.85c-.38.17-.78.27-1.19.27-.23 0-.45-.02-.67-.06l-.31 2.86c-.03.48-.25.92-.61 1.23-.37.31-.85.44-1.33.37l-1.35-.2c-.48-.07-.89-.36-1.13-.77s-.3-.9-.17-1.36l.73-1.84c-1.24-.97-1.88-2.55-1.71-4.17.18-1.73 1.18-3.2 2.63-3.96l-.08-.13c-.64-1.05-.62-2.37.05-3.4.67-1.03 1.83-1.62 3.04-1.55l.28.02c1.18.1 2.21.83 2.68 1.91.47-1.05 1.48-1.78 2.64-1.91l.28-.02c1.21-.07 2.37.52 3.04 1.55.67 1.03.69 2.35.05 3.4l-.08.13c1.45.76 2.45 2.23 2.63 3.96z"/>
    </svg>
  },
  {
    name: 'Image',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
    </svg>
  },
  {
    name: 'Video',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z"/>
    </svg>
  },
  {
    name: 'Music',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
    </svg>
  },
  {
    name: 'Microphone',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M12 14c1.66 0 3-1.34 3-3V5c0-1.66-1.34-3-3-3S9 3.34 9 5v6c0 1.66 1.34 3 3 3zm5-3c0 2.76-2.24 5-5 5s-5-2.24-5-5H5c0 3.53 2.61 6.43 6 6.92V21h2v-3.08c3.39-.49 6-3.39 6-6.92h-2z"/>
    </svg>
  },
  {
    name: 'Chart',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.09-4-4L2 17.08z"/>
    </svg>
  },
  {
    name: 'Globe',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
    </svg>
  },
  {
    name: 'Sparkles',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M12 1L9 9l-8 3 8 3 3 8 3-8 8-3-8-3z"/>
    </svg>
  },
  {
    name: 'Rocket',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M12 2.5s4.5 2.04 4.5 10.5c0 2.49-1.04 5.57-1.6 7H9.1c-.56-1.43-1.6-4.51-1.6-7C7.5 4.54 12 2.5 12 2.5M8 20v1c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-1H8m2-16.5c0 1.38-1.12 2.5-2.5 2.5S5 4.88 5 3.5 6.12 1 7.5 1 10 2.12 10 3.5m9.5 0C19.5 4.88 18.38 6 17 6s-2.5-1.12-2.5-2.5S15.62 1 17 1s2.5 1.12 2.5 2.5z"/>
    </svg>
  },
  {
    name: 'Palette',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M12 2C6.49 2 2 6.49 2 12s4.49 10 10 10c1.38 0 2.5-1.12 2.5-2.5 0-.61-.23-1.21-.64-1.67-.08-.09-.13-.21-.13-.33 0-.28.22-.5.5-.5H16c3.31 0 6-2.69 6-6 0-4.96-4.49-9-10-9zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 8 6.5 8 8 8.67 8 9.5 7.33 11 6.5 11zm3-4C8.67 7 8 6.33 8 5.5S8.67 4 9.5 4s1.5.67 1.5 1.5S10.33 7 9.5 7zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 4 14.5 4s1.5.67 1.5 1.5S15.33 7 14.5 7zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 8 17.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
    </svg>
  },
  {
    name: 'Code',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/>
    </svg>
  },
  {
    name: 'Book',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z"/>
    </svg>
  },
  {
    name: 'Camera',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M12 15.2c-2.1 0-3.8-1.7-3.8-3.8s1.7-3.8 3.8-3.8 3.8 1.7 3.8 3.8-1.7 3.8-3.8 3.8zm0-9.8C8.6 5.4 5.4 8.6 5.4 12.6s3.2 7.2 7.2 7.2 7.2-3.2 7.2-7.2S15.4 5.4 12 5.4zM9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9z"/>
    </svg>
  },
  {
    name: 'Cloud',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
    </svg>
  },
  {
    name: 'Chat',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2z"/>
    </svg>
  },
  {
    name: 'Robot',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M12 2c-1.1 0-2 .9-2 2v1H8c-1.66 0-3 1.34-3 3v10c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V8c0-1.66-1.34-3-3-3h-2V4c0-1.1-.9-2-2-2zm0 3c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-3 5c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm6 0c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm-6 4h6v2H9v-2z"/>
    </svg>
  },
  {
    name: 'Fire',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M13.5.67s.74 2.65.74 4.8c0 2.06-1.35 3.73-3.41 3.73-2.07 0-3.63-1.67-3.63-3.73l.03-.36C5.21 7.51 4 10.62 4 14c0 4.42 3.58 8 8 8s8-3.58 8-8C20 8.61 17.41 3.8 13.5.67zM11.71 19c-1.78 0-3.22-1.4-3.22-3.14 0-1.62 1.05-2.76 2.81-3.12 1.77-.36 3.6-1.21 4.62-2.58.39 1.29.59 2.65.59 4.04 0 2.65-2.15 4.8-4.8 4.8z"/>
    </svg>
  },
  {
    name: 'Wand',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M7 1l4 4-4 4-4-4 4-4zm13 11l-3-3-8.5 8.5 3 3L21 12zM3 19l-2 5 5-2-3-3z"/>
    </svg>
  },
  {
    name: 'Heart',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
    </svg>
  },
  {
    name: 'Shield',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/>
    </svg>
  },
  {
    name: 'Diamond',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M19 3H5L2 9l10 12L22 9l-3-6zM12 19.3L3.5 9h17L12 19.3zM7.75 5h8.5L14 9H10L7.75 5z"/>
    </svg>
  },
  {
    name: 'Graduation',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M12 3L1 9l4 2.18v6L12 21l7-3.82v-6l2-1.09V17h2V9L12 3zm6.82 6L12 12.72 5.18 9 12 5.28 18.82 9zM17 15.99l-5 2.73-5-2.73v-3.72L12 15l5-2.73v3.72z"/>
    </svg>
  },
  {
    name: 'Pencil',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
    </svg>
  },
  {
    name: 'Document',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11zM8 15h8v2H8v-2zm0-4h8v2H8v-2zm0-4h5v2H8V7z"/>
    </svg>
  },
  {
    name: 'Folder',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M10 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z"/>
    </svg>
  },
  {
    name: 'Mail',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
    </svg>
  },
  {
    name: 'Phone',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
    </svg>
  },
  {
    name: 'Notification',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/>
    </svg>
  },
  {
    name: 'Settings',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/>
    </svg>
  },
  {
    name: 'Chip',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M6 18h12V6H6v12zm2-10h8v8H8V8zm11-6h2v4h-2V2zM3 2h2v4H3V2zm16 16h2v4h-2v-4zm-16 0h2v4H3v-4zM10 2h4v2h-4V2zm0 18h4v2h-4v-2zM2 10h2v4H2v-4zm18 0h2v4h-2v-4z"/>
    </svg>
  },
  {
    name: 'Wifi',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3c-1.65-1.66-4.34-1.66-6 0zm-4-4l2 2c2.76-2.76 7.24-2.76 10 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
    </svg>
  },
  {
    name: 'Download',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/>
    </svg>
  },
  {
    name: 'Upload',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M9 16h6v-6h4l-7-7-7 7h4zm-4 2h14v2H5z"/>
    </svg>
  },
  {
    name: 'Search',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
    </svg>
  },
  {
    name: 'Eye',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"/>
    </svg>
  },
  {
    name: 'Lock',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M18 8h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6zm9 14H6V10h12v10zm-6-3c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z"/>
    </svg>
  },
  {
    name: 'Key',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M12.65 10C11.83 7.67 9.61 6 7 6c-3.31 0-6 2.69-6 6s2.69 6 6 6c2.61 0 4.83-1.67 5.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
    </svg>
  },
  {
    name: 'User',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
    </svg>
  },
  {
    name: 'Users',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
    </svg>
  },
  {
    name: 'Trophy',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M19 5h-2V3H7v2H5c-1.1 0-2 .9-2 2v1c0 2.55 1.92 4.63 4.39 4.94.63 1.5 1.98 2.63 3.61 2.96V19H7v2h10v-2h-4v-3.1c1.63-.33 2.98-1.46 3.61-2.96C19.08 12.63 21 10.55 21 8V7c0-1.1-.9-2-2-2zM5 8V7h2v3.82C5.84 10.4 5 9.3 5 8zm14 0c0 1.3-.84 2.4-2 2.82V7h2v1z"/>
    </svg>
  },
  {
    name: 'Award',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0 8c-1.66 0-3-1.34-3-3s1.34-3 3-3 3 1.34 3 3-1.34 3-3 3zm7-3c0-3.31-2.69-6-6-6V2l-4 4 4 4V6c2.21 0 4 1.79 4 4s-1.79 4-4 4v2c3.31 0 6-2.69 6-6z"/>
    </svg>
  },
  {
    name: 'Compass',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.2 14.2L11 13l-3.2 5.2L11 15l5.2 1.2z"/>
    </svg>
  },
  {
    name: 'Map',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M20.5 3l-.16.03L15 5.1 9 3 3.36 4.9c-.21.07-.36.25-.36.48V20.5c0 .28.22.5.5.5l.16-.03L9 18.9l6 2.1 5.64-1.9c.21-.07.36-.25.36-.48V3.5c0-.28-.22-.5-.5-.5zM15 19l-6-2.11V5l6 2.11V19z"/>
    </svg>
  },
  {
    name: 'Location',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
    </svg>
  },
  {
    name: 'Target',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm0 10c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0-6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/>
    </svg>
  },
  {
    name: 'Timer',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M15 1H9v2h6V1zm-4 13h2V8h-2v6zm8.03-6.61l1.42-1.42c-.43-.51-.9-.99-1.41-1.41l-1.42 1.42C16.07 4.74 14.12 4 12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9 9-4.03 9-9c0-2.12-.74-4.07-1.97-5.61zM12 20c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7z"/>
    </svg>
  },
  {
    name: 'Calendar',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V9h14v10zM5 7V5h14v2H5zm2 4h10v2H7v-2z"/>
    </svg>
  },
  {
    name: 'Clock',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
    </svg>
  },
  {
    name: 'Trending',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
    </svg>
  },
  {
    name: 'Analytics',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/>
    </svg>
  },
  {
    name: 'Dashboard',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/>
    </svg>
  },
  {
    name: 'Layers',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M11.99 18.54l-7.37-5.73L3 14.07l9 7 9-7-1.63-1.27-7.38 5.74zM12 16l7.36-5.73L21 9l-9-7-9 7 1.63 1.27L12 16z"/>
    </svg>
  },
  {
    name: 'Database',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M12 3C7.58 3 4 4.79 4 7s3.58 4 8 4 8-1.79 8-4-3.58-4-8-4zM4 9v3c0 2.21 3.58 4 8 4s8-1.79 8-4V9c0 2.21-3.58 4-8 4s-8-1.79-8-4zm0 5v3c0 2.21 3.58 4 8 4s8-1.79 8-4v-3c0 2.21-3.58 4-8 4s-8-1.79-8-4z"/>
    </svg>
  },
  {
    name: 'Server',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M20 13H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-6c0-.55-.45-1-1-1zM7 19c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zM20 3H4c-.55 0-1 .45-1 1v6c0 .55.45 1 1 1h16c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1zM7 9c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
    </svg>
  },
  {
    name: 'Terminal',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4V8h16v10zm-2-1h-6v-2h6v2zM7.5 17l-1.41-1.41L8.67 13l-2.58-2.59L7.5 9l4 4-4 4z"/>
    </svg>
  },
  {
    name: 'Puzzle',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-2 .9-2 2v3.8h1.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/>
    </svg>
  },
  {
    name: 'Gift',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zm11 15H4v-2h16v2zm0-5H4V8h5.08L7 10.83 8.62 12 11 8.76l1-1.36 1 1.36L15.38 12 17 10.83 14.92 8H20v6z"/>
    </svg>
  },
  {
    name: 'Megaphone',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M12 8c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2s-2 .9-2 2v3c0 1.1.9 2 2 2zm-1.42 4.58L5 17.17V19h3v3h2v-6l5-3.83v-2.67l-4.42 3.08zM19 6c-1.1 0-2 .9-2 2v3.17l2.83-2.12c.11-.09.17-.22.17-.36V8c0-1.1-.9-2-2-2z"/>
    </svg>
  },
  {
    name: 'Flag',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M14.4 6L14 4H5v17h2v-7h5.6l.4 2h7V6z"/>
    </svg>
  },
  {
    name: 'Bookmark',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
    </svg>
  },
  {
    name: 'Tag',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M21.41 11.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.42l9 9c.36.36.86.58 1.41.58.55 0 1.05-.22 1.41-.59l7-7c.37-.36.59-.86.59-1.41 0-.55-.23-1.06-.59-1.42zM5.5 7C4.67 7 4 6.33 4 5.5S4.67 4 5.5 4 7 4.67 7 5.5 6.33 7 5.5 7z"/>
    </svg>
  },
  {
    name: 'Link',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/>
    </svg>
  },
  {
    name: 'Scan',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M4 4h4V2H3c-.55 0-1 .45-1 1v5h2V4zm0 12H2v5c0 .55.45 1 1 1h5v-2H4v-4zm16 4h-4v2h5c.55 0 1-.45 1-1v-5h-2v4zM20 2h-5v2h4v4h2V3c0-.55-.45-1-1-1zM3 11h18v2H3z"/>
    </svg>
  },
  {
    name: 'Fingerprint',
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-gray-700">
      <path d="M17.81 4.47c-.08 0-.16-.02-.23-.06C15.66 3.42 14 3 12.01 3c-1.98 0-3.86.47-5.57 1.41-.24.13-.54.04-.68-.2-.13-.24-.04-.55.2-.68C7.82 2.52 9.86 2 12.01 2c2.13 0 3.99.47 6.03 1.52.25.13.34.43.21.67-.09.18-.26.28-.44.28zM3.5 9.72c-.1 0-.2-.03-.29-.09-.23-.16-.28-.47-.12-.7.99-1.4 2.25-2.5 3.75-3.27C9.98 4.04 14 4.03 17.15 5.65c1.5.77 2.76 1.86 3.75 3.25.16.22.11.54-.12.7-.23.16-.54.11-.7-.12-.9-1.26-2.04-2.25-3.39-2.94-2.87-1.47-6.54-1.47-9.4.01-1.36.7-2.5 1.7-3.4 2.96-.08.14-.23.21-.39.21zm6.25 12.07c-.13 0-.26-.05-.35-.15-.87-.87-1.34-1.43-2.01-2.64-.69-1.23-1.05-2.73-1.05-4.34 0-2.97 2.54-5.39 5.66-5.39s5.66 2.42 5.66 5.39c0 .28-.22.5-.5.5s-.5-.22-.5-.5c0-2.42-2.09-4.39-4.66-4.39-2.57 0-4.66 1.97-4.66 4.39 0 1.44.32 2.77.93 3.85.64 1.15 1.08 1.64 1.85 2.42.19.2.19.51 0 .71-.11.1-.24.15-.37.15zm7.17-1.85c-1.19 0-2.24-.3-3.1-.89-1.49-1.01-2.38-2.65-2.38-4.39 0-.28.22-.5.5-.5s.5.22.5.5c0 1.41.72 2.74 1.94 3.56.71.48 1.54.71 2.54.71.24 0 .64-.03 1.04-.1.27-.05.53.13.58.41.05.27-.13.53-.41.58-.57.11-1.07.12-1.21.12zM14.91 22c-.04 0-.09-.01-.13-.02-1.59-.44-2.63-1.03-3.72-2.1-1.4-1.39-2.17-3.24-2.17-5.22 0-1.62 1.38-2.94 3.08-2.94 1.7 0 3.08 1.32 3.08 2.94 0 1.07.93 1.94 2.08 1.94s2.08-.87 2.08-1.94c0-3.77-3.25-6.83-7.25-6.83-2.84 0-5.44 1.58-6.61 4.03-.39.81-.59 1.76-.59 2.8 0 .78.07 2.01.67 3.61.1.26-.03.55-.29.64-.26.1-.55-.04-.64-.29-.49-1.31-.73-2.61-.73-3.96 0-1.2.23-2.29.68-3.24 1.33-2.79 4.28-4.6 7.51-4.6 4.55 0 8.25 3.51 8.25 7.83 0 1.62-1.38 2.94-3.08 2.94s-3.08-1.32-3.08-2.94c0-1.07-.93-1.94-2.08-1.94s-2.08.87-2.08 1.94c0 1.71.66 3.31 1.87 4.51.95.94 1.86 1.46 3.27 1.85.27.07.42.35.35.61-.05.23-.26.38-.47.38z"/>
    </svg>
  }
];

// Helper function to get icon by name
export const getIconByName = (name: string): React.ReactElement => {
  const iconOption = ICON_LIBRARY.find(icon => icon.name === name);
  return iconOption ? iconOption.icon : ICON_LIBRARY[0].icon;
};
