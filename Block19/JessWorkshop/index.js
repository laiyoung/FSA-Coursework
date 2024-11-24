//example freelancers

//possible names
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

//possible occupations
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

// Final Array:
const freelancers = [
  { name: "Dr. Slice", price: 25, occupation: "Gardener" },
  { name: "Dr. Pressure", price: 51, occupation: "Programmer" },
  { name: "Prof. Possibility", price: 43, occupation: "Teacher" },
  { name: "Prof. Prism", price: 81, occupation: "Teacher" },
  { name: "Dr. Impulse", price: 43, occupation: "Teacher" },
  { name: "Prof. Spark", price: 76, occupation: "Programmer" },
  { name: "Dr. Wire", price: 47, occupation: "Teacher" },
  { name: "Prof. Goose", price: 72, occupation: "Driver" },
];

const maxLength = 15;



function init() {
  /**
   * 👉 STEP 1: Grab the div with the id of "root"
   */
  const root = document.getElementById("root");
  /**
   *
   * 👉 STEP 2:
   *    Create a new h1 element that says "Freelancer Forum"
   *    Add the new h1 to the root div
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
  const table = docuement.createElement("table");
  root.appendChild(table);


  /**
   * 👉 STEP 5:
   *    Call the function you created in step 4
   */
  tableRender();
}

/**
 * 👉 STEP 4:
 *    Create a function to render the Freelancers in our Freelancers array
 */
function tableRender() {
  const tbody = document.createElement(tbody);
  table.appendChild(tbody);

  const freeRow = document.createElement("tr");
  table.appendChild(freeRow);

  const nameColumn1 = document.createElement("th");
  nameColumn1.textContent = "Name";
  tbody.appendChild(nameColumn1);

  const jobColumn2 = document.createElement("th");
  jobColumn2.textContent = "Occupation";
  tbody.appendChild(jobColumn2);

  const priceColumn3 = document.createElement("th");
  priceColumn3.textContent = "Price";
  tbody.appendChild(priceColumn3);
}

/**
 * 👉 STEP 6:
 *    Create a function to change the average price
 */


/**
 * 👉 STEP 7:
 *    Create a function to add a new Freelancer to the Freelancers array
 */
function addFreelancer() {

  const freelancerRow = document.createElement("td");

  const addPrice = Math.floor(Math.random() * 8) * 10 + 20;
  const addName = names[Math.floor(Math.random() * funNames.length)];
  const addJob = jobs[Math.floor(Math.random() * funJobs.length)];

  freelancerRow.forEach(() => {
    const freeRow = document.createElement("tr");

  });

  freelancers.push({ name: addName, occupation: addJob, price: addPrice });
}

/**
 * 👉 STEP 8:
 *    Add an interval to add a new Freelancer every second
 */
const addFreelancerIntervalId = setInterval(() => {
  addFreelancer();
  render();

  // Clear setInterval when freelancers length is equal to max length
  if (freelancers.length >= maxLength) {
    clearInterval(addFreelancerIntervalId);
  }
}, 1000);


//call init function
init();



// Another way:
// function init() {
//         const h1 = document.createElement("h1");
//         h1.textContent = "Freelancer Forum";
//         root.appendChild(h1);
      
//         const h2 = document.createElement("h2");
//         h2.textContent = "The average starting price is $30";
//         root.appendChild(h2);
      
//         const availableH1 = document.createElement("h1");
//         availableH1.textContent = "Available Freelancers";
//         root.appendChild(availableH1);
      
//       }