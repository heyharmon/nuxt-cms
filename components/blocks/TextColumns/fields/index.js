import { baseContentFields } from '@/fields/baseContentFields'
import { baseStyleFields } from '@/fields/baseStyleFields'
import { baseContentRepeaterFields } from '~/fields/baseContentRepeaterFields'

const fields = {
  title: 'Text columns editor',
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
  // content: [
  //   ...baseContentFields,
  // ],
  // styles: [
  //   ...baseStyleFields,
  // ]
}

export { fields }