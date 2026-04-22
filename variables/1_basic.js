const accountId = "123456789012";
let accountEmail = "user@example.com";
var accountCity = "Hyderabad";
accountPassword = "test@1234";

let accountPhone;
// accountId = "987654321098"; // This will cause an error because accountId is a const // Not allowed

accountEmail = "dahj@gamil.com"; // Allowed, as accountEmail is declared with let
accountCity = "Bangalore"; // Allowed, as accountCity is declared with var
accountPassword = "newpassword@123"; // Allowed, as accountPassword is implicitly global

// console.log("Account ID:", accountId);
// console.log("Account Email:", accountEmail);
// console.log("Account City:", accountCity);
// console.log("Account Password:", accountPassword);
// console.log("Account Phone:", accountPhone); // Will print undefined


console.table([accountId,accountCity,accountEmail,accountPhone,accountPassword])


// Perfer not to use var and implicit global variables to avoid scope-related issues.
// because of issue in block scope and functional scope