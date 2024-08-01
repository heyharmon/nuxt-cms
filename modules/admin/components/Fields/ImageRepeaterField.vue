<template>
  <div class="margin-bottom-sm">
    <label v-if="label" class="block text-sm font-medium leading-6 text-gray-900" :for="label">{{ label }}</label>
    <div v-if="images.length" class="mt-2 overflow-hidden rounded-md border border-gray-300 bg-white">
      <Image
        v-for="(image, index) in images"
        :image="image"
        :index="index"
        :path="path"
        @removeImage="removeImage(index)"
        @openFilePicker="openFilePicker()"
      />
    </div>

    <!-- Empty state -->
    <div v-else>
      <button  
        @click="openFilePicker()"
        type="button" 
        class="mt-2 relative block w-full rounded-lg text-gray-400 border-2 border-dashed border-gray-300 p-4 hover:bg-gray-50 focus:border-solid focus:border-indigo-500"
      >
        <Icon name="heroicons:photo" class="mx-auto h-6 w-6" />
        <span class="mt-1 block text-xs">Add image</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useEditorStore } from '@/modules/admin/store/editorStore'
import Image from '@/modules/admin/components/Fields/Image.vue'

const props = defineProps({
  label: String, // Label for the field
  path: String, // Path to images array in block data
})

const editorStore = useEditorStore()
const images = editorStore.getField(props.path)
 
function removeImage(index) {
  images.splice(index, 1)
}

function openFilePicker() {
  editorStore.filesModal.open = true 
  editorStore.filesModal.targetProp = props.path
}
</script>
