<template>
  <AppSwitch 
    :label="label" 
    :modelValue="editorStore.getField(path)" 
    @update:modelValue="editorStore.setField(path, $event)"
  />
</template>

<script setup>
import { useEditorStore } from '@/modules/admin/store/editorStore'
import AppSwitch from '@/modules/admin/components/App/AppSwitch.vue'

const props = defineProps({
  label: String,
  path: String
})

const editorStore = useEditorStore()
</script>

