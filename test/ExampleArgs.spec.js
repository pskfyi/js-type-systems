import ExampleArgs from './helpers/ExampleArgs'

describe('class ExampleArgs', () => {
  describe('class constructor', () => {
  
    it('expects an object with keys "valid" and "invald", each an array of arguments with at least one entry', () => {
      expect(() => new ExampleArgs()).toThrow()
      expect(() => new ExampleArgs({})).toThrow()
      expect(() => new ExampleArgs({ valid: [], invalid: [] })).toThrow()
      expect(() => new ExampleArgs({ valid: ['someArg'], invalid: ['someOtherArg'] })).not.toThrow()
    })
  })

  const examples = {
    valid: ['first', 'second'],
    invalid: ['firstBad', 'secondBad']
  }

  const instance = new ExampleArgs(examples)

  describe('instance', () => {
    
    it('retains the valid and invalid args arrays from the constructor input', () => {
      expect(instance.valid).toBe(examples.valid)
      expect(instance.invalid).toBe(examples.invalid)
    })
    
    describe('firstValid instance getter', () => {
      it('returns the first value of the valid array', () => {
        expect(instance.firstValid).toBe('first')
      })
    })
    
    describe('firstInvalid', () => {
      it('returns the ', () => {
        expect(instance.firstInvalid).toBe('firstBad')
      })
    })
  })
})
