<template>
    <BaseWrapper v-bind="styles">
      <!-- Wrapper -->
      <div class="mx-auto max-w-7xl px-8">
        <BaseContent v-bind="content" class="mb-8 sm:mb-12 lg:mb-14"/>
        
        <!-- Cards -->
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article v-for="(item, index) in collection" class="flex flex-col items-start justify-between">
                <!-- <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
                  <span class="text-primary-600">{{ index + 1 }}</span>
                </div> -->
                <div class="relative w-full">
                    <BaseImage v-bind="item.content.image" class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"/>
                    <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div class="max-w-xl pt-10">
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
  