<template>
  <div class="absolute inset-0 -z-10">
    <BaseImage v-if="image" v-bind="image" class="absolute inset-0 h-full w-full object-cover"/>
    <div v-if="overlay" aria-hidden="true" class="absolute inset-0 h-full w-full bg-gray-100 opacity-70"/>
  </div>
</template>

<script setup>
const props = defineProps({
  image: Object,
  overlay: {
    type: Boolean,
    default: false,
  },
})
</script>