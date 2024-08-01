<template>
  <AppModal @close="emit('close')">
    <!-- Tabs -->
    <div class="border-b border-gray-200">
      <nav class="-mb-px flex space-x-8 pl-6" aria-label="Tabs">
        <button @click="currentTab = 'files'" :class="currentTab === 'files' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'" class="group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium">
          <Icon name="heroicons:photo-solid" :class="currentTab === 'files' ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500'" class="-ml-0.5 mr-2 h-5 w-5" aria-hidden="true" />
          <span>Files</span>
        </button>

        <button @click="currentTab = 'upload'" :class="currentTab === 'upload' ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'" class="group inline-flex items-center border-b-2 py-4 px-1 text-sm font-medium">
          <Icon name="heroicons:arrow-up-on-square-solid" :class="currentTab === 'upload' ? 'text-indigo-500' : 'text-gray-400 group-hover:text-gray-500'" class="-ml-0.5 mr-2 h-5 w-5" aria-hidden="true" />
          <span>Upload</span>
        </button>
      </nav>
    </div>

    <!-- Files -->
    <div v-if="currentTab === 'files'" class="p-6">
      <ul role="list" class="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
        <li v-for="file in fileStore.files" :key="file.id" class="relative">
          <div @click="selectFile(file)" class="group aspect-h-7 aspect-w-10 block w-full max-h-44 overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
            <NuxtImg provider="imagekit" :src="file.path" :alt="file.alt" width="380" height="180" class="pointer-events-none shrink-0 min-w-full min-h-full group-hover:opacity-75"/>
          </div>
          <p class="pointer-events-none mt-2 block truncate text-sm font-medium text-gray-900">{{ file.name }}</p>
          <p class="pointer-events-none block text-sm font-medium text-gray-500">{{ file.size }}</p>
        </li>
      </ul>
    </div>

    <!-- Upload -->
    <div v-if="currentTab === 'upload'" class="p-6">
      <div class="flex items-center justify-center w-full">
        <label for="dropzone-file" class="flex flex-col items-center justify-center w-full h-[80vh] border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
            <div class="flex flex-col items-center justify-center pt-5 pb-6">
                <svg aria-hidden="true" class="w-10 h-10 mb-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path></svg>
                <p class="mb-2 text-sm text-gray-500"><span class="font-semibold">Click to upload</span> or drag and drop</p>
                <p class="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
            </div>
            <input id="dropzone-file" type="file" class="hidden" />
        </label>
      </div> 
    </div>
  </AppModal>
</template>

<script setup>
import { useEditorStore } from '@/modules/admin/store/editorStore'
import { useFileStore } from '@/modules/admin/store/fileStore'

const currentTab = ref('files')
const editorStore = useEditorStore()
const fileStore = useFileStore()
const emit = defineEmits(['close'])

await useAsyncData('files', () => fileStore.index())

function selectFile(file) {
  editorStore.setField(
    editorStore.filesModal.targetProp,
    {file}
  )

  // editorStore.pushToCollection({
  //   path: editorStore.filesModal.targetProp,
  //   value: {file}
  // })

  editorStore.filesModal.open = false
}
</script>