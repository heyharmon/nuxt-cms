import { baseContentFields } from '@/fields/baseContentFields'
import { baseStyleFields } from '@/fields/baseStyleFields'
import { TestimonialFields } from '@/fields/TestimonialFields'

const fields = {
  title: 'Testimonial editor',
  groups: [
    {
      title: 'testimonial',
      fields: [
        ...TestimonialFields,
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