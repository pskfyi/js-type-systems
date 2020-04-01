const nullType = new Type({
  name: 'null',
  values: [null]
})

nullType.literal // true
nullType.constant // true
