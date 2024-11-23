/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        parkinsans: ["Parkinsans", "sans-serif"],
      },
      colors: {
        primary: "#f56565", // red-500
        secondary: {
          100: "#ffffff",
          200: "#000",
        },
      },
    },
  },
  plugins: [],
};

export default config;
