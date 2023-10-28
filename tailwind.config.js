/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./public/css/**/*.{html,js,ejs}",
  './views/customer/auth/**/*.{html,js,ejs}',
  './views/shared/includes/**/*.{html,js,ejs}',
  './views/shared/**/*.{html,js,ejs}',
  './views/customer/includes/**/*.{html,js,ejs}',
  './public/img/**/*.{html,js,ejs}',
  './public/js/**/*.{html,js,ejs}'




],
  theme: {
    extend: {
     

    },
  },


  plugins: [],
}

