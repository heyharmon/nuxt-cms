<template>
  <component
    v-if="text"
    :is="element"
    :class="`
      ${baseClasses} 
      ${sizeClasses[size]}
    `"
  >
    <slot>{{ text || '' }}</slot>
  </component>
</template>
  
<script setup>
const props = defineProps({
  element: {
    type: String,
    default: 'p' // p, span, blockquote
  },
  text: {
      type: String,
      default: null
  },
  size: {
      type: String, // xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl, 8xl, 9xl
      default: 'base'
    },
})

const baseClasses = `
  text-balance 
  leading-normal
`

const sizeClasses = {
	'xs': 'text-xs',
  'sm': 'text-sm',
  'base': 'text-base',
  'lg': 'text-lg',
  'xl': 'text-xl',
  '2xl': 'text-2xl',
  '3xl': 'text-3xl',
  '4xl': 'text-4xl',
  '5xl': 'text-5xl',
  '6xl': 'text-6xl',
  '7xl': 'text-7xl',
  '8xl': 'text-8xl',
  '9xl': 'text-9xl',
}
</script>
