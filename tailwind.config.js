/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '200': '200px',
        '482': '482px',

      },

      width: {
        '352': '352px',
        '356': '356px',
        '600': '600px',
        '650': '650px',
        '690': '690px',
        '750': '750px',
        '760': '760px',
        '800': '800px',
        '915': '915px',// Custom width
        '1250': '1250px',// Custom width
      },
      height: {
        '400': '400px', // Custom height
        '406': '406px', // Custom height
        '520': '520px', // Custom height
        '600': '600px', // Custom height
      },
      backgroundImage: {
        'custom': "url('./assets/nature.jpg')",
        'Shopping': "url('./assets/shop.jpg')",
        'sakar': "url('./assets/Sakar.jpg')",
        'vishal': "url('./assets/Vishal.jpg')",
        'rajnish': "url('./assets/Rajnish.jpg')",

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