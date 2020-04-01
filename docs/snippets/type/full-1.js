const typeDef = {
  name: 'numeric',
  is: val => ['bigint', 'number'].includes(typeof val),
  new: () => 0,
  to: val => {
    try {
      return Number(val)
    } catch {
      return BigInt(val)
    }
  }
}

const numericType = new Type(typeDef)
