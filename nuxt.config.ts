export default defineNuxtConfig({
  modules: ['@nuxt/ui', '@openape/nuxt-auth-sp'],

  openapeSp: {
    spName: 'My App',
    fallbackIdpUrl: process.env.NUXT_OPENAPE_SP_FALLBACK_IDP_URL || 'https://id.openape.at',

    // Where a finished login lands. Stated explicitly although '/' is also the
    // module default: up to 0.13 the module sent everyone to a hardcoded
    // '/dashboard', which a bare SP does not have, so every sign-in ended on a
    // 404. Apps with a real landing page change this line.
    postLoginRedirect: '/',
  },

  compatibilityDate: '2025-01-01',
  devtools: { enabled: true },
})
