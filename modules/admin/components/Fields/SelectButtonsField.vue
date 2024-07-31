<template>
  <AppSelectButtons 
    :label="label" 
    :options="options"
    :modelValue="getValue({
      object: store.activeBlock.data, 
      path: path
    })" 
    @update:modelValue="setValue({
      object: store.activeBlock.data, 
      path: path, 
      value: $event
    })"
  />
</template>

<script setup>
import { useEditorStore } from '@/modules/admin/store/editorStore'
import { getValue, setValue } from '@/modules/admin/composables/useArrayHelpers'
import AppSelectButtons from '@/modules/admin/components/App/AppSelectButtons.vue'

const props = defineProps({
  label: String,
  path: String,
  options: Array,
})

const store = useEditorStore()
</script>