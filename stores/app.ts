import type { PanicControl } from '~/types/PanicControl'

export const useAppStore = defineStore('app', () => {
  const { generalRepository } = useRepository()

  const panicControl = ref<Array<string>>([])

  function getPanicServiceStatus(service: keyof PanicControl) {
    return panicControl.value.includes(convertToSnakeCase(service))
  }

  async function fetchPanicServiceStatus() {
    panicControl.value = await generalRepository.getActivePanicControls()
    return true
  }

  return { panicControl, getPanicServiceStatus, fetchPanicServiceStatus }
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAppStore, import.meta.hot))
}
