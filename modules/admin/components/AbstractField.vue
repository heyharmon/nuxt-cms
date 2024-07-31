<template>
  <component
    :is="component"
    :label="label"
    :path="path"
    :name="name"
    :options="options"
  />
</template>

<script setup>
const props = defineProps({
  label: String,
  path: String,
  name: String, // TODO: Rename to FieldComponent or Field
  options: Object,
})

let component = computed(() => {
  return defineAsyncComponent(() => import(`@/modules/admin/components/Fields/${props.name}.vue`))
})
</script>