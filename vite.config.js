import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    laravel({
      input: ['resources/js/app.tsx', 'resources/scss/app.scss'],
      refresh: [
        'app/**',
        'routes/**',
        'resources/**',
    ],
    }),
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
  }
  // Add watch configuration
  // watch: {
  //   reloadPageOnChange: true,
  //   usePolling: true,
  //   include: [
  //     'resources/**/*.php',
  //     'resources/**/*.js',
  //     'resources/**/*.jsx',
  //     'resources/**/*.ts',
  //     'resources/**/*.tsx',
  //     'resources/**/*.css',
  //     'resources/**/*.scss'
  //   ]
  // }
});
