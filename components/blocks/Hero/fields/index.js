import { baseContentFields } from '@/fields/baseContentFields'
import { baseImageFields } from '@/fields/baseImageFields'
import { baseStyleFields } from '@/fields/baseStyleFields'

const fields = {
  title: 'Hero editor',
  groups: [
    {
      title: 'content',
      fields: [
        ...baseContentFields,
        ...baseImageFields,
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