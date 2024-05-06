import {defineConfig} from 'vite';
import vue from '@vitejs/plugin-vue';
import svgLoader from 'vite-svg-loader';
import {fileURLToPath, URL} from 'node:url';

export default defineConfig(({mode}) => {
  return {
    server: {
      port: 9001
    },
    plugins: [vue(), svgLoader()],
    css: {
      modules: {
        generateScopedName: mode === 'production' ? '[hash:base64:8]' : ''
      },
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
  };
});
