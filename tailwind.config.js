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
        't-white': '#FFFFFF',
        't-gray': '#A0A0A0',

        'bg-primary': '#F5F1EE',
      },
      fontFamily: {
        'FontAwesome': ['FontAwesome'],
        'Playfair': ['Playfair Display', 'serif'],
      },
      boxShadow: {
        '3xl': '0 10px 10 30px rgba(0, 0, 0, 1)',
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

