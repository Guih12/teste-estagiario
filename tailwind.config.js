import * as plugin from  'tailwindcss/plugin'
import * as animate from 'tailwindcss-animate'

module.exports = {
  content: [
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {},
  },
  plugins: [
    animate, // Ensure this line is included
  ],
};