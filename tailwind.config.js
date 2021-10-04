module.exports = {
  mode: 'jit',
  purge: ['./src/components/**/*.{ts,tsx,js,jsx}', './src/pages/**/*.{ts,tsx,js,jsx}', './src/layouts/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        'base': ['"Poppins"'],
        'heading': ['"Poppins"']
      },
    },
  },
  variants: {},
  plugins: [],
}
