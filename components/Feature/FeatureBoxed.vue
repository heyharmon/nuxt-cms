<template>
  <BaseWrapper v-bind="wrapper" class="overflow-hidden">
    <!-- Wrapper -->
    <div class="mx-auto max-w-7xl px-6 lg:px-8">

      <!-- Container -->
      <div class="relative isolate overflow-hidden bg-white px-6 pt-16 shadow-2xl sm:rounded-3xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
        <BaseBackground v-bind="content.background"/>

        <!-- Content -->
        <div class="mx-auto max-w-md text-center lg:mx-0 lg:flex-auto lg:py-32 lg:text-left">
          <BaseText v-bind="content.pretitle" class="text-primary-600 font-semibold mb-3" />
          <BaseHeading v-bind="content.title" class="mb-6"/>
          <BaseText v-bind="content.body" class="leading-9 text-gray-600 mb-10"/>
          <BaseButtonGroup>
            <BaseButton v-for="button in content.buttons" v-bind="button"/>
          </BaseButtonGroup>
        </div>
        <div v-if="content.images" class="relative mt-16 h-80 lg:mt-8">
          <BaseImage v-bind="content.images[0]" class="absolute left-0 top-0 w-[57rem] max-w-none rounded-md bg-white/5 ring-1 ring-white/10"/>
        </div>
      </div>

    </div>
  </BaseWrapper>
</template>

<script setup>
const props = defineProps({
  wrapper: Object,
  content: Object,
})
</script>