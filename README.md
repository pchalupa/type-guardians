# Type Guardian

Type Guardian is a lightweight, zero-dependency TypeScript library that provides a collection of type guards and assertions to help you write safer and more readable code.

## Installation

Install the package using your favorite package manager:

```bash
npm install type-guardians
# or
yarn add type-guardians
# or
pnpm add type-guardians
```

## Usage

Type Guardian offers two types of functions for each data type: `is` functions for type guarding and `assert` functions for type assertions.

### `is` functions

`is` functions are type guards that return a boolean value indicating whether the input value is of the expected type. You can use them in `if` statements to narrow down the type of a variable.

```typescript
import { isString } from "type-guardians/string";

function greet(name: unknown) {
  if (isString(name)) {
    // name is now of type string
    console.log(`Hello, ${name}!`);
  } else {
    console.log("Hello, guest!");
  }
}
```

### `assert` functions

`assert` functions are assertions that throw a `TypeError` if the input value is not of the expected type. You can use them to ensure that a variable has a certain type before using it. You can also provide a custom error message as an optional second parameter.

```typescript
import { assertNumber } from "type-guardians/number";

function double(value: unknown) {
  assertNumber(value);
  // value is now of type number
  return value * 2;
}
```

## API

### String

- `isString(value: unknown): value is string`
- `assertString(value: unknown, message?: string): asserts value is string`

### Number

- `isNumber(value: unknown): value is number`
- `assertNumber(value: unknown, message?: string): asserts value is number`

### Error

- `isError(value: unknown): value is Error`
- `assertError(value: unknown, message?: string): asserts value is Error`
