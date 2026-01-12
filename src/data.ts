export const profile = {
  name: '조유빈',
  role: 'Full Stack Developer',
  tagline: "AI와 함께 아이디어를 현실로, 프론트부터 백엔드까지",
  summary:
    '견고한 백엔드 아키텍처와 데이터 모델 설계가 제 강점입니다. Node.js, NestJS, Prisma로 고성능 서버를 구축하고, PostgreSQL과 Redis로 데이터를 효율적으로 관리합니다. 필요시 React, Next.js로 풀스택 개발도 가능하며, AWS와 Docker 기반 DevOps 파이프라인 구축 경험이 있습니다.',
  location: 'Seoul, South Korea',
  availability: '2026 Q1부터 신규 프로젝트 합류 가능',
  email: 'binss0124@gmail.com',
  image: '/profile.png', // 프로필 이미지 경로 (public 폴더에 이미지를 추가하세요)
  intro: '안녕하세요! AI와 함께 아이디어를 빠르게 현실로 만드는 풀스택 개발자 조유빈입니다. Vibe Coding으로 프론트엔드부터 백엔드, 배포까지 전 과정을 혼자서도 완성합니다. 견고한 시스템 설계와 효율적인 AI 활용으로, 팀 단위의 생산성을 1인 개발로 실현합니다.',
  about: [
    'React와 Supabase를 중심으로 한 풀스택 개발자로서, 아이디어를 빠르게 실현하는 데 집중합니다.',
    'Synapse AI, 독독 독서 플랫폼, AI 감정 상담 서비스, 센서 게임 플랫폼, 편의점 종합 솔루션 등 다양한 프로젝트를 통해 실제 사용자에게 가치를 전달하는 서비스를 구현해왔습니다.',
    'Claude Code, Cursor 등 Vibe Coding 도구를 적극 활용하여 빠른 프로토타이핑과 아이디어 검증을 실천하며, 단순 코딩이 아닌 창의적 문제 해결 중심의 개발을 추구합니다.',
  ],
}

export const skills = {
  core: [
    { name: 'TypeScript', icon: '/icons/typescript.svg' },
    { name: 'React', icon: '/icons/react.svg' },
    { name: 'Next.js', icon: '/icons/nextjs.svg' },
    { name: 'Node.js', icon: '/icons/nodejs.svg' },
    { name: 'NestJS', icon: '/icons/nestjs.svg' },
    { name: 'Prisma', icon: '/icons/prisma.svg' },
  ],
  ui: [
    { name: 'Tailwind CSS', icon: '/icons/tailwind.svg' },
    { name: 'Framer Motion', icon: '/icons/framer.svg' },
    { name: 'Storybook', icon: '/icons/storybook.svg' },
    { name: 'Figma', icon: '/icons/figma.svg' },
    { name: 'Design System', icon: '/icons/designsystem.svg' },
  ],
  tooling: [
    { name: 'PostgreSQL', icon: '/icons/postgresql.svg' },
    { name: 'Redis', icon: '/icons/redis.svg' },
    { name: 'AWS', icon: '/icons/aws.svg' },
    { name: 'Docker', icon: '/icons/docker.svg' },
    { name: 'GitHub Actions', icon: '/icons/githubactions.svg' },
    { name: 'Vercel', icon: '/icons/vercel.svg' },
  ],
}

