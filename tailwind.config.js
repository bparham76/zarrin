/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./_pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "z-gray": "#707070",
        "z-dark-blue": "#2f446a",
        "z-blue": "#106ba1",
        "z-light-blue": "#77c4ff",
        "z-green": "#00811a",
        "z-khaki": "#63ff82",
        "z-red": "#d71920",
        "z-cyan-0": "#e1e2e3",
        "z-cyan-1": "#f1f2f3",
        "z-cyan-2": "#f9fafb",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        vazir: ["var(--font-yekan)"],
      },
    },
  },
  plugins: [],
};
