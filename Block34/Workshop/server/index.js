/** Holding the Express application and API functions */

// Imports here for express:
const express = require("express");
const app = express();
const path = require("path");

// Importing db file:
const db = require("./db");

// Init function invocation:
const init = async () => {
  await db.init();

  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`listening on port ${port}`));
};

init();

// Parser for the JSON text:
app.use(express.json());
// Middleware for printing information + errors:
app.use(require("morgan")("dev"));

// Static routes here (you only need these for deployment + front end):
app.use(express.static(path.join(__dirname, "../client/dist")));


// All app routes here:

//Add a customer (testing)
app.post("/api/customers", async (req, res, next) => {
  try {
    console.log(req.body);

    const result = await db.createCustomer(req.body.name);
    res.send(result);
  } catch (ex) {
    next(ex);
  }
});

// Get all customers
app.get("/api/customers", async (req, res, next) => {
  try {
    console.log(req.body);

    const result = await db.fetchCustomers(req.body);
    res.send(result);
  } catch (ex) {
    next(ex);
  }
});

// Get all restaurants
app.get("/api/restaurants", async (req, res, next) => {
  try {
    console.log(req.body);

    const result = await db.fetchRestaurants(req.body);
    res.send(result);
  } catch (ex) {
    next(ex);
  }
});


// Get all reservations
// app.get("/api/departments", async (req, res, next) => {
//   try {
//     const SQL = `
//             SELECT * FROM departments
//             `;
//     const response = await client.query(SQL);
//     res.send(response.rows);
//   } catch (ex) {
//     next(ex);
//   }
// });


// Delete a reservation




// Add a reservation
// app.post("/api/customers", async (req, res, next) => {
//   try {
//     console.log(req.body);

//     const result = await db.createCustomer(req.body.name);
//     res.send(result);
//   } catch (error) {
//     next(error);
//   }
// });
