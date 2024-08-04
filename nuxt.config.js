// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  plugins: [
    {
      src: '@/plugins/designPlugin.js',
      mode: 'client' // Important for running in client side only
    }
  ],
  
  hooks: {
    'pages:extend': (pages) => {
      pages.push({
        name: 'pages',
        path: '/:path*',
        file: '@/pages/[path].vue',
      })
    },
  },

  modules: [
    'nuxt-icon',
    'nuxt-headlessui',
    '@nuxt/image-edge',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    ['@pinia/nuxt', {
      autoImports: ['defineStore', 'acceptHMRUpdate']
    }],
    "@nuxt/image"
  ],

  components: [
    '~/modules/admin/components',
    '~/modules/admin/layouts',
    '~/modules/admin/pages',
    // '~/cms/components',
    // '~/cms/editor/components',
    // '~/cms/editor/components/Fields',
    // '~/cms/dashboard/components',
    // '~/cms/designer/components',
    // '~/modules/client/components/Base',
    '~/components/blocks',
    '~/dictionaries',
    // '~/components/base',
  ],

  imports: {
    dirs: [
      // 'composables',
      // 'store',
      // 'cms/**/composables',
      // 'cms/**/store',
      // 'client/**/composables',
      // 'client/**/store',
    ],
  },

  headlessui: {
    prefix: 'Headless' // Change the default component prefix
  },

  image: {
    imagekit: {
      baseURL: 'https://ik.imagekit.io/heyharmon/cms-local'
    }
  },

  css: [
    '@/styles/client.css',
    '@/modules/admin/styles/admin.css',
  ],

  pinia: {
    storesDirs: ['./store'],
  },
  
  // build: {
  //   postcss: {
  //     postcssOptions: {
  //       plugins: {
  //         tailwindcss: {},
  //         autoprefixer: {},
  //       },
  //     },
  //   },
  // }
})