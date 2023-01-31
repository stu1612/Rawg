/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: "class",

  theme: {
    extend: {
      colors: {
        background: {
          dark: "#151515",
          light: "#F9F6EE",
        },
        text: {
          dark: "#fff",
          light: "#000",
        },
        navbar: {
          dark: "#151515",
          light: "#ff6961",
        },
        cards: {
          dark: "#202020",
          light: "#e8e8e8",
        },
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit, minmax(15rem, 1fr))",
      },
      bg: {
        show: "background-color:red",
      },
    },
  },
  plugins: [],
};
