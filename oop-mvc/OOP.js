/**
 * 
 * OOP = Object Oriented Programming
 * 
 * 
 * Class & Object
 * 
 * let vehicle = {
     name : "BMW",
     type : "Car",
     color : "Black",

     startEngine : function(){
         console.log("Engine started");
     },

     stopEngine : function(){
         console.log("Engine stopped");
     }
 }
 * 
 * class Vehicle{
     constructor(name, type, color){
         this.name = name;
         this.type = type;
         this.color = color;
     }

     startEngine(){
         console.log("Engine started");
     }

     stopEngine(){
         console.log("Engine stopped");
     }
 }
 * 
 *
 * 
 * let vehicle = new Vehicle("BMW", "Car", "Black");
 *
 * --> the use of new 'objects' is called instantiation, will need to use the keyword new to create an object from a class
 * 
 * 
 * 
 * 
 */


class Vehicle{
    constructor(name, type, color, price){
        this.name = name;
        this.type = type;
        this.color = color;
        this.price = price;
}
}

// instanciation

let civic = new Vehicle("Civic", "Car", "Black", 20000);

console.log(civic);

console.log();

let bmw = new Vehicle("BMW", "Car", "Black", 30000);

console.log(bmw);
