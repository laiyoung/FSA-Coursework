// Imports here for express and pg:
const pg = require("pg");
const express = require("express");
const client = new pg.Client(
  process.env.DATABASE_URL || "postgres://localhost/acme_ice_cream_db"
);
const app = express();
const path = require("path");

// Parser for the JSON text:
app.use(express.json());
// Middleware for printing information + errors:
app.use(require('morgan')('dev'));

// Static routes here (you only need these for deployment + front end):
app.use(express.static(path.join(__dirname, "../client/dist")));

// All app routes here:

// Get all flavors
app.get("/api/flavors", async (req, res, next) => {
  try {
    const SQL = `
            SELECT * FROM flavors
            `;
    const response = await client.query(SQL);
    res.send(response.rows);
  } catch (ex) {
    next(ex);
  }
});

// Get 1 flavor by id
app.get("/api/flavors/:id", async (req, res, next) => {
  try {
    const SQL = `
            SELECT * FROM flavors 
            WHERE id = $1
            `;
    const response = await client.query(SQL, [req.params.id]);
    res.send(response.rows);
  } catch (ex) {
    next(ex);
  }
});

//Add a flavor
app.post("/api/flavors", async (req, res, next) => {
  try {
    console.log(req.body)
    const SQL = `
              INSERT INTO flavors(name)
              VALUES($1)
              RETURNING *
              `;
    const response = await client.query(SQL, [req.body.name]);
    res.send(response.rows[0]);
  } catch (ex) {
    next(ex);
  }
});

// Change a flavors details
app.put("/api/flavors/:id", async (req, res, next) => {
  try {
    const SQL = `
        UPDATE flavors
        SET name = $1, is_favorite = $2, updated_at = now()
        WHERE id = $3 
        RETURNING *
      `;
    const response = await client.query(SQL, [
      req.body.name,
      req.body.is_favorite,
      req.params.id,
    ]);
    res.send(response.rows[0]);
  } catch (error) {
    next(error);
  }
});
// Delete a flavor
app.delete("/api/flavors/:id", async (req, res, next) => {
  try {
    const SQL = `
        DELETE from flavors
        WHERE id = $1
      `;
    const response = await client.query(SQL, [req.params.id]);
    res.sendStatus(204);
  } catch (ex) {
    next();
  }
});

// Create your init function:
const init = async () => {
  await client.connect();
  const SQL = `
DROP TABLE IF EXISTS flavors;
CREATE TABLE flavors(
id SERIAL PRIMARY KEY,
name VARCHAR(50),
is_favorite BOOLEAN DEFAULT false,
created_at TIMESTAMP DEFAULT now(),
updated_at TIMESTAMP DEFAULT now()
);

INSERT INTO flavors(name, is_favorite) VALUES('vanilla', false), ('chocolate', true), ('strawberry', false)
`;

  await client.query(SQL);

  console.log("data seeded");

  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`listening on port ${port}`));
};
// Init function invocation:
init();
