/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'FoundersGrotesk': ['Founders Grotesk'],
        'NeueMontreal':['Neue Montreal']
      }
    },
  },
  plugins: [],
}

