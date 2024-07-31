import { baseContentFields } from '@/fields/baseContentFields'
import { baseImageFields } from '@/fields/baseImageFields'
import { baseStyleFields } from '@/fields/baseStyleFields'

const fields = {
  title: 'Content repeater',
  groups: [
    {
      title: 'columns',
      fields: [
        {
          label: 'Content repeater',
          path: 'collection',
          name: 'ContentRepeaterField', // TODO: Rename to Component // TODO: Can I rename to RepeaterField or FieldRepeater?
          fields: [
              ...baseContentFields,
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