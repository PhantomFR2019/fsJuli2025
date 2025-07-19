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
    constructor () {
        this.shelves = [];
    }

showItems() {
    console.log(this.shelves);
    if (this.shelves.length > 0) {
        this.shelves.forEach((shelf) => {
           // destructuring object
           const {id, name, price, stock, category} = shelf;
           console.log(`${id}. ${name}. ${price}.`)
           console.log(`Stocks = ${stock} pcs. Category = ${category}`)
        });
        console.log("=====================================");
    } else {
        console.log("There are no items in the shelves");
        }
    }

addItems (name, price, stock, category) {
    let id;
    if (this.shelves.length === 0) {
        id = 1;
    }
    else {
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
        default:
    }
    
}

}


const supermarket = new Supermarket();
supermarket.showItems();

supermarket.addItems("Fuji Apple", 699, 50, "Apple");
supermarket.addItems("Royal Gala", 899, 100, "Apple");
supermarket.addItems("Mandarin Orange", 399, 100, "Orange");
supermarket.addItems("Sunskrit Banana", 199, 60, "Banana");

supermarket.showItems();
