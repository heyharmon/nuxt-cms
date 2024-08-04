import { useThemeStore } from '@/store/themeStore.js'

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
    const store = useThemeStore()

    // Setup stylesheet
    const style = document.createElement("style");
    style.id = "theme";
    
    // Generate CSS color variables
    let colorVariables = "";
    for (const key in store.colors) {
      colorVariables += `--${key}: ${store.colors[key]};`;
    }
    
    // Setup themes
    let themes = ''
    store.themes.forEach((theme) => {
      themes += `${theme.selector}{`;
      for (const key in theme.properties) {
        themes += `--${key}: var(--${theme.properties[key]});`;
      }
      themes += "}";
    });
  
    // Add content to the stylesheet
    style.innerText = `:root{${colorVariables}}`;
    style.innerText += themes;

    // Append the stylesheet to the head
    document.head.appendChild(style);
    
    // useHead({
    //   link: [{ rel: 'stylesheet', href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css' }]
    // })
  }
})
  