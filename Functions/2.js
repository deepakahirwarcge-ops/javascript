// function calculateCartPrice(num1) {
//     return num1;
// }

// console.log(calculateCartPrice(5)); // Returns: 5
// console.log(calculateCartPrice(10)); // Returns: 10
// console.log(calculateCartPrice(15,200,400)); // Returns: 15


// // Rest Parameters
// function calculateTotalCartPrice(...num1) {
//     return num1;
// }

// console.log(calculateTotalCartPrice(5)); // Returns: [5]
// console.log(calculateTotalCartPrice(10, 20)); // Returns: [10, 20]
// console.log(calculateTotalCartPrice(15, 200, 400)); // Returns: [15, 200, 400]

// function calculateTotalCartPrice(val1,val2,...num1) {
//     return num1;
// }

// console.log(calculateTotalCartPrice(5)); // Returns: []
// console.log(calculateTotalCartPrice(10, 20)); // Returns: []
// console.log(calculateTotalCartPrice(15, 200, 400, 500, 600)); // Returns: [400, 500, 600]


// object

// const user = {
//     name: "Deepak",
//     age: 26,
//     address: "India",
// };

// function printUserDetails(anyobject) {
//     return `Name: ${anyobject.name}, Age: ${anyobject.age}, Address: ${anyobject.address}`;
// }

// console.log(printUserDetails(user)); // Name: Deepak, Age: 26, Address: India


// but if i changes the user object but funciton did not change then it will give undefined for new properties
// const user = {
//     name: "Deepak",
//     age: 26,
//     addresss: "India",
// };
// function printUserDetails(anyobject) {
//     return `Name: ${anyobject.name}, Age: ${anyobject.age}, Address: ${anyobject.address}`;
// }

// console.log(printUserDetails(user)); // Name: Deepak, Age: 26, Address: undefined


// console.log(printUserDetails({
//     name: "Ravi",
//     age: 30,
//     address: "USA",
// })); // Name: Ravi, Age: 30, Address: USA


// const myNewArray = [1, 2, 3, 4, 5];

// function printArrayElements(arr) {
//     return arr[2];
// }

// console.log(printArrayElements(myNewArray)); // 3

// console.log(printArrayElements([10, 20, 30, 40, 50])); // 30