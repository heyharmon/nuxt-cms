<template>
    <div 
        v-if="pretitle || title || body || buttons.length"
        class="flex flex-row max-w-2xl lg:items-center"
        :class="`${alignmentClasses[alignment]}`" 
    >
        <div>
            <BaseText v-bind="pretitle" class="theme-pretitle mb-3"/>
            <BaseTitle v-bind="title" class="theme-title mb-4"/>
            <BaseText v-bind="body" class="theme-text"/>
            <BaseButtonRepeater v-if="buttons.length" :buttons="buttons" class="mt-8"/>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    alignment: {
        type: String,
        default: 'left' // Options: left, center
    },
    // orientation: {
    //     type: String,
    //     default: 'center' // Options: top, center, bottom
    // },
    pretitle: Object,
    title: Object,
    body: Object,
    buttons: Array,
})

const alignmentClasses = {
  left: 'justify-start',
  center: 'justify-center text-center m-auto',
}

// const orientationClasses = {
//   top: 'lg:items-start',
//   center: 'lg:items-center',
//   bottom: 'lg:items-end',
// }
</script>
