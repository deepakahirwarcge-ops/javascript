
function sayName() {
  console.log("Deepak");
}

// sayName // refrence to function
// (); // invoking the function

// sayName();

            // Function with parameters
function add(a, b) {
  console.log(a + b);
}

// add(); // NaN
// add(10); // NaN
// add(10, 20); // 30  // function call with 2 arguments
// add(10, 20, 30, 40); // 30


// const result = add(100, 200);
// console.log("Result:", result); // undefined

// function addReturn(a, b) {
//   return a + b;
// //   console.log("This line will not be executed"); // unreachable code
// }

// const result = addReturn(100, 200);
// console.log("Result:", result); // 300


// function userLoaginMessage(username) {
//   return `User ${username} has logged in successfully.`;
// }

// console.log(userLoaginMessage("Deepak"));

// console.log(userLoaginMessage("")); // User  has logged in successfully.

// console.log(userLoaginMessage()); // User undefined has logged in successfully.

function userLoaginMessage(username = "sampleUser") {
    if (!username) {
        console.error("Please provide a valid username.");
        return;
    }
    return `User ${username} has logged in successfully.`;
}

// console.log(userLoaginMessage("Deepak"));

console.log(userLoaginMessage()); // Please provide a valid username.
console.log(userLoaginMessage("ravi"))