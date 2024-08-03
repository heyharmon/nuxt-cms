const BaseStyleFields = [
  {
    label: 'Theme',
    path: 'styles.theme',
    options: [
      // { value: null, label: 'Default' },
      { value: 'theme-1', label: 'Theme 1' },
      { value: 'theme-2', label: 'Theme 2' },
      { value: 'theme-3', label: 'Theme 3' },
    ],
    component: 'SelectButtonsField',
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