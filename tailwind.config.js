import daisyui from "daisyui";
import typography from "@tailwindcss/typography";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // typography: {
      //   DEFAULT: {
      //     css: {
      //       p: {
      //         lineHeight: "1.4", // Sesuaikan jarak antar baris
      //         marginBottom: "0.5rem", // Kurangi margin bawah antar paragraf
      //       },
      //     },
      //   },
      // },
    },
  },
  plugins: [typography, daisyui],
};
