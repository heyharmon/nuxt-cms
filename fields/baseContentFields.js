const baseContentFields = [
    { // TODO: Move Alignment to baseStyleFields and apply alignment to whole block
        label: 'Alignment',
        path: 'content.alignment',
        options: [
            { value: 'left', label: 'Left' },
            { value: 'center', label: 'Center' },
        ],
        name: 'SelectButtonsField', // TODO: Rename to FieldComponent or Field
    },
    {
        label: 'Pretitle',
        path: 'content.pretitle.text',
        name: 'TextField', // TODO: Rename to FieldComponent or Field
    },
    {
        label: 'Title',
        path: 'content.title.text',
        name: 'TextField', // TODO: Rename to FieldComponent or Field
    },
    {
        label: 'Body',
        path: 'content.body.text',
        name: 'TextField', // TODO: Rename to FieldComponent or Field
    },
    {
        label: 'Buttons',
        path: 'content.buttons',
        name: 'ButtonRepeaterField', // TODO: Rename to FieldComponent or Field
    },
]

export { baseContentFields }