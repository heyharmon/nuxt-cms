import { useThemeStore } from '@/store/themeStore.js'

export default defineNuxtPlugin(nuxtApp => {
    const store = useThemeStore()

    let styleContent = "";
    for (const key in store.colors) {
      styleContent += `--${key}: ${store.colors[key]};`;
    }
  
    const style = document.createElement("style");
    style.id = "theme";
    style.innerText = `:root{${styleContent}}`;
    document.head.appendChild(style);
});
  