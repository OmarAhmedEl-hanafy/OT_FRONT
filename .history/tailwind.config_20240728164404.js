/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable @typescript-eslint/no-unused-vars */
/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

export default withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        gradient: "linear-gradient(180deg, #3361A0 0%, #D4DCE8 100%)",
        "gradient-blur":
          "linear-gradient(  180deg,rgba(255, 255, 255, 0.6) 0%,rgba(255, 255, 255, 0.3) 100%)",
      }),
      boxShadow: {
        'custom-light': '0 0 10px 0px rgba(0, 0, 0, 0.1)',
        'custom-dark': '0 0 10px 0px rgba(0, 0, 0, 0.2)',
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      "2xl": "1400px",
    },
    colors: {
      "main-color": "rgb(160,40,41)",
      "bg-main": "#f5fcff",
      "second-color": "rgb(255,194,36)",
      "white": "#ffffff",
      "black":"#000000",
      "transparent":"transparent"
    },
   
  },
  plugins: [],
});
