import { baseContentFields } from "@/fields/baseContentFields"

const baseContentRepeaterFields = {
    label: 'Content repeater',
    path: 'columns',
    name: 'ContentRepeaterField', // TODO: Rename to FieldComponent or Field
    fields: [
        // ...baseContentFields
        // {
        //     label: 'Alignment',
        //     path: 'alignment',
        //     options: [
        //         { value: 'left', label: 'Left' },
        //         { value: 'center', label: 'Center' },
        //     ],
        //     name: 'SelectButtonsField',
        // },
        {
            label: 'Pretitle',
            path: 'pretitle.text',
            name: 'TextField', // TODO: Rename to FieldComponent or Field
        },
        {
            label: 'Title',
            path: 'title.text',
            name: 'TextField', // TODO: Rename to FieldComponent or Field
        },
        {
            label: 'Body',
            path: 'body.text',
            name: 'TextField', // TODO: Rename to FieldComponent or Field
        },
        {
            label: 'Buttons',
            path: 'buttons',
            name: 'ButtonRepeaterField', // TODO: Rename to FieldComponent or Field
        },
    ],
}

export { baseContentRepeaterFields }