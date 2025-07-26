const command = process.argv[2];
const params = process.argv.slice(3);
// params = parameters
// argv = argument vector
     // Vector = Array/List


// const fs = require("fs");

// fs = file system

// let data = fs.readFileSync("./data.json", "utf-8");
// utf = Unicode Transformation Format


// let coffees = JSON.parse(data);
// console.log(coffees)

const Controller = require("./Controllers/Controller.js");

switch (command) {
    case "show":
        Controller.showCoffees();
        break;
    case "add":
        Controller.addCoffee(params);
        break;
    case "delete":
        Controller.deleteCoffee(params);
        break;
    case "update":
        Controller.updateCoffee(params);
        break;
    default:
        Controller.message("Command not found");
}