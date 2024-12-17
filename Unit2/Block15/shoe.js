const shoe = {
  brandOptions: ["adidas", "nike", "sketchers"],
  brand: "",
  lace: true,
  velcro: false,
  color: "purple",
  activity: ["running", "fashion", "walking"],
  material: ["leather", "suede"],
  //   wear: function () {
  //     console.log("Wear shoe");
  //   }, OR
  wear() {
    console.log("Wear shoe");
  },
  clean: function () {
    console.log("Clean shoe");
  },
};

console.log(shoe.brand);
// console.log (shoe.activity)
// console.log (shoe.activity [0])

// shoe.wear ()

// console.table (shoe)

// shoe.brand = prompt(
//   "Choose from: " + shoe.brandOptions[0] + "or" + shoe.brandOptions[1]
// );

// console.log(shoe.brand);

// let userResponse = prompt ("Type your brand:")
// shoe.brand = userResponse

const davidsBurger = {
cheese: true,
lettuce: true,
tomato: true,
ketchup: true,
size: ["s", "m", "l"]
}

davidsBurger.bqq = true

console.log (davidsBurger)

delete davidsBurger.lettuce

console.log (davidsBurger)

// for (const burgerSize in davidsBurger.size) {
//       console.log (davidsBurger.size[burgerSize])
// }

davidsBurger.size.forEach(size => {
        console.log (size)
});

if (davidsBurger.cheese) {
        console.log ("It has cheese!")
}

davidsBurger.cheese = false