//Making an object of the intial data + setting length parameter:
const freelancers = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 },
  { name: "Carol", occupation: "Programmer", price: 70 },
];
console.table(freelancers);
const maxLength = 15;

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

function init() {
  /**
   * 👉 STEP 1: Grab the div with the id of "root"
   */
  const root = document.getElementById("root");
  /**
   *
   * 👉 STEP 2:
   *    Create a new h1 + h2 elements for the headings
   *    Add the new h1 + h2 elements to the root div
   */
  const h1 = document.createElement("h1");
  h1.textContent = "Freelancer Forum";
  root.appendChild(h1);

  const h2 = document.createElement("h2");
  h2.textContent = "The average starting price is ";
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
   *    Create a function to render the Freelancers array add a new Freelancer to
   * the Freelancers array
   */
  function renderTableRows() {
    const newRow = document.createElement("tr");
    const tableRow = document.createElement("table");


    freelancers.forEach((freelancer) => {
//     
      const nameCell = document.createElement("td");
      const occupationCell = document.createElement("td");
      const priceCell = document.createElement("td");

      nameCell.textContent = freelancer.name;
      occupationCell.textContent = freelancer.occupation;
      priceCell.textContent = `$${freelancer.price}`;

      table.appendChild(newRow);
      newRow.append(nameCell, occupationCell, priceCell);
    });

  }
  renderTableRows();
}

/**
 * 👉 STEP 8:
 *    Add an interval to add a new Freelancer every second
 */
const freelancerIntervalId = setInterval(() => {
  renderTableRows();
  addFreelancer();
  init();

  // Clear setInterval when freelancers length is equal to max length
  if (freelancers.length >= maxLength) {
    clearInterval(freelancerIntervalId);
  }
}, 2000);

//call init function
init();
