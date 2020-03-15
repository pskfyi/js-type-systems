# JS Type Systems

[![codeclimate](https://api.codeclimate.com/v1/badges/6b03e1a0fd4af72b5c69/maintainability)](https://codeclimate.com/github/pskfyi/js-type-systems/maintainability)
[![codecov](https://codecov.io/gh/pskfyi/js-type-systems/branch/develop/graph/badge.svg)](https://codecov.io/gh/pskfyi/js-type-systems)

<img src="/logo.svg" width="300">

\- [Documentation](https://js-type-system-dev-docs.netlify.com/)
\- [GitHub Repo](https://github.com/pskfyi/js-type-systems)
\-

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
