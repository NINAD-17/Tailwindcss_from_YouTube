/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    screens: {
        // when you want to apply very small breakpoint then add all breakpoints with it.
        // otherwise it will overright by other breakpoints which are bigger than it.
        // To add new screens you have to do it in themes and not in extend
        xsm: "500px",
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    extend: {
      spacing: {
        13: "3.25rem"
      },
    },
  },
  plugins: [],
}

