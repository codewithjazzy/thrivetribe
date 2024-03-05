/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./views/**/*.ejs",
    "./public/**/*.js"
  ],
  theme: {
    screens: {
      'sm': '300px',
      // => @media (min-width: 300px) { ... }

      'md': '480px',
      // => @media (min-width: 480px) { ... }

      'lg': '768px',
      // => @media (min-width: 768px) { ... }

      'xl': '976px',
      // => @media (min-width: 976px) { ... }

      '2xl': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

