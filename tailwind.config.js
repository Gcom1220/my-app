/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        "lobster": ['Lobster','cursive'],
        sans: ['Noto Sans Mono', 'monospace']
      },
    },
  },
  plugins: [],
};