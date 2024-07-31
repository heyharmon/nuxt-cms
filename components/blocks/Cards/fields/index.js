import { BaseContentFields } from '@/fields/BaseContentFields'
import { BaseImageFields } from '@/fields/BaseImageFields'
import { BaseStyleFields } from '@/fields/BaseStyleFields'

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
              ...BaseContentFields,
              ...BaseImageFields,
          ],
      }
      ]
    },
    {
      title: 'content',
      fields: [
        ...BaseContentFields,
      ]
    },
    {
      title: 'style',
      fields: [
        ...BaseStyleFields,
      ]
    }
  ],
}

export { fields }