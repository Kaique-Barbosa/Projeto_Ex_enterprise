const { addIconSelectors } = require("@iconify/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        preto: {
          950: "#000000",
          900: "#111111",
          850: "#212020",
          800: "#232222",
        },
        "preto_75%": "rgba(0,0,0,.75)",
        branco: "#FFFFFF",
        "branco_75%": "rgba(255,255,255,.75)",
        cinza: {
          50: "#FBFAFA",
          100: "#F2F3F3",
          200: "#E3E4E6",
          400: "#999999",
        },
        dourado: "#F0A90E",
        "laranja-dark": "#EB7500",
        "laranja-light": "#F64C03",
      },
      screens: {
        xs: "450px",
        "2xs": "320px",
      },
      boxShadow: {
        temaEscuro: "3px 3px 12px 1px rgba(235,117,0,.5);",
        neutro: "3px 3px 12px 3px rgb(62, 60, 60, .5);",
        neutro_sm: "1px 1px 3px 1px rgb(62, 60, 60, .5);",
        neutro_dark: "3px 3px 12px 3px rgb(81, 81, 87, .5);",
        neutro_dark_sm: "1px 1px 3px 1px rgb(81, 81, 87, .5);",
      },
      maxWidth: {
        "7xl": "80rem",
        "8xl": "90rem",
        "9xl": "96rem",
        "10xl": "120rem",
      },
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "3rem",
        },
      },
    },
  },
  plugins: [require("daisyui"), addIconSelectors(["mdi"])],
  daisyui: {
    themes: [{
      light: {
        ...require("daisyui/src/theming/themes")["light"],
        primary: "#E3E4E6",
        secondary: "#232222",
        accent: "#F64C03",
        neutral: "#000000",
        "base-100": "#FFFFFF",
        "base-200": "#FBFAFA",
        "base-300": "#F2F3F3",
      },
      dark: {
        ...require("daisyui/src/theming/themes")["dark"],
        primary: "#232222",
        secondary: "#E3E4E6",
        accent: "#EB7500",
        neutral: "#999999",
        "base-100": "#000000",
        "base-200": "#111111",
        "base-300": "#212020",
      },
    }],
  },
};
