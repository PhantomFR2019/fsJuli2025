const Wine = require("../Model/Model-Wine");
const View = require("../View/View-Wine");
class Controller {
  static showWines() {
    let Wines = Wine.getWines();
    View.show(Wines);
  }
  static add(params) {
    Wine.add(params);
  }
  static sell(params) {
    Wine.sell(params);
  }
  static rename(id, newName) {
  Wine.rename(id, newName);
  }
  static findById(id) {
  const wine = Wine.findById(id);
  if (wine) {
    View.show([wine]); // wrap in array to use console.table
  } else {
    this.message(`Wine with id ${id} not found.`);
  }
}

  static message(msg) {
    console.log(msg);
  }
}

module.exports = Controller;