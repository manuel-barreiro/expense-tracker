/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
      },
  
      colors: {
        "brand": {
          50: "#FBF5FF",
          100: "#F9F0FF",
          200: "#F2DBFF",
          300: "#ECCCFF",
          400: "#E7BDFF",
          500: "#E0AAFF",
          600: "#C157FF",
          700: "#A200FF",
          800: "#6B00A8",
          900: "#370057",
          950: "#1A0029"
        },
      },
      plugins: [],
    }
  },
}
