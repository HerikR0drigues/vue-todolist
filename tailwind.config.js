/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'pixelfy': ['Pixelify Sans', 'Sans-Serif'],
        'poppins': ['Poppins', 'Sans-Serif']
      },
      colors: {
        purpleCustom: '#5D3FD3',
        mainBackground: '#2D2D2D',
        SecondaryBackground: '#1D1D1D'
      }
    },
  },
  plugins: [],
}

