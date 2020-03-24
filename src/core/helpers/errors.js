import { expectCoreType } from './typeChecks'

export const err = message => { throw new Error(message) }

export function tryTo(callable, { fallback, onError } = {}) {
  try {
    return callable()
  } catch(e) {
    if (onError) {
      expectCoreType(onError, 'function', 'Error handler passed to tryTo()')
      return tryTo(onError(e))
    } else {
      console.error(e)
    }
    if (fallback) return fallback
  }
}
