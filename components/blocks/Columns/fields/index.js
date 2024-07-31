import { baseContentFields } from '@/fields/baseContentFields'
import { baseImageFields } from '@/fields/baseImageFields'
import { baseStyleFields } from '@/fields/baseStyleFields'

const fields = {
  title: 'Columns editor',
  groups: [
    {
      title: 'columns',
      fields: [
        {
          label: 'Columns',
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