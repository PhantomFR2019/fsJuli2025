/** Task 5

A. Make a method for showing all the ingredients of a cookie
- showIngredients(id)

```js
    
    "Chocolate Sweety" ingredients are:
    1. Chocolate
    2. Butter
    
```
B. Make a method to add ingredients to a cookie

- addIngredients(id, ingredients)

C. Make a method to categorized all the ingredients
- categoriesCookiesByIngredient(ingredientName)

```js
    // Contoh: ingredientName => Chocolate
    
        Cookies with Chocolate Ingredients:
        1. Chocolate Sweety
        2. Brownies cakep
    
   // Jika tidak ada kategori nya maka print "There's no cookie."

```
D. Make a method to sort prices of cookies
- sortCookies(type) // 2 types: 'asc' dan 'desc'

E. Make a method to categorized cookies
- categoriesCookies()

```js

Chocolate:
1. Chocolate Cookies
2. Brownies Cakep

Sweet:
1. Sweet Butter

Strawberry:
1. Red Velvet
2. Berry Cake

```


Our Cookies:
1. [v] Chocolate Sweety, Rp 10000
2. [ ] Plain butter, Rp. 5000 
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



// 5A

showIngredients(id) {
  const cookie = this.container.find(cookie => cookie.id === id);
  if (!cookie) {
    console.log("Cookie not found.");
    return;
  }
  console.log(`"${cookie.name}" ingredients are:`);
  cookie.ingredients.forEach((ingredient, index) => {
    console.log(`${index + 1}. ${ingredient}`);
  });
}


// 5B

addIngredients(id, ingredients) {
  const cookie = this.container.find(cookie => cookie.id === id);
  if (!cookie) {
    console.log("Cookie not found.");
    return;
  }
  // Ensure ingredients is an array
  const newIngredients = Array.isArray(ingredients) ? ingredients : [ingredients];
  cookie.ingredients.push(...newIngredients);
  console.log(`Added ingredients to "${cookie.name}"`);
}


// 5C

categoriesCookiesByIngredient(ingredientName) {
  const filteredCookies = this.container.filter(cookie => 
    cookie.ingredients.includes(ingredientName)
  );
  
  if (filteredCookies.length === 0) {
    console.log("There's no cookie.");
    return;
  }
  
  console.log(`Cookies with ${ingredientName} Ingredients:`);
  filteredCookies.forEach((cookie, index) => {
    console.log(`${index + 1}. ${cookie.name}`);
  });
}


// 5D

sortCookies(type) {
  if (type === "asc") {
    this.container.sort((a, b) => a.name.localeCompare(b.name));
  } else if (type === "desc") {
    this.container.sort((a, b) => b.name.localeCompare(a.name));
  } else {
    console.log("Invalid sort type. Use 'asc' or 'desc'.");
  }
}


// 5E 

categorizeCookies() {
  const categories = {};

  this.container.forEach(cookie => {
    if (!categories[cookie.type]) {
      categories[cookie.type] = [];
    }
    categories[cookie.type].push(cookie);
  });

  for (const [type, cookies] of Object.entries(categories)) {
    console.log(`${type}:`);
    cookies.forEach((cookie, index) => {
      console.log(`${index + 1}. ${cookie.name}`);
    });
    console.log(""); // space between categories
  }
}
}


const myKitchen = new kitchen();

// Bake cookies
myKitchen.bakeCookies("Chocolate Sweety", 10000, ["Chocolate", "Butter"], "Chocolate");
myKitchen.bakeCookies("Plain Butter", 5000, ["Butter", "Milk"], "Sweet");
myKitchen.bakeCookies("Berry Cake", 8000, ["Strawberry", "Sugar"], "Strawberry");


myKitchen.showCookies();


myKitchen.eatCookies(2); // Removes "Plain Butter"
myKitchen.showCookies(); // Should no longer show "Plain Butter"


myKitchen.addSugar(1); // Chocolate Sweety should now be isSweet = true
console.log(myKitchen.container[0]); // Check isSweet is now true


myKitchen.showIngredients(1);

myKitchen.addIngredients(1, "Milk");
myKitchen.addIngredients(1, ["Honey", "Almond"]);
myKitchen.showIngredients(1);


myKitchen.categoriesCookiesByIngredient("Chocolate");


myKitchen.sortCookies("asc");
myKitchen.showCookies(); // Check if sorted alphabetically (A-Z)

myKitchen.sortCookies("desc");
myKitchen.showCookies(); // Check if sorted (Z-A)


myKitchen.categoriesCookies();

console.log(JSON.stringify(myKitchen.container, null, 2));


