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

Task 3

Make the kitchen class as factory class with properties:
- Key
    + container: filled with cookies made
- Method
    + bake (...Cookies)
     --> aim to make cookies and put it in the container
    + eat (id)
     --> aim to delete cookies from the container
    + addSugar (id)
     --> aim to change isSweet to true/false
    + showCookies ()
     --> aim to show all the cookies in the container 
     
*/

class Cookie {
  constructor(id, name, price, ingredients, type) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.ingredients = ingredients;
    this.type = type;
    this.isSweet = false; // default
  }
}

class Chocolate extends Cookie {
  constructor(id, name, price, ingredients, type) {
    super(id, name, price, ingredients, type);
  }
}

class Sweet extends Cookie {
  constructor(id, name, price, ingredients, type) {
    super(id, name, price, ingredients, type);
  }
}

class Strawberry extends Cookie {
  constructor(id, name, price, ingredients, type) {
    super(id, name, price, ingredients, type);
  }
}

// ✅ FACTORY CLASS
class Kitchen {
  constructor() {
    this.container = []; // 🍪 All cookies made
  }

  // 🔨 Bake one or more cookies
  bake(...cookies) {
    cookies.forEach(cookie => {
      let id = this.container.length === 0 ? 1 : this.container[this.container.length - 1].id + 1;
      const { category, name, price, ingredients, type } = cookie;

      let newCookie;
      switch (category) {
        case "Chocolate":
          newCookie = new Chocolate(id, name, price, ingredients, type);
          break;
        case "Sweet":
          newCookie = new Sweet(id, name, price, ingredients, type);
          break;
        case "Strawberry":
          newCookie = new Strawberry(id, name, price, ingredients, type);
          break;
        default:
          console.log(`Unknown category: ${category}`);
          return;
      }

      this.container.push(newCookie);
    });
  }

  // 🗑️ Eat cookie by ID
  eat(id) {
    const before = this.container.length;
    this.container = this.container.filter(cookie => cookie.id !== id);
    if (this.container.length < before) {
      console.log(`Cookie with id ${id} eaten.`);
    } else {
      console.log(`No cookie with id ${id} found.`);
    }
  }

  // 🍭 Add sugar to a cookie by ID
  addSugar(id) {
    const cookie = this.container.find(cookie => cookie.id === id);
    if (cookie) {
      cookie.isSweet = true;
      console.log(`${cookie.name} is now sweet!`);
    } else {
      console.log(`No cookie with id ${id} found.`);
    }
  }

  // 📦 Show all cookies
  showCookies() {
    console.log("Cookies in the container:");
    if (this.container.length > 0) {
      this.container.forEach(cookie => {
        const { id, name, price, ingredients, type, isSweet } = cookie;
        console.log(`${id}. ${name} - Rp.${price}`);
        console.log(`Ingredients: ${ingredients}`);
        console.log(`Type: ${type}`);
        console.log(`Sweet: ${isSweet}`);
        console.log("-------------------");
      });
    } else {
      console.log("None");
    }
  }
}


const myKitchen = new Kitchen();

myKitchen.bake(
  { category: "Chocolate", name: "Dark Cocoa", price: 5000, ingredients: "Cocoa", type: "Crunchy" },
  { category: "Strawberry", name: "Berry Pop", price: 6000, ingredients: "Strawberry", type: "Soft" },
  { category: "Sweet", name: "Sugar Rush", price: 4500, ingredients: "Sugar", type: "Chewy" }
);

myKitchen.showCookies();

myKitchen.addSugar(2);
myKitchen.eat(1);

myKitchen.showCookies();



