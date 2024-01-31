/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        box1Bg:
          'url("/Users/apple/Desktop/kaio_practise/projectHandOn/e-wedding-card/src/assets/16352.jpg")',
      },
    },
    colors: {
      primary: "#f7e7ce",
      secondary: "#fff",
    },
  },
  plugins: [],
};
