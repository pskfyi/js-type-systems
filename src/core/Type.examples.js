export const valid = [
  {
    it: 'can define a custom data type',
    arg: {
      name: 'numeric',
      is: val => ['bigint', 'number'].includes(typeof val),
      new: () => 0,
      to: val => {
        try {
          return Number(val)
        } catch {
          return BigInt(val)
        }
      },
      parents: ['number']
    }
  },
  {
    it: 'can succintly define a type with a constant value',
    arg: {
      name: 'null',
      values: [null]
    }
  },
  {
    it: 'can succintly define a type with a set of constant values',
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
    it: 'has a nonempty string name property',
    arg: {
      name: ''
    }
  }
]

export default {
  valid,
  invalid
}
