/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#3294F8",
        "button-hover": "#0873dd",
        "base-title": "#E7EDF4",
        "base-subtitle": "#C4D4E3",
        "base-text": "#AFC2D4",
        "base-span": "#7B96B2",
        "base-label": "#3A536B",
        "base-border": "#1C2F41",
        "base-post": "#112131",
        "base-profile": "#0B1B2B",
        "base-background": "#071422",
        "base-input": "#040F1A",
      },
      fontFamily: {
        body: ["Nunito"],
      },
      backgroundImage: {
        "background-header": "url('/bg-header.png')",
      },
    },
  },
  plugins: [],
};
