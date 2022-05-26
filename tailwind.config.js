module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },

    extend: {
      colors: {
        primaryColor: "#FF9600",
        primarySecondary: "#FC8800",
        darkGray: "#1A1A1B",
        lightGray: "#FFFFFF",
        lightBlue: "#3671E9",
        lightBrown: "#292929",
        brightRedLight: "hsl(12, 88%, 69%))",
        brightRedSupLight: "hsl(12, 88%, 95%)",
        darkBlue: "hsl(228, 39%, 23%)",
      },

      fontFamily: {
        Rubik: ["Rubik"],
      },
    },
  },
  plugins: [],
};
