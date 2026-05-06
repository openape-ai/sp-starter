export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@openape/nuxt-auth-sp'],

  openapeSp: {
    spName: 'My App',
    fallbackIdpUrl: process.env.NUXT_OPENAPE_SP_FALLBACK_IDP_URL || 'https://id.openape.at',
  },

  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },
})
