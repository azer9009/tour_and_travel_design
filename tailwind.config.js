/** @type {import('tailwindcss').Config} */
module.exports = { 
  content: ["*"], 
  theme: {
    screens: {
      'tall': { 'raw': '(max-height: 650px)' },
      // => @media (min-height: 800px) { ... }
    },
      extend: { 
          fontFamily: { 
              "inter": ['Inter', 'sans-serif'], 
              "playfair": ['Playfair Display', 'serif'],
              "mulish": ['Mulish', 'sans-serif'], 
          } 
      }, 
  }, 
  plugins: [], 
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  theme: {
    screens: {
      '2xl': {'max': '1535px'},
      // => @media (max-width: 1535px) { ... }

      'xl': {'max': '1279px'},
      // => @media (max-width: 1279px) { ... }

      'lg': {'max': '1023px'},
      // => @media (max-width: 1023px) { ... }

      'md': {'max': '767px'},
      // => @media (max-width: 767px) { ... }

      'sm': {'max': '639px'},
      // => @media (max-width: 639px) { ... }
    }
  }
}