/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          'montserrat': ['Montserrat'],
          'fraunces' : ['Fraunces']
      },
      colors: {
        'dgb': '#6C7289',
        'darkcyan': '#52AD8C',
        'cream': '#F2EBE3',
        'vdb':'#	1C232B',
        



      }
  }
  },
  plugins: [],
}
