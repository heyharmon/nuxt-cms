const baseStyleFields = [
  {
    label: 'Theme',
    path: 'styles.theme',
    options: [
      { value: 'theme-1', label: 'Theme 1' },
      { value: 'theme-2', label: 'Theme 2' },
      { value: 'theme-3', label: 'Theme 3' },
    ],
    name: 'SelectButtonsField', // TODO: Rename to Component
  },
  {
    label: 'Padding',
    path: 'styles.padding',
    name: 'PaddingField', // TODO: Rename to Component
  },
  {
    label: 'Overlay',
    path: 'styles.background.overlay',
    name: 'SwitchField', // TODO: Rename to Component
  },
  {
    label: 'Background',
    path: 'styles.background.image',
    name: 'ImageField', // TODO: Rename to Component
  },
]
  
export { baseStyleFields }