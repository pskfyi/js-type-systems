import err from './err'

const expectNonEmptyArray = examples => Array.isArray(examples) && examples.length 
  ? examples
  : err('Examples requires keys "valid" and "invalid", each an "array" with length greater than zero.')

export default class ExampleArgs {
  constructor({ valid, invalid }) {
    this.valid = expectNonEmptyArray(valid)
    this.invalid = expectNonEmptyArray(invalid)
  }
  _first(type) {
    return this[type].length && this[type][0]
  }
  get firstValid() {
    return this._first('valid')
  }
  get firstInvalid() {
    return this._first('invalid')
  }
}