export const projects = [
  {
    name: '3D Community',
    period: '2025.02 - 진행 중',
    summary:
      'KDT(Korea Digital Training)의 일환으로 제작된 3D 온라인 멀티플레이어 격투 게임입니다. Node.js, Socket.IO, Three.js를 기반으로 구현되었으며, 플레이어는 방 생성, 캐릭터 선택, 3D 환경에서의 전투 등 다양한 기능을 즐길 수 있습니다.',
    features: [
      '실시간 멀티플레이어 3D 격투 게임',
      'Socket.IO 기반 낮은 지연시간 동기화',
      '캐릭터 커스터마이징 및 스킬 시스템',
      '파티 매칭 및 방 관리 기능',
    ],
    impact: '내부 테스트에서 평균 RTT 90ms 미만 유지 · 30명 알파 테스터 피드백 반영',
    tech: ['Three.js', 'Socket.io', 'Express', 'Node.js'],
    link: '/kdt-game/index.html',
    icon: '/kdt-game/knife_icon.png',
    video: '', // 시연 영상 URL
    thumbnail: '',
  },
  {
    name: 'CVS(편의점 관리 시스템)',
    period: '2024.06 - 2024.09',
    summary:
      'B2B 고객이 실시간 지표를 확인할 수 있는 데이터 모니터링 대시보드. 서버에서는 NestJS와 Prisma로 멀티 테넌트 쿼리를 최적화하고, 프론트는 가상 스크롤로 가볍게 렌더링했습니다.\n\n고객 - customer@test.com | 111111\n점주 - store@test.com | 111111\n관리자 - admin@test.com | 111111',
    features: [
      '실시간 판매 데이터 모니터링 대시보드',
      '다중 지점 통계 및 비교 분석',
      'CSV 내보내기 및 자동 보고서 생성',
      '멀티 테넌트 권한 관리 시스템',
    ],
    impact: '데이터 로딩 속도 38% 개선 · 구독 전환율 12% 향상',
    tech: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Zustand'],
    link: 'https://conviproject.netlify.app/customer',
    icon: '', // 프로젝트 아이콘 경로 (public 폴더에 이미지를 추가하세요)
    video: '/Cvs.mov', // 시연 영상 URL
    thumbnail: '',
  },
  {
    name: '근로자 근무 관리 어플',
    period: '2024.03 - 2024.05',
    summary:
      '포트폴리오 크리에이터를 위한 웹 에디터. 블록 기반 컴포저를 만들어 사용자 맞춤 템플릿을 쉽게 조합하고, 서버는 Edge Runtime으로 짧은 응답 시간을 유지했습니다.',
    features: [
      '드래그 앤 드롭 블록 기반 에디터',
      '실시간 미리보기 및 템플릿 저장',
      '협업 편집 및 버전 관리',
      'Edge Runtime 기반 고속 배포',
    ],
    impact: '주간 활성 사용자 2.1배 증가',
    tech: ['Next.js', 'Framer Motion', 'Edge Functions', 'Upstash Redis'],
    link: 'https://studio.example.com',
    icon: '', // 프로젝트 아이콘 경로 (public 폴더에 이미지를 추가하세요)
    video: '', // 시연 영상 URL
    thumbnail: '',
  },
  {
    name: 'Asura Arena',
    period: '2023.11 - 2024.01',
    summary:
      '실시간 협업 플레이리스트 서비스. WebSocket 기반으로 큐를 동기화하고, 서버리스 함수에서 DRM 토큰을 발급했습니다.',
    features: [
      '실시간 협업 플레이리스트 동기화',
      'WebSocket 기반 즉시 업데이트',
      'DRM 토큰 자동 발급 및 관리',
      '5,000명 동시 접속 최적화',
    ],
    impact: '동시 접속 5,000명에서도 안정적인 재생 유지',
    tech: ['React Native Web', 'WebSocket', 'Supabase', 'Cloudflare Workers'],
    link: 'https://asuragame.netlify.app/',
    icon: '', // 프로젝트 아이콘 경로 (public 폴더에 이미지를 추가하세요)
    video: '/Asura.mp4', // 시연 영상 URL
    thumbnail: '',
  },
  {
    name: '감정 일기',
    period: '2023.07 - 2023.09',
    summary:
      '여행 일정을 자동으로 추천해 주는 마이크로 SaaS. OpenAI + Google Places API를 통합하고, AI 프롬프트 결과를 시각적으로 구조화했습니다.',
    features: [
      'AI 기반 여행 일정 자동 생성',
      'OpenAI와 Google Places API 통합',
      '지도 시각화 및 일정 관리',
      '개인화된 여행 추천 알고리즘',
    ],
    impact: '런칭 3개월 만에 1,200명 유료 전환',
    tech: ['Next.js', 'OpenAI API', 'PlanetScale'],
    link: 'https://feelingdiary.netlify.app/write',
    icon: '', // 프로젝트 아이콘 경로 (public 폴더에 이미지를 추가하세요)
    video: '', // 시연 영상 URL
    thumbnail: '',
  },
]

export const experience = [
  {
    role: 'Product Engineer (Full Stack)',
    company: 'Layer8',
    period: '2022.08 - 현재',
    details: [
      'React · Nest 기반 B2B SaaS 모듈화, FE 컴포넌트 40여 개와 GraphQL API 스키마 표준화',
      '관측성(OTel + Grafana) 도입으로 LCP 32% 단축 · 장애 탐지 TTR 40% 감소',
      '크로스 기능 스쿼드에서 데이터 엔지니어·디자이너와 OKR 주도',
    ],
  },
  {
    role: 'Full Stack Developer',
    company: 'Freelance',
    period: '2020.05 - 2022.07',
    details: [
      '스타트업 MVP를 빠르게 제작하며 고객 인터뷰와 서버 설계까지 일괄 수행',
      '반응형 · 접근성 가이드를 준수하고, Firebase/AWS Lambda로 백엔드를 구성',
    ],
  },
]

export const contact = {
  email: 'binss0124@gmail.com',
  github: 'https://github.com/binss-0124',
  linkedIn: '010-8321-3387',
  resume: 'https://drive.google.com/kimfolio-resume',
}

