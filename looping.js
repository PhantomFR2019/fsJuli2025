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

let factorNum = 12;
for (let i = 1; i <= factorNum; i++) {
    if (factorNum % i === 0) {
        console.log(`${i} is a factor of ${factorNum}`);
    }
}

/** Study Case 3
 * 
 * 
 */