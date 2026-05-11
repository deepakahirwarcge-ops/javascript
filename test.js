// function outer() {
//   let count = 0

//   return function inner() {
//     count++
//     console.log(count)
//   }
// }

// const fn = outer()
// fn()
// fn()

// const users = [
//   { name: "Deepak", age: 22 },
//   { name: "Sam", age: 18 }
// ]

// const adults = users.filter(user => user.age >= 18)


// const users = [
//     { name: "Deepak", age: 22 },
//     { name: "Sam", age: 18 }
// ]

// const adults = users.filter(user => user.age >=20)

// console.log(adults)

// const array = [1, 4, 9, 16];

// const mapped_array = array.map(x => x*2)

// console.log(mapped_array);

// const array = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// // const initialValue = 0;
// // const sumWithInitial = array.reduce(
// //   (accumulator, currentValue) => accumulator + currentValue,
// //   initialValue,
// // );

// // console.log(sumWithInitial);
// initial_val = 0
// sum_array = array.reduce((initial_val,current_val) => initial_val+current_val,initial_val)

// console.log(sum_array);


// const array = [5, 12, 8, 130, 44];

// const find_ele = array.find(e => e>200)

// console.log(find_ele);


// const inventory = [
//   { name: "apples", quantity: 2 },
//   { name: "bananas", quantity: 0 },
//   { name: "cherries", quantity: 5 },
// ];


// apple_find = inventory.find((fruit) => fruit.name==="apples")

// console.log(apple_find);


// let a, b, rest;
// [a, b] = [10, 20];

// console.log(a);
// // Expected output: 10

// console.log(b);
// // Expected output: 20

// [a, b, ...rest] = [10, 20, 30, 40, 50];

// // console.log(rest);
// // // Expected output: Array [30, 40, 50]

// console.log(rest);

// a = 70
// b = 90

// console.log(a);
// console.log(b);

// [a,b] = [b,a]

// console.log(a);
// console.log(b);

// const arr = [1,2,3]

// const [a, b,c,d] = arr

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// const obj = { a: 1, b: { c: 2 } };
// const {
//   a,
//   b: { c: d },
// } = obj;
// // Two variables are bound: `a` and `d`

// console.log(a); // 1
// console.log(d); // 2

// const numbers = [];
// const obj = { a: 1, b: 2 };
// ({ a: numbers[0], b: numbers[1] } = obj);
// // The properties `a` and `b` are assigned to properties of `numbers`

// console.log(numbers[0]); // 1
// console.log(numbers[1]); // 2
// console.log(obj);

// const [a, ...b] = [1, 2, 3];

// // SyntaxError: rest element may not have a trailing comma
// // Always consider using rest operator as the last element

// console.log(a);
// console.log(b);


// const foo = ["one", "two"];

// const [red, yellow, green, blue] = foo;
// console.log(red); // "one"
// console.log(yellow); // "two"
// console.log(green); // undefined
// console.log(blue); // undefined

// function f() {
//   return [1, 2, 3];
// }

// const [a, , b] = f();
// console.log(a); // 1
// console.log(b); // 3

// const [c] = f();
// console.log(c); // 1

// [, ,] = f();

// const [a, b, ...{ length }] = [1, 2, 3,6,7,8,9,10];
// console.log(a, b, length); // 1 2 1

// function greet(name) {
//   console.log("Hello " + name);
// }

// function processUser(callback) {
//   const name = "Deepak";
//   callback(name);
// }

// processUser(greet);

function calculate(a, b, operation) {
  return operation(a, b);
}

function add(x, y) {
  return x + y;
}

function multiply(x, y) {
  return x * y;
}

console.log(calculate(2, 3, add));
console.log(calculate(2, 3, multiply));