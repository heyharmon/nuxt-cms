// const themes = require('./tailwind/themes-plugin.js') 
// const forms = require('@tailwindcss/forms')
const plugin = require('tailwindcss/plugin')

module.exports = {
  theme: {
    // extend: {
    //   colors: {
    //     primary: 'var(--primary)',
    //     secondary: 'var(--secondary)',
    //     tertiary: 'var(--tertiary)',
    //     neutral: 'var(--neutral)',
    //     black: 'var(--black)',
    //     grey: 'var(--grey)',
    //     white: 'var(--white)',
    //   },
    // },

    fontSize: {
      'xs':  ['var(--font-size-xs)',   { lineHeight: '1' }],
      'sm':  ['var(--font-size-sm)',   { lineHeight: '1.25' }],
      'base':['var(--font-size-base)', { lineHeight: '1.25' }],
      'lg':  ['var(--font-size-lg)',   { lineHeight: '1' }],
      'xl':  ['var(--font-size-xl)',   { lineHeight: '1' }],
      '2xl': ['var(--font-size-2xl)',  { lineHeight: '1' }],
      '3xl': ['var(--font-size-3xl)',  { lineHeight: '1' }],
      '4xl': ['var(--font-size-4xl)',  { lineHeight: '1' }],
      '5xl': ['var(--font-size-5xl)',  { lineHeight: '1' }],
      '6xl': ['var(--font-size-6xl)',  { lineHeight: '1' }],
      '7xl': ['var(--font-size-7xl)',  { lineHeight: '1' }],
      '8xl': ['var(--font-size-8xl)',  { lineHeight: '1' }],
      '9xl': ['var(--font-size-9xl)',  { lineHeight: '1' }],
    },

    padding: {
      '0':   '0',
      'px':  '1px',
      '0.5': 'var(--spacing-05)',
      '1':   'var(--spacing-1)',
      '1.5': 'var(--spacing-05)',
      '2':   'var(--spacing-2)',
      '2.5': 'var(--spacing-25)',
      '3':   'var(--spacing-3)',
      '3.5': 'var(--spacing-35)',
      '4':   'var(--spacing-4)',
      '5':   'var(--spacing-5)',
      '6':   'var(--spacing-6)',
      '7':   'var(--spacing-7)',
      '8':   'var(--spacing-8)',
      '9':   'var(--spacing-9)',
      '10':  'var(--spacing-10)',
      '11':  'var(--spacing-11)',
      '12':  'var(--spacing-12)',
      '14':  'var(--spacing-14)',
      '16':  'var(--spacing-16)',
      '20':  'var(--spacing-20)',
      '24':  'var(--spacing-24)',
      '28':  'var(--spacing-28)',
      '32':  'var(--spacing-32)',
      '36':  'var(--spacing-36)',
      '40':  'var(--spacing-40)',
      '44':  'var(--spacing-44)',
      '48':  'var(--spacing-48)',
      '52':  'var(--spacing-52)',
      '56':  'var(--spacing-56)',
      '60':  'var(--spacing-60)',
      '64':  'var(--spacing-64)',
      '72':  'var(--spacing-72)',
      '80':  'var(--spacing-80)',
      '96':  'var(--spacing-96)',
    },
  },

  plugins: [
    // Our own themeing plugin
    // https://www.protailwind.com/workshops/multi-theme-strategy
    // themes,
    plugin(function ({ addBase }) {
      addBase({
        ':root': {
          '--primary': '#32473b',
          '--secondary': '#ff7200',
          '--tertiary': '#c7e5fc',
          '--neutral': '#f5f5f5',
          '--black': '#000000',
          '--grey': '#808080',
          '--white': '#ffffff',

          // '--wrapper-bg': '#ffffff',
          // '--pretitle-color': '#ff7200',
          // '--title-color': '#32473b',
          // '--body-color': '#32473b',
          // '--btn-primary-bg': '#ff7200',
          // '--btn-primary-text': '#ffffff',
          // '--btn-secondary-bg': '#808080',
          // '--btn-secondary-text': '#ffffff',
        }
      })
    }),

    // Tailwind form styles
    // https://github.com/tailwindlabs/tailwindcss-forms
    require('@tailwindcss/forms'),
  ],
  
  content: [
    "./**/*.vue",
    // "./components/blocks/Base/*.{js,vue,ts}",
    // "./components/**/*.{js,vue,ts}",
    // "./layouts/**/*.vue",
    // "./pages/**/*.vue",
    // "./plugins/**/*.{js,ts}",
    // "./nuxt.config.{js,ts}",
    // "./app.vue",
  ],
}