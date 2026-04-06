/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#015FC9',
          light: '#4A8FE7',
          dark: '#013A7D',
        },
        secondary: {
          DEFAULT: '#0DD3F1',
          light: '#5AE4F7',
          dark: '#08A8C2',
        },
        dark: {
          DEFAULT: '#15233C',
          light: '#2C3E5C',
          lighter: '#1E2E4A',
          darkest: '#0A0E1A',
        },
        light: {
          DEFAULT: '#F6F7FC',
          dark: '#E5E7EB',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
