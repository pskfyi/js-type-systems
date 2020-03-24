export const valid = [
  {
    it: 'can define a constant type',
    arg: {
      name: 'null',
      values: [null]
    }
  },
  {
    it: 'can define a type with a particular set of values',
    arg: {
      name: 'boolean',
      values: [true, false],
      new: () => false,
      to: val => Boolean(val)
    }
  }
]

export const invalid = [
  {
    it: 'must be an object',
    arg: 'foo'
  },
  {
    it: 'name property must be nonempty string',
    arg: {
      name: ''
    }
  }
]

export default {
  valid,
  invalid
}
