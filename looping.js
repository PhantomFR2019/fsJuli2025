//Looping for

for (let i = 0; i < 5; i++) {
    console.log('ini i = ' + i);
}

// Looping while
let j = 0;
while (j < 5) {
    console.log('ini j = ' + j);
    j++;
}

let k = 0;
let kstatus = true;

while (kstatus) {
    console.log('ini k = ' + k);
    k++;
    if (k === 5) {
        kstatus = false;
    }
}

// Nested Looping

let temp = "";
for (let l = 0; l < 5; l++) {
    for (let m = 0; m < 5; m++) {
        temp += l + m;
    }
    console.log(temp);
    temp = "";
}

for (let n = 0; n < 5; n++) {
    let temp2 = "";
    for (let z = 0; z <= n; z++) {
        temp2 += z;
    }
    console.log(temp2);
}

/** Study Case 1
 * 
 * print 10 even and odd numbers
 * 
 * var num= 10;
 * Result:
 * 1 is odd
 * 2 is even
 * 3 is odd
 * 4 is even
 * 5 is odd
 * 6 is even
 * 7 is odd
 * 8 is even
 * 9 is odd
 * 10 is even
 * 
 */

let num = 10;
for (let n = 1; n <= num; n++) {
    if (n % 2 === 0) {
        console.log(`${n} is even`);
    } else {
        console.log(`${n} is odd`);
    }
}

/** Study Case 2
 * 
 * Check the factors of a number
 * 
 * var num = 12;
 * Result:
 * 1 is a factor of 12
 * 2 is a factor of 12
 * 3 is a factor of 12
 * 4 is a factor of 12
 * 6 is a factor of 12
 * 12 is a factor of 12
 * 
 */

let factorNum = 15;
for (let i = 1; i <= factorNum; i++) {
    if (factorNum % i === 0) {
        console.log(`${i} is a factor of ${factorNum}`);
    }
}

/** Study Case 3a
 * 
 * Check whether a number is prime or not
 * 
 * 
 */

let primeNum = 29;
let isPrime = true;
for (let i = 2; i <= Math.sqrt(primeNum); i++) {
    if (primeNum % i === 0) {
        isPrime = false;
        break;
    }
}

/** Study Case 3b
 * 
 * Check whether a number is prime or not
 * The prime number must only have two factors: 1 and itself
 * 
 * var num = 29;
 * Result:
 * 29 is a prime number
 */


let num1 = 111;
let factor = 0

for (let i = 1; i <= num1; i++) {
    if (num1 % i === 0) {
        factor++;
    }
}

if (factor === 2) {
    console.log(`${num1} is a prime number`);
}
else {
    console.log(`${num1} is not a prime number`);
}

/** Study Case 4
 * 
 * Count the factorial of a number
 * 
 * var num = 5;
 * Result:
 * 5! = 120
 * */

let factorialNum = 10;
let factorialResult = 1;

for (let i = 1; i <= factorialNum; i++) {
    factorialResult *= i;
}
console.log(`${factorialNum}! = ${factorialResult}`);
