import { baseContentFields } from '@/fields/baseContentFields'
import { baseImageFields } from '@/fields/baseImageFields'
import { baseStyleFields } from '@/fields/baseStyleFields'

const fields = {
  title: 'Cards editor',
  groups: [
    {
      title: 'cards',
      fields: [
        {
          label: 'Cards',
          path: 'collection',
          name: 'ContentRepeaterField',  // TODO: Rename to Component // TODO: Can I rename to RepeaterField or FieldRepeater?
          fields: [
              ...baseContentFields,
              ...baseImageFields,
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