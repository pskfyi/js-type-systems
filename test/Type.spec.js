import Type from '@/core/Type'
import examples from '@/core/Type.examples'
import { testsForConstructorExamples } from './helpers'

const validTypes = examples.valid.map(ex => new Type(ex.arg))
const nullType = validTypes[0]
const boolType = validTypes[1]
const arrType = new Type({
  name: 'array',
  parents: ['object'],
  is: val => Array.isArray(val),
  new: () => [],
  to: val => Array(val)
})

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
        expect(arrType.values).toStrictEqual([])
      })
  
      describe('derived property: literal', () => {
        it('is true when there are values', () => {
          expect(arrType.literal).toBe(false)
          expect(nullType.literal).toBe(true)
          expect(boolType.literal).toBe(true)
        })
      })
      
      describe('derived property: constant', () => {
        it('is true when there is exactly one value', () => {
          expect(arrType.constant).toBe(false)
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
        expect(arrType.primitive).toBe(false)
        expect(nullType.primitive).toBe(true)
      })
    })
  })
  
  
  describe('methods', () => {
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
      it('returns true when passed the result of new() or to() for all valid example args', () => {
        validTypes.forEach(type => {
          expect(type.is(type.new())).toBe(true)
          expect(type.is(type.to())).toBe(true)
        })
      })
    })
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
      it('is functional for all valid example args', () => {
        validTypes.forEach(type => {
          expect(() => type.to()).not.toThrow()
        })
      })
    })
  })
})
