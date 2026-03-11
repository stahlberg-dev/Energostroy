import { defineConfig } from 'astro/config';

export default defineConfig({
  base: process.env.NODE_ENV === 'production' ? '/' : '/',
  server: {
    open: true,
  },
  vite: {
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/styles/functions/index.scss" as *;
            @use "@/styles/mixins/index.scss" as *;
            @use "@/styles/variables/index.scss" as *;
          `,
        },
      },
    },
    build: {
      cssCodeSplit: false,
    },
  },
  build: {
    inlineStylesheets: 'never',
    format: 'file',
  },
});
