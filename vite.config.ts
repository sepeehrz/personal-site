import {fileURLToPath, URL} from 'node:url';

import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import eslintPlugin from '@nabla/vite-plugin-eslint';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    eslintPlugin({
      shouldLint: path => /.(?:ts|vue)$/su.test(path)
    })
  ],
  resolve: {
    alias: {
      '@core': fileURLToPath(new URL('./core', import.meta.url))
    }
  }
});
