<template>
  <!-- <NuxtImg v-if="file" provider="imagekit" :src="file.path" :alt="file.alt" :format="file.extension" :width="file.width" :height="file.height"/> -->
  <NuxtImg v-if="file" provider="imagekit" class="object-cover" :src="file.path" :alt="file.alt" :width="width" :height="height"/>
  <!-- <NuxtImg v-if="file" v-bind="file"/> -->
</template>

<script setup>
const props = defineProps({
  file: Object,
  width: Number,
  height: Number,
})

// let source = computed(() => `${props.file.src}/${props.width}/${props.height}`)
</script>
