// Primitive

// 7 types of primitive data types in JavaScript:
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol
// 7. BigInt

// Example of each primitive data type:

// Number
const num = 42;
console.log(typeof num); // "number"

// String
const str = "Hello, World!";
console.log(typeof str); // "string"

// Boolean
const bool = true;
console.log(typeof bool); // "boolean"

// Undefined
let undef;
console.log(typeof undef); // "undefined"

// Null
const nul = null;
console.log(typeof nul); // "object" (this is a known quirk in JavaScript)

// Symbol
const sym = Symbol("unique");
console.log(typeof sym); // "symbol"

// BigInt
const bigIntNum = 9007199254740991n;
console.log(typeof bigIntNum); // "bigint"

// Non-Primitive

// 1. Object
const obj = { name: "Alice", age: 30 };
console.log(typeof obj); // "object"

// 2. Array
const arr = [1, 2, 3, 4, 5];
console.log(typeof arr); // "object"

// 3. Function
const func = function() {
    return "Hello!";
};
console.log(typeof func); // "function"

// Note: In JavaScript, arrays and functions are considered objects, but they have their own specific types when checked with typeof.
// Summary
// Primitive data types are immutable and represent single values, while non-primitive data types (objects, arrays, functions) can hold multiple values and are mutable.
