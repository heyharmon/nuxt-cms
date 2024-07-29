<template>
  <BaseWrapper v-bind="styles">
    <!-- Image wrapper -->
    <div class="relative h-80 overflow-hidden bg-indigo-600 md:absolute md:right-0 md:h-full md:w-1/3 lg:w-1/2">
      <BaseImage v-if="content.image" v-bind="content.image" class="h-full w-full"/>
    </div>

    <!-- Content wrapper -->
    <div class="relative mx-auto max-w-7xl py-24 sm:py-32 lg:px-8 lg:py-40">
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
  // content: {
  //   type: Object,
  //   default: () => ({
  //     pretitle: Object, 
  //     title: Object,
  //     body: Object,
  //     buttons: Array,
  //     image: Object,
  //   }),
  // },
})
</script>