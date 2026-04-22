// singleton not if create using literal
// Object.create ---> singletone

// object literal

const mySym = Symbol("key1")

const JsUser = {
    name: "Deepak",
    age: 24,
    location: "hyderabad",
    email: "deepak@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"],
    "full_name":"Deepak Ahirwar",
    // "full name":"dsahjhgjdsa", // wrong
    // mySym:"mykey1" // not used as Symbol
    [mySym]:"mykey1"
}

// console.log(JsUser.email) // can be accessed by . and using key also 
// console.log(JsUser["email"]) // can be accessed by . and using key also 

// console.log(JsUser["full_name"])
// console.log(JsUser.full_name) 

// console.log(JsUser[mySym])
// console.log(typeof JsUser[mySym])


// JsUser.email = 'xys@gmail.com' // update the value
// console.log(JsUser) // after freezing no changed will be made in the object
// Object.freeze(JsUser)
// JsUser.email = 'sdd@gmail.com'

// console.log(JsUser)


JsUser.greeting = function () {
    console.log("hello Js User")
    // return null;
}

// console.log(JsUser.greeting) // function anonymous
// console.log(JsUser.greeting()) // hello Js User

JsUser.greetingTwo = function () {
    console.log(`hello Js User, ${this.name}`) // string interpolation
}

console.log(JsUser.greeting())
console.log(JsUser.greetingTwo())

