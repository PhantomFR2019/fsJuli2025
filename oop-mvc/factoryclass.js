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
        this.shelves.push(new Apple(id, name, price, stock));
        break;
      case "Orange":
        this.shelves.push(new Orange(id, name, price, stock));
        break;
      case "Banana":
        this.shelves.push(new Banana(id, name, price, stock));
        break;
    }
  }
}

const supermarket = new Supermarket();
supermarket.addItem("Royal Gala", 75000, 10, "Apple");
supermarket.addItem("Pokan", 50000, 5, "Orange");
supermarket.addItem("Cavendish Sunpride", 35000, 10, "Banana");
supermarket.addItem("Queen Elizabeth", 105000, 17, "Apple");
supermarket.addItem("Pisang Barangan", 15000, 10, "Banana");
supermarket.showItems();
// supermarket.showItemsInTable();
// console.log(supermarket);
