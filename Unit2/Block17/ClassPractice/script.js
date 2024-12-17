const sweaters = {
  material: ["cotton", "cashmere", "wool", "polyester"],
  weight: ["light", "medium", "heavy"],
  color: ["black", "red", "tan", "blue", "green"],
};
console.table(sweaters);
console.log(sweaters.color.slice(2));

//     const fruit = {
//         name: "banana",
//         sayHiArrow: () => console.log ("Hi, I'm a" + " " + this.name),
//         // Arrow is improper syntax, thus returns undefined
//         sayHiFunction: function () {
//             console.log ("Hi, I'm a" + this.name)
//         }
//     }
//  fruit.sayHiArrow();
//  fruit.sayHiFunction();

class Fruit {
  // These are properties
  color;
  name;
  freshness = 5;
  // the parens items are the arguments here
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  ripen() {
    this.freshness - 1;
  }
}

class ExoticFruit extends Fruit {
  country;
  constructor(name, color) {
    super(name, color);
    this.country = country;
  }
}

const banana = new Fruit("banana", "yellow");
banana.ripen();
const apple = new Fruit("apple", "red");
apple.ripen();

const durian = new ExoticFruit("durian", "green", "Thailand");
