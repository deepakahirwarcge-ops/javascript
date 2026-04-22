// Immediately Invoked Function Expression (IIFE)

// without IIFE
// function chai() {
//     console.log("DB connected");
// }

// chai();

// with IIFE
// for removing global scope pollution we use IIFE

// (function chai() {
//     console.log("DB connected");
// })(); // dont need to explicitly call the function

// ((name) => {
//     console.log(`DB connected to ${name}`);
// })("MyDatabase");// here the function is invoked immediately after its definition

// // IIFE can also be written using function keyword
// (function (name) {
//     console.log(`DB connected to ${name}`);
// })("AnotherDatabase");

// // IIFE is mostly used in module pattern to create private and public scopes
// const module = (function () {
//     let privateVar = "I am private";

//     function privateMethod() {
//         console.log(privateVar);
//     }

//     return {
//         publicMethod: function () {
//             privateMethod();
//         }
//     };
// })();

// module.publicMethod(); // Outputs: I am private
// module.privateMethod(); // Error: privateMethod is not defined