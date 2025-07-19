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
 * Single use, simple, structure --> Object
 * Reusable, scalable, structure --> Class
 * 
 * 
 * 
 * 
 * OOP 4 main pillars
 * --> encapsulation
 * --> inheritance
 * --> polymorphism
 * --> abstraction
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

console.log();

let suv = new Vehicle("SUV", "Car", "Black", 40000);

console.log(suv);
console.log();

//

// Inheritance

class person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

class Employee extends person{
    constructor(name, age, jobTitle, salary){
        super(name, age);
        this.jobTitle = jobTitle;
        this.salary = salary;
    }
}

// Polymorphism

class Animal{
    constructor(name, type){
        this.name = name;
        this.type = type;
    }
    makeSound(){
        console.log("Animal makes sound");
    }
}

class Dog extends Animal{
    constructor(name, type, breed){
        super(name, type);
        this.breed = breed;
    }
    makeSound(){
        console.log("woof woof");
    }
}

class Cat extends Animal{
    constructor(name, type, color){
        super(name, type);
        this.color = color;
    }
    makeSound(){
        console.log("nyaa nyaa");
    }
}

let dog = new Dog("Buddy", "Dog", "Golden Retriever");

console.log(dog);
dog.makeSound();

console.log();

let cat = new Cat("Whiskers", "Cat", "Black");

console.log(cat);
cat.makeSound();

console.log();


// Encapsulation

class BankAccount{
    constructor(accountNumber, accountHolderName, balance){
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }
    deposit(amount){
        this.balance += amount;
    }
    withdraw(amount){
        if(this.balance >= amount){
            this.balance -= amount;
        } else {
            console.log("Insufficient funds");
        }
}
}

let account = new BankAccount("123456789", "John Doe", 1000);

console.log(account);

account.deposit(500);

console.log(account);

account.withdraw(2000);

console.log(account);

// Abstraction

class army {
    constructor(name, rank){
        this.name = name;
        this.rank = rank;
    }
    promote(newRank){
        this.rank = newRank;
    }
}

let soldier = new army("John", "Private");

console.log(soldier);

soldier.promote("Sergeant");

console.log(soldier);


