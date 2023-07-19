/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: "#EFEFEF",
        light: "#FAFAFA",
      },
      fontSize: {
        xl: [
          "20px",
          {
            lineHeight: "24px",
            fontWeight: 700,
          },
        ],
        lg: [
          "12px",
          {
            lineHeight: "14px",
            fontWeight: 400,
          },
        ],
        sm: [
          "11px",
          {
            lineHeight: "11px",
          },
        ],
      },
    },
  },
  plugins: [],
};
