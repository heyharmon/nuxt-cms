<template>
  <BaseWrapper v-bind="styles">
    <!-- Content wrapper -->
    <div class="mx-auto max-w-7xl px-8">

      <!-- Hero wrapper -->
      <div class="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2">

        <!-- Content -->
        <BaseContent v-bind="content"/>
        
        <BaseImage v-if="image" v-bind="image" class="w-full max-w-none rounded-xl object-cover shadow-xl ring-1 ring-gray-400/10 sm:mx-auto lg:mx-0"/>
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
