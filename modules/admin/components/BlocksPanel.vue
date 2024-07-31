<template>
  <div class="relative">
    <nav class="w-[18rem]">
      <!-- Left menu -->
      <ul class="space-y-1">
          <li v-for="category in ['Hero', 'Feature']" :key="category">
            <a :class="category == activeTab ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'" class="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold cursor-pointer">
              <Icon name="heroicons:home" :class="category == activeTab ? 'text-indigo-600' : 'text-gray-400 group-hover:text-indigo-600'" class="h-6 w-6 shrink-0"/>
              {{ category }}
            </a>
          </li>
        </ul>
    </nav>

    <!-- Right -->
    <!-- <div class="absolute left-[12.5rem] top-0 z-10 h-full w-[22rem] overflow-y-auto rounded-tr-lg rounded-br-lg border bg-white no-scrollbar p-4">
      <ul role="list" class="grid gap-y-4">
        <li v-for="(block, index) in store.blocks" :key="index" class="relative cursor-pointer overflow-hidden rounded-md border bg-white">
          <p class="block truncate text-xs text-gray-900 p-2">{{ block.name }}</p>
          <div class="group aspect-h-7 aspect-w-10 block w-full max-h-44 bg-gray-100">
            <img :src="'https://placehold.co/350x200'" :alt="`${block.name} thumbnail`" class="pointer-events-none shrink-0 min-w-full min-h-full group-hover:opacity-75" />
            <button type="button" class="absolute inset-0 focus:outline-none">
            </button>
          </div>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script setup>
import { useBlockStore } from '@/modules/admin/store/blockStore'

const activeTab = ref('')
const store = useBlockStore()
await useAsyncData('blocks', () => store.list())
</script>