const command = process.argv;
const params = process.argv.slice(3);
// params = parameters
// argv = argument vector
     // Vector = Array/List


const fs = require("fs");

// fs = file system

let data = fs.readFileSync("./data.json", "utf-8");


let coffees = JSON.parse(data);
console.log(coffees)

const Controller = require("./Controller.js");

switch (command) {
    case "show":
        Controller.showCoffees();
        break;
    case "add":
        Controller.addCoffee();
        break;
    case "delete":
        Controller.deleteCoffee();
        break;
    case "update":
        Controller.updateCoffee();
        break;
    default:
        Controller.message("Command not found");
}