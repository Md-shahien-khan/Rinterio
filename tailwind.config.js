/** @type {import('tailwindCss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
      extend: {
        backgroundImage: {
            'hero-pattern': "url('/images/bg.jpg')",
          }
      },
    },
    plugins: [],
  }