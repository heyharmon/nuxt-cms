<template>
  <nav class="w-[22rem] overflow-y-auto rounded-lg border drop-shadow-sm bg-white no-scrollbar ml-4">
    <!-- Panel top -->
    <div class="flex items-center justify-between border-b px-4 py-3">
      <p class="font-medium">{{ fieldGroupsRef.title }}</p>
      <button @click="editorStore.showDefault()" type="button" class="inline-flex items-center rounded-md border border-gray-300 p-[6px] hover:bg-gray-100 active:translate-y-px">
        <Icon name="heroicons:x-mark" class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </button>
    </div>

    <div v-if="fieldGroupsRef">
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex">
          <button 
            v-for="(group, index) in fieldGroupsRef.groups" :key="group.title"
            @click="activeTabIndex = index"
            :class="activeTabIndex === index ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'" 
            class="w-1/2 border-b-2 py-4 px-1 capitalize text-center text-xs font-medium"
          >
            {{ group.title }}
          </button>
        </nav>
      </div>

      <div v-for="(group, index) in fieldGroupsRef.groups" :key="group.title">
        <div v-if="activeTabIndex === index" class="flex flex-col gap-y-5 px-4 py-6">
          <AbstractField
            v-for="field in group.fields"
            v-bind="field"
          />
        </div>
      </div>
    </div>

    <!-- <pre>{{ fieldGroupsRef }}</pre> -->
  </nav>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useEditorStore } from '@/modules/admin/store/editorStore'
import AbstractField from '@/modules/admin/components/AbstractField.vue'

const props = defineProps({
  group: String,
})

const editorStore = useEditorStore()
const activeTabIndex = ref(0)

let fieldGroupsRef = ref()

let { fields } = await import(`../../../components/blocks/${props.group}/fields/index.js`)

fieldGroupsRef.value = fields

watch(() => props.group, async (group) => {
  let { fields } = await import(`../../../components/blocks/${group}/fields/index.js`)
  fieldGroupsRef.value = fields
})
</script>