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

// let productsMapped = products3.map((product) => " Price of " + product.name + " Rp. " + product.price);
// console.log(productsMapped);

// const productstring = products3.map((product) => `Price of ${items.nama} Rp. ${product.price}`);
// console.log(productstring);

// .push = add element at the end

// products3.push({ name: "kaos", price: 100000 })
// console.log(products3);


// .pop = remove element at the end

products3.pop()
console.log(products3);

// .shift = remove element at the beginning
// .unshift = add element at the beginning

// .reduce = reduce the array into a single value
// .find = find the first element that match the condition
// .findIndex = find the index of the first element that match the condition
// .some = check if at least one element match the condition
// .every = check if all element match the condition

//CRUD = Create, Read, Update, Delete


let studentss = [
  { id: 1, name: "Joko", major: "IT", Graduated: true },
  { id: 2, name: "Yuni", major: "Accountant", Graduated: false },
];

function showStudents() {
  console.log(`Student List:`);
  for (let i = 0; i < studentss.length; i++) {
    console.log("U Graduates?")
    if (studentss[i].Graduated) {
      console.log(` ${studentss[i].name} (${studentss[i].major}) [Yea] `);
    } else {
      console.log(` ${studentss[i].name} (${studentss[i].major}) [Nah]`);
    }
  }
}

showStudents();

//Read

function addStudent(id, name, major, graduated) {
  let lastindex = studentss.length - 1;
  let lastId = studentss[lastindex].id + 1;
  let Graduated = false;

  studentss.push({
    id: lastId,
    name: name,
    major: major,
    Graduated: Graduated,
  });
}

function updateStudent(id, name, major, graduated) {
  let temp = [];
  for (let i = 0; i < studentss.length; i++) {
    if (studentss[i].id === id) {
      studentss[i].name = name;
      studentss[i].major = major;
      studentss[i].Graduated = graduated;
    }
    temp.push(studentss[i]);
  }
  students = temp;
}

function deleteStudent(id) {
  let temp = [];
  for (let i = 0; i < studentss.length; i++) {
    if (studentss[i].id !== id) {
      temp.push(studentss[i]);
    }
  }
  students = temp;
}



