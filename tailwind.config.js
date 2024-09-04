/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      width: {
        '356': '356px', 
        '600': '600px', 
        '750': '750px', 
        '800': '800px', 
        '915': '915px',// Custom width
        '1250': '1250px',// Custom width
      },
      height: {
        '520': '520px', // Custom height
        '600': '600px', // Custom height
      },
      backgroundImage: {
        'custom': "url('./assets/nature.jpg')",
        'shopping': "url('./assets/shop.jpg')",
        
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        customWhite: 'rgb(122, 122, 122)',
      },
    },
  },
  plugins: [],
}