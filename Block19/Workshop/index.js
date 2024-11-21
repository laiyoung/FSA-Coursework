//Making an object of the data:
const freelancers = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 },
  { name: "Carol", occupation: "Programmer", price: 70 },
];
console.table(freelancers);

const rootContainer = document.getElementById("root");

const heading = document.createElement("h1");
heading.textContent = "Freelancer Forum";
rootContainer.appendChild(heading);

const avgParagraph = document.createElement("p");
avgParagraph.textContent = "The Average Starting Price is : ";
rootContainer.appendChild(avgParagraph);

function init() {
  /**
   * 👉 STEP 1: Grab the div with the id of "root"
   */
  const rootContainer = document.getElementById("root");

  /**
   * 👉 STEP 2:
   *   -Create a new h1 element that says "Frelancer Forum"
   *    Add the new h1 to the root div
   *   -Make an avg. price statement that changes as indices are added
   *    Add the new statement to the root div
   *   -Make a h2 heading for the available freelancers
   *    Add the new statement to the root div
   */

  const heading2 = document.createElement("h2");
  heading2.textContent = "Available Freelancers";
  rootContainer.appendChild(heading2);

  /**
   * 👉 STEP 3:
   *    Create a table to hold our freelancers in
   */
  const table = document.createElement("table");
  rootContainer.appendChild(table);

  const col1 = document.createElement("th");
  col1.textContent = "Name";
  table.append(col1);

  const col2 = document.createElement("th");
  col2.textContent = "Occupation";
  table.append(col2);

  const col3 = document.createElement("th");
  col3.textContent = "Starting Price";
  table.append(col3);

  /**
   * 👉 STEP 4:
   *    Create a function to render the freelancer in our freelancer array
   */
  function fillTable() {
    for (var i = 0; i < freelancers.length; i++) {
      var row = table.insertRow(i);
      row.insertCell(0).innerHTML = freelancers[i].name;
      row.insertCell(1).innerHTML = freelancers[i].occupation;
      row.insertCell(2).innerHTML = freelancers[i].price;
    }
    document.body.append(table);
  }

  /**
   * 👉 STEP 5:
   *    Call the function you created in step 4
   */

  fillTable();
}

/**
 * 👉 STEP 6:
 *    Create a function to add a new freelancer to the freelancer array
 */

function addFreelancer() {
  freelancers.push({
    name: "Prism",
    occupation: "Personal Trainer",
    price: 60,
  });
  console.table(freelancers);
}
addFreelancer();

/**
 * 👉 STEP 7:
 *    Create a function to keep track of the average price of a freelancer
 */

avgPrice = function averagePrice() {
  function getPrices() {
    let prices = [];
    for (var i = 0; i < freelancers.length; ++i)
      prices.push(freelancers[i].price);
    return prices;
  }
  getPrices();
  console.log(getPrices());

  function priceAvg() {
    const reducedPriceArray = getPrices().reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    return reducedPriceArray / getPrices().length;
  }
  priceAvg();
  return console.log(priceAvg());
};
avgPrice();

//Adding the avg to the starting paragraph:
document.querySelector(
  "p"
).innerHTML = `The Average Starting Price is : ${avgPrice()}`;

/**
 * 👉 STEP 8:
 *    Add an interval to add a new freelancer every second
 */

// const fillTable = setInterval(() => {
//   row = table.insertRow(i);
// }, 1000);

//call init function
init();

/** You could also do a function for the intial appends:
* function makeTableRow(parentContainer, textContent){
* const tr1 = document.createElement("tr");
* tr1.textContent = textContent;
* parentContainer ()
}
*/
