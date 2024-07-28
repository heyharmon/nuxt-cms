<template>
    <BaseWrapper v-bind="wrapper">
      <!-- Wrapper -->
      <div class="mx-auto max-w-7xl px-8">
  
        <BaseContent v-bind="content"/>
        
        <!-- Cards -->
        <div class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <article v-for="item in collection" class="flex flex-col items-start justify-between">
                <div class="relative w-full">
                    <BaseImage v-bind="item.content.image" class="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"/>
                    <div class="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div class="max-w-xl pt-10">
                    <div class="flex items-center gap-x-4 text-xs">
                        <BaseText v-bind="item.content.pretitle" class="text-gray-500" size="sm"/>
                    </div>
                    <div class="relative">
                        <BaseHeading v-bind="item.content.title" class="mt-3"/>
                        <BaseText v-bind="item.content.body" class="mt-5 line-clamp-3 text-gray-600" />
                        <BaseButtonRepeater v-if="item.content.buttons.length" :buttons="item.content.buttons" class="mt-8"/>
                    </div>
                </div>
            </article>
        </div>
  
      </div>
    </BaseWrapper>
  </template>
  
  <script setup>
  const props = defineProps({
    wrapper: Object,
    content: Object,
    collection: Array,
  })
  </script>
  