import {fileURLToPath, URL} from 'node:url';

import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 9001
  },

  plugins: [vue(), svgLoader()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
          '@import "./src/app/ui/assets/style/settings/_index.scss";'
      }
    }
  },
  resolve: {
    alias: {
      '@modules': fileURLToPath(new URL('./src/modules', import.meta.url)),
      '@app': fileURLToPath(new URL('./src/app', import.meta.url))
    }
  }
  // resolve: {
  //   alias: {
  //     '@core': fileURLToPath(new URL('./core', import.meta.url)),
  //     '@modules': fileURLToPath(new URL('./modules', import.meta.url)),
  //     '@ui': fileURLToPath(new URL('./ui', import.meta.url))
  //   }
  // }
});
