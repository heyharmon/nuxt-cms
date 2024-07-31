import { baseContentFields } from "@/fields/baseContentFields"

const baseContentRepeaterFields = {
    label: 'Content repeater',
    path: 'repeater',
    name: 'ContentRepeaterField', // TODO: Rename to Component
    fields: [
        ...baseContentFields
    ],
}

export { baseContentRepeaterFields }