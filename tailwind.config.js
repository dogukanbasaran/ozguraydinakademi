/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'text': ['Frank Ruhl Libre','serif'],
        'heading': ['Poppins','sans-serif']
      }
    },
  },
  plugins: [],
}

