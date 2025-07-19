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

class FruitFactory {
    constructor () {
        this.shelves = this.shelves; // array
    }
}

const supermarket = new FruitFactory([]);

supermarket.shelves.push(new apple(1, "Apple", 10000, 10));