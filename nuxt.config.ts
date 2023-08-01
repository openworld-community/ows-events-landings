// for svg modules import type declarations
import 'vite-svg-loader';

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
   plausible: { apiHost: `http://localhost:3000/`, trackLocalhost: true },
   tailwindcss: {},
   googleFonts: { families: { Inter: [400, 500, 600, 700] } },
   devtools: { enabled: false },
   experimental: {},
   alias: {},
});
