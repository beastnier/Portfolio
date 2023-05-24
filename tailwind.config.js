/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        color1: "#726eff",
        color2: "#5affe7",
        color3: "#212b38",
        color4: "#0C134F",
        color5: "#19A7CE",
        color6: "#AFD3E2",
        color7: "#394867",
        color8: "#A5D7E8",
        color9: "#E50914",
      },
      backgroundImage: {
        "coffee-background": "url('/images/backgrounds/coffee.jpg')",
      },
    }
  },
  plugins: []
};