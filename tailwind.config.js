module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        'fill-40': 'repeat(auto-fill, 10rem)',
        'fill-any': 'repeat(auto-fit, minmax(0px, 1fr))',
      },
      screens: {
        xs: { min: '0px', max: '640px' },
        lg: '1002px',
        xl: '1260px',
      },
      colors: {
        secondary: '#2196f3',
        'aqua-spring': {
          DEFAULT: '#F4FAFC',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#F4FAFC',
          600: '#C8E6F0',
          700: '#9CD2E4',
          800: '#70BED8',
          900: '#44AACC',
        },
      },
      fontSize: {
        h1: '27px',
        h2: '24px',
        h3: '18px',
      },
    },
  },
  plugins: [],
};
