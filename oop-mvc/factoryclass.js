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
