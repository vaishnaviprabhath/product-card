/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: { 
      'md': '375px',
      'desktop': '1440px'
    },
    extend: {
      fontFamily: {
          'montserrat': ['Montserrat'],
          'fraunces' : ['Fraunces']
      },
      colors: {
        'dgb': '#6C7289',
        'darkcyan': '#3C8067',
        'cream': '#F2EBE3',
        'vdb':'#	1C232B',
      }
  }
  },
  plugins: [],
}
