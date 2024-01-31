/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      ssm: "400px",
      sm: "640px",
      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
    },
    extend: {
      backgroundImage: {
        box1Bg:
          'url("/Users/apple/Desktop/kaio_practise/projectHandOn/e-wedding-card/src/assets/cover.jpg")',
      },
    },
    colors: {
      primary: "#aca190",
      secondary: "#fff",
    },
  },
  plugins: [],
};
