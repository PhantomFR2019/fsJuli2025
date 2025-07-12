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

let scores = [5, 2, 3, 1, 7, 8, 10, 12, 17];
let total = 0;
for (let i = 0; i < scores.length; i++) {
    total += scores[i];
}
let average = total / scores.length;
console.log(`Total: ${total}`);
console.log(`Average: ${average.toFixed(2)}`);

