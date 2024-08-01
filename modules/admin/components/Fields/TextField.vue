<template>
  <AppInput 
    :label="label" 
    :modelValue="editorStore.getValue(path)" 
    @update:modelValue="editorStore.setValue(path, $event)"
  />
</template>

<script setup>
import { useEditorStore } from '@/modules/admin/store/editorStore'
import AppInput from '@/modules/admin/components/App/AppInput.vue'

const props = defineProps({
  label: String,
  path: String
})

const editorStore = useEditorStore()
</script>

