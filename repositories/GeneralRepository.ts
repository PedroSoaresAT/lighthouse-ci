import type { RuntimeConfig } from 'nuxt/schema'

export const GeneralRepository = (config: RuntimeConfig) => ({
  getActivePanicControls(): Promise<Array<string>> {
    return $fetch(`${config.public.baseUrlFm}/api/panic-control/all`, {
      query: {
        token: config.public.panicControlToken
      }
    })
  }
})
