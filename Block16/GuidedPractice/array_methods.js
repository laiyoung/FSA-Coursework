const items = [
  { id: 1, name: "foo", price: 7 },
  { id: 2, name: "bar", price: 6 },
  { id: 3, name: "bazz", price: 9 },
  { id: 4, name: "quq", price: 13 },
];

// let requestedItem = prompt(
//   "Enter a name of an item, we will try and find it:",
//   ""
// );

// let found = items.find((item) => {
//   return requestedItem === item.name;
// });
// if (found) {
//   console.log("We found it!" + " " +found.name);
// } else {
//   console.log("Nope");
// }

const search = prompt ("enter a string, we will find it:")
const filteredItems = items.filter(item => {return item.name.includes(search)});

console.table(filteredItems);

