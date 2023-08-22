import { FileSystemIconLoader } from 'unplugin-icons/loaders';
import IconsResolver from 'unplugin-icons/resolver';
import Components from 'unplugin-vue-components/vite';

const isDev = process.env.NODE_ENV !== 'production';

const iconCollections = {
   main: FileSystemIconLoader('./assets/icons'),
};

export default defineNuxtConfig({
   modules: [
      '@nuxtjs/eslint-module',
      '@nuxtjs/tailwindcss',
      '@nuxtjs/google-fonts',
      '@nuxt/image',
      '@nuxtjs/plausible',
      [
         'unplugin-icons/nuxt',
         {
            autoInstall: true,
            scale: 1,
            customCollections: iconCollections,
         },
      ],
   ],
   build: { transpile: ['trpc-nuxt'] },
   image: {},
   vite: {
      plugins: [
         Components({
            resolvers: [IconsResolver({ customCollections: Object.keys(iconCollections) })],
            types: [],
         }),
      ],
   },
   plausible: {
      // Events will by sent to {apiHost}/api/event
      apiHost: isDev ? `http://localhost:3000` : '',
      trackLocalhost: isDev,
   },
   tailwindcss: {},
   googleFonts: { families: { Inter: [400, 500, 600, 700] } },
   devtools: { enabled: false },
   experimental: {},
   alias: {},
});
