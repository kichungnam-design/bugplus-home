/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0f172a',
          blue: '#0ea5e9',
          red: '#ef4444',
        }
      },
      fontFamily: {
        sans: ['Noto Sans KR', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
