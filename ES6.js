//Regular

let multiply = (a, b) => {
  return a * b;
};

console.log("Result:", multiply(5, 4)); // Result: 20


// Arrow function

let multiplyArrow = (a, b) => a * b;
console.log(multiplyArrow(6, 7)); // 42


//Arrow function can't be hoisted


// .forEach

let numbers = [1, 2, 3, 4, 5];

numbers.forEach((number) => console.log(number * 2)); // 2 4 6 8 10

/** side note
 * for each can show index too, but by default it's not shown
 */

// example .forEach with index

numbers.forEach((number, index) => console.log(number * 2, index)); // 2 0 4 1 6 2 8 3 10 4


// example of object inside of array

let products = [
  { id: 1, name: "product 1", price: 100 },
  { id: 2, name: "product 2", price: 200 },
  { id: 3, name: "product 3", price: 300 } ]
console.log(products[0].name); // product 1
console.log(products[1].price); // 200
console.log(products[2].id); // 3

products.forEach((product) => console.log(product.name)); // product 1 product 2 product 3
