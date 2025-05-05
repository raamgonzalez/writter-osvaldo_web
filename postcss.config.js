module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-nesting'),   
    require('postcss-import'), // 👈 Correcto, plugin directamente 
    require('autoprefixer'),
  ]
}