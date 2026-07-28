/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./Portfolio.jsx"
  ],
  theme: {
    extend: {
      colors: {
        bg: '#0A0A0A',
        surface: '#111111',
        border: '#262626',
        primary: '#F5F5F5',
        secondary: '#A3A3A3',
        muted: '#737373',
        hoverSurface: '#1A1A1A',
        lightGray: '#E5E5E5',
      }
    },
  },
  plugins: [],
}
