<template>
    <BaseWrapper v-bind="styles">
      <!-- Wrapper -->
      <div class="mx-auto max-w-7xl px-8">
        <BaseContent v-bind="content" class="mb-8 sm:mb-12 lg:mb-14"/>
        
        <!-- Cards -->
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article v-for="(item, index) in collection" class="flex flex-col items-start justify-between">
              <!-- Counts -->
              <!-- <div class="mt-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
                <span class="text-primary-600">{{ index + 1 }}</span>
              </div> -->
              <div class="max-w-xl mt-6">
                <BaseContent v-bind="item.content" class="!mb-0 text-white"/>
              </div>
            </article>
        </div>
  
      </div>
    </BaseWrapper>
  </template>
  
  <script setup>
  const props = defineProps({
    styles: Object,
    content: Object,
    collection: Array,
  })
  </script>
  