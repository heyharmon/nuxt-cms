<template>
  <div class="margin-bottom-sm">
    <label v-if="label" class="block text-sm font-medium leading-6 text-gray-900" :for="label">{{ label }}</label>
    <div v-if="buttons && buttons.length" class="mt-2 overflow-hidden rounded-md border border-gray-300 bg-white">
      <ButtonField 
        v-for="(button, index) in buttons"
        :button="button"
        :index="index"
        @destroy="destroyButton(index)"
      />
    </div>

    <!-- Empty state -->
    <div v-else class="mt-2">
      <button 
        @click="addNewButton()"
        type="button" 
        class="mt-2 relative block w-full rounded-lg text-gray-400 border-2 border-dashed border-gray-300 p-4 hover:bg-gray-50 focus:border-solid focus:border-indigo-500"
      >
        <Icon name="heroicons:link" class="mx-auto h-6 w-6" />
        <span class="mt-1 block text-xs">Add button</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useEditorStore } from '@/modules/admin/store/editorStore'
import { getValue, setValue } from '@/modules/admin/composables/useArrayHelpers'
import ButtonField from '@/modules/admin/components/Fields/ButtonField.vue'

const props = defineProps({
  label: String, // Label for the field
  path: String, // Path to buttons array in block data
})

const editorStore = useEditorStore()
const buttons = editorStore.getValue(props.path)
// const buttons = computed(() => {
//   return editorStore.getValue(props.path)
// })

function addNewButton() {
  // Set content object with empty buttons array
  // if (!editorStore.activeBlock.data.content) {
  //   setValue({
  //     object: editorStore.activeBlock.data,
  //     path: 'content',
  //     value: {
  //       buttons: []
  //     }
  //   })
  // }
  
  buttons.push({ 
    label: 'Button label', 
    destination: '/' 
  })
}

function destroyButton(index) {
  buttons.splice(index, 1)
}
</script>
