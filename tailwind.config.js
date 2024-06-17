/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
      },
      colors: {
        black: {
          DEFAULT: "#202125",
        },
        green: {
          DEFAULT: "#5bcb02",
        },
        gray: {
          100: "#f8f8f8",
          200: "#eeeeee",
          300: "#a1a2a4",
        },
      },
      boxShadow: {
        widget: "0 1px 3px 2px rgba(0, 0, 0, 0.08)",
      },
      minWidth: {
        widget: "20.5rem",
      },
    },
  },
  plugins: [],
};
