import { defineNuxtModule } from '@nuxt/kit'
import { resolve, join } from 'path'

export default defineNuxtModule({
  meta: {
    name: 'admin-module',
    configKey: 'admin-module',
  },

  setup(options, nuxt) {
    // Auto register components
    // nuxt.hook('components:dirs', (dirs) => {
    //   dirs.push({
    //     path: join(__dirname, 'components'),
    //   })
    // })

    // Auto register composables
    // nuxt.hook('imports:dirs', (dirs) => {
    //   dirs.push(resolve(__dirname, './composables'))
    // })

    // Auto register pages
    nuxt.hook('pages:extend', (pages) => {
      pages.push({
        name: 'dashboard',
        path: '/admin/dashboard',
        file: resolve(__dirname, './pages/dashboard.vue'),
      })

      pages.push({
        name: 'designer',
        // path: 'admin/designer/:path*',
        path: '/admin/designer',
        file: resolve(__dirname, './pages/designer.vue'),
      })

      pages.push({
        name: 'editor',
        // path: 'admin/editor/:path*',
        path: '/admin/editor',
        file: resolve(__dirname, './pages/editor.vue'),
      })

      // pages.push({
      //   name: 'pages',
      //   path: '/:path*',
      //   file: resolve(__dirname, './pages/[path].vue'),
      // })

      pages.push({
        name: 'styleguide',
        // path: 'admin/editor/:path*',
        path: '/admin/styleguide',
        file: resolve(__dirname, './pages/styleguide.vue'),
      })
    })
  },
})
