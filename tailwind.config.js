/** @type {import('tailwindcss').Config} */
module.exports = {
  purge:['./index.html','./src/**/*.{vue,js,ts,jsx,tsx}'],
  mode : "jit",
  darkMode:"class",
  content: [],
  theme: {
    
    extend: {
      fontFamily:{
        'aAbstractGroovy':["aAbstractGroovy"],
        'Baloo-Regular':["Baloo-Regular"],
        'Quicksand':["Quicksand"],

      },
      keyframes: {
        wigglein: {
          '0%': { transform: 'translateX(256px)' },
          '100%': { transform: '-translateX(256px)' },
        },
        wiggleout: {
          to: { transform: 'translateX(256px)' },
        }
      },
      animation: {
        wiggle: 'wigglein .3s cubic-bezier(.5,2.5,.7,.7) , wiggleout .3s cubic-bezier(.5,2.5,.7,.7) 1.4s',
      }
      
    },
  },
  plugins: [],
}
