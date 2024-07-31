<template>
  <div>
    <!-- <template #left> -->
      <DashboardSidebar/>
    <!-- </template> -->

    <!-- <template #top> -->
      <DashboardTopBar/>
    <!-- </template> -->

    <!-- <template #right> -->
      <div class="px-4 sm:px-6 lg:px-8">
        The right side...
      </div>
    <!-- </template> -->
  </div>
</template>

<script setup>
import DashboardSidebar from '@/modules/admin/components/DashboardSidebar.vue'
import DashboardTopBar from '@/modules/admin/components/DashboardTopBar.vue'

definePageMeta({
  layout: 'admin'
})
</script>