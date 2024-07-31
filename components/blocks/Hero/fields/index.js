import { BaseContentFields } from '@/fields/BaseContentFields'
import { BaseImageFields } from '@/fields/BaseImageFields'
import { BaseStyleFields } from '@/fields/BaseStyleFields'

const fields = {
  title: 'Hero editor',
  groups: [
    {
      title: 'content',
      fields: [
        ...BaseContentFields,
        ...BaseImageFields,
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