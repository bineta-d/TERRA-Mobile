/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'brown-pastel': '#A47551',
        'dark-brown': '#705855', 
        'yellow-pastel': '#FFF3B0',
        'white-pastel': '#FAF9F6',
        'cream-pastel': '#FDF6EC',
        'mocha-pastel': '#D2B48C',
      }
    },
  },
  plugins: [],
};
