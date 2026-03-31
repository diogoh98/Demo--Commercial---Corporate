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
        'off-white': '#EDEDED',
        'light-gray': '#D4D4D4',
        'mid-gray': '#333333',
        'warm-gray': '#A3A3A3',
        charcoal: '#E5E5E5', /* Usado frequentemente para texto forte, alterado para quase branco */
        'near-black': '#050505',
        slate: '#D4AF37', /* Substituindo o azul antigo por Dourado Escuro no tema Dark Luxury */
        'slate-mid': '#C59A2E', 
        'slate-light': '#1C1C1C',
        gold: '#D4AF37',
        'glass-dark': 'rgba(10, 10, 10, 0.45)',
        'glass-border': 'rgba(255, 255, 255, 0.05)',
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
