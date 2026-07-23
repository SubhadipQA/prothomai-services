/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        jakarta: ['var(--font-jakarta)', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#0F4CBB',
          light: '#3B6FD6',
          dark: '#0A3A94',
        },
        accent: {
          DEFAULT: '#F97316',
          dark: '#EA580C',
        },
        offwhite: '#FAFAF9',
        ink: '#111827',
        muted: '#4B5563',
        border: '#E5E7EB',
      },
    },
  },
  plugins: [],
};

export default config;
