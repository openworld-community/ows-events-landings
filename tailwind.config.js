import defaultTheme from 'tailwindcss/defaultTheme';
// Restart Nuxt dev server when changing this file to reflect changes

/** @type {import('tailwindcss').Config} */
export default {
   theme: {
      extend: {
         fontFamily: { sans: ['Inter', ...defaultTheme.fontFamily.sans] },
         colors: {
            white: '#ffffff',
            black: '#000000',
            text: {
               main: '#4e4e4e',
               dark: '#323232',
               light: '#616161',
            },
            blue: {
               dark: '#426EFF',
               main: '#0A80EC',
               light: '#03BCFF',
               pale: {
                  main: '#CFDEF3',
                  light: '#E0EAFC',
               },
            },
         },
      },
   },
   plugins: [],
};
