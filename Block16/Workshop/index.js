/**
 * @typedef Item
 * @property {number} id - this item's ID
 * @property {string} name - name of this item
 * @property {number} price - price of this item
 * @property {string} category - the food group this item belongs to
 * @property {number} quantity - number of this item in inventory
 */

// ------------------ Complete the functions written below ------------------------------ //

/**
 * Prints out the name of each item in the given array.
 * @param {Item[]} items - array of items
 */

function logNames(items) {
  /** Using a slice to
   * copy the item properties and a forEach to cycle through and grab the
   * item names
   */

  items.slice(0).forEach((item) => {
    // Making console table of the item names
    console.table(item.name);
  });
}
/** Another function that works:
 * items.forEach((items) => console.table(items.name));
 */

/**
 * @param {Item[]} items - array of items
 * @returns {string[]} an array of item names in all uppercase
 */
function getUppercaseNames(items) {
  // Establish a new array called mappedArray
  const mappedArray = items.map((item) => {
    /** Adding item names to the new array, with a upperCase method to
     * turn names into all caps
     */
    return item.name.toUpperCase();
  });
  // Logging the new array
  console.log(mappedArray);
}

/**
 * @param {Item[]} items - array of items
 * @param {number} id - id of the item to find
 * @returns {Item} - the item in `items` with the given `id`
 */
function getItemById(items, id) {
  // Establishing a new object foundItem
  const foundItem = items.find((item) => {
    // Finding item id, by using a strict equality operator
    return item.id === id;
  });
  // Logging the new object
  console.log(foundItem);
}

/**
 * @param {Item[]} items - array of items
 * @param {string} name - name of the item to find
 * @returns {number} the price of the item named `name`
 */
/** A loop function was requested here, but that appraoch was not
 * recommended by our TA
 */
function getItemPriceByName(items, name) {
  /** Making a new array called filterName and using the filter method to
   * filter for the item name requested
   */
  const filterName = items.filter((item) => item.name === name);
  // Grabbing the associated price from the produced array, with only 1 index
  return filterName[0].price;
}

/**
 * @param {Item[]} items - array of items
 * @param {string} category
 * @returns {Item[]} array of items that belong to the given `category`
 */
function getItemsByCategory(items, category) {
  /** Making a new array called filterCategory and using the filter method to
   * filter for the item category requested
   */
  const filterCategory = items.filter((item) => item.category === category);
  /** Using a forEach method to grab the associated name for each indexed item
   * and logging the results
   */
  filterCategory.forEach((item) => console.log(item.name));
}

/**
 * @param {Item[]} items - array of items
 * @returns {number} the total quantity of all items
 */
function countItems(items) {
  /** Making a new array called reducedCountArray and using the reduce method to
   * cycle through and add the quantity of each item and get the total number of
   * items in stock
   */
  const reducedCountArray = items.reduce(
    (accumulator, currentValue) => accumulator + currentValue.quantity,
    0
  );
  /** the accumulator keeps track of the current total and each current
   * value(quantity) is added to this current total. The initial value is set
   * to 0, because addition is being performed on the accumulator.
   */
  return reducedCountArray;
  //A return statement is used to print the output array (reducedCountArray)
}

/**
 * @param {Item[]} items - array of items
 * @returns {number} the cost of all given items
 */
function calculateTotalPrice(items) {
  /** Making a new array called reducedPriceArray and using the reduce method to
   * cycle through and multiply the quantity of each item by the associated price
   * to get the total cost of all goods in stock
   */
  const reducedPriceArray = items.reduce(
    (accumulator, currentValue) =>
      accumulator + (currentValue.price * currentValue.quantity),
    0
    /** the accumulator keeps track of the current total and each current
   * value(price*quantity) is added to this current total. The initial value is set
   * to 0, because addition is being performed on the accumulator.
   */
  );
  return reducedPriceArray;
   //A return statement is used to print the output array (reducedPriceArray)
}

// --------------------- DO NOT CHANGE THE CODE BELOW ------------------------ //

/** @type {Item[]} */
const INVENTORY = [
  { id: 1, name: "apple", price: 1.75, category: "fruit", quantity: 100 },
  { id: 2, name: "banana", price: 0.25, category: "fruit", quantity: 137 },
  { id: 3, name: "orange", price: 1.0, category: "fruit", quantity: 10 },
  { id: 4, name: "broccoli", price: 3.0, category: "vegetable", quantity: 67 },
  { id: 6, name: "milk", price: 5.75, category: "dairy", quantity: 90 },
  { id: 7, name: "cheddar", price: 4.0, category: "dairy", quantity: 63 },
  { id: 8, name: "sourdough", price: 5.5, category: "grains", quantity: 81 },
];

console.log("Welcome! We carry the following items:");
logNames(INVENTORY);

console.log("Here are the names again in all uppercase:");
console.log(getUppercaseNames(INVENTORY));

console.log(`In total, we have ${countItems(INVENTORY)} items in stock.`);

const totalCost = calculateTotalPrice(INVENTORY);
console.log(
  `It would cost $${totalCost?.toFixed(2)} to purchase everything in stock.`
);

const itemId = prompt("Enter the ID of an item:", "1");
console.log(`The item with id #${itemId} is:`);
console.log(getItemById(INVENTORY, +itemId));

const itemName = prompt("Enter the name of an item:", "apple");
console.log(
  `The price of ${itemName} is ${getItemPriceByName(INVENTORY, itemName)}.`
);

const category = prompt("Enter a category you would like to see:", "fruit");
console.log(`The items in the ${category} category are:`);
console.log(getItemsByCategory(INVENTORY, category));
