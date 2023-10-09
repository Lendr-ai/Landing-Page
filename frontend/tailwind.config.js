/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        cta: "#00231D",
        ctasecondary: "#00ad90",
        secondary: "#3A4B40",
        fontprimary: "#0a2540",
        fontsecondary: "#74807e",
        bgsecondary: "#f6f9fc",
      },
    },
  },
  plugins: [],
};
