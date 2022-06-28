# Electron app `Markdown Preview`

[![awesome-vite](https://awesome.re/mentioned-badge.svg)](https://github.com/vitejs/awesome-vite)
![GitHub stars](https://img.shields.io/github/stars/LuiSauter/markdown-preview?color=fa6470&style=flat)
![GitHub license](https://img.shields.io/github/license/LuiSauter/markdown-preview?style=flat)
[![Required Node.JS >= v14.17.0](https://img.shields.io/static/v1?label=node&message=%3E=14.17.0&logo=node.js&color=3f893e&style=flat)](https://nodejs.org/about/releases)

English | TypeScript | React | Electron | Vite

## Overview

📦 Out of the box
🎯 Based on [react-ts](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) template, less invasive
🌱 Simple directory structure，real flexible
💪 Support Use Electron、Node.js API and in Renderer-process
🔩 Support C/C++ native addons
🖥 It's easy to implement multiple windows

## Quick start

```sh
# using npm
npm install && npm run dev

# using yarn
yarn install && yarn run dev
```

<!-- ## Debug -->

## Directory structure

*🚨 By default, the files in `electron` folder will be built into the `dist/electron`*

```tree
├── electron                  Electron-related code
│   ├── main                  Main-process source code
│   ├── preload               Preload-script source code
│   └── resources             Resources for the production build
│       ├── icon.icns             Icon for the application on macOS
│       ├── icon.ico              Icon for the application
│       ├── installerIcon.ico     Icon for the application installer
│       └── uninstallerIcon.ico   Icon for the application uninstaller
│
├── release                   Generated after production build, contains executables
│   └──{version}
│       ├── {os}-unpacked     Contains unpacked application executable
│       └── Setup.{ext}       Installer for the application
│
├── public                    Static assets
└── src                       Renderer source code, your React application
```

## 🚨 `dependencies` vs `devDependencies`

**Put Node.js packages in `dependencies`**

🚨 e.g.

- `electron-store`
- `sqlite3`
- `serilaport`
- `mongodb`
- ...others Node.js packages

**Put Web packages in `devDependencies`**

🚨 e.g.

- `react`
- `react-dom`
- `react-router`
- `mobx`
- `zustand`
- `antd`
- `axios`
- ...others Web packages
