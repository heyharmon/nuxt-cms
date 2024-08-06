<template>
  <div>
    <label v-if="label" class="block text-sm font-medium leading-6 text-gray-900">{{ label }}</label>

    <AppDropdown class="mt-2 w-32">
      <template #title>
        {{ selected ? selected.label : 'Loading...' }} 
        <ChevronDownIcon class="ml-auto h-4 w-4 text-gray-400"/>
      </template>
      <button 
        v-for="color in options" 
        @click="updateValue(color.label)"
        :class="color.label == modelValue ? 'bg-gray-50 text-indigo-600' : ''" 
        class="w-full text-left rounded-md p-2 text-sm leading-6 text-gray-700 hover:bg-gray-50 hover:text-indigo-600"
      >
        {{ color.label }}
      </button>
    </AppDropdown>
  </div>
</template>

<script setup>
import { computed } from 'vue'
// import { useDesignStore } from '@/modules/admin/store/designStore'
import AppDropdown from '@/modules/admin/components/App/AppDropdown.vue'

const props = defineProps({
    modelValue: String,
    label: String,
    options: Array
})

// const designStore = useDesignStore()

const selected = computed(() => {
    return props.options.find(color => color.label == props.modelValue)
})

const emit = defineEmits(['update:modelValue'])

function updateValue(value) {
  emit('update:modelValue', value)
}
</script>
