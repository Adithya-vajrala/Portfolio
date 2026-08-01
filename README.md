# Portfolio

A premium, production-quality portfolio built with **React**, **Vite**, **TypeScript**, **Tailwind CSS**, **React Router**, **Framer Motion**, and **React Icons**.

## Stack

- [React 19](https://react.dev/)
- [Vite](https://vite.dev/) — fast dev server & builds
- [TypeScript](https://www.typescriptlang.org/) — strict mode
- [Tailwind CSS v4](https://tailwindcss.com/) — utility-first styling via the `@tailwindcss/vite` plugin
- [React Router v7](https://reactrouter.com/) — declarative routing
- [Framer Motion](https://www.framer.com/motion/) — animations
- [React Icons](https://react-icons.github.io/react-icons/) — icon set
- [ESLint](https://eslint.org/) — flat config with TypeScript, React Hooks, and React Refresh plugins

## Getting started

```bash
npm install
npm run dev
```

## Scripts

| Command            | Description                          |
| ------------------ | ------------------------------------ |
| `npm run dev`      | Start the Vite dev server            |
| `npm run build`    | Type-check (`tsc -b`) and build      |
| `npm run lint`     | Lint the codebase with ESLint        |
| `npm run preview`  | Preview the production build         |

## Folder structure

```
src/
├── assets/        Static assets (images, fonts)
├── components/    Reusable UI components
├── pages/         Route-level page components
├── layout/        App shell (Navbar, Footer, MainLayout)
├── hooks/         Custom React hooks
├── context/       React context providers
├── services/      API / external integrations
├── types/         Shared TypeScript types
├── routes/        Route configuration
├── constants/     App-wide constants
├── utils/         Helper functions
├── data/          Static portfolio data
├── animations/    Framer Motion variants & presets
└── styles/        Global styles (Tailwind entry)
```
