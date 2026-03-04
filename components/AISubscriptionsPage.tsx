import React, { useState } from 'react';
import type { Language } from '../types';
import { translations } from '../translations';

interface AISubscriptionsPageProps {
  language: Language;
}

interface Subscription {
  name: string;
  provider: string;
  description: string;
  freeTier: string;
  paidTiers: {
    name: string;
    price: string;
    features: string[];
  }[];
  bestFor: string;
  url: string;
  recommended?: boolean;
}

const AISubscriptionsPage: React.FC<AISubscriptionsPageProps> = ({ language }) => {
  const t = translations[language];
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const subscriptions: Subscription[] = [
    {
      name: 'ChatGPT',
      provider: 'OpenAI',
      description: 'Most versatile AI assistant for lesson planning, content creation, and student support',
      freeTier: 'GPT-3.5 access with limited features',
      paidTiers: [
        {
          name: 'Plus',
          price: '$20/month',
          features: [
            'GPT-4 access',
            'Faster response times',
            'Priority access during peak times',
            'Image generation with DALL-E',
            'Advanced data analysis',
            'Custom GPTs'
          ]
        },
        {
          name: 'Team',
          price: '$25/user/month',
          features: [
            'All Plus features',
            'Team workspace',
            'Admin console',
            'Shared custom GPTs',
            'Higher message caps'
          ]
        }
      ],
      bestFor: 'General teaching tasks, lesson planning, content creation',
      url: 'https://chat.openai.com/',
      recommended: true
    },
    {
      name: 'Claude',
      provider: 'Anthropic',
      description: 'Excellent for long-form content, analysis, and detailed explanations',
      freeTier: 'Limited daily messages',
      paidTiers: [
        {
          name: 'Pro',
          price: '$20/month',
          features: [
            'Claude 3 Opus access',
            '5x more usage',
            'Priority access',
            'Early access to new features',
            'Extended context window'
          ]
        }
      ],
      bestFor: 'Detailed explanations, curriculum development, essay feedback',
      url: 'https://claude.ai/',
      recommended: true
    },
    {
      name: 'Gemini',
      provider: 'Google',
      description: 'Integrated with Google Workspace, great for document collaboration',
      freeTier: 'Gemini free version',
      paidTiers: [
        {
          name: 'Advanced',
          price: '$19.99/month',
          features: [
            'Gemini Advanced (1.5 Pro)',
            '1 million token context',
            'Priority access',
            'Google One AI Premium (2TB storage)',
            'Integration with Gmail, Docs, Sheets'
          ]
        }
      ],
      bestFor: 'Google Workspace users, document collaboration',
      url: 'https://gemini.google.com/',
      recommended: false
    },
    {
      name: 'Midjourney',
      provider: 'Midjourney',
      description: 'Best AI image generator for creating custom illustrations and visual materials',
      freeTier: 'No free tier',
      paidTiers: [
        {
          name: 'Basic',
          price: '$10/month',
          features: [
            '200 images per month',
            'General commercial terms',
            'Access to member gallery'
          ]
        },
        {
          name: 'Standard',
          price: '$30/month',
          features: [
            'Unlimited relaxed generations',
            '15 hrs fast generations',
            'General commercial terms'
          ]
        }
      ],
      bestFor: 'Visual learning materials, posters, illustrations',
      url: 'https://www.midjourney.com/',
      recommended: false
    },
    {
      name: 'Canva Pro',
      provider: 'Canva',
      description: 'Design platform with AI features for creating educational materials',
      freeTier: 'Free version with limited features',
      paidTiers: [
        {
          name: 'Pro',
          price: '$12.99/month',
          features: [
            'AI-powered design tools',
            '100 million+ premium images',
            'Brand kit',
            'Background remover',
            'Magic Resize',
            'Unlimited folders'
          ]
        },
        {
          name: 'Teams',
          price: '$14.99/user/month (min 3)',
          features: [
            'All Pro features',
            'Team templates',
            'Collaboration tools',
            'Brand controls',
            'Workflow management'
          ]
        }
      ],
      bestFor: 'Worksheets, presentations, posters, social media',
      url: 'https://www.canva.com/',
      recommended: true
    },
    {
      name: 'Grammarly',
      provider: 'Grammarly',
      description: 'AI writing assistant for improving student writing and teacher feedback',
      freeTier: 'Basic grammar and spelling checks',
      paidTiers: [
        {
          name: 'Premium',
          price: '$12/month (annual)',
          features: [
            'Advanced grammar checks',
            'Tone detection',
            'Clarity suggestions',
            'Vocabulary enhancement',
            'Plagiarism detection'
          ]
        }
      ],
      bestFor: 'Writing instruction, student feedback, professional communication',
      url: 'https://www.grammarly.com/',
      recommended: false
    },
    {
      name: 'Perplexity Pro',
      provider: 'Perplexity',
      description: 'AI research assistant with real-time web access',
      freeTier: 'Limited searches',
      paidTiers: [
        {
          name: 'Pro',
          price: '$20/month',
          features: [
            'Unlimited Pro searches',
            'GPT-4 access',
            'Claude 3 access',
            'File upload and analysis',
            'API access'
          ]
        }
      ],
      bestFor: 'Research, current events, fact-checking',
      url: 'https://www.perplexity.ai/',
      recommended: false
    },
    {
      name: 'ElevenLabs',
      provider: 'ElevenLabs',
      description: 'AI voice generation for creating audio content',
      freeTier: '10,000 characters/month',
      paidTiers: [
        {
          name: 'Starter',
          price: '$5/month',
          features: [
            '30,000 characters/month',
            'Voice cloning',
            'Commercial license'
          ]
        },
        {
          name: 'Creator',
          price: '$22/month',
          features: [
            '100,000 characters/month',
            'Professional voice cloning',
            'Projects workspace'
          ]
        }
      ],
      bestFor: 'Audio lessons, accessibility, language learning',
      url: 'https://elevenlabs.io/',
      recommended: false
    }
  ];

  const categories = ['all', 'Essential', 'Visual', 'Writing', 'Research', 'Audio'];

  const getCategoryForSub = (sub: Subscription) => {
    if (sub.name === 'ChatGPT' || sub.name === 'Claude' || sub.name === 'Gemini') return 'Essential';
    if (sub.name === 'Midjourney' || sub.name === 'Canva Pro') return 'Visual';
    if (sub.name === 'Grammarly') return 'Writing';
    if (sub.name === 'Perplexity Pro') return 'Research';
    if (sub.name === 'ElevenLabs') return 'Audio';
    return 'Essential';
  };

  const filteredSubscriptions = selectedCategory === 'all'
    ? subscriptions
    : subscriptions.filter(sub => getCategoryForSub(sub) === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
          {language === 'en' ? 'AI Subscription Services for Teachers' : '교사를 위한 AI 구독 서비스'}
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {language === 'en'
            ? 'Compare popular AI services, pricing plans, and find the best tools for your teaching needs'
            : '인기 있는 AI 서비스, 가격 플랜을 비교하고 교육 요구에 가장 적합한 도구를 찾으세요'}
        </p>
      </header>

      {/* Category Filter */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category === 'all' ? (language === 'en' ? 'All' : '전체') : category}
            </button>
          ))}
        </div>
      </div>

      {/* Quick Recommendations */}
      <section className="mb-12 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-8 border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {language === 'en' ? '⭐ Recommended for Teachers' : '⭐ 교사 추천'}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="font-bold text-lg text-gray-900 mb-2">🚀 Must-Have</h3>
            <p className="text-sm text-gray-600 mb-3">Start with one AI assistant</p>
            <ul className="text-sm space-y-1">
              <li className="text-blue-600">• ChatGPT Plus ($20/mo)</li>
              <li className="text-gray-600">or Claude Pro ($20/mo)</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="font-bold text-lg text-gray-900 mb-2">🎨 For Visual Content</h3>
            <p className="text-sm text-gray-600 mb-3">Create engaging materials</p>
            <ul className="text-sm space-y-1">
              <li className="text-blue-600">• Canva Pro ($13/mo)</li>
              <li className="text-gray-600">Most versatile for teachers</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="font-bold text-lg text-gray-900 mb-2">💰 Budget Option</h3>
            <p className="text-sm text-gray-600 mb-3">Start free, upgrade later</p>
            <ul className="text-sm space-y-1">
              <li className="text-blue-600">• Use free tiers first</li>
              <li className="text-gray-600">Add paid tools as needed</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Subscription Cards */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {language === 'en' ? '📊 Detailed Comparisons' : '📊 상세 비교'}
        </h2>
        <div className="space-y-6">
          {filteredSubscriptions.map((sub, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg shadow-lg p-6 border-2 ${
                sub.recommended ? 'border-yellow-400 bg-yellow-50' : 'border-gray-200'
              }`}
            >
              {sub.recommended && (
                <div className="inline-block px-3 py-1 bg-yellow-400 text-gray-900 text-xs font-bold rounded-full mb-3">
                  {language === 'en' ? '⭐ RECOMMENDED' : '⭐ 추천'}
                </div>
              )}

              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">{sub.name}</h3>
                  <p className="text-sm text-gray-500">{sub.provider}</p>
                </div>
                <a
                  href={sub.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
                >
                  {language === 'en' ? 'Visit Site' : '사이트 방문'}
                </a>
              </div>

              <p className="text-gray-700 mb-4">{sub.description}</p>

              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-green-100 text-green-800 text-sm font-medium rounded">
                  {language === 'en' ? 'Best for: ' : '최적 용도: '}{sub.bestFor}
                </span>
              </div>

              {/* Free Tier */}
              <div className="mb-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
                <h4 className="font-semibold text-gray-900 mb-2">
                  {language === 'en' ? '🆓 Free Tier' : '🆓 무료 버전'}
                </h4>
                <p className="text-sm text-gray-700">{sub.freeTier}</p>
              </div>

              {/* Paid Tiers */}
              <div className="grid md:grid-cols-2 gap-4">
                {sub.paidTiers.map((tier, tierIndex) => (
                  <div key={tierIndex} className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <div className="flex items-baseline justify-between mb-3">
                      <h4 className="font-bold text-lg text-gray-900">{tier.name}</h4>
                      <span className="text-xl font-bold text-blue-600">{tier.price}</span>
                    </div>
                    <ul className="space-y-2">
                      {tier.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-700 flex items-start">
                          <span className="text-blue-600 mr-2">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Budget Planning Section */}
      <section className="mb-12 bg-green-50 rounded-lg p-8 border border-green-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {language === 'en' ? '💰 Budget Planning Guide' : '💰 예산 계획 가이드'}
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Starter Package</h3>
            <p className="text-3xl font-bold text-green-600 mb-2">$0-20/mo</p>
            <ul className="text-sm space-y-2 text-gray-700">
              <li>✓ Free AI tools (ChatGPT, Claude, Gemini)</li>
              <li>✓ Free Canva version</li>
              <li>✓ Perfect for trying AI in teaching</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md border-2 border-green-500">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Recommended Package</h3>
            <p className="text-3xl font-bold text-green-600 mb-2">$33/mo</p>
            <ul className="text-sm space-y-2 text-gray-700">
              <li>✓ ChatGPT Plus ($20)</li>
              <li>✓ Canva Pro ($13)</li>
              <li>✓ Covers 90% of teaching needs</li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-6 shadow-md">
            <h3 className="font-bold text-lg text-gray-900 mb-3">Power User Package</h3>
            <p className="text-3xl font-bold text-green-600 mb-2">$53+/mo</p>
            <ul className="text-sm space-y-2 text-gray-700">
              <li>✓ ChatGPT Plus ($20)</li>
              <li>✓ Claude Pro ($20)</li>
              <li>✓ Canva Pro ($13)</li>
              <li>✓ For heavy AI users</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-purple-50 rounded-lg p-8 border border-purple-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {language === 'en' ? '💡 Smart Subscription Tips' : '💡 스마트 구독 팁'}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              {language === 'en' ? 'Start with Free Tiers' : '무료 버전으로 시작'}
            </h3>
            <p className="text-gray-700">
              {language === 'en'
                ? 'Test tools with free versions before committing to paid subscriptions. Most free tiers are sufficient for light use.'
                : '유료 구독을 결정하기 전에 무료 버전으로 도구를 테스트하세요. 대부분의 무료 버전은 가벼운 사용에 충분합니다.'}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              {language === 'en' ? 'Annual vs Monthly' : '연간 vs 월간'}
            </h3>
            <p className="text-gray-700">
              {language === 'en'
                ? 'Annual subscriptions typically save 20-30%. Only commit annually after testing the service for a month.'
                : '연간 구독은 일반적으로 20-30% 절약됩니다. 서비스를 한 달 동안 테스트한 후에만 연간 구독을 하세요.'}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              {language === 'en' ? 'School Accounts' : '학교 계정'}
            </h3>
            <p className="text-gray-700">
              {language === 'en'
                ? 'Ask your school to provide subscriptions. Many services offer education discounts or site licenses.'
                : '학교에 구독을 제공하도록 요청하세요. 많은 서비스가 교육 할인 또는 사이트 라이선스를 제공합니다.'}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              {language === 'en' ? 'Cancel Anytime' : '언제든 취소'}
            </h3>
            <p className="text-gray-700">
              {language === 'en'
                ? 'Most subscriptions can be cancelled anytime. Don\'t be afraid to try and cancel if it doesn\'t meet your needs.'
                : '대부분의 구독은 언제든지 취소할 수 있습니다. 필요에 맞지 않으면 시도하고 취소하는 것을 두려워하지 마세요.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AISubscriptionsPage;
