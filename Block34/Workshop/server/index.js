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

//Add a customer
app.post("/api/customers", async (req, res, next) => {
  try {
    console.log(req.body);

    const result = await db.createCustomer(req.body.name);
    res.send(result);
  } catch (ex) {
    next(ex);
  }
});

// Get all employees
// app.get("/api/employees", async (req, res, next) => {
//   try {
//     const SQL = `
//             SELECT * FROM employees
//             `;
//     const response = await client.query(SQL);
//     res.send(response.rows);
//   } catch (ex) {
//     next(ex);
//   }
// });

// Get all departments
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

// Delete an employee
// app.delete("/api/employees/:id", async (req, res, next) => {
//   try {
//     const SQL = `
//         DELETE from employees
//         WHERE id = $1
//       `;
//     const response = await client.query(SQL, [req.params.id]);
//     res.sendStatus(204);
//   } catch (ex) {
//     next();
//   }
// });

// Change an employee's details
// app.put("/api/employees/:id", async (req, res, next) => {
//   try {
//     const SQL = `
//         UPDATE employees
//         SET name = $1, department_id = (SELECT id from departments WHERE name=$2), updated_at = now()
//         WHERE id = $3
//         RETURNING *
//       `;
//     const response = await client.query(SQL, [
//       req.body.name,
//       req.body.department,
//       req.params.id,
//     ]);
//     res.send(response.rows[0]);
//   } catch (error) {
//     next(error);
//   }
// });
