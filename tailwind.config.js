/** @type {import('tailwindcss').Config} */
import { fontFamily } from "tailwindcss/defaultTheme";

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: [`var(--font-mont)`, ...fontFamily.sans],
      },
      colors: {
        light: "#f1f1f1",
        dark: "#1b1b1b",
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("preline/plugin")],
};
