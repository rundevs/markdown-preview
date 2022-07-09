import { builtinModules } from 'module'
import { defineConfig } from 'vite'
import pkg from '../../package.json'

const PACKAGE_ROOT = __dirname

export default defineConfig({
  root: PACKAGE_ROOT,
  build: {
    outDir: '../../dist/main',
    emptyOutDir: true,
    minify: process.env./* from mode option */ NODE_ENV === 'production',
    sourcemap: true,
    lib: {
      entry: 'index.ts',
      formats: ['cjs'],
      fileName: () => '[name].cjs'
    },
    rollupOptions: {
      external: [
        'electron',
        ...builtinModules,
        ...builtinModules.map(e => `node:${e}`),
        ...Object.keys(pkg.dependencies || {})
      ]
    }
  }
})
