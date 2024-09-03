import { event, setOptions, bootstrap as bootstrapVueGtag } from 'vue-gtag'

export const useAnalytics = () => {
  const config = useRuntimeConfig()

  const prefix =
    config.public.appEnv !== 'production' ? `${config.public.appEnv}-` : ''

  function bootstrap(userableType: string, userId?: number) {
    const params: any = {
      send_page_view: true,
      application: 'PROJECT_NAME',
      userable_type: userableType.replace('App\\', ''),
      groups: 'fatalmodel'
    }

    if (userId) {
      params.user_id = userId
    }

    setOptions({
      config: {
        id: config.public.gaId,
        params
      },
      disableScriptLoad: true
    })

    bootstrapVueGtag()
  }

  function initializeEventCaller() {
    const gaElements = document.querySelectorAll('[data-ga]')

    gaElements.forEach((element: Element) => {
      if (element instanceof HTMLElement) {
        const eventName: string = element.dataset.ga ? element.dataset.ga : ''
        const eventParams = element.dataset.gaParams || {}

        element.addEventListener('click', () => {
          dispatchEvent(eventName, eventParams)
        })
      }
    })
  }

  function dispatchEvent(name: string, params: string | object) {
    const nameWithPrefix = `${prefix}${name}`
    const parsedParams =
      typeof params === 'string' ? JSON.parse(params) : params

    event(nameWithPrefix, { ...parsedParams, send_to: 'fatalmodel' })
  }

  return { bootstrap, initializeEventCaller, dispatchEvent }
}
