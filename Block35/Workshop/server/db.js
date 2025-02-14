/** Holding the data layer for SQL interactions (Postgres Connection) */

// Imports here for pg:
const pg = require("pg");

// Adding UUID generation capability:
const uuid = require("uuid");

// Adding UUI generation capability:
const bcrypt = require("bcrypt");

// Client set up:
const client = new pg.Client(
  process.env.DATABASE_URL || "postgres://localhost/acme_store_db"
);

// Creating a user data function:
const createUser = async (username, password) => {
  const SQL = `
          INSERT INTO users(username, password) 
          VALUES($1, $2)
          RETURNING *
          `;
  const hashedPassword = await bcrypt.hash(password, 5);
  const result = await client.query(SQL, [username, hashedPassword]);
  return result.rows[0];
};

// Creating a product data function:
const createProduct = async (name) => {
  // console.log("db initialized");
  const SQL = `
                INSERT INTO products(name) VALUES($1)
                RETURNING *
                `;
  const result = await client.query(SQL, [name]);
  return result.rows[0];
};

// Creating a favorite data function:
const createFavorite = async ({ username, productName }) => {
  const SQL = `
    INSERT INTO favorites(user_id, product_id)
    VALUES((SELECT id FROM users WHERE username =$1), (SELECT id FROM products WHERE name =$2))
    RETURNING *`;
  const result = await client.query(SQL, [username, productName]);
  return result.rows[0];
};

// Deleting a favorite data function:
const destroyFavorite = async ({ id, customer_id }) => {
  //   console.log(id, customer_id);
  //   const SQL = `
  //         DELETE FROM reservations
  //         WHERE id = $1 and customer_id = $2
  //       `;
  //   await client.query(SQL, [id, customer_id]);
};

// Fetching all users function:
const fetchUsers = async () => {
  const SQL = `
    SELECT * FROM users
    `;
  const result = await client.query(SQL);
  return result.rows;
};

// Fetching all products function:
const fetchProducts = async () => {
  const SQL = `
    SELECT * FROM products
    `;
  const result = await client.query(SQL);
  return result.rows;
};

// Fetching all favorites for a user function:
const fetchFavorites = async (user_id) => {
    const SQL = `
    SELECT * FROM favorites
    WHERE user_id = $1
    `;
    const result = await client.query(SQL, [user_id]);
    return result.rows;
};

// Function to create tables (this will NOT be exported to index):
const creatTables = async (params) => {
  const SQL = `
      DROP TABLE IF EXISTS favorites;
      DROP TABLE IF EXISTS users;
      DROP TABLE IF EXISTS products;
      
      CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

      CREATE TABLE users(
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      username VARCHAR(50) UNIQUE,
      password VARCHAR(100)
      );

      CREATE TABLE products(
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      name VARCHAR(50) NOT NULL
      );
      
      CREATE TABLE favorites(
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      product_id UUID REFERENCES products(id) NOT NULL,
      user_id UUID REFERENCES users(id) NOT NULL,
      CONSTRAINT unique_product_user UNIQUE (product_id, user_id)
      );
      
      `;

  await client.query(SQL);
};

// Create your init function:
const init = async () => {
  // console.log("init db layer")

  await client.connect();
  await creatTables();
  await createUser("sleepyJoe", "password");
  await createUser("frowningFrank", "password");
  await createUser("madMarge", "password");
  console.table(await fetchUsers());

  [
    "Fresh Brush Toothbrush",
    "Lavender Milk Bath Salts",
    "Peony Face Oil",
  ].forEach(async (productName) => {
    await createProduct(productName);
    console.log("product created: " + productName);
  });

  let favorite1 = await createFavorite({
    username: "sleepyJoe",
    productName: "Lavender Milk Bath Salts",
  });
  console.log("favorite created:", favorite1);

  let favorite2 = await createFavorite({
    username: "madMarge",
    productName: "Peony Face Oil",
  });
  console.log("favorite created:", favorite2);

  let favorite3 = await createFavorite({
    username: "madMarge",
    productName: "Fresh Brush Toothbrush",
  });
  console.log("favorite created:", favorite3);
};

//Allowing the init function to be exported:
module.exports = {
  init,
  createUser,
  createProduct,
  createFavorite,
  fetchUsers,
  fetchProducts,
  fetchFavorites,
  destroyFavorite,
};
