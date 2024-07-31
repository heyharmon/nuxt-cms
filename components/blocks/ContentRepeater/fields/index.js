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
          path: 'collection',
          name: 'ContentRepeaterField', // TODO: Rename to Component
          fields: [
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