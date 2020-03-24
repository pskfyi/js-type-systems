import { err, tryTo, coreTypeof, expectCoreType } from '@/core/helpers'

describe('err', () => {
  it('throws errors', () => {
    expect(err).toThrow()
  })
})

describe('tryTo', () => {
  it('swallows errors by default', () => {
    expect(() => tryTo(err)).not.toThrow()
  })

  describe('options', () => {
    describe('fallback value', () => {
      it('is the value returned if the main handler errors and onError does not return', () => {
        expect(tryTo(err)).toBeUndefined()
        expect(tryTo(err, { fallback: 1 })).toBe(1)
      })
    })
    describe('onError handler', () => {
      it('must be a function', () => {
        expect(() => tryTo(err, { onError: 1 })).toThrow()
        expect(() => tryTo(err, { onError: e => () => 1 })).not.toThrow()
      })
      it('should be a function that takes an error and returns a callable, which will be passed to new tryTo()', () => {
        expect(tryTo(err, { onError: () => 1 })).toBeUndefined()
        expect(tryTo(err, { onError: e => () => 1 })).toBe(1)
      })
    })
  })

  it('accepts an optional ', () => {
    expect(() => tryTo(err)).not.toThrow()
  })
})

describe('coreTypeof', () => {
  it('identifies typeof types', () => {
    expect(coreTypeof('foo')).toBe('string')
    expect(coreTypeof(42)).toBe('number')
    expect(coreTypeof(10n)).toBe('bigint')
    expect(coreTypeof(false)).toBe('boolean')
    expect(coreTypeof(Symbol())).toBe('symbol')
    expect(coreTypeof({})).toBe('object')
    expect(coreTypeof(undefined)).toBe('undefined')
  })
  it('additionally identifies null', () => {
    expect(coreTypeof(null)).toBe('null')
  })
  it('additionally identifies arrays', () => {
    expect(coreTypeof([])).toBe('array')
  })
})

describe('expectCoreType', () => {
  it('throws if the value does not have the desired core type', () => {
    expect(() => expectCoreType('foo', 'string')).not.toThrow()
    expect(() => expectCoreType('foo', 'array')).toThrow()
  })
  it('also throws if type passed is not a valid core type', () => {
    expect(() => expectCoreType(new Date(), 'date')).toThrow()
    expect(() => expectCoreType(new [], 'array')).toThrow()
  })
  it('returns the first argument if it doesn\'t throw', () => {
    expect(expectCoreType(777, 'number')).toBe(777)
  })
})

