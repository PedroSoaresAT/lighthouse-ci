export const convertToSnakeCase = (string: string): string => {
  return string
    .split(/(?=[A-Z])/)
    .join('_')
    .toLowerCase()
}
