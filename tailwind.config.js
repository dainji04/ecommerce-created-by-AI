/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        'kid-blue': '#4FC3F7',
        'kid-pink': '#F48FB1',
        'kid-green': '#81C784',
        'kid-orange': '#FFB74D',
        'kid-purple': '#BA68C8',
        'kid-yellow': '#FFF176'
      },
      fontFamily: {
        'kid-friendly': ['Comic Sans MS', 'cursive', 'system-ui']
      }
    },
  },
  plugins: [],
}