//Making an object of the intial data:
const freelancers = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 },
  { name: "Carol", occupation: "Programmer", price: 70 },
];
console.table(freelancers);

//Possible Names:
const names = [
  "Aria",
  "Elijah",
  "Olivia",
  "Jackson",
  "Sophia",
  "Liam",
  "Emma",
  "Mason",
  "Isabella",
  "Lucas",
];

//Possible Occupations:
const jobs = [
  "Software Developer",
  "Teacher",
  "Nurse",
  "Mechanical Engineer",
  "Graphic Designer",
  "Chef",
  "Marketing Analyst",
  "Electrician",
  "Physician",
  "Data Scientist",
];
/**
 * 👉 STEP 1: Grab the div with the id of "root"
 */
const root = document.getElementById("root");

/**
 * 👉 STEP 2:
 *    Create a new h1 + h2 elements for the headings
 *    Add the new h1 + h2 elements to the root div
 */
const h1 = document.createElement("h1");
h1.textContent = "Freelancer Forum";
root.appendChild(h1);

const h2 = document.createElement("h2");
h2.textContent = "The average starting price is: ";
root.appendChild(h2);

const availableh1 = document.createElement("h1");
availableh1.textContent = "Available Freelancers";
root.appendChild(availableh1);

/**
 * 👉 STEP 3:
 *    Create a table to hold our Freelancers in
 */
//Creating a table:
const table = document.createElement("table");
root.appendChild(table);
//Creating a header table row:
const headerRow = document.createElement("tr");

// Creating and adding information colomns to the header table row:
const col1 = document.createElement("th");
col1.textContent = "Name";
table.append(col1);

const col2 = document.createElement("th");
col2.textContent = "Occupation";
table.append(col2);

const col3 = document.createElement("th");
col3.textContent = "Starting Price";
table.append(col3);

//Adding header table row to the table:
table.appendChild(headerRow);
//Adding new table to the root div:
root.appendChild(table);

/**
 * 👉 STEP 4:
 *    Create a function to render the Freelancers array
 */
function renderTableRows() {
  for (var i = 0; i < freelancers.length; i++) {
    var row = table.insertRow(i);
    row.insertCell(0).innerHTML = freelancers[i].name;
    row.insertCell(1).innerHTML = freelancers[i].occupation;
    row.insertCell(2).innerHTML = freelancers[i].price;
  }
  document.body.append(table);
}

renderTableRows();

function mainRender() {
  /**
   * 👉 STEP 5:
   *    Create a function to add a new freelancers to the Freelancers array
   */

  for (var i = 0; i < freelancers.length; i++) {
    var row = table.insertRow(i);
    row.insertCell(0).innerHTML =
      names[Math.floor(Math.random() * names.length)];
    row.insertCell(1).innerHTML = jobs[Math.floor(Math.random() * jobs.length)];
    row.insertCell(2).innerHTML = Math.floor(Math.random() * 8) * 10 + 20;
  }
  document.body.append(table);

  // Adding the average calculation to the main render loop
  const newAverage = calculateAveragePrice();
  h2.innerText = `The average starting price is: $${newAverage}`;
}

/**
 * 👉 STEP 6:
 *    Create a function to change the average price
 */

function calculateAveragePrice() {
  //Calculating the avg:
  const total = freelancers.reduce(
    (subtotal, current) => subtotal + current.price,
    0
  );
  return Math.round(total / freelancers.length);
}

/**
 * 👉 STEP 7:
 *    Add an interval to add a new Freelancer every second
 */
const freelancerIntervalId = setInterval(() => {
  // calculateAveragePrice();
  mainRender();

  // Clear setInterval when freelancers length is equal to max length
  setTimeout(() => {
    clearInterval(freelancerIntervalId);
  }, 5000);
}, 1000);

//call init function
mainRender();
