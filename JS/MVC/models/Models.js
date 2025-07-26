const fs = require("fs");

class Coffee {
    constructor(id, name, origin, beans, is_available) {
        this.id = id;
        this.name = name;
        this.origin = origin;
        this.beans = beans;
        this.is_available = is_available;
    }

    static getCoffees (){
        // berfungsi untuk ambil data.json
        const coffees = JSON.parse(fs.readFileSync("./data.json","utf8"));
        return coffees;
    }

    static addCoffee (params) {
        let coffees = this.getCoffees();
        const [name, origin, beans] = params;
        let id = coffees[coffees.length - 1].id +1;
        const is_available = true || false;


        // Need fixing later = wanna change the true n false for is_available on updateCoffee 

        coffees.push(new Coffee(id, name, origin, beans, is_available));
        this.save(coffees);
    }

    static deleteCoffee(params) {
        let coffees = this.getCoffees();
        const [id] = params;

        coffees = coffees.filter((coffee) => coffee.id != id);
        this.save(coffees);
    }


    static updateCoffee(params) {
        let coffees = this.getCoffees();
        const { id, name, origin, beans, is_available } = params;

        coffees = coffees.map((coffee) => {
            if (coffee.id === id ) {
                coffee.name = name;
                coffee.origin = origin;
                coffee.beans = beans;
                coffee.is_available = is_available;
            }
            return coffee;
        });

        this.save(coffees);
    }

        
    static save(coffees) {
        const coffeeString = JSON.stringify(coffees, null, 2);
        fs.writeFileSync("./data.json", coffeeString);
    }

}




module.exports = Coffee;