/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "fira-go": ["FiraGO", "sans-serif"],
      },
      colors: {
        mutedText: "#808a93",
      },
    },
  },
  plugins: [],
};
