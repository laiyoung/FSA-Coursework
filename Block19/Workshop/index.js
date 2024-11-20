//Making an object of the data:
const freelancers = [
  { name: "Alice", occupation: "Writer", price: 30 },
  { name: "Bob", occupation: "Teacher", price: 50 },
  { name: "Carol", occupation: "Programmer", price: 70 },
];

const names = ["Alice", "Bob", "Carol"];
const occupations = [ "Writer", "Teacher", "Programmer"]
const price = [30, 50, 70]

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
  const heading = document.createElement("h1");
  heading.textContent = "Freelancer Forum";
  rootContainer.appendChild(heading);

  "The Average Starting Price is ${avgpricefunction}"


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


  /**
   * 👉 STEP 5:
   *    Call the function you created in step 4
   */
}

/**
 * 👉 STEP 6:
 *    Create a function to add a new freelancer to the freelancer array
 */

/**
 * 👉 STEP 7:
 *    Add an interval to add a new freelancer every second
 */

//call init function
init();





/** You could also do a function for the intial appends:
* function makeTableRow(parentContainer, textContent){
* const tr1 = document.createElement("tr");
* tr1.textContent = textContent;
* parentContainer ()
}
*/
