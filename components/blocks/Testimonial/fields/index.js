import { baseContentFields } from '@/fields/baseContentFields'
import { baseStyleFields } from '@/fields/baseStyleFields'

const fields = {
  title: 'Testimonial editor',
  groups: [
    {
      title: 'testimonial',
      fields: [
        {
          label: 'Testimonial quote',
          path: 'testimonial.quote.text',
          name: 'TextField', // TODO: Rename to Component
        },
        {
            label: 'Testimonial author',
            path: 'testimonial.author.text',
            name: 'TextField', // TODO: Rename to Component
        },
        {
            label: 'Testimonial role or location',
            path: 'testimonial.extra.text',
            name: 'TextField', // TODO: Rename to Component
        },
        {
            label: 'Testimonial image',
            path: 'testimonial.image',
            name: 'ImageField', // TODO: Rename to Component
        },
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
  ]
}

export { fields }