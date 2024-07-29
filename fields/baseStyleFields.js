const baseStyleFields = [
  {
    label: 'Theme',
    path: 'styles.theme',
    options: [
      { value: 'theme-1', label: 'Theme 1' },
      { value: 'theme-2', label: 'Theme 2' },
      { value: 'theme-3', label: 'Theme 3' },
    ],
    name: 'SelectButtonsField',
  },
  {
    label: 'Padding',
    path: 'styles.padding',
    name: 'PaddingField',
  },
  {
    label: 'Overlay',
    path: 'styles.background.overlay',
    name: 'SwitchField',
  },
  {
    label: 'Background',
    path: 'styles.background.image',
    name: 'ImageField',
  },
]
  
export { baseStyleFields }