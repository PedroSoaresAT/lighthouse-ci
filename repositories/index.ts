import type { RuntimeConfig } from 'nuxt/schema'
import { GeneralRepository } from './GeneralRepository'

export default (config: RuntimeConfig) => ({
  generalRepository: GeneralRepository(config)
})
