<template>
  <div class="margin-bottom-sm">
    <label v-if="label" class="block text-sm font-medium leading-6 text-gray-900" :for="label">{{ label }}</label>

    <div v-if="store.activeBlock.data[path].length" class="mt-2 overflow-hidden rounded-md border border-gray-300 bg-white">
      <ButtonField 
        v-for="(button, index) in store.activeBlock.data[path]"
        :button="button"
        :path="path"
        :index="index"
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
const props = defineProps({
  label: String,
  path: String
})

const store = useEditorStore()

function addNewButton() {
  setValue({
    object: store.activeBlock.data,
    path: props.path,
    value: [{ label: 'Button label', to: '/' }]
  })
}
</script>
