<template>
  <div class="margin-bottom-sm">
    <label v-if="label" class="block text-sm font-medium leading-6 text-gray-900" :for="label">{{ label }}</label>
    
    <div v-if="collection && collection.length" class="mt-2 overflow-hidden rounded-md border border-gray-300 bg-white">
      <!-- Draggable list of items -->
      <div 
        v-for="(item, index) in collection"
        @click="open = true" 
        class="group border-b border-gray-300 last:border-0 cursor-pointer hover:bg-gray-50 px-2 py-3"
      >
        <div class="flex items-center">
          <div class="h-8 w-6 mr-2 flex items-center justify-center cursor-move">
            <Icon name="heroicons:bars-3" class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </div>

          <button @click.stop="$emit('destroy', index)" type="button" class="opacity-0 group-hover:opacity-100 inline-flex items-center rounded-md border border-gray-300 p-[6px] bg-white hover:bg-gray-100 active:translate-y-px">
            <Icon name="heroicons:trash" class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </button>
        </div>

        <AbstractField
          v-for="field in fields"
          :label="field.label"
          :path="`collection[${index}][${field.path}]`"
          :component="field.component"
        />
      </div>
    </div>

    <!-- Empty state -->
    <div v-else class="mt-2">
      <button 
        @click="addNewItem()"
        type="button" 
        class="mt-2 relative block w-full rounded-lg text-gray-400 border-2 border-dashed border-gray-300 p-4 hover:bg-gray-50 focus:border-solid focus:border-indigo-500"
      >
        <Icon name="heroicons:link" class="mx-auto h-6 w-6" />
        <span class="mt-1 block text-xs">Add column</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useEditorStore } from '@/modules/admin/store/editorStore'
import AbstractField from '@/modules/admin/components/AbstractField.vue'

const props = defineProps({
  label: String, // Label for the field
  path: String, // Path to point each repeated field to
  fields: Array, // Fields that are repeated
})

const open = ref(false)

const editorStore = useEditorStore()
const collection = editorStore.getField(props.path)

function addNewItem() {  
  collection.push({ 
    pretitle: { 
      text: 'Pretitle' 
    },
    title: { 
      text: 'Title' 
    },
    body: { 
      text: 'Body' 
    },
    buttons: [
      {
        label: 'Button label', 
        destination: '/' 
      }
    ]
  })
}

function removeItem(index) {
  recollectioneater.splice(index, 1)
}
</script>
