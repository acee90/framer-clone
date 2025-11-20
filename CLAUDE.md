# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a React + TypeScript + Vite project with Tailwind CSS v4, implementing a Framer clone. The project uses:
- **React 19** with React Compiler enabled for automatic optimizations
- **Vite 7** for build tooling
- **Biome** for linting and formatting (migrated from ESLint)
- **shadcn/ui** for UI components (New York style variant)
- **Tailwind CSS v4** via the Vite plugin

## Development Commands

### Running the app
```bash
npm run dev          # Start development server
npm run preview      # Preview production build locally
```

### Building
```bash
npm run build        # TypeScript type-check + Vite build → outputs to dist/
```

### Code quality
```bash
npm run lint         # Lint code with Biome
npm run format       # Format code with Biome
npm run check        # Run Biome checks and auto-fix issues
npm run reporter     # Show summary report of Biome checks
```

## Architecture

### Path Aliases
All source files use the `@/` alias for imports:
- `@/components` → `src/components`
- `@/lib/utils` → `src/lib/utils`
- `@/components/ui` → `src/components/ui`

Configured in:
- `vite.config.ts` (Vite resolver)
- `tsconfig.json` + `tsconfig.app.json` (TypeScript)
- `components.json` (shadcn/ui)

### UI Components
- Uses **shadcn/ui** component library (New York style variant)
- Components are placed in `src/components/ui/`
- `components.json` is configured for shadcn CLI
- Utility function `cn()` in `src/lib/utils.ts` merges Tailwind classes using `clsx` and `tailwind-merge`

### Styling
- **Tailwind CSS v4** is used via `@tailwindcss/vite` plugin
- Main styles in `src/global.css`
- Uses CSS variables for theming (configured in components.json)
- Base color: neutral
- Icon library: lucide-react

### TypeScript Configuration
- Uses project references with separate configs:
  - `tsconfig.json` (base with path aliases)
  - `tsconfig.app.json` (app code in src/)
  - `tsconfig.node.json` (build tooling)
- Strict mode enabled
- Target: ES2022 with DOM libs
- Module resolution: bundler mode

### React Compiler
The **React Compiler** is enabled via `babel-plugin-react-compiler` in vite.config.ts:11-13. This provides automatic optimizations but may impact dev/build performance.

### Biome Configuration
Biome (biome.json) is configured with:
- Tab indentation
- Double quotes for JavaScript/TypeScript
- VCS integration with Git
- Custom rule set focusing on correctness, complexity, and suspicious code patterns
- TypeScript-specific rules (no explicit any, use const assertions, etc.)
- React hooks rules (exhaustive dependencies as warnings, hooks at top level)
- Auto-organize imports on assist actions

## Deployment

The project is configured for **GitHub Pages** deployment:
- Base path: `/framer-clone` (set in vite.config.ts:8)
- CI/CD: `.github/workflows/deploy.yml` deploys on push to main
- Build output: `dist/` folder
- Automated workflow installs deps, builds, and deploys to GitHub Pages

## Key Files

- `vite.config.ts` - Vite configuration with React, Tailwind, and path aliases
- `biome.json` - Biome linting and formatting rules
- `components.json` - shadcn/ui configuration
- `src/main.tsx` - React app entry point
- `src/App.tsx` - Main app component
- `src/lib/utils.ts` - Utility functions (cn helper)

한글로 대답해주고,
커밋도 한글로 쓰되, 피쳐별로 쪼개서 conventional commit 포맷에 맞춰서 git emoji도 넣어서 만들어 줘.