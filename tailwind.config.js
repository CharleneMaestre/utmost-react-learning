/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navigationBgColor: ["#f1ebe7"],
        cardBgColor: ["#f9f7f5"],
        primaryBrownColor: ["#DBB064"],
        tertiaryGreenColor: ["#2b6049"],
        textBlackGrayColor: ["#333333"],
        pearlBlush: ["#E2D2C3"],
        btnHoverColor: ["#b68a3d"],
      },
      fontFamily: {
        proximaNova: ["Proxima Nova"],
      },
    },
  },
  plugins: [],
};
