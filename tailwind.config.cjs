module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.vue',
    './src/**/*.story.vue',
    './.vitebook/App.vue'
  ],
  theme: {
    colors: {
      current: 'currentColor',
      'transparent': 'transparent',
      'white': '#ffffff',
      'primary': '#ff3600',
      'primary-darker': '#c02801',
      'primary-dark': '#992100',
      'silver': '#c8c8c8',
      'secondary': '#333333',
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
