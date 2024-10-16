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
        laranja_dark: "#EB7500",
        laranja_light: "#F64C03",
      },
      screens: {
        xs: "450px",
        '2xs': "320px",
      },
      boxShadow: {
        temaEscuro: "2px 2px 8px 1px rgba(235,117,0,.5);",
      },
      maxWidth: {
        '7xl': '80rem',
        '8xl': '90rem',
        '9xl': '96rem',
      },
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '3rem',
        }
      },
    },
  },
  plugins: [],
};
