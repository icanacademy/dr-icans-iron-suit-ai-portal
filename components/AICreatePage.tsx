import React, { useState } from 'react';
import type { Language } from '../types';
import { translations } from '../translations';

interface AICreatePageProps {
  language: Language;
}

interface CreationTool {
  name: string;
  description: string;
  category: string;
  url: string;
  icon: string;
}

interface PromptTemplate {
  title: string;
  description: string;
  prompt: string;
  category: string;
}

const AICreatePage: React.FC<AICreatePageProps> = ({ language }) => {
  const t = translations[language];
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const creationTools: CreationTool[] = [
    {
      name: 'Lesson Plan Generator',
      description: 'Create comprehensive lesson plans with objectives, activities, and assessments',
      category: 'Planning',
      url: 'https://chat.openai.com/',
      icon: '📚'
    },
    {
      name: 'Worksheet Creator',
      description: 'Generate custom worksheets, quizzes, and practice problems',
      category: 'Materials',
      url: 'https://www.canva.com/create/worksheets/',
      icon: '📝'
    },
    {
      name: 'Presentation Designer',
      description: 'Design engaging slides and visual presentations',
      category: 'Visual',
      url: 'https://www.canva.com/create/presentations/',
      icon: '🎨'
    },
    {
      name: 'Image Generator',
      description: 'Create custom images and illustrations for teaching materials',
      category: 'Visual',
      url: 'https://www.midjourney.com/',
      icon: '🖼️'
    },
    {
      name: 'Video Script Writer',
      description: 'Write engaging scripts for educational videos',
      category: 'Video',
      url: 'https://chat.openai.com/',
      icon: '🎬'
    },
    {
      name: 'Assessment Builder',
      description: 'Create tests, quizzes, and rubrics for student evaluation',
      category: 'Assessment',
      url: 'https://chat.openai.com/',
      icon: '✅'
    },
    {
      name: 'Interactive Activity Designer',
      description: 'Design games, puzzles, and interactive learning activities',
      category: 'Activities',
      url: 'https://www.canva.com/',
      icon: '🎮'
    },
    {
      name: 'Study Guide Creator',
      description: 'Generate comprehensive study guides and review materials',
      category: 'Materials',
      url: 'https://chat.openai.com/',
      icon: '📖'
    }
  ];

  const promptTemplates: PromptTemplate[] = [
    {
      title: 'Lesson Plan Generator',
      description: 'Create a complete lesson plan for any topic',
      category: 'Planning',
      prompt: `Create a detailed lesson plan for [SUBJECT] on [TOPIC] for [GRADE LEVEL] students. Include:
1. Learning objectives (knowledge, skills, attitudes)
2. Materials needed
3. Warm-up activity (5-10 minutes)
4. Main instruction (20-30 minutes)
5. Practice activities (15-20 minutes)
6. Assessment methods
7. Homework/extension activities
8. Differentiation strategies for diverse learners

Format it clearly and make it engaging.`
    },
    {
      title: 'Quiz Generator',
      description: 'Create customized quizzes with answer keys',
      category: 'Assessment',
      prompt: `Create a [NUMBER]-question quiz on [TOPIC] for [GRADE LEVEL] students. Include:
- [X] multiple choice questions
- [Y] short answer questions
- [Z] true/false questions

Provide:
1. Clear questions with appropriate difficulty
2. Answer key with explanations
3. Point values for each question
4. Estimated time to complete

Make questions test understanding, not just memorization.`
    },
    {
      title: 'Worksheet Creator',
      description: 'Generate practice worksheets with exercises',
      category: 'Materials',
      prompt: `Create a worksheet on [TOPIC] for [GRADE LEVEL] students. Include:
1. Clear title and instructions
2. [NUMBER] varied practice problems/exercises
3. Space for student work
4. Challenge questions for advanced students
5. Answer key

Format it ready to print. Include visual elements where helpful.`
    },
    {
      title: 'Story Problem Generator',
      description: 'Create engaging word problems',
      category: 'Materials',
      prompt: `Create [NUMBER] story problems for [SUBJECT] on [TOPIC] appropriate for [GRADE LEVEL]. Make them:
- Relatable to students' lives
- Culturally diverse
- Progressively challenging
- Include real-world applications

Provide solutions with step-by-step explanations.`
    },
    {
      title: 'Project Rubric',
      description: 'Design assessment rubrics',
      category: 'Assessment',
      prompt: `Create a detailed rubric for a [PROJECT TYPE] project on [TOPIC] for [GRADE LEVEL]. Include:
1. 4-6 assessment criteria
2. 4 performance levels (Excellent, Good, Satisfactory, Needs Improvement)
3. Clear descriptors for each level
4. Point values
5. Total points possible

Make criteria measurable and specific.`
    },
    {
      title: 'Discussion Questions',
      description: 'Generate thought-provoking discussion prompts',
      category: 'Activities',
      prompt: `Create [NUMBER] discussion questions about [TOPIC] for [GRADE LEVEL] students. Include:
- Questions at different thinking levels (recall, analysis, evaluation, creation)
- Open-ended questions that encourage multiple perspectives
- Follow-up questions to deepen discussion
- Connection to real-world applications

Format them for easy classroom use.`
    },
    {
      title: 'Parent Communication',
      description: 'Draft emails or newsletters to parents',
      category: 'Communication',
      prompt: `Write a [EMAIL/NEWSLETTER] to parents about [TOPIC/EVENT]. Include:
1. Warm, professional greeting
2. Clear explanation of [TOPIC]
3. What students will learn/do
4. How parents can support at home
5. Important dates or action items
6. Contact information for questions

Keep tone positive and encouraging. Translate to [LANGUAGE] if needed.`
    },
    {
      title: 'Differentiation Strategies',
      description: 'Create adaptations for diverse learners',
      category: 'Planning',
      prompt: `Provide differentiation strategies for teaching [TOPIC] to [GRADE LEVEL] students. Include:

1. For struggling learners:
   - Scaffolding techniques
   - Simplified materials
   - Extra support strategies

2. For advanced learners:
   - Extension activities
   - Challenge problems
   - Independent projects

3. For English language learners:
   - Visual supports
   - Vocabulary scaffolds
   - Language modifications

4. For students with special needs:
   - Accommodations
   - Modified assessments
   - Alternative formats`
    }
  ];

  const categories = ['all', 'Planning', 'Materials', 'Visual', 'Video', 'Assessment', 'Activities', 'Communication'];

  const filteredTools = selectedCategory === 'all'
    ? creationTools
    : creationTools.filter(tool => tool.category === selectedCategory);

  const filteredPrompts = selectedCategory === 'all'
    ? promptTemplates
    : promptTemplates.filter(template => template.category === selectedCategory);

  const copyPrompt = (prompt: string, title: string) => {
    navigator.clipboard.writeText(prompt);
    setCopiedPrompt(title);
    setTimeout(() => setCopiedPrompt(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
          {language === 'en' ? 'AI Creation Tools for Teachers' : '교사를 위한 AI 생성 도구'}
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {language === 'en'
            ? 'Create engaging lessons, materials, and assessments with AI-powered tools and ready-to-use prompt templates'
            : 'AI 기반 도구와 바로 사용 가능한 프롬프트 템플릿으로 매력적인 수업, 자료 및 평가를 생성하세요'}
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

      {/* Quick Creation Tools */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {language === 'en' ? '🚀 Quick Creation Tools' : '🚀 빠른 생성 도구'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredTools.map((tool, index) => (
            <a
              key={index}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-6 border border-gray-200 hover:border-blue-400"
            >
              <div className="text-4xl mb-3">{tool.icon}</div>
              <h3 className="font-bold text-lg text-gray-900 mb-2">{tool.name}</h3>
              <p className="text-sm text-gray-600">{tool.description}</p>
              <div className="mt-3">
                <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">
                  {tool.category}
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Prompt Templates */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          {language === 'en' ? '📋 Ready-to-Use Prompt Templates' : '📋 즉시 사용 가능한 프롬프트 템플릿'}
        </h2>
        <div className="space-y-4">
          {filteredPrompts.map((template, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-bold text-lg text-gray-900">{template.title}</h3>
                  <p className="text-sm text-gray-600 mt-1">{template.description}</p>
                </div>
                <span className="inline-block px-3 py-1 text-xs font-medium bg-green-100 text-green-800 rounded whitespace-nowrap ml-4">
                  {template.category}
                </span>
              </div>
              <div className="bg-gray-50 rounded p-4 mb-3 border border-gray-200">
                <pre className="text-sm text-gray-700 whitespace-pre-wrap font-mono">{template.prompt}</pre>
              </div>
              <button
                onClick={() => copyPrompt(template.prompt, template.title)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  copiedPrompt === template.title
                    ? 'bg-green-600 text-white'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                {copiedPrompt === template.title
                  ? (language === 'en' ? '✓ Copied!' : '✓ 복사됨!')
                  : (language === 'en' ? '📋 Copy Prompt' : '📋 프롬프트 복사')
                }
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Tips Section */}
      <section className="bg-blue-50 rounded-lg p-8 border border-blue-200">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          {language === 'en' ? '💡 Tips for Using AI Creation Tools' : '💡 AI 생성 도구 사용 팁'}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              {language === 'en' ? 'Be Specific' : '구체적으로 작성하기'}
            </h3>
            <p className="text-gray-700">
              {language === 'en'
                ? 'Include grade level, subject, topic details, and specific requirements for best results.'
                : '최상의 결과를 위해 학년, 과목, 주제 세부 사항 및 구체적인 요구 사항을 포함하세요.'}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              {language === 'en' ? 'Iterate and Refine' : '반복하고 다듬기'}
            </h3>
            <p className="text-gray-700">
              {language === 'en'
                ? 'Review AI output and ask for modifications. AI tools work best with feedback.'
                : 'AI 출력을 검토하고 수정을 요청하세요. AI 도구는 피드백과 함께 가장 잘 작동합니다.'}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              {language === 'en' ? 'Customize for Your Class' : '수업에 맞게 맞춤화'}
            </h3>
            <p className="text-gray-700">
              {language === 'en'
                ? 'Always adapt AI-generated content to match your students\' needs and your teaching style.'
                : '항상 AI 생성 콘텐츠를 학생들의 요구와 교수 스타일에 맞게 조정하세요.'}
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              {language === 'en' ? 'Verify Accuracy' : '정확성 확인'}
            </h3>
            <p className="text-gray-700">
              {language === 'en'
                ? 'Always review content for accuracy, especially in math, science, and historical facts.'
                : '특히 수학, 과학 및 역사적 사실의 정확성을 항상 검토하세요.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICreatePage;
