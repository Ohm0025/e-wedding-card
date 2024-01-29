/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        box1Bg:
          'url("https://cdn.pixabay.com/photo/2014/09/13/04/59/couple-443600_1280.jpg")',
      },
    },
    colors: {
      primary: "5c6ac4",
      secondary: "ecc94b",
    },
  },
  plugins: [],
};
