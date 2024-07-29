<template>
  <BaseWrapper v-bind="styles">
    <!-- Content wrapper -->
    <div class="mx-auto max-w-7xl px-8">
      <BaseContent v-bind="content" class="mb-8 sm:mb-12 lg:mb-14"/>

      <div v-if="content.image" class="flow-root">
        <BaseImage v-bind="content.image" class="mx-auto w-full rounded-md shadow-2xl"/>
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