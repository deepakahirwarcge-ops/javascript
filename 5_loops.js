// for loop

// for (let i =0; i<=10; i++){
//     if (i==5){
//         console.log("Five reached, exiting loop.");
//     }
//     console.log(i);
// }


// while loop

// let index = 0;
// while (index <= 10){
//     if (index == 5){
//         console.log("Five reached, exiting loop.");
//         break;
//     }
//     console.log(index);
//     index++;
// }


// do...while loop

// do{
//     console.log("This will run at least once.");
// } while(false);


// let score = 1;

// do {
//     console.log("Your score is: " + score);
//     score++;
// } while (score <= 5);


// let score = 6;

// do {
//     console.log("Your score is: " + score);
//     score++;
// } while (score <= 5);



// for of loop

// const arr = [10, 20, 30, 40, 50];
// for (const value of arr){
//     console.log("Value is: " + value);
// }

// maps

// const map = new Map();
// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);

// console.log(map);

// will print arrays of key-value pairs
// for (const key of map){
//     console.log(key);
// }

// will print only keys
// for (const key of map.keys()){
//     console.log(key);
// }

// will print only values
// for (const value of map.values()){
//     console.log(value);
// }

// will print key-value pairs

// for (const [key, value] of map){
//     console.log(`Key: ${key}, Value: ${value}`);
// }



// const myObject = {
//     name: 'Alice',
//     age: 30,
//     city: 'New York'
// };

// will give error as objects are not iterable
//
// for (const [key,value] of myObject){
//     console.log(`Key: ${key}, Value: ${value}`);
// }

// to iterate over object properties, use Object.entries()
// for (const [key, value] of Object.entries(myObject)){
//     console.log(`Key: ${key}, Value: ${value}`);
// }



// for in loop

// for (const key in myObject){
//     console.log(key); // prints keys
//     console.log(myObject[key]); // prints values

//     console.log(`Key: ${key}, Value: ${myObject[key]}`); // prints key-value pairs
// }




// const programmingLanguages = ['JavaScript', 'Python', 'Java', 'C++', 'Ruby'];

// for (const lang in programmingLanguages){
//     console.log(lang); // prints indices
//     console.log(programmingLanguages[lang]); // prints values
//     console.log(`Index: ${lang}, Language: ${programmingLanguages[lang]}`); // prints index-value pairs
// }




// const map = new Map();
// map.set('a', 1);
// map.set('b', 2);
// map.set('c', 3);

// will not print anything since Map is not enumerable with for...in
// for (const key in map){
//     console.log(key); // prints indices
//     console.log(map[key]); // prints undefined as map is not accessed this way
//     console.log(`Key: ${key}, Value: ${map[key]}`); // prints undefined values
// }




// for each loop

const numbers = [1, 2, 3, 4, 5];

// numbers.forEach(function (item) {
//     console.log(item);
// })

// numbers.forEach((item) => {
//     console.log(item);
// });


// function printItem(item){
//     console.log("item - ", item);
// }

// numbers.forEach(printItem);


// numbers.forEach((item, index) => {
//     console.log(`Index: ${index}, Item: ${item}`);
// });

// numbers.forEach((item, index,arr) => {
//     console.log(`Index: ${index}, Item: ${item} Array: ${arr}`);
// });


const mycoding = [
    {
        name: 'Deepak',
        age: 25
    },
    {
        name: 'John',
        age: 30
    }
]

mycoding.forEach((person) => {
    console.log(`Name: ${person.name}, Age: ${person.age}`);
});