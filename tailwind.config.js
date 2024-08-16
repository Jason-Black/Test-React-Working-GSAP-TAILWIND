/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html,css}",
  ],
  theme: {
    extend: {
      colors: {
      primary: '#1A202C',  // Dark Blue Gray
      secondary: '#2B6CB0', // Blue
      accent: '#ED8936',    // Orange
      background: '#F7FAFC', // Light Gray
    },
  },
  },
  plugins: [],
}

