const BaseContentFields = [
    {
        label: 'Alignment',
        path: 'content.alignment',
        options: [
            { value: 'left', label: 'Left' },
            { value: 'center', label: 'Center' },
        ],
        name: 'SelectButtonsField', // TODO: Rename to Component
    },
    {
        label: 'Pretitle',
        path: 'content.pretitle.text',
        name: 'TextField', // TODO: Rename to Component
    },
    {
        label: 'Title',
        path: 'content.title.text',
        name: 'TextField', // TODO: Rename to Component
    },
    {
        label: 'Body',
        path: 'content.body.text',
        name: 'TextField', // TODO: Rename to Component
    },
    {
        label: 'Buttons',
        path: 'content.buttons',
        name: 'ButtonRepeaterField', // TODO: Rename to Component
    },
]

export { BaseContentFields }