/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBeige: '#f5f1e6', // replace this with the actual color code you've picked
        customBrown: '#69443c', // Brown color for text
      },
    },
    
  },
  plugins: [],
}