/** @type {import('tailwindcss').Config} */
export default {
  important: true,
  content: ["./src/**/*.{html,js}"],
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      spacing: {
        19: '4.75rem'
      }
    },
  },
  plugins: [],
}

