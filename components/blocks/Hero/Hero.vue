<template>
  <BaseWrapper v-bind="styles">
    <!-- Content wrapper -->
    <div class="mx-auto max-w-7xl px-8">
      <BaseContent v-bind="content" class="mb-8 sm:mb-12 lg:mb-14"/>

      <div v-if="image" class="flow-root">
        <BaseImage v-bind="image" class="mx-auto w-full rounded-md shadow-2xl"/>
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