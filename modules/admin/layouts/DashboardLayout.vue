<template>
  <div class="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
    <!-- <header>
      <slot name="top" />
    </header> -->

    <div class="flex flex-row mx-auto">
      <nav>
        <slot name="left" />
      </nav>

      <main class="relative flex-1 overflow-y-auto no-scrollbar pl-12">
        <slot name="right" />
      </main>

      <!-- <aside class="w-[10rem] overflow-y-auto no-scrollbar">
        <slot name="right" />
      </aside> -->
    </div>
  </div>
</template>