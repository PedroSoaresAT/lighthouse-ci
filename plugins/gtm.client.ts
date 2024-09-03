import { createGtm } from '@gtm-support/vue-gtm'

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()

  if (config.public?.gtmId) {
    nuxtApp.vueApp.use(
      createGtm({
        id: config.public.gtmId,
        enabled:
          config.public.gtmEnable && config.public.appEnv === 'production',
        loadScript: true
      })
    )
  }
})
