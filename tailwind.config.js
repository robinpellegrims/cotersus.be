/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
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
