/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        saffron: {
          light: '#fde68a', // amber-200
          DEFAULT: '#f59e0b', // amber-500
          dark: '#d97706', // amber-600
        },
        red: {
          DEFAULT: '#dc2626', // red-600 (Paithani red)
          dark: '#991b1b', // red-800
        },
        gold: {
          light: '#fef08a', // yellow-200
          DEFAULT: '#eab308', // yellow-500
          dark: '#ca8a04', // yellow-600
        },
        green: {
          light: '#bbf7d0', // green-200
          DEFAULT: '#16a34a', // green-600 (Marigold leaves, traditional green)
          dark: '#15803d', // green-700
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        calligraphy: ['Great Vibes', 'cursive'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'warli-pattern': "url('https://www.transparenttextures.com/patterns/stardust.png')",
        'mandap-bg': "url('https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
      }
    },
  },
  plugins: [],
}
