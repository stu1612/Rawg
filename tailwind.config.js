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
      },
    },
  },
  plugins: [],
};
