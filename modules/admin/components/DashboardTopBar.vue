<template>
  <div class="sticky top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 pr-4 sm:gap-x-6">
  <!-- Mobile hamburger -->
    <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden" @click="sidebarOpen = true">
      <span class="sr-only">Open sidebar</span>
      <Icon name="heroicons:bars-3" class="h-6 w-6" aria-hidden="true" />
    </button>

    <!-- Separator -->
    <div class="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />

    <!-- Header -->
    <div class="flex flex-1 justify-between gap-x-4">
      <!-- Search -->
      <div class="-ml-3 relative rounded-md w-2/3">
        <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
           <Icon name="heroicons:magnifying-glass" class="h-4 w-4 text-gray-500" aria-hidden="true" />
        </div>
        <input type="text" name="search" id="search" class="block w-full rounded-md border-0 py-1.5 pl-10 font-medium text-gray-900 placeholder:text-gray-500 hover:bg-gray-100 focus:bg-gray-100 transition-colors focus:ring-0 sm:text-sm sm:leading-6" placeholder="Search" />
      </div>

      <!-- <div class="relative flex bg-gray-50">
        <form class="relative flex flex-1" action="#" method="GET">
          <label for="search-field" class="sr-only">Search</label>
          <Icon name="heroicons:magnifying-glass" class="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-500" aria-hidden="true" />
          <input id="search-field" class="h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-500 focus:ring-0 sm:text-sm" placeholder="Search" type="search" name="search" />
        </form>
      </div> -->
      
      <div class="flex items-center gap-x-4 lg:gap-x-6">
        <!-- Notifications -->
        <!-- <button type="button" class="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500">
          <span class="sr-only">View notifications</span>
          <Icon name="heroicons:bell" class="h-6 w-6" aria-hidden="true" />
        </button> -->

        <!-- Separator -->
        <!-- <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true" /> -->

        <!-- Profile dropdown -->
        <!-- <Menu as="div" class="relative">
          <MenuButton class="-m-1.5 flex items-center p-1.5">
            <span class="sr-only">Open user menu</span>
            <img class="h-8 w-8 rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
            <span class="hidden lg:flex lg:items-center">
              <span class="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">Tom Cook</span>
              <Icon name="heroicons:chevron-down" class="ml-2 h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </MenuButton>
          <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
            <MenuItems class="absolute right-0 z-10 mt-2.5 w-32 origin-top-right rounded-md bg-white py-2 shadow-lg ring-1 ring-gray-900/5 focus:outline-none">
              <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                <a :href="item.href" :class="[active ? 'bg-gray-50' : '', 'block px-3 py-1 text-sm leading-6 text-gray-900']">{{ item.name }}</a>
              </MenuItem>
            </MenuItems>
          </transition>
        </Menu> -->
      </div>
    </div>
  </div>
</template>

<script setup>
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue'

const userNavigation = [
  { name: 'Your profile', href: '#' },
  { name: 'Sign out', href: '#' },
]
</script>