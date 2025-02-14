/** Holding the Express application and API functions */

// Imports here for express:
const express = require("express");
const app = express();
const path = require("path");

// Importing db file:
const db = require("./db");

// Init function invocation:
const init = async () => {
  // console.log ("init api")
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

//Add a user (testing)
// app.post("/api/customers", async (req, res, next) => {
//   try {
//     console.log(req.body);

//     const result = await db.createCustomer(req.body.name);
//     res.send(result);
//   } catch (ex) {
//     next(ex);
//   }
// });

// Get all users
app.get("/api/users", async (req, res, next) => {
  try {

    const result = await db.fetchUsers(req.body);
    res.send(result);
  } catch (ex) {
    next(ex);
  }
});

// Get all products
app.get("/api/products", async (req, res, next) => {
  try {
    console.log(req.body);

    const result = await db.fetchProducts(req.body);
    res.send(result);
  } catch (ex) {
    next(ex);
  }
});

// Get all favorites for a user
app.get("/api/users/:user_id/favorites", async (req, res, next) => {
  try {
    
    const result = await db.fetchFavorites(req.params.user_id);
    res.send(result);
  } catch (ex) {
    next(ex);
  }
});

// Add a favorite for a user
// app.post("/api/customers/:customer_id/reservation", async (req, res, next) => {
//   const { customer_id } = req.params;
//   const {  restaurantName, date, partyCount, customerName } = req.body;
//   try {
//     console.log(req.body);

//     const reservationCreation = await db.createReservation({
//       customerName: customerName,
//       restaurantName: restaurantName,
//       date: date,
//       partyCount: partyCount,
//     });

//     res.status(201).json(reservationCreation);
//   } catch (error) {
//     next(error);
//   }
// });

// Delete a favorite for a user
// app.delete(
//   "/api/customers/:customer_id/reservations/:id",
//   async (req, res, next) => {
//     try {
//       console.log(req.body);

//       await db.destroyReservation({
//         id: req.params.id,
//         customer_id: req.params.customer_id,
//       });
//       res.sendStatus(204);
//     } catch (ex) {
//       next(ex);
//     }
//   }
// );
