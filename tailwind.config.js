/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "*"],
  theme: {
    extend: {
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1300px',
      },
      colors: {
        'c-primary': '#7C60A6',
        'c-secondary': '#4951A5',
        'c-tertiary': '#F4F4F4',

        't-primary': '#75f',
        't-black': '#070709',
        't-black-2': '#111827',
        't-white': '#FFFFFF',
        't-gray': '#A0A0A0',
        't-gray-2': '#9A9A98',

        'bg-white': '#F9F9FE',
        'bg-primary': '#F5F1EE',
        'bg-secondary': '#EDC0F0',
        'bg-tertiary': '#E7D8FF',
        'bg-quaternary': '#FFD9D9',
      },
      fontFamily: {
        'FontAwesome': ['FontAwesome'],
        'Playfair': ['Playfair Display', 'serif'],
        'Poppins': ['Poppins', 'sans-serif'],
        'Jakarta': ['Plus Jakarta Sans', 'sans-serif'],
      },
      boxShadow: {
        '3xl': '0 10px 10 30px rgba(0, 0, 0, 1)',
      },
      animation: {
        'slide-in': 'slide-in 0.5s ease-out forwards',
        'slide-out': 'slide-out 0.5s ease-in forwards',
      },
      keyframes: {
        'slide-in': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'slide-out': {
          '0%': { transform: 'translateX(0)', opacity: '1' },
          '100%': { transform: 'translateX(-100%)', opacity: '0' },
        },
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
      },
      screens: {
        '2xl': '1300px',
      },
    }
  },
  plugins: [
    require('daisyui'),
  ],
}

