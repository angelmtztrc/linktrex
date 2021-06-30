module.exports = {
  purge: ['./**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  mode: 'jit',
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif']
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
