import { FieldHook } from 'payload'

const format = (val: string): string =>
  val
    .replace(/ /g, '-')
    .replace(/[^\w-/]+/g, '')
    .toLowerCase()

export const formatSlug =
  (fallback: string): FieldHook =>
  ({ value, originalDoc, data }) => {
    if (typeof value === 'string') {
      return format(value)
    }
    const fallbackData = data?.[fallback] || originalDoc?.[fallback]

    if (fallbackData && typeof fallbackData === 'string') {
      return format(fallbackData)
    }

    return value
  }

export const appendHtml = (str: string) => {
  return str + '_html'
}

export const extractArticleId = (href: string): string | number => {
  const parts = href.split('-')
  const id = parts.pop()

  if (!id) {
    throw new Error('Invalid href format. Could not extract article ID.')
  }

  return id
}
