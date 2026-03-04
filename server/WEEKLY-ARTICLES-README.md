# Weekly Hot Issue Articles

This file contains 52 curated AI news articles (one for each week of the year) that automatically rotate on the homepage banner.

## How It Works

- **Week calculation**: Based on calendar week number (1-52)
- **Auto-rotation**: Banner content changes automatically each Monday
- **Bilingual**: Each article has English and Korean versions
- **Links included**: Real, authoritative AI news sources

## Article Structure

```json
{
  "week": 1,
  "en": {
    "title": "This Week's AI Hot Issue",
    "subtitle": "Main headline",
    "description": "Brief description of the topic",
    "link": "https://source-url.com"
  },
  "ko": {
    "title": "이번 주 AI 핫 이슈",
    "subtitle": "메인 헤드라인",
    "description": "주제에 대한 간단한 설명",
    "link": "https://source-url.com"
  }
}
```

## Topics Covered

1. AI in Education
2. Multimodal AI Models
3. AI Code Assistants
4. AI-Generated Video
5. Voice AI & Translation
6. AI Agents & Automation
7. AI in Healthcare
8. Open Source AI Models
9. AI Ethics & Regulation
10. Generative AI for Design
... and 42 more topics covering the full spectrum of AI innovation

## Updating Articles

To update or add articles:

1. Edit `weekly-articles.json`
2. Follow the existing structure
3. Ensure week numbers are 1-52
4. Use reputable AI news sources for links
5. Keep descriptions concise (1-2 sentences)
6. Translate accurately for Korean version

## Links Source Quality

All links point to:
- Official company blogs (OpenAI, Google, Microsoft, etc.)
- Academic sources (Nature, arXiv, Stanford HAI)
- Reputable tech news outlets
- Industry organizations (OECD, WHO, etc.)

These sources are future-proof and will remain relevant for years.

## Admin Override

Admins can:
- View current auto-rotated article in Admin Panel
- Override with custom content (switches to "Custom Mode")
- Reset back to auto-rotation anytime

## Current Week Detection

The system automatically calculates the current week number:
```javascript
const getCurrentWeek = () => {
  const now = new Date();
  const start = new Date(now.getFullYear(), 0, 1);
  const diff = now - start;
  const oneWeek = 1000 * 60 * 60 * 24 * 7;
  return Math.ceil(diff / oneWeek);
};
```

Week 1 = First week of January
Week 52 = Last week of December
