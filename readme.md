# JS Type Systems

<img src="/logo.svg" width="300">

Utilities for working with JavaScript's type systems.

> Note this is not yet on `npm`

```sh
npm i js-type-systems
```

```js
import { JS } from 'js-type-systems';

// Superior typeof variant
JS.typeof(undefined) // "undefined"
JS.typeof(/[A-Z]+/g) // "regExp"

// Optional namespacing
JS.typeof(NaN) // "nan"
JS.typeof(NaN, { namespace: true }) // "js/nan"

// Optionally view additional types using `typesof()` with an "s"
JS.typeof([]) // "array"
JS.typesof([]) // ["object", "array"]
JS.typesof([], { namespace: true }) // ["js/object", "js/array"]

// Per-type utilities
JS.isRegExp(10) // false
JS.createDate() // new Date()

// Get more type information
JS.types // { string: <stringDef>, regExp: <regExpDef>, ... MANY types]
JS.types.bigInt // full type definition
JS.types.bigInt.namePlural // "bigInts"
```
