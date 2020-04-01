import { err, expectCoreType } from './helpers'

const DEFAULT_TYPE_DEF = {
  parents: [],
  values: []
}

export default class Type {
  constructor(typeDef, systemDef) {
    this.def = typeDef
    this.systemDef = systemDef

    // Merge in defaults
    typeDef = Object.assign({}, DEFAULT_TYPE_DEF, typeDef)

    // Name
    if (!typeDef.name || typeof typeDef.name !== 'string') err('Type requires string name with length > 0')
    this.name = typeDef.name
    
    // Values and derived information
    this.values = typeDef.values
    this.literal = Boolean(typeDef.values.length)
    this.constant = typeDef.values.length === 1
    
    // Methods 
    if (this.constant) {
      this.value = this.values[0]
      if (!typeDef.is) typeDef.is = val => this.value === val
      typeDef.new = () => this.value
      typeDef.to = typeDef.new
    } else if (this.literal) {
      if (!typeDef.is) typeDef.is = val => typeDef.values.includes(val)
    }
    
    ['is', 'new', 'to'].forEach(method => {
      expectCoreType(typeDef[method], 'function', `Type method ${method}()`)
    })
    
    this.is = typeDef.is
    this.new = typeDef.new
    this.to = typeDef.to
    
    // Primitive
    this.parents = typeDef.parents
    this.primitive = !typeDef.parents.length
  }
}
