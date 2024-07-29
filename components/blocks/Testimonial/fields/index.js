import { baseContentFields } from '@/fields/baseContentFields'
import { baseStyleFields } from '@/fields/baseStyleFields'
import { testimonialFields } from '@/fields/testimonialFields'

const fields = {
  title: 'Testimonial editor',
  styles: [
    ...baseStyleFields,
  ],
  content: [
    ...baseContentFields,
    ...testimonialFields,
  ],
}

export { fields }