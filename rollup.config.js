// @ts-nocheck
import typescript from 'rollup-plugin-typescript2';

const plugins = [
  typescript({
    tsconfig: 'tsconfig.json',
    declaration: true,
  }),
];

export default [
  {
    input: 'src/index.ts',
    plugins,
    output: {
      file: 'dist/console-screen.es.js',
      format: 'es',
      sourcemap: true,
      exports: 'named',
    },
  },
  {
    input: 'src/index.ts',
    plugins,
    output: {
      file: 'dist/console-screen.cjs.js',
      format: 'cjs',
      sourcemap: true,
      exports: 'default',
    },
  },
];
