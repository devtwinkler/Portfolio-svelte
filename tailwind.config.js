/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{html,js,svelte,ts}', // Adjust this if necessary
  ],
  theme: {
    extend: {
      screens: {
        exs: '0px',
        xs: '260px'
      }
    },
  },
  plugins: [],
}

