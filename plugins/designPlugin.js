import { useDesignStore } from '@/store/designStore.js'

// export default defineNuxtPlugin(nuxtApp => {
//     const store = useThemeStore()

//     // Setup stylesheet
//     const style = document.createElement("style");
//     style.id = "theme";
    
//     // Generate CSS color variables
//     let colorVariables = "";
//     for (const key in store.colors) {
//       colorVariables += `--${key}: ${store.colors[key]};`;
//     }
    
  
//     // Append the stylesheet to the head
//     style.innerText = `:root{${colorVariables}}`;
//     document.head.appendChild(style);
// });

export default defineNuxtPlugin({
  name: 'theme',
  enforce: 'post', // or 'post'
  async setup (nuxtApp) {
    const design = useDesignStore()

    // Generate CSS color variables
    let colors = '';
    design.colors.forEach((color) => {
      colors += `--${color.name}: ${color.value};`;
    })
    
    // Setup block themes
    let themes = ''
    design.themes.forEach((theme) => {
      themes += `${theme.selector}{`
      for (const key in theme.properties) {
        themes += `--${key}: var(--${theme.properties[key]});`
      }
      themes += "}"
    })
    
    // Setup stylesheet
    const stylesheet = document.createElement("style");
    stylesheet.id = "theme";

    // Add content to the stylesheet
    stylesheet.innerText = `:root{${colors}}`;
    stylesheet.innerText += themes;

    // Append the stylesheet to the head
    document.head.appendChild(stylesheet);
  }
})
  