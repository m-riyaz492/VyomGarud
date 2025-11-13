/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#0e0f12',
        gunmetal: '#14161a',
        accent: '#ff7b00',
      },
      fontFamily: {
        sans: ['Poppins', 'Inter', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 20px rgba(255,123,0,0.25)',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at center, rgba(255,123,0,0.15) 0, rgba(255,123,0,0.05) 35%, transparent 36%)',
      },
    },
  },
  plugins: [],
}