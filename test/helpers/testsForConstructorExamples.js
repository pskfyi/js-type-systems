import err from './err'
import ExampleArgs from './ExampleArgs'

export default (constructor, examples) => {
  describe('examples', () => {
    it('is a valid input to ExampleArgs', () => {
      expect(() => new ExampleArgs(examples)).not.toThrow()
    })
    for (const validity of ['valid', 'invalid']) {
      describe(`${validity} examples`, () => examples[validity]
        .forEach(example => {
          const handler = example.hasOwnProperty('arg') ? () => new constructor(example.arg)
            : example.hasOwnProperty('args') ? () => new constructor(...example.args)
            : err('Examples should be objects with either an arg or args prop')

          const validityTest = (validity === 'valid') 
            ? () => expect(handler).not.toThrow() 
            : () => expect(handler).toThrow()

          it(example.it, validityTest)
        })
      )
    }
  })
}