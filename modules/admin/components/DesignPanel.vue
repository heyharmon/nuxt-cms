<template>
  <nav class="w-[22rem] overflow-y-auto rounded-lg border drop-shadow-sm bg-white no-scrollbar ml-4">
    <!-- Panel top -->
    <div class="flex items-center justify-between border-b px-4 py-3">
      <p class="font-medium">{{ fieldGroups.title }}</p>
      <button @click="editorStore.showDefault()" type="button" class="inline-flex items-center rounded-md border border-gray-300 p-[6px] hover:bg-gray-100 active:translate-y-px">
        <Icon name="heroicons:x-mark" class="h-5 w-5 text-gray-400" aria-hidden="true" />
      </button>
    </div>

    <div v-if="fieldGroups">
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex">
          <button 
            v-for="(group, index) in fieldGroups.groups" :key="group.title"
            @click="activeTabIndex = index"
            :class="activeTabIndex === index ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'" 
            class="w-1/2 border-b-2 py-4 px-1 capitalize text-center text-xs font-medium"
          >
            {{ group.title }}
          </button>
        </nav>
      </div>

      <div v-for="(group, index) in fieldGroups.groups" :key="group.title">
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
import { ref, computed } from 'vue'
import { useDesignStore } from '@/modules/admin/store/designStore'
import AbstractField from '@/modules/admin/components/AbstractField.vue'

const props = defineProps({
  group: String,
})

const designStore = useDesignStore()
const activeTabIndex = ref(0)

const fieldGroups = ref({
  title: 'Design editor',
  groups: [
    {
      title: 'colors',
      fields: [
        {
          label: 'Colors', // Let's you create as many colors as you want. Thumbnail like Shopify (https://www.notion.so/change-theme-colors-Shopify-7d8bd60e34554468914bbe2b03bb8bfe?pvs=4).
          path: 'design.colors',
          component: 'DesignColorRepeaterField',
        },
        {
          label: 'Themes', // This let's you create as many themes as you want. Thumbnail like wordpress.com (https://share.zight.com/yAuzwRAQ).
          path: 'design.themes',
          component: 'DesignThemeRepeaterField',
        },
      ]
    },
    {
      title: 'typography',
      fields: [
        // {
        //   label: 'Fonts', // This lists contains font selectors like wordpress.com (https://share.zight.com/jkup9BOP) for: Navbar, Pretitles, Titles, Subtitles, Paragraphs, Buttons, Links, Inputs, Labels, and Captions?
        //   path: 'design.fonts',
        //   component: 'DesignFontRepeaterField',
        // },
      ]
    }
  ],
})
</script>

<!-- <style>
:root {
  --primary: red;
  --secondary: green;
  --tertiary: black;
  --neutral: grey;
  --black: brown;
  --grey: grey;
  --white: white;
}
</style> -->