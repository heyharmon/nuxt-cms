import { baseContentFields } from '@/fields/baseContentFields'
import { baseStyleFields } from '@/fields/baseStyleFields'

const fields = {
  title: 'Testimonial editor',
  content: [
    ...baseContentFields,
  ],
  styles: [
    ...baseStyleFields,
  ]
}

export { fields }