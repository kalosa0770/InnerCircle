/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // adjust paths
  ],
  theme: {
    extend: {
      colors: {
        gold: "var(--gold)",
        'darkgold': "var(--darkgold)",
        teal: "var(--teal)",
        'dark-teal': "var(--dark-teal)",
        'light-bg': "var(--light-bg)",
        gray: "var(--gray)",
      },
      fontFamily: {
        lato: ["Lato-Regular", "sans-serif"],
        nunito: ["Nunito-Variable", "sans-serif"],
        dancing: ["DancingScript-Bold", "sans-serif"],
      },
      keyframes: {
        menuBarSlideIn: {
          "0%": { transform: "translateY(100%)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        menuBarSlideIn: "menuBarSlideIn 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
