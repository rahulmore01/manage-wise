/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        // wide: '0.025em',
        wider: "0.05em",
        // widest: '0.1em',
      },
      screens: {
        vvs: "250px",
        md: "800px",
        lg: "1200px",
      },
      colors: {
        bg_color: "#FBF3ED",
        primary_color: "#EE886A",
        secondary__color: "#7A4AF6",
        text: "#1C1C1C",
        para: "#7C7B7B",
        border_grey: "#DBD8D4",
        border_blue: "#E4DBFD",
        cardbg_color: "#EDEDF9",
        darkcardbg_color: "#212121",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
