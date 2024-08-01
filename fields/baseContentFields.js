const BaseContentFields = [
    {
        label: 'Alignment',
        path: 'content.alignment',
        options: [
            { value: 'left', label: 'Left' },
            { value: 'center', label: 'Center' },
        ],
        component: 'SelectButtonsField',
    },
    {
        label: 'Pretitle',
        path: 'content.pretitle.text',
        component: 'TextField',
    },
    {
        label: 'Title',
        path: 'content.title.text',
        component: 'TextField',
    },
    {
        label: 'Body',
        path: 'content.body.text',
        component: 'TextField',
    },
    {
        label: 'Buttons',
        path: 'content.buttons',
        component: 'ButtonRepeaterField',
    },
]

export { BaseContentFields }