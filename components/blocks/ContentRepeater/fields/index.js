import { baseContentFields } from '@/fields/baseContentFields'
import { baseStyleFields } from '@/fields/baseStyleFields'
import { baseContentRepeaterFields } from '~/fields/baseContentRepeaterFields'

const fields = {
  title: 'Content repeater',
  groups: [
    {
      title: 'columns',
      fields: [
        // baseContentRepeaterFields,
        {
          label: 'Content repeater',
          path: 'repeater',
          name: 'ContentRepeaterField', // TODO: Rename to Component
          repeats: [
              ...baseContentFields
          ],
      }
      ]
    },
    {
      title: 'content',
      fields: [
        ...baseContentFields,
      ]
    },
    {
      title: 'style',
      fields: [
        ...baseStyleFields,
      ]
    }
  ],
}

export { fields }