// Factory Class


class fruit {
    constructor (id, name, price, stock, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
        this.category = category;
    }
}

class apple extends fruit {
    constructor (id, name, price, stock) {
        super(id, name, price, stock, "Apple");
    }
}

class orange extends fruit {
    constructor (id, name, price, stock) {
        super(id, name, price, stock, "Orange");
    }
}

class banana extends fruit {
    constructor (id, name, price, stock) {
        super(id, name, price, stock, "Banana");
    }
}

// factory class --> compile everything into one class, manage & edit easily

class Supermarket {
  constructor(shelves) {
    this.shelves = shelves || [];
  }
  showItems() {
    console.log("Supermarket shelves:");
    if (this.shelves.length > 0) {
      this.shelves.forEach((shelf) => {
        // destructuring object
        const { id, name, price, stock, category } = shelf;
        console.log(`${id}. ${name}, Rp. ${price}`);
        console.log(`Stocks = ${stock} pcs. Category = ${category}`);
      });
      console.log("=======================");
    } else {
      console.log("There is no shelf");
    }
  }
  showItemsInTable() {
    console.table(this.shelves);
  }
  addItem(name, price, stock, category) {
    let id;
    if (this.shelves.length === 0) {
      id = 1;
    } else {
      let lastIndex = this.shelves.length - 1;
      id = this.shelves[lastIndex].id + 1;
    }
    switch (category) {
      case "Apple":
        this.shelves.push(new apple(id, name, price, stock));
        break;
      case "Orange":
        this.shelves.push(new orange(id, name, price, stock));
        break;
      case "Banana":
        this.shelves.push(new banana(id, name, price, stock));
        break;
    }
  }
  deleteItem(id) {
    this.shelves = this.shelves.filter((shelf) => shelf.id !== id);
  }
  editItem(id, name, price, stock, category) {
    this.shelves = this.shelves.map((shelf) => {
      if (shelf.id === id) {
        shelf.name = name;
        shelf.price = price;
        shelf.stock = stock;
        shelf.category = category;
      }
      return shelf;
    });
  }
}

const supermarket = new Supermarket();
supermarket.addItem("Royal Gala", 75000, 10, "Apple");
supermarket.addItem("Pokan", 50000, 5, "Orange");
supermarket.addItem("Cavendish Sunpride", 35000, 10, "Banana");
supermarket.addItem("Queen Elizabeth", 105000, 17, "Apple");
supermarket.addItem("Pisang Barangan", 15000, 10, "Banana");


//supermarket.deleteItem(2);
//supermarket.showItems();

supermarket.editItem(1, "Gala Royale Apple", 75000, 10, "Apple");
supermarket.editItem(3, "Cavendish Sunpride Banana", 35000, 10, "Banana");
supermarket.showItems();
// supermarket.showItemsInTable();
// console.log(supermarket);

console.log();


