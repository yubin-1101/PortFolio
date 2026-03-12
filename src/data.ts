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
    '2. MetaPlaza(3D 커뮤니티), CVS(편의점 관리 시스템), Kanban Board(협업 툴), 근로자 근무 관리 앱, Asura Arena(3D 멀티플레이 프로토타입), AI 기반 감정 일기 등 웹·게임·B2B2C 서비스 전반의 기획·개발·운영을 통해 실제 사용자에게 가치를 전달해왔습니다.',
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
    troubleshooting: [
      {
        problem: '다양한 멀티플레이어 미니게임 구현 필요',
        solution: '오목(15x15, 5목 승리), 에임 맞추기(30초 타겟 클릭), 끝말잇기(한국어기초사전 Open API 연동, 턴당 10초), 라이어 게임(4인 이상, 시민 vs 라이어, 토론 60초+투표), 스무고개(출제자가 제시어 선정, 예/아니오 질문, 최대 20개)',
        result: '다양한 장르의 미니게임 제공, WebSocket 기반 실시간 동기화',
      },
      {
        problem: '실시간 방 목록, 관전자 수, 중복 방 표시, 대기방 중복 입장',
        solution: 'WebSocket으로 방 생성/삭제 실시간 동기화, 관전자 수 항상 표시, 중복 방 필터링, 대기방 중복 입장 방지 로직',
        result: '안정적인 로비, 게임 중 관전 가능, 중복 입장 차단',
      },
      {
        problem: 'DataInitializer에서 매번 전체 사용자 조회, SQL 로깅 오버헤드, WebSocket NullPointerException',
        solution: 'lazy-initialization 활성화, saveAll() 배치 처리, SQL 로깅 비활성화, 로깅 레벨 WARN, 세션 속성 null 체크, @Transactional 추가',
        result: 'DataInitializer 수 초→1초, WebSocket/친구 API 오류 해결',
      },
      {
        problem: '실시간 캐릭터 동기화, 중복 로그인, 재연결',
        solution: 'STOMP 프로토콜, /app/multiplayer.move 위치 브로드캐스트, 세션 ID 기반 중복 로그인 방지, 재연결 로직',
        result: '안정적인 실시간 동기화, 중복 접속 차단',
      },
      {
        problem: 'Gold Coin 충전 시 결제 검증 및 보안',
        solution: 'TossPayments SDK 연동, 결제 성공 시 서버 검증(/api/payment/verify), 금액 일치 확인, 트랜잭션 처리',
        result: '안전한 결제 시스템, Gold Coin 충전 성공',
      },
    ],
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
    link: 'https://convipj.netlify.app/',
    icon: '/cvs.png',
    video: '/Cvs.mov', // 시연 영상 URL
    thumbnail: '',
    troubleshooting: [
      {
        problem: '고객/점주/본사 3개 역할의 완전히 다른 UI/UX 및 권한 체계 필요',
        solution: 'Supabase RLS 정책으로 테이블 레벨 접근 제어, profiles.role + auth.uid() 동적 권한 검증, React Router Protected Routes',
        result: '역할별 완벽히 분리된 경험, 데이터 보안 강화',
      },
      {
        problem: '토스페이먼츠 결제 후 네트워크 오류/새로고침으로 중복 주문 발생',
        solution: '3단계 방어 (sessionStorage 상태 추적, PaymentKey unique constraint, 주문 생성 전 체크), PostgreSQL 트랜잭션 원자성 보장',
        result: '중복 결제 완전 차단, 안정적인 결제 프로세스',
      },
      {
        problem: '주문 시 재고 차감 및 여러 사용자 간 재고 동기화 필요',
        solution: 'PostgreSQL Trigger로 order_items 삽입 시 자동 재고 차감, inventory_transactions 이력 관리, Supabase Realtime 구독',
        result: '완전 자동화된 재고 관리, 실시간 UI 업데이트',
      },
      {
        problem: '지점 발주부터 입고까지 복잡한 프로세스 관리',
        solution: 'supply_requests/items/shipments 3개 테이블 연계, 상태별 자동 처리, 배송 완료 시 재고 자동 증가, 실시간 알림',
        result: '완전한 공급망 관리 시스템, 효율적인 물류 처리',
      },
      {
        problem: '대규모 코드베이스에서 타입 오류 및 개발 생산성 저하',
        solution: 'Supabase 자동 생성 타입 + 커스텀 타입, Zustand/TanStack Query 제네릭 타입, TypeScript Strict Mode',
        result: '완벽한 타입 추론, IDE 자동완성, null/undefined 안전성 보장',
      },
    ],
  },
  {
    name: 'Kanban Board',
    period: '2026.02 - 2026.02',
    summary:
      '드래그 앤 드롭 기반의 칸반 보드 프로젝트 관리 웹 애플리케이션입니다. 직관적인 UI로 태스크를 관리하고, 실시간 상태 업데이트를 지원합니다.\n\n테스트 계정 - test@gmail.com | 111111\n계정2 - dev@gmail.com | dev123\n',
    features: [
      '협엽: 팀원 초대 및 권한 관리로 협업 지원',
      '드래그 앤 드롭: 직관적인 카드 이동으로 태스크 상태 변경',
      '보드 관리: 다중 보드 생성/수정/삭제 및 컬럼 커스터마이징',
      '태스크 관리: 태스크 생성, 라벨, 우선순위, 마감일 설정',
      '실시간 동기화: 변경사항 즉시 반영 및 데이터 영속성 보장',
    ],
    impact: '협업의 효율성을 높이는 직관적인 태스크 관리 도구',
    tech: ['React(Vite)', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'Supabase'],
    link: 'https://kanbboard.netlify.app/login',
    icon: '/board.png',
    video: '/kanban.mp4', // 시연 영상 URL
    thumbnail: '',
    troubleshooting: [
      {
        problem: '로그인 상태 변경 감지 콜백 안에서 사용자 프로필을 불러오는 비동기 요청을 바로 실행하면, Supabase 내부 잠금(lock)과 충돌하여 앱 전체가 멈추는 데드락 발생',
        solution: '콜백 내부에서는 로그인 상태만 즉시 반영하고, 프로필 조회 같은 비동기 작업은 이벤트 루프를 한 턴 지연시켜 별도로 실행하는 지연 호출 패턴 적용. 동기 처리와 비동기 처리를 분리하여 내부 잠금 충돌 방지',
        result: '로그인/로그아웃 시 화면이 멈추지 않고 안정적으로 인증 초기화 완료, 사용자 프로필도 정상적으로 로드',
      },
      {
        problem: '그림을 그리는 중 페이지를 빠르게 닫거나 이동하면, 저장 요청이 1.5초 뒤에 모아서 전송되는 구조라 아직 전송되지 않은 드로잉 데이터가 소실됨',
        solution: '이중 저장 전략 도입 — 평소에는 1.5초 간격으로 모아서 저장하되, 페이지 이탈이 감지되면 아직 저장되지 않은 데이터를 즉시 강제 저장하는 정리(cleanup) 로직 추가',
        result: '탭을 닫거나 다른 페이지로 이동해도 드로잉 데이터가 유실되지 않고 안전하게 저장됨',
      },
      {
        problem: '협업 그림판에서 다른 사용자의 커서 위치를 실시간으로 보여주기 위해 마우스가 움직일 때마다 위치를 전송하면, 초당 수백 건의 네트워크 요청이 발생하여 서버 부하 급증',
        solution: '이중 제한(throttling) 방식 적용 — 화면 주사율에 맞춰 업데이트를 동기화하면서 동시에 최소 50ms 간격을 두어 초당 최대 20회로 전송 횟수 제한',
        result: '네트워크 트래픽을 대폭 줄이면서도 부드러운 커서 움직임 제공, 여러 사용자가 동시 접속해도 앱 성능 저하 없이 실시간 협업 가능',
      },
    ],
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
    troubleshooting: [
      {
        problem: 'Supabase 데이터베이스 연결이 안 되면 로그인, 대시보드, QR 출퇴근 등 모든 기능이 먹통이 되어서 개발이나 시연이 불가능',
        solution: 'isDemoMode() 함수를 만들어서 userId가 demo-로 시작하면 데모 모드로 판단. 로그인 시 test@example.com / password123로 접속하면 Supabase를 거치지 않고 localStorage에 유저 정보를 저장. 대시보드, QR, 직원관리 등 각 페이지에서도 데모 모드일 때는 가짜 데이터를 자동 생성하도록 처리',
        result: '서버 연결 없이도 "테스트 계정으로 접속" 버튼 하나로 모든 기능을 체험할 수 있고, 실제 Supabase가 연결되면 자동으로 실제 데이터로 전환됨',
      },
    ],
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
    link: 'https://asuraa.netlify.app/',
    icon: '/asura.png',
    video: '/Asura.mp4', // 시연 영상 URL
    thumbnail: '',
    troubleshooting: [
      {
        problem: '멀티플레이어 게임 특성상 혼자서는 플레이 불가능, 플레이어 부족 시 게임 진행 어려움',
        solution: '5단계 상태 머신(idle/무기탐색/추격/도망/공격) 기반 AI 봇 구현, 난이도 3단계(Easy/Normal/Hard), 저체력 타겟 우선 공격/다수 적 회피 전략, 실시간 의사결정 시스템',
        result: '1인 플레이 가능, 지능적인 봇 행동으로 멀티플레이어 경험 제공, 난이도별 차별화된 플레이 경험',
      },
      {
        problem: '네트워크 지연 및 클라이언트 간 불일치',
        solution: 'Socket.IO 실시간 브로드캐스트, 서버 권한 HP/데미지 검증, gameUpdate 이벤트 동기화',
        result: '안정적인 8인 멀티플레이어, 치팅 방지',
      },
      {
        problem: '무기 관리 및 균형 조정 필요',
        solution: 'weapon_data.json 기반 무기별 데미지/넉백강도·지속시간/발사체속도/공격판정 구간(activationWindows) 정의, 자동 리스폰(맵에 항상 10개 유지)',
        result: '무기별 차별화된 전투감, 균형잡힌 게임플레이',
      },
      {
        problem: '3D 환경에서 정확한 충돌 처리 필요',
        solution: 'AABB 기반 충돌 감지, X/Z축 개별 테스트로 벽 슬라이딩, 단차 오르기 구현',
        result: '자연스러운 캐릭터 이동, AI 봇 경로 탐색',
      },
      {
        problem: '여러 플레이어 공격 시 킬 판정 모호',
        solution: 'lastHitBy 추적 시스템, killProcessed 플래그로 중복 방지, 서버 권한 스코어보드',
        result: '정확한 킬 부여, 조작 불가능한 스코어 관리',
      },
    ],
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
    troubleshooting: [
      {
        problem: '로컬 개발 환경에서는 백엔드 서버와 프론트엔드가 정상적으로 통신되었으나, Netlify에 배포하자 모든 API 요청이 404 에러를 반환',
        solution: '기존 로컬 전용 백엔드 서버를 Netlify의 서버리스 함수 방식으로 전환하고, 배포 설정 파일에 API 경로 연결 규칙을 추가. 프론트엔드도 배포 환경에 맞게 상대 경로로 API를 호출하도록 수정하고, 외부 요청 허용을 위한 CORS 설정을 각 함수에 적용',
        result: '감정 분석, 감정 코칭, 조언 생성 등 API를 개별 서버리스 함수로 분리 배포하여 로컬과 배포 환경 모두에서 동일하게 정상 동작',
      },
      {
        problem: '감정 분석에 사용하는 외부 AI 서비스의 API 키가 없거나 서버가 응답하지 않을 경우, 일기 저장과 감정 코칭 기능이 완전히 중단되어 사용자가 앱을 이용할 수 없었음',
        solution: '3단계 대체 처리 방식을 적용: ① 먼저 외부 AI 서비스로 감정 분석 시도 → ② 실패 시 한국어 감정 키워드 매칭 방식으로 자체 분석 수행 → ③ 감정 코칭도 AI 응답 실패 시 감정별로 미리 준비된 응답을 제공. 모든 외부 요청에 오류 처리를 적용하여 실패해도 앱이 멈추지 않도록 보장',
        result: '외부 AI 서비스에 장애가 발생하거나 API 키가 없는 환경에서도 자체 감정 분석과 코칭 응답이 정상 제공되어, 어떤 상황에서든 핵심 기능이 동작하는 안정적인 서비스 구현',
      },
    ],
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

