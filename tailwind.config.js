const { fontFamily } = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...fontFamily.sans],
      },
      gridTemplateRows: {
        mobile: "550px 400px 400px 450px 550px 400px 400px 550px",
        4: "repeat(4, 21em)",
      },
      gridTemplateColumns: {
        mobile: "1fr",
        3: "repeat(3, 1fr)",
      },
    },
  },
  plugins: [require("tailwindcss")],
};
