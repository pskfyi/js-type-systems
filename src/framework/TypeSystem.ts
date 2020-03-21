type TypeSystemDef = {
  name: string;
}

export default class TypeSystem {
  constructor(def: TypeSystemDef) {
    this.def = def;
    this.name = def.name;
  };
  def: TypeSystemDef;
  name: string;
}