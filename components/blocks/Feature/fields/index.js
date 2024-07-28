import { baseContentFields } from '@/fields/baseContentFields'
import { baseImageFields } from '@/fields/baseImageFields'
import { baseWrapperFields } from '@/fields/baseWrapperFields'

const fields = {
  title: 'Feature editor',
  content: [
    ...baseContentFields,
    ...baseImageFields,
  ],
  style: [
    ...baseWrapperFields,
  ]
}

export { fields }