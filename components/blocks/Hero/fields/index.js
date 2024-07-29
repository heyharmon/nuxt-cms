import { baseContentFields } from '@/fields/baseContentFields'
import { baseImageFields } from '@/fields/baseImageFields'
import { baseStyleFields } from '@/fields/baseStyleFields'

const fields = {
  title: 'Hero editor',
  content: [
    ...baseContentFields,
    ...baseImageFields,
  ],
  styles: [
    ...baseStyleFields,
  ]
}

export { fields }