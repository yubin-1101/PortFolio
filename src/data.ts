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
    '1. React와 Supabase를 중심으로 한 풀스택 개발자로서, 아이디어를 빠르게 실현하는 데 집중합니다.',
    '2. MetaPlaza(3D 커뮤니티), CVS(편의점 관리 시스템), 근로자 근무 관리 앱, Asura Arena(3D 멀티플레이 프로토타입), AI 기반 감정 일기 등 웹·게임·B2B2C 서비스 전반의 기획·개발·운영을 통해 실제 사용자에게 가치를 전달해왔습니다.',
    '3. Claude Code, Cursor 등 Vibe Coding 도구를 적극 활용하여 빠른 프로토타이핑과 아이디어 검증을 실천하며, 단순 코딩이 아닌 창의적 문제 해결 중심의 개발을 추구합니다.',
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
      'MetaPlaza는 React, Spring Boot 기반의 3D 소셜 커뮤니티 플랫폼입니다. 가상 공간에서 실시간 소통, 3D 캐릭터, 게시판, 친구 시스템 등 다양한 기능을 제공합니다.',
    features: [
      '실시간 3D 가상광장3D 가상광장: 실시간 렌더링, 자유 이동, 캐릭터 애니메이션',
      '회원 시스템: JWT 인증, 회원가입/로그인, 권한 분리.IO 기반 낮은 지연시간 동기화',
      '실시간 채팅: 전체/1:1/친구 채팅, 말풍선 표시 커스터마이징 및 스킬 시스템',
      '친구 관리: 친구 추가/삭제, 친구 목록, 온라인 상태 표시 매칭 및 방 관리 기능',
      '지도 연동: Mapbox 기반 위치 정보 제공 및 개인 방 꾸미기 기능'
    ],
    impact: '커뮤니티 활성화 및 실시간 상호작용 경험 제공',
    tech: ['React(Vite)','Three.js', 'WebSocket', 'Express', 'PostgreSQL','Spring Boot'],
    link: 'https://metaplaza-ashy.vercel.app/',
    icon: '/metaplaza.png',
    video: '/metaplaza.mp4', // 시연 영상 URL
    thumbnail: '',
  },
  {
    name: 'CVS(편의점 관리 시스템)',
    period: '2025.06 - 2025.09',
    summary:
      '고객 주문부터 점주 운영·본사 관리까지 실시간으로 통합된 B2B2C 편의점 관리 플랫폼입니다.\n\n고객 - customer@test.com | 111111\n점주 - store@test.com | 111111\n관리자 - admin@test.com | 111111',
    features: [
      '- 고객: 모바일 주문/픽업 워크플로우 (주문 → 결제 → 픽업 알림',
      '- 점주: 실시간 주문 알림, 주문 처리, 재고 관리',
      '- 본사: 매장/물류 관리, 통계 리포트, 엑셀/CSV 내보내기',
      '- 실시간 동기화: Supabase Realtime(WebSocket) 기반 알림 및 캐시 무효화',
      '- 결제 연동: TossPayments로 안전한 결제 처리 및 이중 검증',
      '- 보안/무결성: PostgreSQL 트랜잭션 + RLS로 재고 동시성 보장',
    ],
    impact: '상용 수준으로 배포된 B2B2C 플랫폼으로 운영 효율성을 높임',
    tech: ['React19(Vite)', 'TypeScript', 'PostgreSQL', 'Supabase','Render','TossPayments'],
    link: 'https://conviproject.netlify.app/customer',
    icon: '/cvs.png',
    video: '/Cvs.mov', // 시연 영상 URL
    thumbnail: '',
  },
  {
    name: '근로자 근무 관리 어플',
    period: '2025.09 - 2025.11',
    summary:
      '알바생과 고용주를 위한 근무·스케줄 관리 웹앱으로, 인증·프로필·대시보드·QR 출퇴근·스케줄 관리를 제공합니다.',
    features: [
      '사용자 인증 및 프로필 관리',
      '직원/고용주 전용 대시보드로 역할별 정보 제공',
      'QR 기반 출퇴근 체크로 빠른 출근/퇴근 처리',
      '근무 스케줄 조회 및 관리 기능',
      '반응형 UI 및 직관적 네비게이션 ',
    ],
    impact: '출퇴근·스케줄 관리 업무를 자동화하여 관리 효율성과 정확성을 향상.',
    tech: ['TypeScript', 'React(Vite)', 'Tailwind CSS / PostCSS', 'Supabase'],
    link: 'https://alabaweb.netlify.app/',
    icon: '/alba.png',
    video: '/alba1.mp4', // 시연 영상 URL
    thumbnail: '',
  },
  {
    name: 'Asura Arena',
    period: '2023.11 - 2024.01',
    summary:
      '웹 브라우저에서 실행되는 3D 액션/멀티플레이 게임으로, Socket.io를 활용해 플레이어간 실시간 상호작용을 구현한 게임 프레임워크입니다',
    features: [
      '플레이어 컨트롤: WASD 이동, Shift 달리기, K 점프, L 구르기 등 입력 및 애니메이션/물리 동기화',
      '피드백: 플레이어 중심 카메라와 화면 오프셋으로 플레이 시야와 경기성(가시성)을 최적화',
      '서버 소켓 연동 지점으로 멀티플레이/대기실/방 관리 통합 가능 — 빠른 온라인 테스트 지원.',
      '라운드 카운트다운·타이머·게임 시작/종료·승자 처리 등 경기 상태 전환을 제어',
    ],
    impact: 'JS, CSS, Socket.io 를 활용한 웹 기반의 브라우저형 3D 물리 게임 프레임워크',
    tech: ['JavaScript','CSS','Three.js','Cannon‑es','Node.js','Socket.io'],
    link: 'https://asuragame.onrender.com/',
    icon: '/asura.png',
    video: '/Asura.mp4', // 시연 영상 URL
    thumbnail: '',
  },
  {
    name: '감정 일기',
    period: '2023.07 - 2023.09',
    summary:
      'AI 기반 감정 분석과 맞춤형 조언을 제공하는 감정 일기장 웹 애플리케이션\n\n데모 - dev@gmail.com | dev123',
    features: [
      '일기 작성 및 저장',
      'OpenAI 기반 자동 감정 분석',
      '실시간 감정 챗봇 인터랙션',
      '날짜별 일기 조회 및 관리',
    ],
    impact: '사용자의 감정 인식과 자기성찰을 돕고, 감정 변화 추이를 시각적으로 제공하여 정서적 건강 관리에 기여',
    tech: [
  'React(Vite)',
  'Tailwind CSS',
  'Node.js (Express)',
  'Supabase (PostgreSQL, Auth)',
  'Groq Ai, OpenAI API',
],
    link: 'https://feelingdiary.netlify.app/',
    icon: '/diary.png',
    video: '/emotion.mp4', // 시연 영상 URL
    thumbnail: '',
  },
]

export const experience = [
  {
    role: 'Junior Software Developer',
    company: 'Personal Projects & Academic Work',
    period: '2023.01 - 2026.01',
    details: [
      'React와 TypeScript를 활용하여 다양한 웹 애플리케이션 개발 경험 축적',
      'Supabase와 PostgreSQL을 사용한 데이터베이스 설계 및 실시간 동기화 구현',
      'Three.js와 cannon-es를 활용한 3D 웹 게임 프로토타입 개발 및 물리 엔진 통합',
      '팀 프로젝트에서 역할 분담 및 협업을 통해 문제 해결 능력과 커뮤니케이션 스킬 향상',
    ],
  },
]

export const contact = {
  email: 'binss0124@gmail.com',
  github: 'https://github.com/yubin-1101',
  phone: '010-8321-3387',
};

