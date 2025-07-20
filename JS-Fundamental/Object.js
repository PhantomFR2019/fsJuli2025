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
 * console.log(student["isGraduated"]);  output: true
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

console.log(ArraytoObject(fruit));


console.log()
/**
 * 
 * In Object there is something called method
 * 
 * Method is a function inside of an object
 * 
 * Syntax example:
 * 
 * let car = {
 *     //key 
 *      name: "Civic",
 *      cc  : 5000,
 * 
 *     //method
 *       startEngine : function() {
 *        console.log("Engine start") 
 *      }
 *    }
 * 
 *    //Access
 *     console.log(car.name); output--> Civic
 *     car.startEngine();  ----> Engine start
 * 
 * 
 * Side note:
 * 
 * you can tweak console.log in the method to
 *  console.log(`${car.name} Engine Start.`)
 * 
 */


/**
 * 
 * Practice 1
 * 
 * Make a profile with
 * 
 * Name: Caca
 * Weight: 45kg
 * Height: 155cm
 * Hobby: Movie, Gourmet
 * 
 */

let Caca = {
    name: "Caca",
    Weight: "45 kg",
    Height: "155 cm",
    Hobby: ["Movie", "Gourmet"],

    showsHobby : function() { 
         for (let i = 0; index < Caca.Hobby.length; i++)
      console.log(`${i+1}, ${Caca.Hobby(i)}`);
        }
}



/**
 * 
 * 
 * 
 */


let student = {
    studentName: "admin",
    studentGPA: 3.21,
    studentisGraduated: true,
    studentSkill: ["javascript","php"],
    studentaddress: {
        city: "Jakarta barat",
        Province: "DKI Jakarta"
    },

    // methods

    speak : function() {
        console.log(`My name is ${this.studentName} nice to meet you!`);
    },

    mentionAddress : function() {
        console.log(`My address is in ${this.studentaddress.city}, ${this.studentaddress.Province}`);
    }
}

console.log(student.studentName)
console.log(student.studentSkill)

student.mentionAddress()


/**
 * 
 * Array of objects
 * 
 * let items = [
 *      {
 *         id:1,
 *         name: "[Iphone 15 pro max",
 *         type: "gadget",
 *         price: 15000000,
 *         isAvailable: true    
 *      },
 *      {
 *         id:2
 *         name: "[Samsung S25",
 *         type: "gadget",
 *         price: 12500000,
 *         isAvailable: false    
 *      },
 *      {
 *         id:3,
 *         name: "[Asus ROG phone]",
 *         type: "gadget - gaming",
 *         price: 15000000,
 *         isAvailable: true     
 *      },
 * ]
 * 
 *  console.log(items[0]) 
 * 
 * 
 * how to show
 * 
 * [x] Iphone 15 Pro Max
 * [ ] Samsung S25
 * [x] Asus ROG phone
 * 
 */

console.log()
console.log()


let items = [
      {
         id:1,
         name: "Iphone 15 pro max",
         type: "gadget",
         price: 15000000,
         isAvailable: true    
      },
      {
         id:2,
         name: "Samsung S25",
         type: "gadget",
         price: 12500000,
         isAvailable: false    
      }, 
      {
         id:3,
         name: "Asus ROG phone",
         type: "gadget - gaming",
         price: 15000000,
         isAvailable: true     
      },
 ]
function availibility() {
    console.log("list items: ");
    for (let i = 0; i <  items.length; i++) {
        if (items[i].isAvailable === true) {
            console.log(`${i + 1}, [X] ${items[i].name}`);
        } else {
            console.log(`${i + 1}, [ ] ${items[i].name}`);
        }
        }
    }
    
    availibility(items);


const Onlineshop = {
    Shopname : "Toko Klontong",
    Products : [
        {
            id:"P001",
            name: "Kemeja Batik",
            price: 150000,
            category: {
                main: "clothes",
                sub: "Batik"
            },
            review: [
                {
                    user: "joko",
                    rating: 5
                },
                {
                    user: "Joni",
                    rating: 4
                }
            ]   
         },
         {
            id:2,
            name: "Samsung S25",
            type: "gadget",
            price: 12500000,
            isAvailable: false    
         }, 
         {
        }
    ]
    
}

console.log(Onlineshop.Products[0].review[0].user);


x = 1;
console.log('x = ' + x);





