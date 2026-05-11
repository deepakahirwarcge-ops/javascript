// const descripter = Object.getOwnPropertyDescriptor(Math, 'PI');
// console.log(descripter);
// {value: 3.141592653589793, writable: false, enumerable: false, configurable: false}

// const chai = {
//     name: "chai",
//     price: 20,
//     isAvailable: true
// }

// console.log(Object.getOwnPropertyDescriptor(chai, 'name'));

// Object.defineProperty(chai, 'name', {
//     writable: false,
//     configurable: false
// })

// chai.name = "coffee";
// console.log(chai.name); // chai

// delete chai.name;
// console.log(chai.name); // chai

const chai = {
    name: "chai",
    price: 20,
    isAvailable: true,

    orderchai: function(){
        console.log(`you have ordered ${this.name} and price is ${this.price}`);
    }
}

// for (let [key, value] of Object.entries(chai)) {
//     if (typeof value !== 'function') {
//         console.log(`${key}: ${value}`);
//     }
// }

Object.defineProperty(chai, 'name', {
    // writable: false,
    // configurable: false,
    enumerable: false
})

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key}: ${value}`);
    }
}

//  name wont come in loop

