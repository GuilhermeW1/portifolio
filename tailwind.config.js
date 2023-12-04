/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      black: '#1a202c',//070000
      white: '#f5f5f5',
      orange: '#FCCB81',
      gray: {
        200: '#c4c4c4',
        400: '#525252'
      },
      blue: '#5F3FBD',
      dark: {
        200: '#29272B',
        400: '#202023', //1E1D20
      },
      light: {
        200: '#f4ede4',//f0e7db
        400: '#f0e7db',//f0e7db
      },
      green: {
        100: '#2c3839',
        200: '#81e6d9',
        400: '#4fd1c5',
        //used in light theme
        300: '#E6FFFA',
        500: '#319795',
        600: '#2C7A7B',//#34403A
        //used in navbarlink
        450: '#88ccca', 
        //used in works/platforms,linksetc
        150: '#34403A'
      }
    },
    extend: {
      fontFamily: {
        'sans': ['Poppins', 'sans-serif']
      },
      keyframes: {
        wiggle: {
          "0%": { transform: "translateY(-20px)", opacity: 0 },
          "100%" :  { transform: "translateY(0)", opacity: 1 }
        },
        section: {
          "0%" : { transform: "translateY(10px)", opacity: 0},
          "100%" : { transform: "translateY(0)", opacity: 1}
        },
        rotate: { 
          "0%": { transform: "rotate(0)"},
          "100%": {transform: "rotate(12deg)" }
        },
        rotateBack: { 
          "0%": { transform: "rotate(0)"},
          "100%": {transform: "rotate(-12deg)" }
        },
        onOff: {
          "0%": { opacity: 0 },
          "50%": { opacity: 1 },
          "100%": { opacity: 0 }
        }
      },
      animation: {
        wiggle: "wiggle 400ms ease-in",
        section: "section 800ms ease-in",
        rotate: "rotate 600ms ease forwards",
        rotateBack: "rotateBack 400ms ease forwards",
        onOff: "onOff 1500ms infinite"
      }
    },
  },
  plugins: [],
};

