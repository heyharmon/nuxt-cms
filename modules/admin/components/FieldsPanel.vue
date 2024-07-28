<template>
  <nav class="w-[22rem] overflow-y-auto rounded-lg border drop-shadow-sm bg-white no-scrollbar ml-4">
    <!-- <pre>{{ fieldsRef }}</pre> -->

    <!-- Panel top -->
    <div class="flex items-center justify-between border-b px-4 py-3">
      <p class="font-medium">{{ fieldsRef.title }}</p>
      <button @click="editorStore.showDefault()" type="button" class="inline-flex items-center rounded-md border border-gray-300 p-[6px] hover:bg-gray-100 active:translate-y-px">
        <Icon name="heroicons:x-mark" class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </button>
    </div>

    <div v-if="fieldsRef">
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex">
          <button 
            v-for="tab in ['content', 'wrapper']" :key="tab"
            @click="activeTab = tab"
            :class="tab === activeTab ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'" 
            class="w-1/2 border-b-2 py-4 px-1 capitalize text-center text-xs font-medium"
          >
            {{ tab }}
          </button>
        </nav>
      </div>

      <div class="flex flex-col gap-y-5 px-4 py-6">
        <Field 
          v-if="activeTab === 'content'"
          v-for="(field, index) in fieldsRef.content"
          :key="index"
          v-bind="field"
        />

        <Field 
          v-if="activeTab === 'wrapper'"
          v-for="(field, index) in fieldsRef.wrapper"
          :key="index"
          v-bind="field"
        />
      </div>
    </div>

    <!-- <pre>{{ fieldsRef }}</pre> -->
  </nav>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useEditorStore } from '../store/editorStore'
import Field from '@/modules/admin/components/Field.vue'

const props = defineProps({
  group: String,
})

const editorStore = useEditorStore()
const activeTab = ref('content')

// const { fields } = await import(`../../../components/blocks/${props.group}/fields/index.js`)

// import { fields } from '@/components/blocks/Hero/fields/index.js'
// import fields from '@/components/blocks/Hero/fields/index.js'
// const fields = import(`@/components/blocks/${props.blockName}/fields/index.js`)

// const getPath = (blockName) => `@/components/blocks/${blockName}/fields/index.js`;
// const fields = await import(getPath(props.blockName));

// const { fields } = await import(`@/components/blocks/Hero/fields/index.js`)

let fieldsRef = ref()

// Works
let { fields } = await import(`../../../components/blocks/${props.group}/fields/index.js`)
fieldsRef.value = fields

// watch props.group and update computedFields
watch(() => props.group, async (group) => {
  let { fields } = await import(`../../../components/blocks/${group}/fields/index.js`)
  fieldsRef.value = fields
  // computedFields = fields
})

// const computedFields = computed(() => {
//   let { fields } = import(`../../../components/blocks/${props.group}/fields/index.js`)
//   return fields
// })

// const computedFields = computed(() => {
//   return import(`../../../components/blocks/${props.group}/fields/index.js`)
// })

// const fields = ref()
// async function loadMyModule() {
//   const { heroFields } = await import(`../../../components/blocks/${props.blockName}/fields/index.js`);
//   console.log(heroFields)
//   fields.value = heroFields
// }
// loadMyModule()

</script>