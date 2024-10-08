module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        paper: "#161A23",
        background: "#0D1117",
        secondary: "#F8333C",
        primary: "#1f71eb",
        "paper-secondary": "#1D2028",
        textSecondary: "#c9d1d9",
        borderPrimary: "#30363d",
      },
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      mono: ["Consolas", "Courier new", "monospace"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
