import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  clean: true,
  splitting: false,
  sourcemap: false,
  minify: false,
  outDir: 'dist',
  treeshake: true,
  external: ['react', 'react-dom'],
  loader: {
    '.css': 'copy',
  },
});
