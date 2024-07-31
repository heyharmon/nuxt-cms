// import { baseContentFields } from "@/fields/baseContentFields"

const baseContentRepeaterFields = {
    label: 'Content repeater',
    path: 'columns',
    name: 'ContentRepeaterField', // TODO: Rename to Component
    fields: [
        // TODO: Use baseContentFields
        // ...baseContentFields
        {
            label: 'Pretitle',
            path: 'pretitle.text',
            name: 'TextField', // TODO: Rename to Component
        },
        {
            label: 'Title',
            path: 'title.text',
            name: 'TextField', // TODO: Rename to Component
        },
        {
            label: 'Body',
            path: 'body.text',
            name: 'TextField', // TODO: Rename to Component
        },
        {
            label: 'Buttons',
            path: 'buttons',
            name: 'ButtonRepeaterField', // TODO: Rename to Component
        },
    ],
}

export { baseContentRepeaterFields }