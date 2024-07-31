import { BaseContentFields } from '@/fields/BaseContentFields'
import { BaseImageFields } from '@/fields/BaseImageFields'
import { BaseStyleFields } from '@/fields/BaseStyleFields'

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
              ...BaseContentFields,
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