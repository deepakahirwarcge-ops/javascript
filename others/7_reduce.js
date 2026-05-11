const array = [1, 2, 3, 4, 5];

// const sum = array.reduce((accumulator, currentValue) => {
//   return accumulator + currentValue;
// }, 0);

// console.log('Sum of array elements:', sum); // Output: Sum of array elements: 15

// const product = array.reduce((accumulator, currentValue) => accumulator * currentValue, 1);

// console.log('Product of array elements:', product); // Output: Product of array elements: 120


const shoppingCart = [
  { item: 'Apple', price: 100, quantity: 4 },
  { item: 'Banana', price: 50, quantity: 6 },
  { item: 'Orange', price: 80, quantity: 3 },
];

// Calculate total cost of items in the shopping cart
const totalCost = shoppingCart.reduce((total, product) => {
  return total + product.price * product.quantity;
}, 0);

console.log('Total cost of shopping cart:', totalCost); // Output: Total cost of shopping cart: 10.4