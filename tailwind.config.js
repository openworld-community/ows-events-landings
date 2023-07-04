import defaultTheme from 'tailwindcss/defaultTheme';

// Restart Nuxt dev server when changing this file to reflect changes

/** @type {import('tailwindcss').Config} */
export default {
   theme: {
      extend: {
         fontFamily: { sans: ['Inter', ...defaultTheme.fontFamily.sans] },
         colors: {},
      },
   },
};
