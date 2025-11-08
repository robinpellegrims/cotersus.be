const { createGlobPatternsForDependencies } = require('@nx/react/tailwind');
const { join } = require('path');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    join(
      __dirname,
      '{src,pages,components,app}/**/*!(*.stories|*.spec).{ts,tsx,html}'
    ),
    ...createGlobPatternsForDependencies(__dirname),
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        fjalla: ['var(--font-fjalla)'],
        montserrat: ['var(--font-montserrat)'],
        inter: ['var(--font-inter)'],
      },
      colors: {
        brand: {
          red: '#F54A48',
          orange: '#FA982F',
        },
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(90deg, #F54A48 0%, #FA982F 100%)',
      },
    },
  },
  plugins: [],
};
