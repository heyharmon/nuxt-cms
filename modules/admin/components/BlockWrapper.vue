<template>
  <div class="relative" @click="store.showEditorPanel(block.id)">
    <!-- Outline -->
    <div v-if="block.id === store.activeBlockId" class="z-10 h-full w-full absolute rounded-lg border-2 border-indigo-500 pointer-events-none">

      <!-- Controls -->
      <div class="flex justify-between w-full p-3">
        <div>
          <button @click.stop="deleteBlock()" class="pointer-events-auto text-xs font-semibold inline-block py-2 px-3 rounded-md text-gray-900 bg-white shadow hover:bg-gray-50 active:translate-y-px">
            <Icon name="heroicons:trash" class="h-5 w-5" aria-hidden="true" />
          </button>
          
        </div>

        <div>
          <!-- <div class="isolate inline-flex rounded-md shadow-md mr-2">
            <button
              @click.stop="moveBlock('up')"
              :disabled="index < store.page.blocks.length - 1"
              class="pointer-events-auto relative text-xs font-semibold inline-block py-2 px-3 border-r rounded-l-md text-gray-900 bg-white hover:bg-gray-50 active:translate-y-px disabled:opacity-25 disabled:pointer-events-none"
            >
              <Icon name="heroicons:arrow-up" class="h-5 w-5" aria-hidden="true" />
            </button>

            <button
              @click.stop="moveBlock('down')"
              :disabled="index > 0"
              class="pointer-events-auto relative text-xs font-semibold inline-block py-2 px-3 rounded-r-md text-gray-900 bg-white hover:bg-gray-50 active:translate-y-px disabled:opacity-25 disabled:pointer-events-none"
            >
              <Icon name="heroicons:arrow-down" class="h-5 w-5" aria-hidden="true" />
            </button>
          </div> -->

          <button @click.stop="showThemes()" class="pointer-events-auto text-xs font-semibold inline-block py-2 px-3 rounded-md text-gray-900 bg-white shadow-md hover:bg-gray-50 active:translate-y-px">
            <Icon name="heroicons:swatch" class="h-5 w-5" aria-hidden="true" />
          </button>
          
          <button @click.stop="store.showDefault()" class="pointer-events-auto text-xs font-semibold inline-block py-2 px-3 rounded-md text-gray-900 bg-white shadow hover:bg-gray-50 active:translate-y-px ml-4">
            <Icon name="heroicons:x-mark" class="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
import { useEditorStore } from '@/modules/admin/store/editorStore'

const props = defineProps({
  index: Number,
  block: Object,
})

const store = useEditorStore()

function deleteBlock() {
  console.log('deleting...')
}

function moveBlock(direction) {
  console.log('moving...', direction)
}

function showThemes() {
  console.log('showing themes...')
}
</script>