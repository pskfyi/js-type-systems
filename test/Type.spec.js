import Type from '@/core/Type'
import examples from '@/core/Type.examples'
import { testsForConstructorExamples } from './helpers'

const validTypes = examples.valid.map(ex => {
  const type = new Type(ex.arg)
  type.castables = ex.castables
  type.uncastables = ex.uncastables
  return type
})
const numericType = validTypes[0]
const nullType = validTypes[1]
const boolType = validTypes[2]

describe('class Type', () => {
  testsForConstructorExamples(Type, examples)
  
  describe('properties', () => {
    describe('name', () => {
      it('must be a non-empty string', () => {
        expect(() => new Type({ name: 0, values: [null] })).toThrow()
        expect(() => new Type({ name: '', values: [null] })).toThrow()
        expect(() => new Type({ name: 'null', values: [null] })).not.toThrow()
      })
    })
    
    describe('values', () => {
      it('defaults to an empty array', () => {
        expect(numericType.values).toStrictEqual([])
      })
  
      describe('derived property: literal', () => {
        it('is true when there are values', () => {
          expect(numericType.literal).toBe(false)
          expect(nullType.literal).toBe(true)
          expect(boolType.literal).toBe(true)
        })
      })
      
      describe('derived property: constant', () => {
        it('is true when there is exactly one value', () => {
          expect(numericType.constant).toBe(false)
          expect(nullType.constant).toBe(true)
          expect(boolType.constant).toBe(false)
        })
      })
    })
    
    describe('parents', () => {
      it('defaults to an empty array', () => {
        expect(boolType.parents).toStrictEqual([])
      })
  
      describe('derived property primitive', () => {
        expect(numericType.primitive).toBe(false)
        expect(nullType.primitive).toBe(true)
      })
    })
  })
  
  
  describe('methods', () => {
    describe('new()', () => {
      it('must be a function', () => {
        expect(() => new Type({
          name: 'undefined',
          is: val => val === undefined,
          to: _val => undefined
        })).toThrow()
      })
      it('automatically constructs a function for constants', () => {
        expect(nullType.new()).toBe(null)
      })
      it('is functional for all valid example args', () => {
        validTypes.forEach(type => {
          expect(() => type.new()).not.toThrow()
        })
      })
    })
    describe('to()', () => {
      it('must be a function', () => {
        expect(() => new Type({
          name: 'undefined',
          is: val => val === undefined,
          new: () => undefined
        })).toThrow()
      })
      it('automatically constructs a function for constants', () => {
        expect(nullType.to('foo')).toBe(null)
      })
      it('casts all provided castables', () => {
        validTypes.forEach(type => (type.castables || []).forEach(castable => {
          expect(() => type.to(castable)).not.toThrow()
        }))
      })
      it('casts undefined when no castables are provided', () => {
        validTypes.forEach(type => {
          if (!type.castables) expect(() => type.to()).not.toThrow()
        })
      })
      it('fails to cast all provided uncastables', () => {
        validTypes.forEach(type => (type.uncastables || []).forEach(uncastable => {
          expect(() => type.to(uncastable)).toThrow()
        }))
      })
    })
  })
  describe('is()', () => {
    it('must be a function', () => {
      expect(() => new Type({
        name: 'undefined',
        new: () => undefined,
        to: _val => undefined
      })).toThrow()
    })
    
    it('automatically constructs a function for literals', () => {
      expect(nullType.is(undefined)).toBe(false)
      expect(nullType.is(null)).toBe(true)
      expect(boolType.is(undefined)).toBe(false)
      expect(boolType.is(false)).toBe(true)
    })
    it('is functional for all valid example args', () => {
      validTypes.forEach(type => {
        expect(() => type.is()).not.toThrow()
      })
    })
    it('returns true when passed the result of new() for all valid example args', () => {
      validTypes.forEach(type => {
        expect(type.is(type.new())).toBe(true)
      })
    })
    it('returns true when passed the result of to() for all valid example args castables', () => {
      validTypes.forEach(type => (type.castables || []).forEach(castable => {
        expect(type.is(type.to(castable))).toBe(true)
      }))
    })
    it('returns true when passed the result of to(undefined) for all valid example args without castables', () => {
      validTypes.forEach(type => {
        if (!type.castables) expect(type.is(type.to())).toBe(true)
      })
    })
  })
})
