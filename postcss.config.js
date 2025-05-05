module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nesting'),     // 👈 Correcto, plugin directamente
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}