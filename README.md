# Framer Clone

Framer 웹사이트를 클론한 프로젝트입니다. 최신 React 생태계와 현대적인 웹 기술을 활용하여 구현했습니다.

## 🚀 Tech Stack

### Core
- **React 19** - 최신 React 버전 with React Compiler
- **TypeScript** - 타입 안정성
- **Vite 7** - 빠른 빌드 도구
- **TanStack Router** - 타입 세이프 라우팅

### Styling & UI
- **Tailwind CSS v4** - 최신 Tailwind via Vite plugin
- **shadcn/ui** - 재사용 가능한 UI 컴포넌트 (New York variant)
- **Lucide React** - 아이콘 라이브러리

### Animation
- **GSAP** - 고성능 애니메이션
- **@gsap/react** - React 통합 훅
- **Embla Carousel** - 터치 친화적인 캐러셀

### Code Quality
- **Biome** - 빠른 린팅 & 포맷팅 (ESLint/Prettier 대체)

## 📦 Installation

```bash
npm install
```

## 🛠️ Development

```bash
npm run dev          # 개발 서버 시작
npm run build        # 프로덕션 빌드
npm run preview      # 빌드 미리보기
```

## 🎨 Code Quality

```bash
npm run lint         # Biome 린트 실행
npm run format       # Biome 포맷팅 실행
npm run check        # Biome 검사 및 자동 수정
npm run reporter     # Biome 리포트 출력
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui 컴포넌트
│   └── section/         # 페이지 섹션 컴포넌트
├── css/                 # 커스텀 CSS (Embla 등)
├── routes/              # TanStack Router 라우트
├── lib/                 # 유틸리티 함수
└── index.css           # Tailwind 및 글로벌 스타일
```

## ⚙️ Configuration

### Path Aliases
`@/` 경로 별칭이 설정되어 있습니다:
- `@/components` → `src/components`
- `@/lib` → `src/lib`

### React Compiler
React Compiler가 활성화되어 자동 최적화가 적용됩니다.
- 성능: 개발 및 빌드 시간에 영향을 줄 수 있습니다
- 문서: [React Compiler](https://react.dev/learn/react-compiler)

### Biome
Biome을 사용하여 코드 품질을 관리합니다:
- Tab 들여쓰기 (VSCode에서 2칸으로 표시)
- Double quotes
- Git 통합
- 자동 import 정리

## 🚀 Deployment

GitHub Pages에 자동 배포됩니다:
- Base path: `/framer-clone`
- Workflow: `.github/workflows/deploy.yml`
- Branch: `main`에 push 시 자동 배포

## 📄 License

MIT
