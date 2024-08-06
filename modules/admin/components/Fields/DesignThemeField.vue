<template>
  <div 
    @click="open = true" 
    class="group flex-col items-center justify-between ring-1 ring-gray-200 rounded-md cursor-pointer overflow-hidden hover:shadow"
  >
    <!-- <div class="flex w-24 overflow-hidden flex-shrink-0 items-center justify-center border-r rounded-l-md bg-gray-100">
      <BlockThemeThumbnail :theme="theme"/> 
    </div> -->
    <BlockThemeThumbnail :theme="theme"/> 

    <div class="flex flex-1 items-center justify-between truncate border-t">
      <div class="flex-1 truncate px-2 py-2 text-xs">
        <div class="text-gray-900">{{ theme.name }}</div>
        <!-- <div class="text-gray-400 mt-1">{{ theme.selector }}</div> -->
      </div>

      <div class="opacity-0 group-hover:opacity-100 flex-shrink-0">
          <button @click.stop="$emit('destroy', index)" type="button" class="inline-flex items-center rounded-md p-0.5 bg-white hover:bg-gray-100 active:translate-y-px">
            <Icon name="heroicons:trash" class="h-5 w-5 text-gray-400" aria-hidden="true" />
          </button>
      </div>
    </div>

    <!-- Theme editor modal -->
    <AppModal v-if="open" @close="open = false" :title="`Theme ${theme.name}`" size="md">
      <div class="flex flex-col gap-y-5 p-8 pb-64">
        <AppInput label="Name" v-model="theme.name"/>
        <DesignColorPicker label="Background" v-model="theme.properties[0].variable" :options="designStore.design.colors"/>
        <DesignColorPicker label="Pre title" v-model="theme.properties[1].variable" :options="designStore.design.colors"/>
        <DesignColorPicker label="Title" v-model="theme.properties[2].variable" :options="designStore.design.colors"/>
        <DesignColorPicker label="Text" v-model="theme.properties[3].variable" :options="designStore.design.colors"/>
        <DesignColorPicker label="Primary button background" v-model="theme.properties[4].variable" :options="designStore.design.colors"/>
        <DesignColorPicker label="Primary button text" v-model="theme.properties[5].variable" :options="designStore.design.colors"/>
        <DesignColorPicker label="Secondary button background" v-model="theme.properties[6].variable" :options="designStore.design.colors"/>
        <DesignColorPicker label="Secondary button text" v-model="theme.properties[7].variable" :options="designStore.design.colors"/>
        <DesignColorPicker label="Simple button text" v-model="theme.properties[8].variable" :options="designStore.design.colors"/>
      </div>
    </AppModal>
  </div>
</template>

<script setup>
import { useDesignStore } from '@/modules/admin/store/designStore'
import AppInput from '@/modules/admin/components/App/AppInput.vue'
import AppModal from '@/modules/admin/components/App/AppModal.vue'
import BlockThemeThumbnail from '@/modules/admin/components/Fields/BlockThemeThumbnail.vue'
import DesignColorPicker from '@/modules/admin/components/Fields/DesignColorPicker.vue'

const designStore = useDesignStore()

const props = defineProps({
  theme: Object,
  index: Number,
})

const open = ref(false)
const emit = defineEmits(['destroy'])
</script>
