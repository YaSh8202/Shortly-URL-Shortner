module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      lightGray: "#f0f1f6",
      cyan: "hsl(180, 66%, 49%)",
      dark_voilte: "hsl(257, 27%, 26%)",
      red: "hsl(0, 87%, 67%)",
      Gray: "hsl(0, 0%, 75%)",
      grayishViolet: "hsl(257, 7%, 63%)",
      veryDarkBlue: "hsl(255, 11%, 22%)",
      veryDarkViolet: "hsl(260, 8%, 14%)",
      white: "#fff",
      black: "#000",
    },
    fontFamily: {
      body: ['"Poppins"'],
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", "& > *");
      addVariant("child-hover", "& > *:hover");
    },
  ],
};
