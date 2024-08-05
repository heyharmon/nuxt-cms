<template> 
  <div>
    <AppSelectButtons 
      :label="label" 
      :options="[
        { value: null, label: 'Base' },
        { value: 'theme-1', label: 'Theme 1' },
        { value: 'theme-2', label: 'Theme 2' },
        { value: 'theme-3', label: 'Theme 3' },
      ]"
      :modelValue="editorStore.getField(path)" 
      @update:modelValue="editorStore.setField(path, $event)"
    />
  </div>
</template>

<script setup>
import { useEditorStore } from '@/modules/admin/store/editorStore'
import AppSelectButtons from '@/modules/admin/components/App/AppSelectButtons.vue'

const props = defineProps({
  label: String,
  path: String,
})

const editorStore = useEditorStore()
</script>
