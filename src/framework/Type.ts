type TypeDef = {
  name: string;
}

class Type {
  constructor(def: TypeDef) {
    this.def = def
    this.name = def.name
  }
  def: TypeDef;
  name: string;
  new(def: TypeDef) {
    return new Type(def);
  };
}

export default Type
