export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  ssr: false,
  nitro: {
    preset: 'vercel'
  },
  routeRules: {
    '/**': { static: true }
  },
  app: {
    baseURL: '/', // keep root path
    buildAssetsDir: '/_nuxt/' // ensure assets load correctly
  }
})
