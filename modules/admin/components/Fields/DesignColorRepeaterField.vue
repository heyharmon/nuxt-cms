<template>
    <div class="margin-bottom-sm">
      <label v-if="label" class="block text-sm font-medium leading-6 text-gray-900" :for="label">{{ label }}</label>
      <div v-if="designStore.design.colors && designStore.design.colors.length" class="mt-2 overflow-hidden rounded-md border border-gray-300 bg-white">
        <DesignColorField 
          v-for="(color, index) in designStore.design.colors"
          :color="color"
          :index="index"
          @destroy="destroyColor(index)"
        />
      </div>
  
      <!-- Empty state -->
      <div v-else class="mt-2">
        <button 
          @click="addNewColor()"
          type="button" 
          class="mt-2 relative block w-full rounded-lg text-gray-400 border-2 border-dashed border-gray-300 p-4 hover:bg-gray-50 focus:border-solid focus:border-indigo-500"
        >
          <Icon name="heroicons:link" class="mx-auto h-6 w-6" />
          <span class="mt-1 block text-xs">Add color</span>
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useDesignStore } from '@/modules/admin/store/designStore'
  import DesignColorField from '@/modules/admin/components/Fields/DesignColorField.vue'
  
  const props = defineProps({
    label: String, // Label for the field
    path: String, // Path to colors array in block data TODO: Remove, not using?
  })
  
  const designStore = useDesignStore()
  
  function addNewColor() {
    designStore.design.colors.push({ 
      name: 'New color', 
      hex: '' 
    })
  }
  
  function destroyColor(index) {
    designStore.design.colors.splice(index, 1)
  }
  </script>
  