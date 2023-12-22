/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    // other file paths
  ],
  theme: {
    extend: {
      colors: {
        green: {
          100: '#e6f4ea', // lighter shade of green
          500: '#34d399', // main green color
          900: '#064e3b', // darker shade of green
        },
        black: '#000', // black color
        // add more colors as needed
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'], // professional font, replace 'Inter' with your choice
        // add more font families as needed
      },
      // Add other styling extensions as required
    },
  },
  plugins: [],
}
