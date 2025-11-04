/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1e40af", // blue-800
        secondary: "#2563eb", // blue-600
      },
    },
  },
  plugins: [],
};
