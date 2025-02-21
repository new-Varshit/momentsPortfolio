/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fatface:['Abril fatface','sans-serif'],
        sans: ['Work Sans','sans-serif'],
        playfair: ['playfair display','sans-serif'],
      },
      backgroundImage: {
        aboutImage:"url('./src/assets/12.jpg')",
         aboutProfile: "url('./src/assets/11.jpg')",
         reviewImage: "url('./src/assets/13.png')",
      },
      colors: {
        brown: {
          100: '#d4b89c', // Light brown
          200: '#b89c7d', // Medium light brown
          300: '#8c5e3c', // Medium brown
          400: '#5a3a1e', // Dark brown
          500: '#3e2b1a', // Very dark brown
        },
    },
  },
  plugins: [],
}
}