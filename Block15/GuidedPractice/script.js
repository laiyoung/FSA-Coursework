//Making an object named dinner, with items set as keys and prices set as values
const dinner = {
  hamburger: 12,
  steak: 20,
  soup: 8,
  macAndCheese: 14,
  soupAndSalad: 16,
};
console.log(Object.keys(dinner));
/** Logging the keys of the object dinner, which prints a list of all the items
 * consumed, using the method .keys to call all of the keys within the object and
 * create an array
 */
console.log(Object.values(dinner));
/** Logging the values of the object dinner, which prints a list of all the prices
 * of the items consumed, using the method .values to call all of the values
 * within the object and create and array
 */

//Using a for-in loop to find the total cost of the dinner:
let totalCost1 = 0;
//Creating a variable called totalCost1 and setting the inital value to 0
for (const individualMeal in dinner) {
  /** The for-in loop is used to iterate through all the properties of the object.
   * The loop takes 2 arguements: The variable in the for-in loop is declared
   * as indiviudalMeal, and the object is declared as the dinner object created
   * previously.
   */
  totalCost1 += dinner[individualMeal];
  /** The statement indicates that at each iteration of the for-in loop, the
   * indices of individualMeal (the values of the meal keys) should be
   * added to the value of totalCost1
   */
}
console.log(totalCost1);
//Logging the final value of totalCost1

//Using a for loop to find the total cost of the dinner:
const prices = Object.values(dinner);
/** The array prices is created and filled with the values in the object
 * dinner, using the .values method
 */
let totalCost2 = 0;
//Creating a variable called totalCost2 and setting the inital value to 0
for (let i = 0; i < prices.length; i++) {
  /** Defining the current index in the prices array as a variable for use
   * inside the conditional statement. The index must be less than the length
   * of the array prices and an increment is established with the operator ++
   */
  totalCost2 += prices[i];
  /** The statement indicates that at each iteration of the for loop, the
   * indices of prices should be added to the value of totalCost2
   */
}
console.log(totalCost2);
//Logging the final value of totalCost2


//Building a generic function that would work to return any objects total
function calculateCost(meal) {
  let total = 0;
  for (const food in meal) {
    total += meal[food];
  }
  return total;
}
