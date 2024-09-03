import VueGtag from 'vue-gtag'

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig()

  nuxtApp.vueApp.use(VueGtag, {
    bootstrap: false,
    disableScriptLoad: true,
    enabled: config.public.gaEnable
  })
})
