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
    Wine.delete(params);
  }
  static rename(params) {
    Wine.rename(pmrams);
  }
  static message(msg) {
    console.log(msg);
  }
}

module.exports = Controller;