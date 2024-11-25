/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,

      padding: {
        DEFAULT: "25px",
        sm: "50px",
        lg: "75px",
        xl: "80px",
        "2xl": "100px",
      },
    },
  },
  plugins: [],
};
