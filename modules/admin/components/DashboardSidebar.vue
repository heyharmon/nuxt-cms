<template>
  <div class="flex flex-col gap-y-5 min-h-screen h-screen border-r border-gray-200 bg-white px-6 pb-4">
    <div class="flex h-16 shrink-0 items-center">
      <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
    </div>
    <nav class="w-52 flex flex-1 flex-col">
      <ul role="list" class="flex flex-1 flex-col gap-y-9">
        <!-- Main menu -->
        <li>
          <ul role="list" class="-mx-2">
            <li v-for="item in navigation" :key="item.name">
              <NuxtLink :to="item.href" :class="[item.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-800 hover:text-indigo-600 hover:bg-gray-100', 'group flex gap-x-3 rounded-md p-2 text-sm transition-colors']">
                <Icon :name="item.icon" :class="[item.current ? 'text-indigo-600' : 'text-gray-500 group-hover:text-indigo-600', 'h-5 w-5 shrink-0']" aria-hidden="true" />
                {{ item.name }}
                <span v-if="item.count" class="ml-auto min-w-max whitespace-nowrap rounded-full bg-white px-1 text-center text-[13px] font-medium leading-5 text-gray-600 ring-1 ring-inset ring-gray-200" aria-hidden="true">{{ item.count }}</span>
              </NuxtLink>

              <ul v-if="item.children" class="mt-1">
                <li v-for="child in item.children" :key="child.name">
                  <NuxtLink :href="child.href" :class="[child.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-800 hover:text-indigo-600 hover:bg-gray-100', 'block rounded-md py-2 pl-12 text-sm']">{{ child.name }}</NuxtLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <!-- Your websites -->
        <li>
          <div class="text-[13px] font-medium leading-6 text-gray-500">Websites</div>
          <ul role="list" class="-mx-2 mt-1">
            <li v-for="website in websites" :key="website.name">
              <a :href="website.href" :class="[website.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-800 hover:bg-gray-100 hover:text-indigo-600', 'group flex gap-x-2 rounded-md p-2 text-sm leading-6 transition-colors']">
                <span :class="[website.current ? 'border-indigo-600 text-indigo-600' : 'border-gray-200 text-gray-500 group-hover:border-indigo-400 group-hover:text-indigo-600', 'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.7rem] font-medium']">{{ website.initial }}</span>
                <span class="truncate">{{ website.name }}</span>
              </a>
            </li>
          </ul>
        </li>

        <!-- <li>
          <div class="text-xs font-semibold leading-6 text-gray-400">Your teams</div>
          <ul role="list" class="-mx-2 mt-2 space-y-1">
            <li v-for="team in teams" :key="team.name">
              <a :href="team.href" :class="[team.current ? 'bg-gray-50 text-indigo-600' : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50', 'group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold']">
                <span :class="[team.current ? 'text-indigo-600 border-indigo-600' : 'text-gray-400 border-gray-200 group-hover:border-indigo-600 group-hover:text-indigo-600', 'flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border text-[0.625rem] font-medium bg-white']">{{ team.initial }}</span>
                <span class="truncate">{{ team.name }}</span>
              </a>
            </li>
          </ul>
        </li> -->
        <!-- <ul role="list" class="mt-auto -mx-2 space-y-1">
          <li>
            <NuxtLink to="#" class="group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold text-gray-700 hover:text-indigo-600 hover:bg-gray-50">
              <Icon name="heroicons:cog-6-tooth" class="h-6 w-6 shrink-0 text-gray-400 group-hover:text-indigo-600" aria-hidden="true" />
              Settings
            </NuxtLink>
          </li>
        </ul> -->
      </ul>
    </nav>
  </div>
</template>

<script setup>
const navigation = [
  { name: 'Pages', href: '/admin/dashboard', icon: 'heroicons:document-duplicate', current: false, count: 12 },
  { 
    name: 'Navigation', 
    href: '/admin/navigation', 
    icon: 'heroicons:bars-3-bottom-left', 
    current: false,
    // children: [
    //   { name: 'Navbar', href: '/admin/navigation/navbar', current: false },
    //   { name: 'Footer', href: '/admin/navigation/footer', current: false },
    // ] 
  },
  { name: 'Settings', href: 'admin/settings', icon: 'heroicons:cog-6-tooth', current: false },
]

const websites = [
  { id: 1, name: 'Starter 1', href: '#', initial: 'S', current: false },
  { id: 2, name: 'Starter 2', href: '#', initial: 'S', current: false },
  { id: 3, name: 'Starter 3', href: '#', initial: 'S', current: false },
]
</script>