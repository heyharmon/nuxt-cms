import { baseContentFields } from '@/fields/baseContentFields'
import { baseStyleFields } from '@/fields/baseStyleFields'
import { baseContentRepeaterFields } from '~/fields/baseContentRepeaterFields'

const fields = {
  title: 'Content repeater',
  groups: [
    {
      title: 'columns',
      fields: [
        baseContentRepeaterFields,
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