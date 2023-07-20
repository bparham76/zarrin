/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary' : '#f00'
      },
      boxShadow: {
        'header':'0 3px 3px 0 cyan'
      },
    },
  },
  plugins: [],
}

