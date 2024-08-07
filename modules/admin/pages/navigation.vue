<template>
  <DashboardLayout>
    <template #left>
      <DashboardSidebar/>
    </template>

    <!-- <template #top> -->
      
    <!-- </template> -->

    <template #right>
      <DashboardTopBar/>

      <!-- Tabs -->
      <div class="mb-4">
        <div class="border-b border-gray-200">
          <nav class="-mb-px flex space-x-7" aria-label="Tabs">
            <a 
              v-for="tab in tabs" 
              :key="tab.name" 
              :href="tab.href" 
              :class="tab.current ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'" 
              class="whitespace-nowrap border-b-2 py-2 text-xs font-medium"
            >
              {{ tab.name }}
            </a>
          </nav>
        </div>
      </div>

      <!-- Links table -->
      <div class="overflow-x-auto">
        <div class="inline-block min-w-full align-middle">
          <table class="min-w-full divide-y divide-gray-300">
            <!-- <thead>
              <tr>
                <th scope="col" class="py-3.5 pl-4 pr-3 text-left text-xs font-normal text-gray-900 sm:pl-0">Title</th>
                <th scope="col" class="px-3 py-3.5 text-left text-xs font-normal text-gray-900">Path</th>
                <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-0">
                  <span class="sr-only">Edit</span>
                </th>
              </tr>
            </thead> -->
            <tbody class="divide-y divide-gray-200 bg-white">
              <tr v-for="page in pages" :key="page.path" class="cursor-pointer hover:bg-gray-50">
                <td class="whitespace-nowrap pl-3 pr-3 py-5 text-sm font-medium text-gray-900">{{ page.title }}</td>
                <td class="whitespace-nowrap px-3 py-5 text-xs text-gray-500">{{ page.path }}</td>
                <td class="whitespace-nowrap pl-3 pr-3 py-5 float-right">
                  <div class="flex items-center gap-x-1.5">
                    <div class="flex-none rounded-full bg-emerald-500/20 p-[3px]">
                      <div class="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    </div>
                    <!-- <p class="text-xs leading-5 text-gray-500">Published</p> -->
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </template>
  </DashboardLayout>
</template>

<script setup>
import DashboardLayout from '@/modules/admin/layouts/DashboardLayout.vue'
import DashboardSidebar from '@/modules/admin/components/DashboardSidebar.vue'
import DashboardTopBar from '@/modules/admin/components/DashboardTopBar.vue'

definePageMeta({
  layout: 'admin'
})

const tabs = [
{ name: 'Navbar', href: '#', current: true },
{ name: 'Footer', href: '#', current: false },
  // { name: 'Primary area', href: '#', current: true },
  // { name: 'Secondary area', href: '#', current: false },
]

const pages = [
  { title: 'Homepage', path: '/admin/dashboard' },
  { title: 'About', path: '/admin/about' },
  { title: 'Contact', path: '/admin/contact' },
  { title: 'Services', path: '/admin/services' },
  { title: 'Blog', path: '/admin/blog' },
  { title: 'Testimonials', path: '/admin/testimonials' },
  { title: 'FAQ', path: '/admin/faq' },
  { title: 'Pricing', path: '/admin/pricing' },
  { title: 'Team', path: '/admin/team' },
  { title: 'Careers', path: '/admin/careers' },
  { title: 'Terms', path: '/admin/terms' },
  { title: 'Privacy', path: '/admin/privacy' },
]
</script>