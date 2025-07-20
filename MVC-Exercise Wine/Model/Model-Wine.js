const { create } = require("domain");
const fs = require("fs");

class Wine {
  constructor(id, name, year, type, createdAt) {
    this.id = id;
    this.name = name;
    this.year = year;
    this.type = type;
    this.createdAt = createdAt;
  }

  static getWines() {
    const Wines = JSON.parse(fs.readFileSync("./Wine.json", "utf8"));
    return Wines;
  }

  static add(params) {
    let Wines = this.getWines();
    const [name, year, type, createdAt] = params;
    let id = Wines[Wines.length - 1].id + 1;

    Wines.push(new Wine(id, name, +year, type, createdAt));
    this.save(Wines);
  }

  static save(Wines) {
    const WineString = JSON.stringify(Wines, null, 2);
    fs.writeFileSync("./Wine.json", WineString);
  }
}

module.exports = Wine;