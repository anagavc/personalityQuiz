module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Raleway"],
        body: ["Montserrat"],
      },
      backgroundImage: {
        "hero-pattern": "url('./images/rose-petals.svg')",
      },
    },
  },
  plugins: [],
};
