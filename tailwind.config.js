module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '0px',
        'lg': '1002px',
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [],
}
