/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#e6f5ff',
            100: '#b3e0ff',
            200: '#80ccff',
            300: '#4db8ff',
            400: '#1aa3ff',
            500: '#0088e0',
            600: '#006bb0',
            700: '#004f80',
            800: '#003250',
            900: '#001620',
          },
        },
        animation: {
          'spin-slow': 'spin 3s linear infinite',
        }
      },
    },
    plugins: [
      require('@tailwindcss/typography')
    ],
  }