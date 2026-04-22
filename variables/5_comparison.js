// console.log(2>1); // true
// console.log(2<1); // false
// console.log(2>=2); // true
// console.log(2<=1); // false
// console.log(2==2); // true
// console.log(2!=1); // true

// console.log("2"==2); // true (loose equality, type coercion)
// console.log("2"===2); // false (strict equality, no type coercion)
// console.log("2"!=2); // false (loose inequality, type coercion)
// console.log("2"!==2); // true (strict inequality, no type coercion)

// console.log("2" > 1); // true (type coercion
// console.log("2" < 1); // false (type coercion
// console.log("2" >= 2); // true (type coercion
// console.log("2" <= 1); // false (type coercion

// console.log("02" > 1); // true (type coercion
// console.log("02" < 1); // false (type coercion
// console.log("02" >= 2); // false (type coercion
// console.log("02" <= 1); // true (type coercion

// console.log("Apple" > "Banana"); // false (lexicographical comparison)
// console.log("Apple" < "Banana"); // true (lexicographical comparison)
// console.log("Apple" >= "Apple"); // true (lexicographical comparison)
// console.log("Apple" <= "Banana"); // true (lexicographical comparison)
// console.log("Apple" == "apple"); // false (case-sensitive comparison)
// console.log("Apple" != "apple"); // true (case-sensitive comparison)

// console.log("2" > "12"); // true (lexicographical comparison)
// console.log("2" < "12"); // false (lexicographical comparison)

// console.log("A" > "a"); // false (ASCII value comparison)
// console.log("A" < "a"); // true (ASCII value comparison)

// // Comparing variables
// const a = 5;
// const b = 10;

// console.log(a < b);  // true
// console.log(a > b);  // false
// console.log(a <= 5); // true
// console.log(b >= 15); // false
// console.log(a == "5"); // true (loose equality)
// console.log(a === "5"); // false (strict equality)
// console.log(b != 10); // false (loose inequality)
// console.log(b !== "10"); // true (strict inequality)

// // Logical operators with comparisons
// const x = 7;
// const y = 12;

// console.log(null == undefined); // true (loose equality)
// console.log(null === undefined); // false (strict equality)
// console.log(NaN == NaN); // false
// console.log(NaN === NaN); // false
// console.log(isNaN(NaN)); // true
// console.log(isNaN("Hello")); // true
// console.log(isNaN(123)); // false

// console.log(null> 0); // false
// console.log(null>= 0); // true
// console.log(null< 0); // false
// console.log(null<= 0); // true
// console.log(null== 0); // false
// console.log(null!= 0); // true

// console.log(undefined> 0); // false
// console.log(undefined>= 0); // false
// console.log(undefined< 0); // false
// console.log(undefined<= 0); // false
// console.log(undefined== 0); // false
// console.log(undefined!= 0); // true


// console.log(undefined == null); // true
// console.log(undefined === null); // false
// console.log(undefined != null); // false
// console.log(undefined !== null); // true

// console.log(typeof undefined); // "undefined"
// console.log(typeof null); // "object"

// console.log(undefined + 5); // NaN
// console.log(null + 5); // 5

// console.log(undefined == false);
// console.log(null == false);

// console.log(undefined === false);
// console.log(null === false);

// console.log(undefined > 0);
// console.log(null > 0);

// console.log(undefined < 0);
// console.log(null < 0);

// console.log(undefined >= 0);
// console.log(null >= 0);

// console.log(undefined <= 0);
// console.log(null <= 0);

// console.log(undefined + 1);
// console.log(null + 1);
// console.log(undefined * 2);
// console.log(null * 2);


// console.log(undefined == NaN); // false
// console.log(undefined == 0); // false
// console.log(null == NaN); // false
// console.log(null == 0); // false
// console.log(undefined === NaN); // false
// console.log(undefined === 0); // false
// console.log(null === NaN); // false
// console.log(null === 0); // false