/** @type {import('tailwindcss').Config} */

const generateColorClass = (variable) => {
  return ({ opacityValue }) => (opacityValue ? `hsl(var(${variable}) / ${opacityValue})` : `hsl(var(${variable}) / 1)`);
};

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: ["Nunito"],
      },
      colors: {
        primary: {
          DEFAULT: generateColorClass("--color-primary-500"),

          50: generateColorClass("--color-primary-50"),

          100: generateColorClass("--color-primary-100"),

          200: generateColorClass("--color-primary-200"),

          300: generateColorClass("--color-primary-300"),

          400: generateColorClass("--color-primary-400"),

          500: generateColorClass("--color-primary-500"),

          600: generateColorClass("--color-primary-600"),

          700: generateColorClass("--color-primary-700"),

          800: generateColorClass("--color-primary-800"),

          900: generateColorClass("--color-primary-900"),
        },
      },
    },
  },
  plugins: [],
};
