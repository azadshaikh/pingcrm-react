import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    laravel(['resources/js/app.tsx', 'resources/scss/app.scss']),
    react()
  ],
  css: {
    preprocessorOptions: {
      scss: {
        quietDeps: true,
        logger: {
          silent: true,  // This will silence all Sass warnings
          warn: () => {}, // This overwrites the warning function
          debug: () => {}
        },
        sassOptions: {
          outputStyle: 'compressed',
          quietDeps: true,
          logger: { silent: true },
          warnRuleAsDeprecated: false
        }
      }
    }
  },
});
