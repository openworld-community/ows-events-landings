// for svg modules import type declarations
import 'vite-svg-loader';

const isDev = process.env.NODE_ENV !== 'production';

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
   modules: [
      '@nuxtjs/eslint-module',
      '@nuxtjs/tailwindcss',
      '@nuxtjs/google-fonts',
      '@nuxt/image',
      'nuxt-svgo',
      '@nuxtjs/plausible',
   ],
   build: { transpile: ['trpc-nuxt'] },
   image: {},
   svgo: {},
   vite: {},
   plausible: {
      // Events will by sent to {apiHost}/api/event
      apiHost: isDev ? `http://localhost:3000/` : undefined,
      trackLocalhost: isDev,
   },
   tailwindcss: {},
   googleFonts: { families: { Inter: [400, 500, 600, 700] } },
   devtools: { enabled: false },
   experimental: {},
   alias: {},
});
