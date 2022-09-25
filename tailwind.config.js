module.exports = {
  purge: ["./pages/**/*.tsx", "./src/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      left: {
        100: "400px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
