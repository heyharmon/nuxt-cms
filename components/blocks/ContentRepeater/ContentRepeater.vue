<template>
  <BaseWrapper v-bind="styles">
    <!-- Content wrapper -->
    <div class="mx-auto max-w-7xl px-8">
      <BaseContent v-bind="content" class="mb-8 sm:mb-12 lg:mb-14"/>
      
      <!-- Features -->
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <dl class="grid max-w-xl grid-cols-1 gap-x-12 gap-y-16 lg:max-w-none lg:grid-cols-3">
          <div v-for="(item, index) in collection" class="flex flex-col">
            <dt class="text-base font-semibold leading-7 text-gray-900">
              <div class="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-100">
                <span class="text-primary-600">{{ index + 1 }}</span>
              </div>
              <BaseText v-bind="item.content.pretitle" class="text-primary-600 font-semibold mb-3"/>
              <BaseHeading v-bind="item.content.title" class="mb-4"/>
            </dt>
            <dd class="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
              <BaseText v-bind="item.content.body" class="text-gray-600"/>
              <BaseButtonRepeater v-if="item.content.buttons.length" :buttons="item.content.buttons" class="mt-8"/>
            </dd>
          </div>
        </dl>
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
