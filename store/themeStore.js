export const useThemeStore = defineStore('theme', {
  state: () => ({
    colors: {
      primary: 'red',
      secondary: 'blue',
      tertiary: 'yellow',
      neutral: 'green',
      black: '#000000',
      grey: '#808080',
      white: '#ffffff',
    },
    themes: [
      {
        name: 'root',
        selector: ':root',
        properties: {
          'wrapper-bg': 'white',
          'pretitle-color': 'secondary',
          'title-color': 'primary',
          'body-color': 'primary',
          'btn-primary-bg': 'secondary',
          'btn-primary-text': 'white',
          'btn-secondary-bg': 'grey',
          'btn-secondary-text': 'primary',
        }
      },
      {
        name: 'theme-1',
        selector: '[data-theme="theme-1"]',
        properties: {
          'wrapper-bg': 'neutral',
          'pretitle-color': 'secondary',
          'title-color': 'primary',
          'body-color': 'primary',
          'btn-primary-bg': 'secondary',
          'btn-primary-text': 'white',
          'btn-secondary-bg': 'grey',
          'btn-secondary-text': 'primary',
        }
      },
      {
        name: 'theme-2',
        selector: '[data-theme="theme-2"]',
        properties: {
          'wrapper-bg': 'primary',
          'pretitle-color': 'secondary',
          'title-color': 'white',
          'body-color': 'white',
          'btn-primary-bg': 'secondary',
          'btn-primary-text': 'white',
          'btn-secondary-bg': 'grey',
          'btn-secondary-text': 'primary',
        }
      },
      {
        name: 'theme-3',
        selector: '[data-theme="theme-3"]',
        properties: {
          'wrapper-bg': 'secondary',
          'pretitle-color': 'primary',
          'title-color': 'white',
          'body-color': 'white',
          'btn-primary-bg': 'white',
          'btn-primary-text': 'primary',
          'btn-secondary-bg': 'grey',
          'btn-secondary-text': 'primary',
        }
      }
    ]
  }),
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useThemeStore, import.meta.hot));
}