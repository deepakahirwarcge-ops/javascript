// let a = 10
// const b = 20
// var c = 30

// console.log(a) // 10
// console.log(b) // 20
// console.log(c) // 30

var c = 500

if (true) {
    // local scope
    let a = 100
    const b = 200
    var c = 300
}

// console.log(a) // not defined
// console.log(b) // not defined
console.log(c) // 300
