export type Language = 'en' | 'ko';

export const translations: Record<Language, any> = {
  en: {
    // Header
    nav_ai_shortcuts: 'AI Shortcuts',
    nav_ai_create: 'AI Create',
    nav_ai_subscriptions: 'AI Subscriptions',
    nav_creator_lounge: 'Creator Lounge',
    nav_solomons_guide: "Solomon's Guide",

    // Banner
    hot_issue_title: "This Week's AI Hot Issue",
    hot_issue_text_title: "The Rise of Multimodal AI",
    hot_issue_text_desc: "Exploring the latest advancements combining text, image, and audio for revolutionary new applications.",

    // Tool Categories
    category_favorites: 'Favorites',
    category_ai_agent: 'AI Agent',
    category_class_management: 'Class Management',
    category_image: 'Image',
    category_video: 'Video',
    category_voice_lipsync: 'Voice/Lip-Sync',
    login_required: 'Login Required',

    // Tool Names
    tool_monitoring_report: 'ICAN Stellar Daily Monitoring Report',

    // Solomon's Guide Page
    solomon_title: "3 Ways to Use GPT 'Truly Smartly'",
    solomon_subtitle: "People who use GPT really well do not just ask questions; they use it in a completely different way. Experts who have outstanding GPT utilization skills commonly possess exactly three abilities. If you only change these three things, your utilization capacity will greatly improve.",
    solomon_section1_title: '1. Simultaneously Call Up Expert Perspectives',
    solomon_section1_text: 'This is the ability to obtain the viewpoints of several experts through just a single prompt.',
    solomon_section1_li1_title: 'Core Principle:',
    solomon_section1_li1_text: 'Instead of asking a single question, users assign multiple expert roles to GPT.',
    solomon_section1_li2_title: 'Example Usage:',
    solomon_section1_li2_text: "Requesting GPT to have a debate on a company's stock price among a Wall Street analyst, a behavioral economist, and a macro economic expert.",
    solomon_section1_li3_title: 'Effect:',
    solomon_section1_li3_text: 'This method provides the insights of various experts, ensuring the analysis is comprehensive and multi-faceted.',
    solomon_section2_title: '2. Turn Learning into a System, Not a Plan',
    solomon_section2_text: 'This moves away from traditional study methods, using GPT to build a personalized, systematic learning environment.',
    solomon_section2_li1_title: 'Core Principle:',
    solomon_section2_li1_text: 'The era of opening a book and studying blindly is over. GPT is used to create a structured, ongoing mentorship system.',
    solomon_section2_li2_title: 'Example Usage:',
    solomon_section2_li2_text: 'Utilizing GPT like your own personal investment mentor to guide and structure your learning process.',
    solomon_section2_li3_title: 'Effect:',
    solomon_section2_li3_text: 'This builds a personalized and structured path for knowledge acquisition, moving beyond simple information gathering.',
    solomon_section3_title: '3. Understand Complex Information through Analogy (Metaphor)',
    solomon_section3_text: 'This involves requesting that GPT explain complex logic using intuitive and easy-to-understand analogies, rather than just raw data.',
    solomon_section3_li1_title: 'Core Principle:',
    solomon_section3_li1_text: 'Asking GPT to translate abstract or difficult content into concrete, visual metaphors.',
    solomon_section3_li2_title: 'Example Usage:',
    solomon_section3_li2_text: 'Asking GPT to explain a company’s business model so that even a primary school student can understand it.',
    solomon_section3_li3_title: 'Effect:',
    solomon_section3_li3_text: 'When this method is used, GPT does not simply explain the data, but shows the logic like a picture. This allows the user to grasp only the core essence in one go.',
    solomon_conclusion_title: 'Conclusion',
    solomon_conclusion_text: 'Applying these three methods—leveraging multiple expert perspectives, building systemic learning, and utilizing analogies for comprehension—will significantly enhance the professionalism and efficiency of academy teachers using GPT.',

    // AI Create Page
    aicreate_title: 'AI Create',
    aicreate_text: 'This is the AI Create page. Here you will find tools and resources to help you create amazing content with the power of artificial intelligence. Explore generators for images, videos, music, and more.',

    // AI Subscriptions Page
    aisubscriptions_title: 'AI Subscriptions',
    aisubscriptions_text: 'Welcome to the AI Subscriptions page. This section is designed to help you manage and discover various AI service subscriptions, ensuring you have the best tools at your disposal.',

    // Creator Lounge Page
    creatorlounge_title: 'Creator Lounge',
    creatorlounge_text: 'This is the Creator Lounge, a community space for creators using AI. Share your work, get feedback, and collaborate with others who are pushing the boundaries of creativity with artificial intelligence.',

    // Segments
    segment_eduspace_title: 'EDUSPACE',
    segment_eduspace_subtitle: 'Educational Tools & Resources',
    segment_reearth_title: 'RE-EARTH',
    segment_reearth_subtitle: 'Environmental & Sustainability Tools',
    segment_tools_count: 'tools',
    segment_no_tools: 'No tools yet. Admin can add tools from the dashboard.',
    segment_click_to_expand: 'Click to expand',

    // Admin Segments
    admin_manage_segments: 'Manage Segments',
    admin_segment_select: 'Select Segment',
    admin_add_tool: 'Add Tool',
    admin_edit_tool: 'Edit Tool',
    admin_tool_name: 'Tool Name',
    admin_tool_url: 'Tool URL',
    admin_tool_description: 'Description (Optional)',
    admin_select_icon: 'Select Icon',
    admin_current_tools: 'Current Tools',
    admin_no_tools_segment: 'No tools in this segment yet. Add one above!',
    admin_save: 'Save',
    admin_cancel: 'Cancel',
    admin_delete_confirm: 'Are you sure you want to delete this tool?',
  },
  ko: {
    // Header
    nav_ai_shortcuts: 'AI 바로가기',
    nav_ai_create: 'AI 생성',
    nav_ai_subscriptions: 'AI 구독',
    nav_creator_lounge: '크리에이터 라운지',
    nav_solomons_guide: '솔로몬 가이드',

    // Banner
    hot_issue_title: '이번 주 AI 핫이슈',
    hot_issue_text_title: "멀티모달 AI의 부상",
    hot_issue_text_desc: "텍스트, 이미지, 오디오를 결합하여 혁신적인 새 애플리케이션을 위한 최신 발전을 탐구합니다.",

    // Tool Categories
    category_favorites: '즐겨찾기',
    category_ai_agent: 'AI 에이전트',
    category_class_management: '클래스 관리',
    category_image: '이미지',
    category_video: '비디오',
    category_voice_lipsync: '음성/립싱크',
    login_required: '로그인 필요',

    // Tool Names
    tool_monitoring_report: '아이캔 스텔라 데일리 모니터링 리포트',

    // Solomon's Guide Page
    solomon_title: "GPT를 '정말 똑똑하게' 사용하는 3가지 방법",
    solomon_subtitle: "GPT를 정말 잘 쓰는 사람들은 단순히 질문만 하지 않고, 완전히 다른 방식으로 사용합니다. 뛰어난 GPT 활용 능력을 가진 전문가들은 공통적으로 정확히 세 가지 능력을 보유하고 있습니다. 이 세 가지만 바꾸면 활용 능력이 크게 향상될 것입니다.",
    solomon_section1_title: '1. 전문가 관점을 동시에 불러오기',
    solomon_section1_text: '단 한 번의 프롬프트로 여러 전문가의 관점을 얻는 능력입니다.',
    solomon_section1_li1_title: '핵심 원리:',
    solomon_section1_li1_text: '단일 질문 대신, 사용자는 GPT에 여러 전문가 역할을 부여합니다.',
    solomon_section1_li2_title: '사용 예시:',
    solomon_section1_li2_text: '월스트리트 분석가, 행동 경제학자, 거시 경제 전문가가 한 회사의 주가에 대해 토론하도록 GPT에 요청합니다.',
    solomon_section1_li3_title: '효과:',
    solomon_section1_li3_text: '이 방법은 다양한 전문가의 통찰력을 제공하여 분석이 포괄적이고 다각적이 되도록 보장합니다.',
    solomon_section2_title: '2. 학습을 계획이 아닌 시스템으로 전환하기',
    solomon_section2_text: '전통적인 학습 방법에서 벗어나 GPT를 사용하여 개인화된 체계적인 학습 환경을 구축합니다.',
    solomon_section2_li1_title: '핵심 원리:',
    solomon_section2_li1_text: '책을 펴고 무작정 공부하는 시대는 끝났습니다. GPT를 사용하여 구조화된 지속적인 멘토링 시스템을 만듭니다.',
    solomon_section2_li2_title: '사용 예시:',
    solomon_section2_li2_text: '학습 과정을 안내하고 구조화하기 위해 GPT를 자신만의 개인 투자 멘토처럼 활용합니다.',
    solomon_section2_li3_title: '효과:',
    solomon_section2_li3_text: '이는 단순한 정보 수집을 넘어 지식 습득을 위한 개인화되고 구조화된 경로를 구축합니다.',
    solomon_section3_title: '3. 비유(메타포)를 통해 복잡한 정보 이해하기',
    solomon_section3_text: '단순한 원시 데이터 대신 직관적이고 이해하기 쉬운 비유를 사용하여 복잡한 논리를 설명하도록 GPT에 요청하는 것입니다.',
    solomon_section3_li1_title: '핵심 원리:',
    solomon_section3_li1_text: '추상적이거나 어려운 내용을 구체적이고 시각적인 메타포로 번역하도록 GPT에 요청합니다.',
    solomon_section3_li2_title: '사용 예시:',
    solomon_section3_li2_text: '초등학생도 이해할 수 있도록 회사의 비즈니스 모델을 설명해 달라고 GPT에 요청합니다.',
    solomon_section3_li3_title: '효과:',
    solomon_section3_li3_text: '이 방법을 사용하면 GPT는 단순히 데이터를 설명하는 것이 아니라 논리를 그림처럼 보여줍니다. 이를 통해 사용자는 핵심 본질만을 한 번에 파악할 수 있습니다.',
    solomon_conclusion_title: '결론',
    solomon_conclusion_text: '이 세 가지 방법—다양한 전문가 관점 활용, 체계적인 학습 구축, 이해를 위한 비유 사용—을 적용하면 GPT를 사용하는 학원 교사들의 전문성과 효율성이 크게 향상될 것입니다.',

    // AI Create Page
    aicreate_title: 'AI 생성',
    aicreate_text: '이곳은 AI 생성 페이지입니다. 여기에서 인공지능의 힘으로 멋진 콘텐츠를 만드는 데 도움이 되는 도구와 리소스를 찾을 수 있습니다. 이미지, 비디오, 음악 등을 위한 생성기를 탐색해 보세요.',

    // AI Subscriptions Page
    aisubscriptions_title: 'AI 구독',
    aisubscriptions_text: 'AI 구독 페이지에 오신 것을 환영합니다. 이 섹션은 다양한 AI 서비스 구독을 관리하고 발견하여 최고의 도구를 사용할 수 있도록 돕기 위해 설계되었습니다.',

    // Creator Lounge Page
    creatorlounge_title: '크리에이터 라운지',
    creatorlounge_text: '이곳은 AI를 사용하는 크리에이터들을 위한 커뮤니티 공간인 크리에이터 라운지입니다. 여러분의 작업을 공유하고, 피드백을 받으며, 인공지능으로 창의력의 한계를 넓혀가는 다른 사람들과 협업해 보세요.',

    // Segments
    segment_eduspace_title: 'EDUSPACE',
    segment_eduspace_subtitle: '교육 도구 및 리소스',
    segment_reearth_title: 'RE-EARTH',
    segment_reearth_subtitle: '환경 및 지속가능성 도구',
    segment_tools_count: '개 도구',
    segment_no_tools: '아직 도구가 없습니다. 관리자가 대시보드에서 추가할 수 있습니다.',
    segment_click_to_expand: '클릭하여 확장',

    // Admin Segments
    admin_manage_segments: '세그먼트 관리',
    admin_segment_select: '세그먼트 선택',
    admin_add_tool: '도구 추가',
    admin_edit_tool: '도구 수정',
    admin_tool_name: '도구 이름',
    admin_tool_url: '도구 URL',
    admin_tool_description: '설명 (선택사항)',
    admin_select_icon: '아이콘 선택',
    admin_current_tools: '현재 도구',
    admin_no_tools_segment: '이 세그먼트에 아직 도구가 없습니다. 위에서 추가하세요!',
    admin_save: '저장',
    admin_cancel: '취소',
    admin_delete_confirm: '이 도구를 삭제하시겠습니까?',
  },
};