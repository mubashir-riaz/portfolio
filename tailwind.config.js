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
        steiBg: '#202838',
        steiBorder: '#d86b18',
        steiOrange: '#ff7300',
        steiRss: '#ff6b00',
        steiText: '#f2f2f2',
        steiDesc: '#e0e0e0',
        steiMuted: '#d6d6d6',
      },
      fontFamily: {
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', '"Liberation Mono"', '"Courier New"', 'monospace'],
      }
    },
  },
  plugins: [],
}
