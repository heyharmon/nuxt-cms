import { BaseContentFields } from '@/fields/BaseContentFields'
import { BaseStyleFields } from '@/fields/BaseStyleFields'
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
        ...BaseContentFields,
      ]
    },
    {
      title: 'style',
      fields: [
        ...BaseStyleFields,
      ]
    }
  ]
}

export { fields }