const baseStyleFields = [
  {
    label: 'Theme',
    path: 'styles.theme',
    options: [
      { value: 'theme-1', label: 'Theme 1' },
      { value: 'theme-2', label: 'Theme 2' },
      { value: 'theme-3', label: 'Theme 3' },
    ],
    name: 'SelectButtonsField', // TODO: Rename to FieldComponent or Field
  },
  {
    label: 'Padding',
    path: 'styles.padding',
    name: 'PaddingField', // TODO: Rename to FieldComponent or Field
  },
  {
    label: 'Overlay',
    path: 'styles.background.overlay',
    name: 'SwitchField', // TODO: Rename to FieldComponent or Field
  },
  {
    label: 'Background',
    path: 'styles.background.image',
    name: 'ImageField', // TODO: Rename to FieldComponent or Field
  },
]
  
export { baseStyleFields }