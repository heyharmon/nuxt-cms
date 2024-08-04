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
    }
  }),
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useThemeStore, import.meta.hot));
}