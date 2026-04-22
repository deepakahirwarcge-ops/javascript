// const user = {
//     username: 'alice',
//     price: 50,

//     welcomeMessage: function() {
//         console.log(`Welcome, ${this.username}!`);
//         console.log(this)
//     }
// }

// user.welcomeMessage(); // "Welcome, alice!"

// user.username= 'bob';
// user.welcomeMessage(); // "Welcome, bob!"

// console.log(this) // {} in Node.js or Window in browsers but in browser it will be Window object


// function chai() {
//     let username = 'charlie';
//     console.log(this);
//     console.log(this.username) // undefined because this refers to global object not in function scope
// }

// chai()

// const chai = function chai() {
//     let username = 'charlie';
//     console.log(this);
//     console.log(this.username) // undefined because this refers to global object not in function scope
// }

// chai()


// // arrow function
// const chai = () => {
//     let username = 'charlie';
//     console.log(this); // {} becyause arrow functions do not have their own this, it takes from surrounding scope
//     console.log(this.username) // undefined because this refers to global object not in function scope
// }

// chai()


// const addTwo = (num1,num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(3,4)); // 7


// implicit return
// const addTwo = (num1,num2) => num1 + num2;

// console.log(addTwo(3,4)); // 7

// const addTwo = (num1,num2) => (num1 + num2);

// console.log(addTwo(3,4)); // 7

// const addTwo = (num1,num2) => ({'username': 'alice'});

// console.log(addTwo(3,4)); // { username: 'alice' }

// const myArray = [1,2,3,4,5];

// myArray.forEach(() => )