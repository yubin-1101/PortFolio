export const profile = {
  name: '김포트',
  role: 'Full Stack Developer',
  tagline: '비즈니스를 움직이는 엔드투엔드 제품을 만듭니다',
  summary:
    '프론트엔드와 백엔드를 모두 설계하며 제품의 “기획 → 디자인 → 개발 → 운영” 흐름을 이해하고 있습니다. React · Next.js 기반의 UX와 Node · Nest · Prisma로 서비스 로직을 구축하고, CI/CD 파이프라인까지 책임집니다.',
  location: 'Seoul, South Korea',
  availability: '2026 Q1부터 신규 프로젝트 합류 가능',
  email: 'hello@kimfolio.dev',
}

export const skills = {
  core: ['TypeScript', 'React', 'Next.js', 'Node.js', 'NestJS', 'Prisma'],
  ui: ['Tailwind CSS', 'Framer Motion', 'Storybook', 'Figma', 'Design System'],
  tooling: ['PostgreSQL', 'Redis', 'AWS', 'Docker', 'GitHub Actions', 'Vercel'],
}

export const projects = [
  {
    name: 'Asura Arena (멀티플레이 슈팅)',
    period: '2025.02 - 진행 중',
    summary:
      'KDT 팀 프로젝트로 만든 3D 멀티플레이 아레나 슈팅 게임. Three.js로 월드를 구축하고 Socket.io로 로비·무기 드랍·전투 상태를 동기화해 최대 8명이 같은 맵에서 실시간으로 플레이할 수 있게 했습니다.',
    impact: '내부 테스트에서 평균 RTT 90ms 미만 유지 · 30명 알파 테스터 피드백 반영',
    tech: ['Three.js', 'Socket.io', 'Express', 'Node.js'],
    link: '/kdt-game/index.html',
    icon: '/kdt-game/knife_icon.png',
  },
  {
    name: 'Insights Dashboard',
    period: '2024.06 - 2024.09',
    summary:
      'B2B 고객이 실시간 지표를 확인할 수 있는 데이터 모니터링 대시보드. 서버에서는 NestJS와 Prisma로 멀티 테넌트 쿼리를 최적화하고, 프론트는 가상 스크롤로 가볍게 렌더링했습니다.',
    impact: '데이터 로딩 속도 38% 개선 · 구독 전환율 12% 향상',
    tech: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'Zustand'],
    link: 'https://insights.example.com',
  },
  {
    name: 'Creative Studio',
    period: '2024.03 - 2024.05',
    summary:
      '포트폴리오 크리에이터를 위한 웹 에디터. 블록 기반 컴포저를 만들어 사용자 맞춤 템플릿을 쉽게 조합하고, 서버는 Edge Runtime으로 짧은 응답 시간을 유지했습니다.',
    impact: '주간 활성 사용자 2.1배 증가',
    tech: ['Next.js', 'Framer Motion', 'Edge Functions', 'Upstash Redis'],
    link: 'https://studio.example.com',
  },
  {
    name: 'Soundwave',
    period: '2023.11 - 2024.01',
    summary:
      '실시간 협업 플레이리스트 서비스. WebSocket 기반으로 큐를 동기화하고, 서버리스 함수에서 DRM 토큰을 발급했습니다.',
    impact: '동시 접속 5,000명에서도 안정적인 재생 유지',
    tech: ['React Native Web', 'WebSocket', 'Supabase', 'Cloudflare Workers'],
    link: 'https://soundwave.example.com',
  },
  {
    name: 'Wanderlog',
    period: '2023.07 - 2023.09',
    summary:
      '여행 일정을 자동으로 추천해 주는 마이크로 SaaS. OpenAI + Google Places API를 통합하고, AI 프롬프트 결과를 시각적으로 구조화했습니다.',
    impact: '런칭 3개월 만에 1,200명 유료 전환',
    tech: ['Next.js', 'OpenAI API', 'PlanetScale'],
    link: 'https://wanderlog.example.com',
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
  email: 'hello@kimfolio.dev',
  github: 'https://github.com/kimfolio',
  linkedIn: 'https://linkedin.com/in/kimfolio',
  resume: 'https://drive.google.com/kimfolio-resume',
}

