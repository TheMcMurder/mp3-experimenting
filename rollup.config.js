const { resolve } = require('path')
const { nodeResolve } = require('@rollup/plugin-node-resolve')
const commonjs = require('@rollup/plugin-commonjs')
import babel from '@rollup/plugin-babel'
import { terser } from 'rollup-plugin-terser'
import postcss from 'rollup-plugin-postcss'
const replace = require('@rollup/plugin-replace')

const outputPath = `dist`

export default {
  input: resolve(process.cwd(), `src/spa/spa-entry.js`),
  output: {
    dir: resolve(process.cwd(), outputPath),
    format: 'iife',
  },
  plugins: [
    nodeResolve({
      browser: true,
    }),
    babel({
      babelHelpers: 'runtime',
      exclude: 'node_modules/**',
    }),
    commonjs(),
    postcss({
      extract: `styles.css`,
      plugins: [],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
  ],
  watch: {
    clearScreen: false,
  },
}