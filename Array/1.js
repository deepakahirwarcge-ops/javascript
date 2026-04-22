// array

const arr = [1, 2, 3, 4, 5];

// console.log(arr.length); // 5
// console.log(arr[0]);    // 1
// console.log(arr[4]);    // 5

// const myArr = new Array(1,2,3,4,5);
// console.log(myArr);     // [1, 2, 3, 4, 5]

// const arr2 = ["a", "b", "c",1,2,3,true,false,null,undefined];
// console.log(arr2);    // ["a", "b", "c",1,2,3,true,false,null,undefined]

// arr.push(6);
// console.log(arr);       // [1, 2, 3, 4, 5, 6]

// arr.pop();
// console.log(arr);       // [1, 2, 3, 4, 5]

// arr.shift();
// console.log(arr);       // [2, 3, 4, 5]

// arr.unshift(1);
// console.log(arr);       // [1, 2, 3, 4, 5]

// console.log(Array.isArray(arr)); // true
// console.log(arr instanceof Array); // true
// console.log(typeof arr); // object
// console.log(arr.toString()); // "1,2,3,4,5"
// console.log(arr.valueOf()); // [1, 2, 3, 4, 5]
// console.log(arr.concat([6,7,8])); // [1, 2, 3, 4, 5, 6, 7, 8]
// console.log(arr.fill(0, 1, 4)); // [1, 0, 0, 0, 5]
// console.log(arr.copyWithin(0, 3, 5)); // [4, 5, 3, 4, 5]
// console.log(arr.flat()); // [1, 2, 3, 4, 5]
// console.log(arr.flatMap(x => [x, x * 2])); // [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
// console.log(arr.entries().next().value); // [0, 1]
// console.log(arr.keys().next().value); // 0
// console.log(arr.values().next().value); // 1

// console.log(arr.includes(3)); // true
// console.log(arr.findIndex(x => x > 3)); // 3
// console.log(arr.every(x => x < 6)); // true
// console.log(arr.some(x => x === 3)); // true
// console.log(arr.indexOf(4)); // 3
// console.log(arr.lastIndexOf(4)); // 3


// const newArr = arr.join();
// console.log(newArr);     // "1,2,3,4,5"
// console.log(arr)
// console.log(typeof newArr); // string
// console.log(Array.isArray(newArr)); // false


// const sliced = arr.slice(1, 4);
// console.log(sliced);    // [2, 3, 4]

// const spliced = arr.splice(1, 2);
// console.log(spliced);   // [2, 3]
// console.log(arr);       // [1, 4, 5]

// const mapped = arr.map(x => x * 2);
// console.log(mapped);    // [2, 8, 10]

// const filtered = arr.filter(x => x > 2);
// console.log(filtered);  // [4, 5]

// const reduced = arr.reduce((acc, x) => acc + x, 0);
// console.log(reduced);   // 10

// const found = arr.find(x => x > 3);
// console.log(found);     // 4

// const index = arr.indexOf(4);
// console.log(index);     // 1

// const includes = arr.includes(5);
// console.log(includes);  // true

// const joined = arr.join('-');
// console.log(joined);    // "1-4-5"

// const reversed = arr.reverse();
// console.log(reversed);  // [5, 4, 1]

// const sorted = arr.sort((a, b) => a - b);
// console.log(sorted);    // [1, 4, 5]
