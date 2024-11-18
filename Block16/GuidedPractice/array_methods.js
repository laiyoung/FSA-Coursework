const items = [
  //Making an array called objectx with 4 objects contained inside
  { id: 1, name: "foo", price: 7 },
  { id: 2, name: "bar", price: 6 },
  { id: 3, name: "bazz", price: 9 },
  { id: 4, name: "quq", price: 13 },
  //Each object has 3 properties, with the keys id, name, and price
];

//Finding an item:
const requestedItem = prompt(
  "Enter a name of an item, we will try and find it:",
  "foo"
);
//Setting the prompt and the passed arguement (price)
const foundItem = items.find((item) => item.name === requestedItem);
/** The .find method is used to check the value of the name key
 * against the requestedItem (set as a parameter/arguement),
 * using a strict equality operator
 */

/**Making a conditional for the foundItem array, to control what prints to the
 * console
 */
if (foundItem) {
  console.log("We found it!");
  console.log(foundItem);
} else {
  console.log(`We could not find an item with the name ${requestedItem}`);
}

//Using a .filter method:
const search = prompt(
  "Enter a string, we will find the items which have that string in their name",
  "ba"
);
const foundItems = items.filter((item) => item.name.indexOf(search) !== -1);
/** A new array is created called foundItems, using the .filter method.
 * The .indexOf method returns the 1st occurance/position of a value in
 * the array items. It's case sensitive. If no match is found, the method returns
 * -1. To turn the resulting position into a boolean, the strict inequality
 * operator is used to set any result not strictly equal to -1 as true.
 */
console.log(foundItems);
/**Logging the foundItems array, which is now holding any objects that the
 * boolean was true for.
 */

/**Another Option:
const filteredItems = items.filter(item => {return item.name.includes(search)});
console.table(filteredItems);
*/

//Mapping the values of the price key:
const keyForMapping = prompt(
  "Choose a key, either id, name, or price so we we can use map to display the values for that key",
  "price"
);
//Setting the prompt and the passed arguement (price)
const mappedValues = items.map((item) => item[keyForMapping]);
/** Making an array called mappedValues, using the .map method. The .map method
 * is manipulating the original items array and making a copy that only shows
 * the arguement set in the keyForMapping variable (here, it's price). Item is
 * used as the object name.
 */
console.log("Mapped Values", mappedValues);
//Logging the array mappedValues

// Practicing the .reduce method: Summing the value of the requested key (price)
const keyForReducing = prompt(
  "Choose a key, either id, or price so we we can use reduce to sum up the values for that key",
  "price"
);
//Setting the prompt and the passed arguement (price)
const reduction = items.reduce((acc, item) => {
  /** Making a new array called reduction and using the reduce method to
   * cycle through the items array created at the beginning.
   */
  acc = acc + item[keyForReducing];
  /** The accumulator keeps track of the running total and the current value
   * is set to the price value of the item array, using the arguement from the
   * variable keyforReducing
   */
  return acc;
  //A return statement is used to print the final value of the accumulator(acc)
}, 0);
//The inital value of the accumulator is set to 0

console.log(reduction);
/** Logging the array called reduction (which will have the same value as
 * acc)
 */
