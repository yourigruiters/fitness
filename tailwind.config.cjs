/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {},
    colors: {
      white: "#fff",
      black: "#000",
      sun: "#facc15",
      moon: "#171717",
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
      blue: {
        50: "#edfdff",
        100: "#d6f8ff",
        200: "#b6f5ff",
        300: "#83f3ff",
        400: "#49e7ff",
        500: "#1fcfff",
        600: "#07b5ff",
        700: "#019ef7",
        800: "#087bc5",
        900: "#0e679a",
      },
      red: {
        50: "#fff1f3",
        100: "#ffe4e8",
        200: "#fdced7",
        300: "#fca5b6",
        400: "#f97391",
        500: "#f1416c",
        600: "#de2058",
        700: "#bb1549",
        800: "#9d1444",
        900: "#861540",
      },
    },
  },
  plugins: [],
};
