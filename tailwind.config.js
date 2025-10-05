export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        background: "#0f0f0f",
        primary: "#121212",
        secondary: "#1e1e1e",
        accent: "#1e6e50",
        'accent-light': '#2e966f',
        text: "#f5f5f5",
        muted: "#a0a0a0",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["Fira Code", "monospace"],
      },
    },
  },
  plugins: [],
}