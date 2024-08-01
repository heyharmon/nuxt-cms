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
          component: 'ContentRepeaterField',
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