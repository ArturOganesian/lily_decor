/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       secondary_grey: "#F5F5F5",
       mint_green: "#A3D9B1",
       primary_text: "#333333",
       secondary_text: "#666666",
       btn_color: "#FF6B6B",
       link_color: "#3399FF"

      },
      gridTemplateColumns: {
        15: "repeat(15, minmax(0, 1fr))",
        18: "repeat(18, minmax(0, 1fr))",
        20: "repeat(20, minmax(0, 1fr))",
      },
      gridColumn: {
        "span-15": "span 15 / span 15",
      },
    },
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
      "3xl": "1600px",
      "4xl": "1800px",
    },
  },
  plugins: [],
};
