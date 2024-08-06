const BaseStyleFields = [
  {
    label: 'Theme',
    path: 'styles.theme',
    component: 'BlockThemeField',
  },
  {
    label: 'Padding',
    path: 'styles.padding',
    component: 'PaddingField',
  },
  {
    label: 'Overlay',
    path: 'styles.background.overlay',
    component: 'SwitchField',
  },
  {
    label: 'Background',
    path: 'styles.background.image',
    component: 'ImageField',
  },
]
  
export { BaseStyleFields }