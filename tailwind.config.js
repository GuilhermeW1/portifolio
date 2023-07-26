/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    colors: {
      black: '#1a202c',//070000
      white: '#f5f5f5',
      orange: '#FCCB81',
      gray: '#c4c4c4',
      blue: '#5F3FBD',
      dark: {
        200: '#29272B',
        400: '#202023', //1E1D20
      },
      light: {
        200: '#f4ede4',//f0e7db
        400: '#f0e7db',//f0e7db
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
        }
      },
      animation: {
        wiggle: "wiggle 200ms ease-in"
      }
    },
  },
  plugins: [],
};

