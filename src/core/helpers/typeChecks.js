import { err } from './errors'

const CORE_TYPES = [
  "string",
  "number",
  "bigint",
  "boolean",
  "null",
  "undefined",
  "function",
  "symbol",
  "object",
  "array"
]

/**
 * A typeof-style helper which handles null and array. These types are the "core types" of the framework's internals.
 * 
 * @param {*} val
 * @returns {string} lowercase type name: 'null', 'array', or typeof values 
 */
export function coreTypeof(val) {
  if (val === null) return 'null'
  if (Array.isArray(val)) return 'array'
  return typeof val
}

/**
 * Throws an error with a readable message if val's coreType does not match the expected value.
 * If a subject it passed, the error message is prepended with it for greater context.
 * 
 * @param {*} val 
 * @param {function} expectedType 
 * @param {string} subject 
 */
export function expectCoreType(val, expectedType, subject) {
  const valType = coreTypeof(val)
  if (!CORE_TYPES.includes(expectedType)) err(`Second argument of expectCoreType() must be a valid core type.`)
  if (valType !== expectedType) {
    const message = `${subject && subject + ': '}expected type '${expectedType}', recieved '${valType}' instead: ${String(val)}`
    err(message)
  }
  return val
}
