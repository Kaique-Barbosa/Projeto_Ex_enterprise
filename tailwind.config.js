/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "selector",
  theme: {
    extend: {
      colors: {
        preto_primario: "#000000",
        preto_secondario: "#111111",
        branco: "#FFFFFF",
        cinza: "#E3E4E6",
        dourado: "#F0A90E",
        laranja: "#EB7500",
      },
      screens: {
        xs: "450px",
        'mobile': '375px',
      },
      boxShadow:{
        'temaEscuro': '2px 2px 8px 1px rgba(235,117,0,.5);'
      }
    },
  },
  plugins: [],
};
