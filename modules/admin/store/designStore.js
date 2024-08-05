export const useDesignStore = defineStore('design', {
  state: () => ({
    design: {
      colors: [
        { name: 'primary', color: 'black'},
        { name: 'secondary', color: 'blue'},
        { name: 'tertiary', color: 'yellow'},
        { name: 'neutral', color: '#f1f1f1'},
        { name: 'black', color: 'black'},
        { name: 'grey', color: 'grey'},
        { name: 'white', color: 'white'},
      ],
  
      themes: [
        {
          name: 'root',
          selector: ':root',
          properties: [
            { name: 'wrapper-bg', value: 'white' },
            { name: 'pretitle-color', value: 'secondary' },
            { name: 'title-color', value: 'primary' },
            { name: 'body-color', value: 'primary' },
            { name: 'btn-primary-bg', value: 'secondary' },
            { name: 'btn-primary-text', value: 'white' },
            { name: 'btn-secondary-bg', value: 'grey' },
            { name: 'btn-secondary-text', value: 'primary' },
          ]
          // properties: {
          //   'wrapper-bg': 'white',
          //   'pretitle-color': 'secondary',
          //   'title-color': 'primary',
          //   'body-color': 'primary',
          //   'btn-primary-bg': 'secondary',
          //   'btn-primary-text': 'white',
          //   'btn-secondary-bg': 'grey',
          //   'btn-secondary-text': 'primary',
          // }
        },
        // {
        //   name: 'theme-1',
        //   selector: '[data-theme="theme-1"]',
        //   properties: {
        //     'wrapper-bg': 'neutral',
        //     'pretitle-color': 'secondary',
        //     'title-color': 'primary',
        //     'body-color': 'primary',
        //     'btn-primary-bg': 'secondary',
        //     'btn-primary-text': 'white',
        //     'btn-secondary-bg': 'grey',
        //     'btn-secondary-text': 'primary',
        //   }
        // },
        // {
        //   name: 'theme-2',
        //   selector: '[data-theme="theme-2"]',
        //   properties: {
        //     'wrapper-bg': 'primary',
        //     'pretitle-color': 'secondary',
        //     'title-color': 'white',
        //     'body-color': 'white',
        //     'btn-primary-bg': 'secondary',
        //     'btn-primary-text': 'white',
        //     'btn-secondary-bg': 'grey',
        //     'btn-secondary-text': 'primary',
        //   }
        // },
        // {
        //   name: 'theme-3',
        //   selector: '[data-theme="theme-3"]',
        //   properties: {
        //     'wrapper-bg': 'secondary',
        //     'pretitle-color': 'primary',
        //     'title-color': 'white',
        //     'body-color': 'white',
        //     'btn-primary-bg': 'white',
        //     'btn-primary-text': 'primary',
        //     'btn-secondary-bg': 'grey',
        //     'btn-secondary-text': 'primary',
        //   }
        // }
      ]
    }
  }),
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useDesignStore, import.meta.hot));
}