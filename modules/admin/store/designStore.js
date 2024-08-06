export const useDesignStore = defineStore('design', {
  state: () => ({
    design: {
      colors: [
        // { name: 'primary', color: 'black'},
        // { name: 'secondary', color: 'blue'},
        // { name: 'tertiary', color: 'yellow'},
        // { name: 'neutral', color: '#f1f1f1'},
        // { name: 'black', color: 'black'},
        // { name: 'grey', color: 'grey'},
        // { name: 'white', color: 'white'},
        { label: 'primary', value: '#32473b'},
        { label: 'secondary', value: '#ff7200'},
        { label: 'tertiary', value: '#c7e5fc'},
        { label: 'neutral', value: '#f5f5f5'},
        { label: 'black', value: '#000000'},
        { label: 'grey', value: '#808080'},
        { label: 'white', value: '#ffffff'},
      ],
      
      // defaultTheme: {
      //   name: 'root',
      //   selector: ':root',
      //   properties: [
      //     { name: 'wrapper-bg', variable: 'white' },
      //     { name: 'pretitle-color', variable: 'secondary' },
      //     { name: 'title-color', variable: 'primary' },
      //     { name: 'text-color', variable: 'primary' },
      //     { name: 'btn-primary-bg', variable: 'secondary' },
      //     { name: 'btn-primary-text', variable: 'white' },
      //     { name: 'btn-secondary-bg', variable: 'grey' },
      //     { name: 'btn-secondary-text', variable: 'primary' },
      //   ]
      // },

      themes: [
        {
          name: 'default',
          selector: ':root',
          properties: [
            { name: 'wrapper-bg', variable: 'white' },
            { name: 'pretitle-color', variable: 'secondary' },
            { name: 'title-color', variable: 'primary' },
            { name: 'text-color', variable: 'primary' },
            { name: 'btn-primary-bg', variable: 'secondary' },
            { name: 'btn-primary-text', variable: 'white' },
            { name: 'btn-secondary-bg', variable: 'grey' },
            { name: 'btn-secondary-text', variable: 'primary' },
            { name: 'btn-simple-text', variable: 'primary' },
          ]
        },
        {
          name: 'theme-1',
          selector: '[data-theme="theme-1"]',
          properties: [
            { name: 'wrapper-bg', variable: 'neutral' },
            { name: 'pretitle-color', variable: 'secondary' },
            { name: 'title-color', variable: 'primary' },
            { name: 'text-color', variable: 'primary' },
            { name: 'btn-primary-bg', variable: 'secondary' },
            { name: 'btn-primary-text', variable: 'white' },
            { name: 'btn-secondary-bg', variable: 'grey' },
            { name: 'btn-secondary-text', variable: 'primary' },
            { name: 'btn-simple-text', variable: 'primary' },
          ]
        },
        {
          name: 'theme-2',
          selector: '[data-theme="theme-2"]',
          properties: [
            { name: 'wrapper-bg', variable: 'primary' },
            { name: 'pretitle-color', variable: 'secondary' },
            { name: 'title-color', variable: 'white' },
            { name: 'text-color', variable: 'white' },
            { name: 'btn-primary-bg', variable: 'secondary' },
            { name: 'btn-primary-text', variable: 'white' },
            { name: 'btn-secondary-bg', variable: 'grey' },
            { name: 'btn-secondary-text', variable: 'primary' },
            { name: 'btn-simple-text', variable: 'white' },
          ]
        },
        {
          name: 'theme-3',
          selector: '[data-theme="theme-3"]',
          properties: [
            { name: 'wrapper-bg', variable: 'secondary' },
            { name: 'pretitle-color', variable: 'white' },
            { name: 'title-color', variable: 'white' },
            { name: 'text-color', variable: 'white' },
            { name: 'btn-primary-bg', variable: 'white' },
            { name: 'btn-primary-text', variable: 'primary' },
            { name: 'btn-secondary-bg', variable: 'grey' },
            { name: 'btn-secondary-text', variable: 'primary' },
            { name: 'btn-simple-text', variable: 'primary' },
          ]
        }
      ]
    }
  }),
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDesignStore, import.meta.hot));
}