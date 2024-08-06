<template>
  <div class="flex w-full overflow-hidden flex-shrink-0 items-center justify-center bg-gray-100">
    <div :data-theme="theme.name" class="theme-wrapper min-w-full min-h-full p-3">
      <BaseTitle text="Title" size="md" class="theme-title"/>
      <BaseText text="Text" size="xs" class="theme-text"/>
      <BaseButton text="Button" size="xs" class="mt-2 pointer-events-none"/>
    </div>
  </div>
</template>

<script setup>
import BaseTitle from '@/components/blocks/Base/BaseTitle.vue'
import BaseText from '@/components/blocks/Base/BaseText.vue'
import BaseButton from '@/components/blocks/Base/BaseButton.vue'

const props = defineProps({
  theme: Object,
})
</script>
