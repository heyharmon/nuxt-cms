<template>
    <div 
        class="flex flex-row max-w-2xl"
        :class="`${alignmentClasses[alignment]}`" 
    >
        <div>
            <BaseText v-bind="pretitle" class="text-primary-600 font-semibold mb-3" />
            <BaseHeading v-bind="title" />
            <BaseText v-bind="body" class="mt-4 text-gray-600"/>
            <BaseButtonRepeater v-if="buttons" :buttons="buttons" class="mt-8"/>
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
