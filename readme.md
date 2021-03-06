# JS Type Systems

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![dependencies](https://david-dm.org/pskfyi/js-type-systems.svg)](https://github.com/pskfyi/js-type-systems/blob/develop/package.json)
[![npm version](https://badge.fury.io/js/js-type-systems.svg)](https://www.npmjs.com/package/js-type-systems)
[![codeclimate](https://api.codeclimate.com/v1/badges/6b03e1a0fd4af72b5c69/maintainability)](https://codeclimate.com/github/pskfyi/js-type-systems/maintainability)
[![codecov](https://codecov.io/gh/pskfyi/js-type-systems/branch/develop/graph/badge.svg)](https://codecov.io/gh/pskfyi/js-type-systems)

> **CAUTION** - This is still under development 

<img src="logo.svg" width="300">

[Documentation](https://js-type-systems.netlify.com/) 
(Or docs for [dev branch](https://develop--js-type-systems.netlify.com/), [@next branch](https://next--js-type-systems.netlify.com/)]

Utilities for working with JavaScript's type systems.

```sh
npm i js-type-systems
```

```js
import { JS } from 'js-type-systems';

// Superior typeof variant
JS.typeof(null) // "null"
JS.typeof(/[A-Z]+/g) // "regExp"

// Optional namespacing
JS.typeof(NaN) // "nan"
JS.typeof(NaN, { namespace: true }) // "js/nan"

// Use typesof (with an "s"!) to view all types
JS.typeof([])  // "array"
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

---

Logo: [Structure by priyanka from the Noun Project](https://thenounproject.com/term/structure/2170306/)
