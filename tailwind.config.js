/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    fontFamily: {
      default: 'Poppins',
    },
    extend: {
      dropShadow: {
        'lb-shadow': '0 0 20px rgba(27, 166, 94, 0.5)',
      },

      backgroundImage: {
        'hero-pattern': "url('./assets/images/hero-bg.jpg')",
      },
      colors: {
        'lb-primary': '#FBE7D8',
        'lb-yellow': '#F8AA17',
        'lb-pink': '#EC7BAE',
        'lb-grey': '#B7B7B7',
        'lb-rot': '#564320',
        'lb-bg-beige': '#FFE4C4',
        'btn-default': '#1BA65E',
        'btn-hovered': '#208F56',
      },
    },
  },
  plugins: [],
}
