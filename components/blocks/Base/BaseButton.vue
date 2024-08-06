<template>
  <NuxtLink
    :to="destination"
    @click="$emit('click')"
    :class="`
      ${baseClasses}
      ${sizeClasses[size]}
      ${variantClasses[variant]} 
    `"
  >
    <slot>{{ label || '' }}</slot>
    <!-- <Icon v-if="icon" :name="icon" class="order-first h-5 w-5 ml-2" aria-hidden="true" /> -->
  </NuxtLink>
</template>
  
<script setup>
// Button as event button
// <Button @click="onClickButton">Button</Button>

// Button as nuxt-link or anchor
// <Button to="/en/blog" rel="next">Link</Button>
// <Button to="https://google.com" rel="external" target="_blank">External link</Button>

const props = defineProps({
    label: String,
    destination: String,
    variant: {
        type: String,
        default: 'primary' // primary, secondary, text
    },
    size: {
        type: String,
        default: 'base' // sm, base, lg
    },
    icon: {
        type: String,
        default: ''
    },
})

const baseClasses = `
  inline-flex
  font-semibold 
  rounded-md
  active:translate-y-px
  disabled:pointer-events-none
  disabled:opacity-50
  disabled:shadow-none
  focus-visible:outline-primary-700
  focus-visible:outline 
  focus-visible:outline-2 
  focus-visible:outline-offset-2
`

const variantClasses = {
  primary: 'theme-btn-primary hover:bg-primary-700 shadow-sm',
  secondary: 'theme-btn-secondary hover:bg-secondary-700 shadow-sm',
  // light: 'btn bg-white hover:bg-primary-200 shadow-sm',
  // ghost: 'text-color bg-transparent ring-2 ring-inset ring-white hover:bg-primary-200',
  simple: 'theme-btn-simple bg-transparent pl-0 pr-0 pt-0 pb-0',
}

const sizeClasses = {
  xs: 'px-1 py-0.5 text-xs',
	sm: 'px-3 py-1.5 text-sm',
  base: 'px-4 py-2.5',
  lg: 'px-8 py-4 text-md',
}
</script>
