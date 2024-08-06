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
        { name: 'primary', hex: '#32473b'},
        { name: 'secondary', hex: '#ff7200'},
        { name: 'tertiary', hex: '#c7e5fc'},
        { name: 'neutral', hex: '#f5f5f5'},
        { name: 'black', hex: '#000000'},
        { name: 'grey', hex: '#808080'},
        { name: 'white', hex: '#ffffff'},
      ],
  
      themes: [
        {
          name: 'root',
          selector: ':root',
          properties: [
            { name: 'wrapper-bg', value: 'white' },
            { name: 'pretitle-color', value: 'secondary' },
            { name: 'title-color', value: 'primary' },
            { name: 'text-color', value: 'primary' },
            { name: 'btn-primary-bg', value: 'secondary' },
            { name: 'btn-primary-text', value: 'white' },
            { name: 'btn-secondary-bg', value: 'grey' },
            { name: 'btn-secondary-text', value: 'primary' },
          ]
        },
        {
          name: 'theme-1',
          selector: '[data-theme="theme-1"]',
          properties: [
            { name: 'wrapper-bg', value: 'neutral' },
            { name: 'pretitle-color', value: 'secondary' },
            { name: 'title-color', value: 'primary' },
            { name: 'text-color', value: 'primary' },
            { name: 'btn-primary-bg', value: 'secondary' },
            { name: 'btn-primary-text', value: 'white' },
            { name: 'btn-secondary-bg', value: 'grey' },
            { name: 'btn-secondary-text', value: 'primary' },
          ]
        },
        {
          name: 'theme-2',
          selector: '[data-theme="theme-2"]',
          properties: [
            { name: 'wrapper-bg', value: 'primary' },
            { name: 'pretitle-color', value: 'secondary' },
            { name: 'title-color', value: 'white' },
            { name: 'text-color', value: 'white' },
            { name: 'btn-primary-bg', value: 'secondary' },
            { name: 'btn-primary-text', value: 'white' },
            { name: 'btn-secondary-bg', value: 'grey' },
            { name: 'btn-secondary-text', value: 'primary' },
          ]
        },
        {
          name: 'theme-3',
          selector: '[data-theme="theme-3"]',
          properties: [
            { name: 'wrapper-bg', value: 'secondary' },
            { name: 'pretitle-color', value: 'white' },
            { name: 'title-color', value: 'white' },
            { name: 'text-color', value: 'white' },
            { name: 'btn-primary-bg', value: 'white' },
            { name: 'btn-primary-text', value: 'primary' },
            { name: 'btn-secondary-bg', value: 'grey' },
            { name: 'btn-secondary-text', value: 'primary' },
          ]
        }
      ]
    }
  }),
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDesignStore, import.meta.hot));
}