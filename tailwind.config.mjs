/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        primary: ["Sporting Grotesque", "sans-serif"],
        bangla: ["Noto Sans Bengali", "serif"],
      },
      colors: {
        primary: "#CCFF02",
        secondary: "#59FFCD00",
        light: "#fff",
        dark: "#1a1a1a",
      },
      container: {
        center: true,
        padding: "1rem",
        screens: {
          // sm: "640px",
          // md: "768px",
          // lg: "1024px",
          xl: "1280px",
          "2xl": "1446px",
        },
      },
    },
  },
  plugins: [],
};
