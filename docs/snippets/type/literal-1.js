const boolType = new Type({
  name: 'boolean',
  values: [true, false, null],
  new: () => false,
  to: val => Boolean(val)
})

boolType.literal // true