/* Practice Exercise

OOP-Exercise-Patisserie-Chef

(Full question on the bootcamp team github - oop-exercise-patisserie-chef)

Summary

A chef specialize in making desserts will made 3 type of desserts,
which are:
1.Chocolate Cookies
2. Sweet Cookies
3. Strawberry Cookies

And all of the will be made in the chef's kitchen.
Now help the chef to make the cookies using oop in js.

Direction:

Task 1

make class cookie with properties:
- id
- name
- price
- ingredients (should be array)
- type

Task 2

Make an inheritance for Chocolate, Sweet, Strawberry
with properties:
- isSweet (false -> by default) 
*/

class Cookie {
    constructor(id, name, price, ingredients, type) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.ingredients = ingredients;
        this.type = type;
    }
}

class Chocolate extends Cookie {
    constructor(id, name, price, ingredients, type) {
        super(id, name, price, "Chocolate", type);
        this.isSweet = isSweet;
    }
}

class Sweet extends Cookie {
    constructor(id, name, price, ingredients, type) {
        super(id, name, price, "Sweet", type);
        this.isSweet = isSweet;
    }
}

class Strawberry extends Cookie {
    constructor(id, name, price, ingredients, type) {
        super(id, name, price, "Starwberry", type);
        this.isSweet = isSweet;
    }
}