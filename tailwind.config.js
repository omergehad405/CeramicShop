/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#025048",
        second: "#424B4A",
      },
      screens: {
        "2xl": { max: "1535px" },

        xl: { max: "1279px" },

        lg: { max: "1023px" },

        md: { max: "767px" },

        sm: { max: "639px" },
      },
    },
  },
  plugins: [],
};
