// const tinderUser = new Object() // singleton object
// console.log(tinderUser)

// const regularUser = {} // non-singleton object
// console.log(regularUser)

// const tinderUser = {}

// tinderUser.id = "123abc"
// tinderUser.name = "Deepak"
// tinderUser.isLoggedIn = false

// // console.log(tinderUser)

// const regularUser = {
//     id: "987xyz",
//     name: "Rohan",
//     isLoggedIn: true,
//     fullname:{
//         userfullname: {
//             firstName: "Rohan",
//             lastName: "Sharma"
//         }
//     }
// }

// console.log(regularUser)
// console.log(regularUser.name)
// console.log(regularUser.fullname)
// console.log(regularUser.fullname.userfullname.firstName)


const obj1 = {1:"a", 2:"b", 3:"c"}
const obj2 = {4:"d", 5:"e", 6:"f"}

// const obj3 = {obj1, obj2} // nested object
// console.log(obj3)
// console.log(obj3.obj1[2])

// const obj4 = Object.assign({}, obj1, obj2) // merging object
// console.log(obj4)

// const obj3 = {...obj1, ...obj2} // merging using spread operator
// console.log(obj3)

const users = [
    {
        id: 1,
        email: "deepak@example.com"
    },
    {
        id: 2,
        email: "rohan@example.com"
    }
]
// console.log(users[0].email)


// console.log(Object.keys(obj1)) // keys of object
// console.log(Object.values(obj1)) // values of object
// console.log(Object.entries(obj1)) // entries of object (key,value) pairs

// console.log(obj1.hasOwnProperty(1)) // check if key is present in object or not
// console.log(obj1.hasOwnProperty(5)) // check if key is present in object or not

// console.log(obj1.propertyIsEnumerable(1)) // check if key is enumerable or not
// console.log(obj1.propertyIsEnumerable(5)) // check if key is enumerable or not