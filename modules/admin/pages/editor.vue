<template>
  <EditorLayout>
    <template v-slot:top>
      <div class="flex items-center gap-x-4 h-14 px-4">
        <div class="flex flex-1 items-center gap-x-3">
          <!-- Back -->
          <button type="button" class="inline-flex items-center rounded-md bg-gray-100 p-[6px] text-gray-900 hover:bg-gray-200 active:translate-y-px">
            <Icon name="heroicons:arrow-left" class="h-5 w-5 text-gray-700" aria-hidden="true" />
          </button>

          <!-- Blocks -->
          <button @click="editorStore.showDefault()" :class="editorStore.show.blocksPanel ? 'bg-indigo-100' : ''" class="inline-flex items-center py-[6px] px-[12px] text-[14px] text-indigo-600 rounded-md hover:bg-indigo-100 active:translate-y-px">
            <Icon name="heroicons:squares-plus-solid" class="h-5 w-5 mr-1.5" aria-hidden="true" />
            Blocks
          </button>

          <!-- Design -->
          <button @click="editorStore.showDesignPanel()" :class="editorStore.show.designPanel ? 'bg-indigo-100' : ''" class="inline-flex items-center py-[6px] px-[12px] text-[14px] text-indigo-600 rounded-md hover:bg-indigo-100 active:translate-y-px">
            <Icon name="heroicons:swatch-solid" class="h-5 w-5 mr-1.5" aria-hidden="true" />
            Design
          </button>
        </div>

        <nav class="flex items-center gap-x-4">
          <!-- Page title -->
          <div class="text-[15px]">Homepage</div>

          <!-- Badge -->
          <span class="inline-flex items-center gap-x-1 rounded-md bg-indigo-100 text-indigo-700 text-[13px] px-[6px] py-[2px]">
            <svg class="h-1.5 w-1.5 fill-indigo-500" viewBox="0 0 6 6" aria-hidden="true"><circle cx="3" cy="3" r="3" /></svg>
            Draft
          </span>
        </nav>

        <div class="flex flex-1 items-center justify-end gap-x-3">
          <!-- Separator -->
          <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-900/10" aria-hidden="true" />

          <!-- Settings -->
          <button type="button" class="inline-flex items-center rounded-md bg-gray-100 p-[6px] text-gray-900 hover:bg-gray-200 active:translate-y-px">
            <Icon name="heroicons:cog-6-tooth-solid" class="h-5 w-5 text-gray-700" aria-hidden="true" />
          </button>

          <!-- Preview -->
          <button type="button" class="inline-flex items-center rounded-md bg-gray-100 p-[6px] text-gray-900 hover:bg-gray-200 active:translate-y-px">
            <Icon name="heroicons:eye-solid" class="h-5 w-5 text-gray-700" aria-hidden="true" />
          </button>

          <!-- Publish -->
          <button type="button" class="inline-flex items-center rounded-md bg-indigo-500 py-[5px] px-[12px] text-[14px] text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 active:translate-y-px">
            Publish
          </button>
        </div>
      </div>
    </template>

    <template v-slot:left>
      <BlocksPanel v-if="editorStore.show.blocksPanel"/>
      <DesignPanel v-if="editorStore.show.designPanel"/>
      <FieldsPanel v-if="editorStore.activeBlockId" :group="editorStore.activeBlock.group"/>
      <!-- <pre>{{ editorStore.activeBlock }}</pre> -->
    </template>

    <template v-slot:middle>
      <BlockWrapper v-for="(block, index) in editorStore.blocks" :key="index" :index="index" :block="block">
        <Block v-bind="block"/>
      </BlockWrapper>
      
      <!-- <Block v-if="page" v-for="block in page.blocks" :key="block.id" v-bind="block"/> -->
    </template>

    <template v-slot:right>
      <ThumbnailsPanel/>
    </template>
  </EditorLayout>

  <FilesModal v-if="editorStore.filesModal.open" @close="editorStore.filesModal.open = false" title="Files" size="full"/>
</template>

<script setup>
// import { usePageStore } from '@/store/pageStore.js'
import { ref, computed, watch, onMounted } from 'vue'
import { useEditorStore } from '@/modules/admin/store/editorStore'
import { useDesignStore } from '@/modules/admin/store/designStore'
import EditorLayout from '@/modules/admin/layouts/EditorLayout.vue'
import Block from '@/components/blocks/Block.vue'
import BlockWrapper from '@/modules/admin/components/BlockWrapper.vue'
import FieldsPanel from '@/modules/admin/components/FieldsPanel.vue'
import BlocksPanel from '@/modules/admin/components/BlocksPanel.vue'
import FilesModal from '@/modules/admin/components/FilesModal.vue'
import ThumbnailsPanel from '@/modules/admin/components/ThumbnailsPanel.vue'
// import { storeToRefs } from 'pinia'
// import BlockWrapper from '@/cms/editor/components/BlockWrapper.vue'
// import Block from '@/client/components/Block.vue'

definePageMeta({
  layout: 'admin'
})


const editorStore = useEditorStore()
const designStore = useDesignStore()
// const pageStore = usePageStore()

const { data: page, pending: pagePending, error: pageError } = await useAsyncData('page', () =>
  editorStore.showPage('/')
);

/*
* * * * * * * * * * * 
* Dynamic css rules
* * * * * * * * * * * 
*/

// Create an empty style element
let styleElement = null;

// Generate the CSS string for colors and themes
const generateCssVariables = (design) => {
  // Output colors
  let css = ':root {\n';
  design.colors.forEach(color => {
    css += `  --${color.name}: ${color.color};\n`;
  });
  css += '}\n';

  // Output themes
  design.themes.forEach(theme => {
    css += `${theme.selector} {\n`
    theme.properties.forEach(property => {
      css += `  --${property.name}: var(--${property.value});\n`
    })
    css += '}\n'
  })

  return css;
};

// Update the CSS variables
const updateCssVariables = (design) => {
  const cssVariablesString = generateCssVariables(design);
  if (styleElement) {
    styleElement.innerHTML = cssVariablesString;
  }
};

// Watch for changes on the design
watch(() => designStore.design, (design) => {
  updateCssVariables(design);
}, { deep: true });

// On component mount, create the style element and initialize CSS variables
onMounted(() => {
  styleElement = document.createElement('style');
  styleElement.type = 'text/css';
  document.head.appendChild(styleElement);
  updateCssVariables(designStore.design);
});
</script>