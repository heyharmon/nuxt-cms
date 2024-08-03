<template>
  <component
    v-if="text"
    :is="element"
    :class="`
      ${baseClasses} 
      ${computedSize}
    `"
  >
    {{ text || '' }}
  </component>
</template>
  
<script setup>
const props = defineProps({
  element: {
    type: String,
    default: 'h1' // h1, h2, h3, h4, h5, h6, p, span
  },
  text: {
      type: String,
      default: null
  },
  size: {
    type: String, // xs, sm, base, lg, xl, 2xl, 3xl, 4xl, 5xl, 6xl, 7xl, 8xl, 9xl
  },
})

const baseClasses = `
  heading
  font-bold
  text-pretty
  tracking-normal
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

const textSizeByTag = {
  'h1': 'text-4xl',
  'h2': 'text-3xl',
  'h3': 'text-2xl',
  'h4': 'text-xl',
  'h5': 'text-lg',
  'h6': 'text-base',
}

const computedSize = computed(() => {
  if (props.size) return sizeClasses[props.size]
  return textSizeByTag[props.element]
})
</script>
