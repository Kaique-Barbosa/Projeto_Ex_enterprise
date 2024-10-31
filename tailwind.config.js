/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        preto_primario: "#000000",
        preto_secondario: "#111111",
        "preto_75%": "rgba(0,0,0,.75)",
        branco: "#FFFFFF",
        "branco_75%": "rgba(255,255,255,.75)",
        cinza: "#E3E4E6",
        cinza_neutro: "#999999",
        dourado: "#F0A90E",
        'laranja-dark': {
          normal: "#EB7500",
          hover: "#FFB132",
          disabled: "#FFE5A5"
        },
        'laranja-light':{
          normal: "#F64C03",
          hover: "#FF7E4C",
          disabled: "#FFBDA5"
        } 
      },
      screens: {
        xs: "450px",
        "2xs": "320px",
      },
      boxShadow: {
        temaEscuro: "3px 3px 12px 1px rgba(235,117,0,.5);",
        neutro: "3px 3px 12px 3px rgb(62, 60, 60, .5);",
        neutro_sm: "1px 1px 3px 1px rgb(62, 60, 60, .5);",
      },
      maxWidth: {
        "7xl": "80rem",
        "8xl": "90rem",
        "9xl": "96rem",
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
  plugins: [],
};
