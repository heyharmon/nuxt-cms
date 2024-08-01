<template>
  <component
    :is="component"
    :label="label"
    :path="path"
    :options="options"
  />
</template>

<script setup>
const props = defineProps({
  label: String,
  path: String,
  component: String,
  options: Object,
})

let component = computed(() => {
  return defineAsyncComponent(() => import(`@/modules/admin/components/Fields/${props.component}.vue`))
})
</script>