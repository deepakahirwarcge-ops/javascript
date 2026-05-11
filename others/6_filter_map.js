// const conding = ["js", "java", "python", "c++", "ruby"];

// const values = conding.forEach((item) => {
//     console.log(item);
// });

// console.log(values); // undefined

// const values = conding.forEach((item) => {
//     console.log(item);
//     return item;
// });

// console.log(values); // undefined




const myArray = [1, 2, 3, 4, 5,6,7,8,9,10];

// const newmyArray = myArray.filter((num) => num>5)

// console.log(newmyArray); // [ 6, 7, 8, 9, 10 ]

// const newmyArray = myArray.filter((num) => {
//     num > 5;
// });

// console.log(newmyArray); // []


// const newmyArray = [];

// myArray.forEach((num) => {
//     if (num > 5) {
//         newmyArray.push(num);
//     }
// });

// console.log(newmyArray); // [ 6, 7, 8, 9, 10 ]

// Map
const MyNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newMyNums = MyNums.map((num) => num * 2);

// console.log(newMyNums); // [ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]


// chainning map and filter

// const chainedResult = MyNums
//     .map((num) => num * 3)
//     .filter((num) => num > 15);

// console.log(chainedResult); // [ 18, 21, 24, 27, 30 ]

const chainedResult = MyNums.map((num) => (num * 3)).map((num) => num + 2).filter((num) => num > 15);

console.log(chainedResult); // [ 18, 21, 24, 27, 30 ]