// next.config.js
module.exports = {
  reactStrictMode: true,
  // Ensure this part is correct if you're manually defining PostCSS settings
  postcss: {
    plugins: [
      require('tailwindcss'),
      require('autoprefixer'),
    ],
  },
};
