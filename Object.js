/**
 * 
 * Similar to Array but need key to access.
 * 
 * Syntax Example:
 * 
 * var student = {
 *     name : "Vincent",
 *     GPA  : 3.21,
 *     isGraduated : true,
 * }
 * 
 *    //How to access
 * 
 * console.log(student.name);  output: Vincent
 * console.log(student.gpa);  output: 3.21
 * console.log(student["isGraduated"]);  outout: true
 * 
 * 
 */


/**
 * 
 * Simple Practice
 * 
 * change this array into function
 * 
 * var fruit = ["durian", 75000, true];
 * 
 * into
 * 
 * {
 * Type : durian
 * Price : 75000
 * Delicious : true
 * }
 * 
 * 
 */


let fruit = ["durian", 75000, true];

function ArraytoObject() {
    let object = {}
    object.type = fruit[0]
    object.price = fruit[1]
    object.delicous = fruit[2]

    return object

}

console.log(ArraytoObject);