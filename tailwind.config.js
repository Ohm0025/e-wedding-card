/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        box1Bg:
          'url("https://cdn.pixabay.com/photo/2022/11/22/02/29/beach-7608602_1280.jpg")',
      },
    },
    colors: {
      primary: "#f7e7ce",
      secondary: "#fff",
    },
  },
  plugins: [],
};
