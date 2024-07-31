<template>
  <AppSwitch 
    :label="label" 
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
import AppSwitch from '@/modules/admin/components/App/AppSwitch.vue'

const props = defineProps({
  label: String,
  path: String
})

const store = useEditorStore()
</script>

