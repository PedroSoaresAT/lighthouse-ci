import createRepositories from '~/repositories'

export const useRepository = () => {
  const config = useRuntimeConfig()

  return createRepositories(config)
}
