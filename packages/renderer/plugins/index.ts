import type { Plugin } from 'vite'
import useNodeJs, { Options as UseNodeJsOptions } from './use-node.js'
import buildConfig from './build-config.js'
import polyfillExports from './polyfill-exports'

export type Options = UseNodeJsOptions

export default function renderer(options?: Options): Plugin[] {
  return [useNodeJs(options), buildConfig(), polyfillExports()]
}
