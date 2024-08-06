<template> 
  <div class="margin-bottom-sm">
    <label v-if="label" class="block text-sm font-medium leading-6 text-gray-900" :for="label">{{ label }}</label>

    <div v-if="designStore.design.themes && designStore.design.themes.length" class="mt-2 grid grid-cols-2 gap-4">
      <div 
        v-for="theme in designStore.design.themes" 
        @click="editorStore.setField(path, theme.name)"
        :class="selectedTheme == theme.name ? 'ring-2 ring-offset-2 ring-indigo-500' : ''"
        class="group flex-row items-center justify-between ring-1 ring-gray-200 rounded-md overflow-hidden cursor-pointer hover:shadow"
      >
        <BlockThemeThumbnail :theme="theme"/>

        <div class="flex flex-1 items-center justify-between truncate border-t">
          <div class="flex-1 truncate px-2 py-2 text-xs">
            <div class="text-gray-900">{{ theme.name }}</div>
            <!-- <div class="text-gray-400 mt-1">{{ theme.selector }}</div> -->
          </div>

          <!-- <div class="opacity-0 group-hover:opacity-100 flex-shrink-0">
              <button @click.stop="$emit('destroy', index)" type="button" class="inline-flex items-center rounded-md p-0.5 bg-white hover:bg-gray-100 active:translate-y-px">
                <Icon name="heroicons:trash" class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </button>
          </div> -->
        </div>
      </div>
    </div>
  </div>

  <!-- <div>
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
  </div> -->
</template>

<script setup>
import { computed } from 'vue'
import { useDesignStore } from '@/modules/admin/store/designStore'
import { useEditorStore } from '@/modules/admin/store/editorStore'
import AppSelectButtons from '@/modules/admin/components/App/AppSelectButtons.vue'
import BlockThemeThumbnail from '@/modules/admin/components/Fields/BlockThemeThumbnail.vue'

const props = defineProps({
  label: String,
  path: String,
})

const editorStore = useEditorStore()
const designStore = useDesignStore()

const selectedTheme = computed(() => {
  return editorStore.getField(props.path)
})
</script>
