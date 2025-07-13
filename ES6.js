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

// filter

let productsFiltered = products.filter((product) => product.price > 200);
console.log(productsFiltered); // [ { id: 3, name: 'product 3', price: 300 } ]

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 3.7];

let evennumber = number.filter((number) => number % 2 === 0);
console.log(evennumber); // [ 2, 4, 6, 8, 10 ]

let numberlessthan3 = number.filter((number) => number < 3);
console.log(numberlessthan3); // [ 1, 2 ]
// % called modulus operator.

let decimalnumber = number.filter((number) => number % 1 !== 0);
console.log(decimalnumber); // [ 3.7 ]


const products2 = [
  { name: "kemeja", price: 250000 },
  { name: "celana", price: 50000 },
  { name: "sepatu", price: 80000 }
]

let productsFiltered2 = products2.filter((product) => product.price > 80000);
console.log(productsFiltered2);



// .map

const number3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubling = number3.map((number) => number * 2);
console.log(doubling);

const evennumber2 = number3.map((number) => number % 2 === 0);
console.log(evennumber2);
// [ false, true, false, true, false, true, false, true, false, true ] 
// --> shown with boolean cuz .map wont shrink the array number but always return the same length of array.

const products3 = [
  { name: "kemeja", price: 250000 },
  { name: "celana", price: 50000 },
  { name: "sepatu", price: 80000 }
]

// ["kemeja price 250000", "celana price 50000", "sepatu price 80000"];

let productsMapped = products3.map((product) => " Price of " + product.name + " Rp. " + product.price);
console.log(productsMapped);



