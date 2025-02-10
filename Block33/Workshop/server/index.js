// Imports here for express and pg:
const pg = require("pg");
const express = require("express");
const client = new pg.Client(
  process.env.DATABASE_URL || "postgres://localhost/acme_hr_db"
);
const app = express();
const path = require("path");

// Parser for the JSON text:
app.use(express.json());
// Middleware for printing information + errors:
app.use(require("morgan")("dev"));

// Static routes here (you only need these for deployment + front end):
app.use(express.static(path.join(__dirname, "../client/dist")));

// All app routes here:

// Get all employees
app.get("/api/employees", async (req, res, next) => {
  try {
    const SQL = `
            SELECT * FROM employees
            `;
    const response = await client.query(SQL);
    res.send(response.rows);
  } catch (ex) {
    next(ex);
  }
});

// Get all departments
app.get("/api/departments", async (req, res, next) => {
  try {
    const SQL = `
            SELECT * FROM departments
            `;
    const response = await client.query(SQL);
    res.send(response.rows);
  } catch (ex) {
    next(ex);
  }
});

//Add an employee
app.post("/api/employees", async (req, res, next) => {
  try {
    console.log(req.body);
    const SQL = `
              INSERT INTO employees(name, department_id)
              VALUES($1,(SELECT id from departments WHERE name=$2))
              RETURNING *
              `;
    const response = await client.query(SQL, [
      req.body.name,
      req.body.department,
    ]);
    res.send(response.rows[0]);
  } catch (ex) {
    next(ex);
  }
});

// Delete an employee
app.delete("/api/employees/:id", async (req, res, next) => {
  try {
    const SQL = `
        DELETE from employees
        WHERE id = $1
      `;
    const response = await client.query(SQL, [req.params.id]);
    res.sendStatus(204);
  } catch (ex) {
    next();
  }
});

// Change an employee's details
app.put("/api/employees/:id", async (req, res, next) => {
  try {
    const SQL = `
        UPDATE employees
        SET name = $1, department_id = (SELECT id from departments WHERE name=$2), updated_at = now()
        WHERE id = $3
        RETURNING *
      `;
    const response = await client.query(SQL, [
      req.body.name,
      req.body.department,
      req.params.id,
    ]);
    res.send(response.rows[0]);
  } catch (error) {
    next(error);
  }
});

// Create your init function:
const init = async () => {
  await client.connect();

  const SQL = `
DROP TABLE IF EXISTS employees;
DROP TABLE IF EXISTS departments;

CREATE TABLE departments(
id SERIAL PRIMARY KEY,
name VARCHAR(50)
);

CREATE TABLE employees(
id SERIAL PRIMARY KEY,
name VARCHAR(50),
created_at TIMESTAMP DEFAULT now(),
updated_at TIMESTAMP DEFAULT now(),
department_id INTEGER REFERENCES departments(id) NOT NULL
);

INSERT INTO departments (name) VALUES ('accounting'), ('creative'), ('information technology'), ('human resources');
INSERT INTO employees (name, department_id) VALUES ('Donna', (SELECT id from departments WHERE name = 'accounting')),
('Alistair', (SELECT id from departments WHERE name = 'creative')), ('Tracey', (SELECT id from departments WHERE name = 'information technology')),
('Henry Russell', (SELECT id from departments WHERE name = 'human resources'))

;


`;

  await client.query(SQL);

  console.log("data seeded");

  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`listening on port ${port}`));
};
// Init function invocation:
init();
