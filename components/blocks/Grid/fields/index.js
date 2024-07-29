import { baseContentFields } from '@/fields/baseContentFields'
import { baseStyleFields } from '@/fields/baseStyleFields'

const fields = {
  title: 'Grid editor',
  content: [
    ...baseContentFields,
  ],
  styles: [
    ...baseStyleFields,
  ]
}

export { fields }