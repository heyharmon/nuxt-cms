<template>
    <div class="margin-bottom-sm">
      <label v-if="label" class="block text-sm font-medium leading-6 text-gray-900" :for="label">{{ label }}</label>
      <div v-if="designStore.design.themes && designStore.design.themes.length" class="mt-2 overflow-hidden rounded-md border border-gray-300 bg-white">
        <DesignThemeField
          v-for="(theme, index) in designStore.design.themes"
          :theme="theme"
          :index="index"
          @destroy="destroyTheme(index)"
        />
      </div>
  
      <!-- Empty state -->
      <div v-else class="mt-2">
        <button 
          @click="addNewTheme()"
          type="button" 
          class="mt-2 relative block w-full rounded-lg text-gray-400 border-2 border-dashed border-gray-300 p-4 hover:bg-gray-50 focus:border-solid focus:border-indigo-500"
        >
          <Icon name="heroicons:link" class="mx-auto h-6 w-6" />
          <span class="mt-1 block text-xs">Add theme</span>
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useDesignStore } from '@/modules/admin/store/designStore'
  import DesignThemeField from '@/modules/admin/components/Fields/DesignThemeField.vue'
  
  const props = defineProps({
    label: String, // Label for the field
    path: String, // Path to themes array in block data TODO: Remove, not using?
  })
  
  const designStore = useDesignStore()
  
  function addNewTheme() {
    designStore.design.themes.push({
      name: 'New theme',
      selector: '[data-theme="new-theme"]',
      properties: [
        { name: 'wrapper-bg', value: 'white' },
        { name: 'pretitle-color', value: 'secondary' },
        { name: 'title-color', value: 'primary' },
        { name: 'text-color', value: 'primary' },
        { name: 'btn-primary-bg', value: 'secondary' },
        { name: 'btn-primary-text', value: 'white' },
        { name: 'btn-secondary-bg', value: 'grey' },
        { name: 'btn-secondary-text', value: 'primary' },
      ]
    })
  }
  
  function destroyTheme(index) {
    designStore.design.themes.splice(index, 1)
  }
  </script>
  