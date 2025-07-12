/**
 * 
 * Practice 1
 * 
 * Shows the use of array as below
 * 
 * let coffees = ["Arabica", "Robusta", "Mix Blend"];
 * console.log (coffees[0]); // Output: Arabica
 * console.log (coffees[1]); // Output: Robusta
 * console.log (coffees[2]); // Output: Mix Blend
 * 
 * 
 * console.log("Coffee list:");
 * for (let i = 0; i < coffees.length; i++) {
 *    console.log(i + 1 + ". " + coffees[i]);
 * }
 * 
 * Result:
 * 1. Arabica
 * 2. Robusta
 * 3. Mix Blend
 * 
 *  Practice 2
 * 
 * let teas = ["Green Tea", "Black Tea", "Oolong Tea"];
 * console.log (teas.length); // Output: 3
 * 
 * console.log("Tea list:");
 * for (let i = 0; 1 < teas.length; i++) {
 *   console.log(i + 1 + ". " + teas[i]);
 * }
 * 
 * 
 * 
 * 
 */


let student = [
    [1, "Vincent", 3.5],
    [2, "Udin", 3.0],
    [3, "Mamang", 2.1]
]

/**
 * Make code to print:
 * 
 * 1. Vincent, GPA: 3.5, Passed
 * 2. Udin, GPA: 3.0, Passed
 * 3. Mamang, GPA: 2.1, Failed
 * 
 * GPA < 3.0 is Failed, otherwise Passed
 */

for (let i = 0; i < student.length; i++) {
    let id = student[i][0];
    let name = student[i][1];
    let gpa = student[i][2];
    let status = gpa < 3.0 ? "Failed" : "Passed";
    
    console.log(`${id}. ${name}, GPA: ${gpa}, ${status}`);
}

/** ]
 * 
 * Study case 1
 * 
 * Calculate all of the Values in the array and find the average
 * 
 * var scores = [5, 2, 3, 1, 7, 8, 10, 12, 17];
 * 
 * Result:
 * Total: 65
 * Average: 7.22
 */

console.log()

let scores = [5, 2, 3, 1, 7, 8, 10, 12, 17];
let total = 0;
for (let i = 0; i < scores.length; i++) {
    total += scores[i];
}
let average = total / scores.length;
console.log("Study Case 1: Calculate Total and Average");
console.log(`Total: ${total}`);
console.log(`Average: ${average.toFixed(2)}`);


console.log()

/**
 * 
 * Study case 2
 * Make a word to character array
 * 
 * example:
 * var word = "Hello";
 * 
 * result:
 * [H, e, l, l, o]
 * 
 * 
 */

let word = "Hello";
let charArray = [];
for (let i = 0; i < word.length; i++) {
    charArray.push(word[i]);
}
console.log("Study Case 2: Word to Character Array");
console.log(charArray);

let word2 = "HAIYAA";
let charArray2 = word2.split("");
console.log("Study Case 2: Word to Character Array using .split()");
console.log(charArray2);

/**
 * 
 * Study case 3
 * 
 * Example1:
 * let watches = ["Swiss Army", "Dublot", "Patek Philippe"]
 * 
 * Result:
 * I have Swiss Army, Dublot, Patek Philippe watches.
 * 
 * 
 * Example2:
 * let Alphabet = ["A", "B", "C", "D", "E"]
 * 
 * Result:
 * I have A, B, C, D, E alphabet.
 * 
 */

console.log()


let watches = ["Swiss Army", "Dublot", "Patek Philippe"];
let watchList = watches.join(", ");
console.log("Study Case 3: Watches List");
console.log(`I have ${watchList} watches.`);

let Alphabet = ["A", "B", "C", "D", "E"];
let alphabetList = Alphabet.join(", ");
console.log("Study Case 3: Alphabet List");
console.log(`I have ${alphabetList} alphabet.`);

console.log()

console.log("Study Case 3 using for loop:");

let watchlist1 =["Swiss Army", "Dublot", "Patek Philippe"];
let watchlist2 =["Rolex", "Tissot", "Casio"];

let result = "I have ";
for (let i = 0; i < watchlist1.length; i++) {
    result += watchlist1[i];
    if (i < watchlist1.length - 1) {
        result += ", ";
    }
}   console.log(result + " and " + watchlist2.join(", ") + " watches.");
console.log("I have " + watchlist1.join(", ") + " watches.");
console.log("I have " + watchlist2.join(", ") + " watches.");

console.log()

// Funtion

/**


