/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        light: {
          primary: 'rgb(255 255 255)',
          secondary: 'rgb(255 255 255 / 70%)',
        },
        dark: {
          primary: 'black',
          secondary: 'rgb(0 0 0 / 50%)',
        },
      },
    },
  },
  plugins: [],
};
