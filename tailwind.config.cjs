const colors=require("tailwindcss/colors")

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode:"class",
  theme: {
    extend:{
      colors:{
        primary: {
          50 :'#fff1f3',
          100: '#ffe4e8',
          200: '#fecdd6',
          300: '#fea3b4',
          400: '#fc708d',
          500: '#f7567c',
          600: '#e31b54',
          700: '#c01046',
          800: '#a01141',
          900: '#89123f',
        },
      
      
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ addVariant }) {
      addVariant('child', '& > *');
    }
  ],
}
