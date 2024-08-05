<template>
  <div 
    @click="open = true" 
    class="group flex items-center justify-between border-b border-gray-300 last:border-0 cursor-pointer hover:bg-gray-50 px-2 py-3"
  >
    <div class="flex items-center">
      <!-- Drag handle -->
      <div class="h-8 w-6 mr-2 flex items-center justify-center cursor-move">
        <Icon name="heroicons:bars-3" class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </div>

      <!-- Label & destination -->
      <div class="truncate">
        <div class="text-xs text-gray-900">{{ color.name }}</div>
        <div class="mt-1.5 text-xs text-gray-400">{{ color.hex }}</div>
      </div>
    </div>

    <!-- Destroy button -->
    <div class="ml-6 mt-0 flex-shrink-0">
      <button @click.stop="$emit('destroy', index)" type="button" class="opacity-0 group-hover:opacity-100 inline-flex items-center rounded-md border border-gray-300 p-[6px] bg-white hover:bg-gray-100 active:translate-y-px">
        <Icon name="heroicons:trash" class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </button>
    </div>

    <!-- Color editor modal -->
    <AppModal v-if="open" @close="open = false" :title="`Color ${color.name}`" size="sm">
      <div class="flex flex-col gap-y-5 p-8">
        <AppInput label="Name" v-model="color.name"/>
        <AppInput label="Hex" v-model="color.hex"/>
      </div>
    </AppModal>
  </div>
</template>

<script setup>
import AppInput from '@/modules/admin/components/App/AppInput.vue'
import AppModal from '@/modules/admin/components/App/AppModal.vue'

const props = defineProps({
  color: Object,
  index: Number,
})

const open = ref(false)
const emit = defineEmits(['destroy'])
</script>
