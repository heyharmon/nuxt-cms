const baseContentFields = [
    {
        label: 'Alignment',
        path: 'content.alignment',
        options: [
            { value: 'left', label: 'Left' },
            { value: 'center', label: 'Center' },
        ],
        name: 'SelectButtonsField',
    },
    {
        label: 'Pretitle',
        path: 'content.pretitle.text',
        name: 'TextField',
    },
    {
        label: 'Title',
        path: 'content.title.text',
        name: 'TextField',
    },
    {
        label: 'Body',
        path: 'content.body.text',
        name: 'TextField',
    },
    {
        label: 'Buttons',
        path: 'content.buttons',
        name: 'ButtonRepeaterField',
    },
]

export { baseContentFields }