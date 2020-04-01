---
sidebarDepth: 3
---
# Type

<<< @/docs/snippets/type/import.js

The Type constructor creates a uniform type interface from a declarative type definition object. Every type has a string `name` and three important methods: `.is()`, `.new()`, and `.to()`

<<< @/docs/snippets/type/full-1.js

## Methods

### `is()`

The `is()` method takes a value and returns `true` if the value is a member of the data type. 

<<< @/docs/snippets/type/full-is.js

> **Convention**: this method should not throw an Error.

### `new()`

The `new()` method takes no arguments and returns a new instance of the data type. 

<<< @/docs/snippets/type/full-new.js

> **Conventions**:
> - this method should return a falsey value if able.
> - this method should return the same value every time.

### `to()`

The `to()` method takes a value and attempts to cast it to the data type.

<<< @/docs/snippets/type/full-to.js

## Literal and Constant Value Types

Sometimes a data type has a very limited set of possible values. For example in math and most programming languages, a boolean is either `true` or `false`. `js-type-systems` refers to these as *literal* types. (In Typescript this corresponds to both literals and unions of literals.)

For these data types, the `Type` constructor definition accepts an array of `values`:

<<< @/docs/snippets/type/literal-1.js

For these types, the `is()` method may be omitted from the definition. It will fall back to `Array.includes()`. Note that this won't be sufficient for checking object values!

<<< @/docs/snippets/type/literal-2.js

When only one value is provided, the type is further specified as *constant*. 

<<< @/docs/snippets/type/constant-1.js

For these types, the `new()` and `to()` methods will always return the given value. The methods cannot be overridden.

<<< @/docs/snippets/type/constant-2.js
