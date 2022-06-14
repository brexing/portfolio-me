/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      white: '#ffffff',
      primary: {
        100: '#def0fd',
        200: '#bde0fa',
        300: '#9bd1f8',
        400: '#7ac2f5',
        500: '#59b3f2',
        600: '#1b96ee',
        700: '#0e72b9',
        800: '#094c7b',
        900: '#05263e',
      },
      danger: {
        100: '#fddee1',
        200: '#fabdc4',
        300: '#f89ba6',
        400: '#f57a89',
        500: '#f2596b',
        600: '#ee1b34',
        700: '#b90e22',
        800: '#7b0917',
        900: '#3e050b',
      },
      warn: {
        100: '#FDF5DE',
        200: '#FAEBBD',
        300: '#F8E09B',
        400: '#F5D67A',
        500: '#F2CC59',
        600: '#EEB91B',
        700: '#B98E0E',
        800: '#7B5F09',
        900: '#3E2F05',
      },
      grays: {
        100: '#f9fafa',
        200: '#eef1f1',
        300: '#d8dfdf',
        400: '#c7d1d1',
        500: '#b0bfbf',
        600: '#505b62',
        700: '#2e3438',
      },
    },
    extend: {},
  },
  plugins: [],
}
