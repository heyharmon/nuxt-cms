<template>
  <AppSelectButtons 
    :label="label" 
    :options="options"
    :modelValue="editorStore.getField(path)" 
    @update:modelValue="editorStore.setField(path, $event)"
  />
</template>

<script setup>
import { useEditorStore } from '@/modules/admin/store/editorStore'
import AppSelectButtons from '@/modules/admin/components/App/AppSelectButtons.vue'

const props = defineProps({
  label: String,
  path: String,
  options: Array,
})

const editorStore = useEditorStore()
</script>