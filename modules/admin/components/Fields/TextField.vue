<template>
  <AppInput 
    :label="label" 
    :modelValue="getValue({
      object: editorStore.activeBlock.data, 
      path: path
    })" 
    @update:modelValue="setValue({
      object: editorStore.activeBlock.data, 
      path: path, 
      value: $event
    })"
  />
</template>

<script setup>
import { useEditorStore } from '@/modules/admin/store/editorStore'
import { getValue, setValue } from '@/modules/admin/composables/useArrayHelpers'
import AppInput from '@/modules/admin/components/AppInput.vue'

const props = defineProps({
  label: String,
  path: String
})

const editorStore = useEditorStore()
</script>

