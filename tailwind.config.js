import daisyui from "daisyui";
import themes from "daisyui/src/theming/themes.js";

const lightTheme = themes["[data-theme=light]"];
const darkTheme = themes["[data-theme=dark]"];

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.jsx"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],

  daisyui: {
    themes: [
      {
        light: {
          ...lightTheme,
          primary: "#3185FC",
          "primary-content": "#F4F4F6",
          secondary: "#0B3954",
          "secondary-content": "#F4F4F6",
          neutral: "#272727",
          "neutral-content": "#F4F4F6",
          "base-content": "#000000",
          "--rounded-btn": "0.375rem",
          "--rounded-box": "none",
          "--btn-text-case": "none",
        },
      },
      {
        dark: {
          ...darkTheme,
          primary: "#3185FC",
          "primary-content": "#F4F4F6",
          secondary: "#aec8ea",
          "secondary-content": "#221f37",
          "base-100": "#1f2328",
          "base-content": "#F4F4F6",
          "--rounded-btn": "0.375rem",
          "--rounded-box": "none",
          "--btn-text-case": "none",
        },
      },
    ],
  },
};
