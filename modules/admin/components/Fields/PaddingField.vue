<template> 
  <div>
    <AppSelect
      :label="label"
      v-model="topAndBottomPadding"
      :options="[
        {value: null, label: 'None'},
        {value: 'sm', label: 'sm'},
        {value: 'md', label: 'md'},
        {value: 'lg', label: 'lg'},
        {value: 'xl', label: 'xl'},
        {value: '2xl', label: '2xl'},
        {value: '3xl', label: '3xl'},
        {value: '4xl', label: '4xl'},
        {value: '5xl', label: '5xl'},
        {value: '6xl', label: '6xl'},
        {value: '7xl', label: '7xl'},
        {value: '8xl', label: '8xl'},
      ]"
    />
    <!-- <AppSelectButtons
      :label="label"
      v-model="topAndBottomPadding"
      :options="[
        {value: null, label: 'None'},
        {value: 'sm', label: 'sm'},
        {value: 'md', label: 'md'},
        {value: 'lg', label: 'lg'},
        {value: 'xl', label: 'xl'},
        {value: '2xl', label: '2xl'},
        {value: '3xl', label: '3xl'},
        {value: '4xl', label: '4xl'},
        {value: '5xl', label: '5xl'},
        {value: '6xl', label: '6xl'},
        {value: '7xl', label: '7xl'},
        {value: '8xl', label: '8xl'},
      ]"
    /> -->
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useEditorStore } from '@/modules/admin/store/editorStore'
import AppSelect from '@/modules/admin/components/App/AppSelect.vue'
// import AppSelectButtons from '@/modules/admin/components/App/AppSelectButtons.vue'

const props = defineProps({
  label: String,
  path: String,
})

const editorStore = useEditorStore()

let topAndBottomPadding = computed({
  get() {
    return editorStore.getField(props.path + '.top');
  },
  set(value) {
    editorStore.setField(props.path, {
      top: value, 
      bottom: value
    })
  }
})
</script>
