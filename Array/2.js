const arr1 = ["apple", "banana", "cherry"];

const arr2 = ["date", "elderberry", "fig"];

// arr1.push(arr2);

// console.log(arr1); // ["apple", "banana", "cherry", ["date", "elderberry", "fig"]]

// const allarr = arr1.concat(arr2);

// console.log(allarr); // ["apple", "banana", "cherry", "date", "elderberry", "fig"]

// arr1.push(...arr2); // spread operator

// console.log(arr1); // ["apple", "banana", "cherry", "date", "elderberry", "fig"]

// const newArr = [...arr1, ...arr2]; // spread operator

// console.log(newArr); // ["apple", "banana", "cherry", "date", "elderberry", "fig"]

const nestedArr = [[1, 2], [3, 4], [5, 6, [7, 8,[9,10]]]];
// const flatArr = nestedArr.flat(3);
// console.log(flatArr); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const flatArr2 = nestedArr.flat(Infinity);
// console.log(flatArr2); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// console.log(Array.isArray("Deepak")); // false

// console.log(Array.from("Deepak")); // ['D', 'e', 'e', 'p', 'a', 'k']

//  console.log(Array.from({name: "Deepak", age: 25})); // [] // if object has no length property

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // [100, 200, 300]

