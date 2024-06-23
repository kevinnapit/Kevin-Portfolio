/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
 darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#FC6736",
        secondary: '#64748b',
        dark: "#0C2D57",
      },
      screens: {
        "2xl": "1320px",
      },
    },
  },
  plugins: [],
};
