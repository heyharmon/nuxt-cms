<template>
    <BaseWrapper v-bind="styles">
      <!-- Wrapper -->
      <div class="mx-auto max-w-7xl px-8">
        <BaseContent v-bind="content" class="mb-8 sm:mb-12 lg:mb-14"/>
        
        <!-- Cards -->
        <div class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article v-for="item in repeater" class="flex flex-col items-start justify-between">
                <div class="relative w-full">
                    <BaseImage v-bind="card.content.image" class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"/>
                    <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div class="max-w-xl pt-10">
                  <BaseContent v-bind="card.content" class="!mb-0 text-white"/>
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
    repeater: Array,
  })
  </script>
  