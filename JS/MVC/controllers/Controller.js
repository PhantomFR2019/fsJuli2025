const Coffee = require("../models/Models.js");
const View = require("../views/View.js");

class Controller {
    static showCoffees() {
        let coffees = Coffee.getCoffees();
        View.show(coffees);
    }
    static addCoffee(params) {
        Coffee.addCoffee(params);
    }
    static updateCoffee(params) {
        Coffee.updateCoffee(params);
    }
    static deleteCoffee(params) {
        Coffee.deleteCoffee(params);
    }
    static message(msg) {
        console.log(msg);
    }
}

module.exports = Controller;