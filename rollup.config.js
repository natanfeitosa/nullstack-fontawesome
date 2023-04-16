import path from "path";
import esbuild from 'rollup-plugin-esbuild'
import dts from "rollup-plugin-dts"

/** 
 * @param {import('rollup').RollupOptions} config
 * @returns {import('rollup').RollupOptions}
 */
const makeConfig = config => {
  return {
    input: './src/index.ts',
    ...config
  }
}

const esbuildPlugin = esbuild({
  tsconfig: path.join('.', '/tsconfig.json'),
  target: 'es2019',
})

export default [
  makeConfig({
    output: {
      file: 'dist/index.d.ts',
      format: 'es'
    },
    plugins: [dts()],
  }),
  makeConfig({
    output: {
      file: 'dist/index.mjs',
      exports: 'named',
      format: 'es',
    },
    plugins: [esbuildPlugin],
  }),
  makeConfig({
    output: {
      file: 'dist/index.js',
      format: 'cjs',
      exports: 'named',
      esModule: true,
    },
    plugins: [esbuildPlugin],
  }),
];
