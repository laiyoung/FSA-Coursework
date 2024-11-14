// Complete the Numbers class below
// the constructor has already been provided
class Numbers {
  constructor(data) {
    //data can either be a string or an array of numbers
    if (typeof data === "string") {
      this.data = str.split(",").map((number) => number * 1);
    } else {
      this.data = data;
    }
  }
  count() {
    //return the count of numbers in data
    return this.data.length;
  }
  printNumbers() {
    //print the numbers in data
    const numbersArray = this.data;
    console.table(numbersArray);
    // A console.table was used, since indexes were also asked for
  }
  odds() {
    //return the odd numbers in data
    const getOdds = [];
    this.data.forEach((number) => {
      if (number % 2 > 0) {
        getOdds.push(number);
      }
    });
    console.log(getOdds);
  }
  evens() {
    //return the even numbers in data
    const getEvens = [];
    this.data.forEach((number) => {
      if (number % 2 === 0) {
        getEvens.push(number);
      }
    });
    console.log(getEvens);
  }
  sum() {
    //return the sum of the numbers
    const reducedSumArray = this.data.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return reducedSumArray;
  }
  product() {
    //return the product of the numbers
    const reducedProductArray = this.data.reduce(
      (accumulator, currentValue) => accumulator * currentValue,
      1
    );
    return reducedProductArray;
  }
  /** So, because we're doing multiplication instead of addition, and you're
   * multiplying by the accumulator[not 2 #s being multiplied and the accumulator
   * just keeping track of the outcome --> acc + (a*b)], you can't start
   * your intial value at 0, you'll just return zero, you have to start it at 1
   */
  greaterThan(target) {
    //return the numbers greater than the target

    const greaterThanArray = [];
    this.data.forEach((number) => {
      if (number > target) {
        greaterThanArray.push(number);
      }
    });
    console.log(greaterThanArray);
  }
  howMany(target) {
    //return the count of a given number
    let count = 0;
    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i] === target) {
        count++;
      }
    }
    return count;
  }
}
//Prompt the user for a list of integers separated by commas
const str = prompt("enter some numbers, like this", "1,2,3,3,5,9");

//create an instance of numbers
const n1 = new Numbers(str);
console.log(n1.count()); //returns count of numbers
n1.printNumbers(); //prints the number along with their indexes
console.log(n1.odds()); //returns odd numbers
console.log(n1.evens()); //returns even numbers
console.log(n1.sum()); //returns sum of numbers
console.log(n1.product()); //returns product of numbers
console.log(n1.greaterThan(3)); //returns numbers greater than another number
console.log(n1.howMany(3)); //return the count of a specific number
