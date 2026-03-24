/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        'off-white': '#F8F8F6',
        'light-gray': '#F0EFED',
        'mid-gray': '#E2E0DC',
        'warm-gray': '#8C8983',
        charcoal: '#1E1E1E',
        'near-black': '#111111',
        slate: '#2C3A4A',
        'slate-mid': '#3D5166',
        'slate-light': '#EAF0F6',
        gold: '#B59A6A',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace'],
      },
      borderRadius: {
        DEFAULT: '2px',
        sm: '2px',
        md: '2px',
        lg: '2px',
        xl: '2px',
      }
    },
  },
  plugins: [],
}
