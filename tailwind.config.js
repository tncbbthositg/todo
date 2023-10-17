import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{tsx,ts}",
    "index.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Comfortaa', ...defaultTheme.fontFamily.sans],
      },    
    },
  },
  plugins: [],
}

