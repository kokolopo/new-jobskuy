/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Helvetica", "Arial", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"],
        mono: ["Courier New", "monospace"],
      },
    },
    colors: {
      basic: "#FFF7F1",
      primary: "#FFE4C9",
      secondary: "#E78895",
      alter: "#BED1CF",
    },
  },
  plugins: [require("flowbite/plugin")],
};
