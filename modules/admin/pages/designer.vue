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
      <aside class="w-80 flex-shrink-0 overflow-auto bg-light-95 py-3 dark:bg-dark-16">
        <div class="border-b border-light-91 px-3 pb-2">
          <a class="mx-1 mb-4 block h-5 w-5 rounded p-1 text-wedges-gray-400 hover:bg-light-91" href="https://app.lemonsqueezy.com/dashboard">
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg" class="h-3 w-3 fill-transparent stroke-current"><path d="M4.75 11.98h14.5M11.25 18.25 4.75 12l6.5-6.25" stroke="#25252D" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
          </a>
          
          <div class="rounded hover:bg-light-91">
            <div class="flex items-center px-2 py-1">
              <label class="form-label mb-0 flex-grow">Enable your store</label>
            </div>
            <p class="form-input-desc m-0 px-2 pb-1"> Display your store or hide it and redirect to your website instead.</p>
          </div>
        </div>
      </aside>
    </template>

    <template v-slot:middle>
      <!-- Browser bar -->
      <!-- <div class="sticky top-0 left-0 right-0 w-full flex items-center justify-between z-20 h-[50px] border-b bg-white bg-opacity-70 backdrop-blur-md backdrop-filter">
        <div class="w-16 mx-4">
          <svg width="52" height="12" viewBox="0 0 52 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6" cy="6" r="5.75" fill="#ED6A5E" stroke="#CF594E" stroke-width="0.5"></circle>
            <circle cx="26" cy="6" r="5.75" fill="#F4BD50" stroke="#D79F3E" stroke-width="0.5"></circle>
            <circle cx="46" cy="6" r="5.75" fill="#61C355" stroke="#52A63D" stroke-width="0.5"></circle>
          </svg>
        </div>
        <div class="w-full min-w-xl truncate rounded-2xl bg-black bg-opacity-5 text-gray-600 text-center text-xs leading-7">heyharmon.com</div>
        <div class="w-10 ml-4">
          <Icon name="heroicons:chevron-down" class="h-5 w-5" aria-hidden="true" />
        </div>
      </div> -->

      <!-- Blocks -->
      <BlockWrapper v-for="(block, index) in editorStore.blocks" :key="index" :index="index" :block="block">
        <Block v-bind="block"/>
      </BlockWrapper>
    </template>
  </EditorLayout>
</template>

<script setup>
import { useEditorStore } from '@/modules/admin/store/editorStore'
import Block from '@/components/blocks/Block.vue'
import BlockWrapper from '@/modules/admin/components/BlockWrapper.vue'
// import DesignerPreview from '@/modules/admin/components/DesignerPreview.vue'

definePageMeta({
  layout: 'admin'
})

const editorStore = useEditorStore()

const { data: page, pending: pagePending, error: pageError } = await useAsyncData('page', () =>
  editorStore.showPage('/')
);
</script>