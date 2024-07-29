<template>
    <BaseWrapper v-bind="styles">
      <!-- Wrapper -->
      <div class="mx-auto max-w-7xl px-8">
        <BaseContent v-bind="content" class="mb-8 sm:mb-12 lg:mb-14"/>
        
        <!-- Cards -->
        <div class="mx-auto grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <article v-for="card in collection" class="relative isolate flex flex-col justify-end overflow-hidden rounded-2xl bg-gray-900 px-14 pb-20 pt-48 sm:pt-60">
            <BaseImage v-bind="card.content.image" class="absolute inset-0 -z-10 h-full w-full object-cover"/>
            <div class="absolute inset-0 -z-10 bg-gradient-to-t from-gray-900 via-gray-900/40"/>
            <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10"/>
            <BaseContent v-bind="card.content" class="!mb-0"/>
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
  