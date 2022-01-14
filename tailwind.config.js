module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': {min:'0px', max:'640px'},
        'lg': '1002px',
        // => @media (min-width: 992px) { ... }
      },
      colors: {
        secondary: '#2196f3',
      },
    },
  },
  plugins: [],
}
