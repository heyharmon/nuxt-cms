<template>
  <component
    :is="component"
    v-bind="data"
  />
</template>

<script setup>
const props = defineProps({
  group: String,
  component: String,
  data: Object,
})

let component = computed(() => {
  return defineAsyncComponent(() => import(`~/components/blocks/${props.group}/${props.component}.vue`))
})
</script>