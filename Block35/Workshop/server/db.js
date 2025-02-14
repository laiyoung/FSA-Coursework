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
    const result = await client.query(SQL, [username, hashedPassword ]);
    return result.rows[0];
};

// Creating a product data function:
const createProduct = async (productName) => {
  //   // console.log("db initialized");
  //   const SQL = `
  //               INSERT INTO restaurants(id, name) VALUES($1, $2)
  //               RETURNING *
  //               `;
  //   const result = await client.query(SQL, [uuid.v4(), restaurantName]);
  //   return result.rows[0];
};

// Creating a favorite data function:
const createFavorite = async (
  {
    //   customerName,
    //   restaurantName,
    //   date,
    //   partyCount,
  }
) => {
  //   const SQL = `
  //   INSERT INTO reservations(date, party_count, restaurant_id, customer_id)
  //   VALUES($1, $2,(SELECT id FROM restaurants WHERE name =$3), (SELECT id FROM customers WHERE name =$4))
  //   RETURNING *`;
  //   const result = await client.query(SQL, [
  //     date,
  //     partyCount,
  //     restaurantName,
  //     customerName,
  //   ]);
  //   return result.rows[0];
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
  //   const SQL = `
  //   SELECT name, id FROM restaurants
  //   `;
  //   const result = await client.query(SQL);
  //   return result.rows;
};

// Fetching all favorites for a user function:
const fetchFavorites = async () => {
  //   const SQL = `
  //   SELECT id, date, party_count, restaurant_id, customer_id FROM reservations
  //   `;
  //   const result = await client.query(SQL);
  //   return result.rows;
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
  await createUser("smilingJoe","password");
  await createUser("frowningFrank", "password");
  console.table(await fetchUsers())

  // ["Bob", "Janice", "Jerry"].forEach(async (name) => {
  //   await createCustomer(name);
  //   console.log("customer created: " + name);
  // });

  // ["Nobu", "76", "Chili's"].forEach(async (name) => {
  //   await createRestaurant(name);
  //   console.log("restaurant created: " + name);
  // });

  // let reservation1 = await createReservation({
  //   customerName: "Bob",
  //   restaurantName: "Nobu",
  //   date: "2025-02-14",
  //   partyCount: 2,
  // });
  // console.log("reservation created:", reservation1);

  // let reservation2 = await createReservation({
  //   customerName: "Janice",
  //   restaurantName: "Chili's",
  //   date: "2025-02-18",
  //   partyCount: 6,
  // });
  // console.log("reservation created:", reservation2);
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
