<template>
  <BaseWrapper v-bind="styles">
    <!-- Image wrapper -->
    <div class="relative h-80 overflow-hidden bg-gray-100 md:absolute md:right-0 md:h-full md:w-1/3 lg:w-1/2">
      <BaseImage v-if="image" v-bind="image" class="h-full w-full"/>
    </div>

    <!-- Content wrapper -->
    <div class="relative mx-auto max-w-7xl py-24 sm:py-40 lg:px-8 lg:py-52">
      <div class="pl-6 pr-6 md:mr-auto md:w-2/3 md:pl-16 lg:w-1/2 lg:pr-24 lg:pl-0">
        <BaseContent v-bind="content"/>
      </div>
    </div>
  </BaseWrapper>
</template>

<script setup>
const props = defineProps({
  styles: Object,
  content: Object,
  image: Object,
})
</script>