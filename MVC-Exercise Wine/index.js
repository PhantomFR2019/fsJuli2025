const command = process.argv[2];
const params = process.argv.slice(3);

const Controller = require("./Controller/Controller-Wine");

switch (command) {
  case "show":
    Controller.showWines();
    break;
  case "add":
    Controller.add(params);
    break;
  case "sell":
    Controller.sell(params);
    break;
  case "rename":
    const id = params[0];
    const newName = params.slice(1).join(" ");
    Controller.rename(id, newName);
    break;
  case "findbyId":
    Controller.findById(params[0]);
    break;
  default:
    Controller.message("Command not found");
}


// Aight task 1 done