```
harmony-ui/
├── packages/
│   ├── core/                      # 핵심 컴포넌트 패키지
│   │   ├── src/
│   │   │   ├── components/        # 기본 컴포넌트들
│   │   │   │   ├── button/
│   │   │   │   │   ├── index.tsx
│   │   │   │   │   ├── button.tsx
│   │   │   │   │   └── button.test.tsx
│   │   │   │   └── ...
│   │   │   ├── hooks/            # 공통 훅
│   │   │   ├── utils/            # 유틸리티 함수
│   │   │   └── themes/           # 테마 설정
│   │   └── package.json
│   │
│   ├── animations/               # Framer Motion 애니메이션 패키지
│   │   ├── src/
│   │   │   ├── transitions/      # 전환 애니메이션
│   │   │   ├── variants/         # 애니메이션 variants
│   │   │   └── hooks/           # 애니메이션 관련 훅
│   │   └── package.json
│   │
│   ├── tailwind-config/         # Tailwind 설정 패키지
│   │   ├── src/
│   │   │   ├── colors.js        # 색상 시스템
│   │   │   ├── typography.js    # 타이포그래피
│   │   │   └── spacing.js       # 간격 시스템
│   │   └── package.json
│   │
│   └── tokens/                  # 디자인 토큰 패키지
│       ├── src/
│       │   ├── colors/
│       │   ├── typography/
│       │   └── spacing/
│       └── package.json
│
├── apps/
│   ├── docs/                    # 문서 사이트
│   │   ├── pages/
│   │   │   ├── components/      # 컴포넌트 문서
│   │   │   ├── guides/         # 가이드 문서
│   │   │   └── examples/       # 예제 코드
│   │   └── package.json
│   │
│   └── storybook/              # Storybook
│       ├── stories/
│       └── package.json
│
├── scripts/                     # 빌드 및 개발 스크립트
├── tests/                      # E2E 및 통합 테스트
├── turbo.json                  # Turborepo 설정
└── package.json
```
