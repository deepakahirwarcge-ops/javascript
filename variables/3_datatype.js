

// number => 2 to power 53
// bigint => larger than 2 to power 53
// string => '' or "" or ``
// boolean => true or false
// null => standalone value
// undefined => standalone value
// object => collection of properties
// symbol => unique identifiers


console.log(typeof "deepak"); // stringnot

console.log(typeof 123); // number

console.log(typeof 123n); // bigint

console.log(typeof true); // boolean

console.log(typeof null); // object (this is a known quirk in JavaScript)

console.log(typeof undefined); // undefined

console.log(typeof { name: "deepak", age: 26 }); // object

console.log(typeof Symbol("id")); // symbol