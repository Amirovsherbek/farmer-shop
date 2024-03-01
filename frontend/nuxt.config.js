export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'farmer',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },        
      {rel:'preconnect', type: '', href: 'https://fonts.googleapis.com'},
      {rel:'preconnect', type: '', href: 'https://fonts.gstatic.com'},
      {rel:'stylesheet', type: '', href: 'https://fonts.googleapis.com/css2?family=Arimo:ital,wght@0,400..700;1,400..700&display=swap'}
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    './assets/css/global.css',
    'element-ui/lib/theme-chalk/index.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/element-ui',
    '~/plugins/axios'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/tailwindcss'],
  modules: ['@nuxtjs/axios',],
  axios: {
    baseURL: 'http://husniddin-001-site1.jtempurl.com/api'
  },
  tailwindcss: {
    exposeConfig: true,
    viewer: true,
    // and more...
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: [/^element-ui/],
  }
}
