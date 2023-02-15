/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      white: "#fff",
      black: "#000",
      default: {
        50: "#f6f6f9",
        100: "#ebebf3",
        200: "#d3d3e4",
        300: "#adaecc",
        400: "#8083b0",
        500: "#606397",
        600: "#4c4d7d",
        700: "#3e3f66",
        800: "#363756",
        900: "#1e1e2d",
      },
      gray: {
        50: "#f6f7f8",
        100: "#ebecee",
        200: "#dbdde2",
        300: "#c2c7ce",
        400: "#9ca3af",
        500: "#8e94a3",
        600: "#7d8293",
        700: "#707385",
        800: "#5e616f",
        900: "#4e505a",
      },
    },
  },
  plugins: [],
};
