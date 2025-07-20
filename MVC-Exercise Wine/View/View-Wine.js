const Wine = require("../Model/Model-Wine");

class View {
    static show(Wines) {
        console.table(Wines);
    }
}

module.exports = View;