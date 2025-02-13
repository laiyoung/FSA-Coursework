/** Holding the data layer for SQL interactions (Postgres Connection) */

// Imports here for pg:
const pg = require("pg");

// Adding UUID generation capability:
const uuid = require("uuid");

// Client set up:
const client = new pg.Client(
  process.env.DATABASE_URL || "postgres://localhost/acme_dining_db"
);

// Creating a customer data function:
const createCustomer = async (customerName) => {
  // console.log("db initialized");
  const SQL = `
        INSERT INTO customers(id, name) VALUES($1, $2)
        RETURNING *
        `;
  const result = await client.query(SQL, [uuid.v4(), customerName]);
  return result.rows[0];
};

// Creating a restaurant data function:
const createRestaurant = async (restaurantName) => {
  // console.log("db initialized");
  const SQL = `
              INSERT INTO restaurants(id, name) VALUES($1, $2)
              RETURNING *
              `;
  const result = await client.query(SQL, [uuid.v4(), restaurantName]);
  return result.rows[0];
};

// Creating a reservation data function:
const createReservation = async ({
  customerName,
  restaurantName,
  date,
  partyCount,
}) => {
  const SQL = ` 
  INSERT INTO reservations(date, party_count, restaurant_id, customer_id) 
  VALUES($1, $2,(SELECT id FROM restaurants WHERE name =$3), (SELECT id FROM customers WHERE name =$4))  
  RETURNING *`;

  const result = await client.query(SQL, [
    date,
    partyCount,
    restaurantName,
    customerName,
  ]);
  return result.rows[0];
};

// Deleting a reservation data function:
const destroyReservation = async ({ id, customer_id }) => {
  console.log(id, customer_id);
  const SQL = `
        DELETE FROM reservations
        WHERE id = $1 and customer_id = $2
      `;

  await client.query(SQL, [id, customer_id]);
};

// Fetching all customers function:
const fetchCustomers = async () => {
  const SQL = `
  SELECT name, id FROM customers
  `;
  const result = await client.query(SQL);
  return result.rows;
};

// Fetching all restaurants function:
const fetchRestaurants = async () => {
  const SQL = `
  SELECT name, id FROM restaurants
  `;
  const result = await client.query(SQL);
  return result.rows;
};

// Fetching all reservations function:
const fetchReservations = async () => {
  const SQL = `
  SELECT id, date, party_count, restaurant_id, customer_id FROM reservations
  `;
  const result = await client.query(SQL);
  return result.rows;
};

// Create your init function:
const init = async () => {
  await client.connect();

  const SQL = `
      DROP TABLE IF EXISTS reservations;
      DROP TABLE IF EXISTS customers;
      DROP TABLE IF EXISTS restaurants;
      
      CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

      CREATE TABLE restaurants(
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      name VARCHAR(50) NOT NULL
      );

      CREATE TABLE customers(
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      name VARCHAR(50) NOT NULL
      );
      
      CREATE TABLE reservations(
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      date DATE NOT NULL,
      party_count INTEGER NOT NULL,
      restaurant_id UUID REFERENCES restaurants(id) NOT NULL,
      customer_id UUID REFERENCES customers(id) NOT NULL
      );
      
      `;

  await client.query(SQL);

  ["Bob", "Janice", "Jerry"].forEach(async (name) => {
    await createCustomer(name);
    console.log("customer created: " + name);
  });

  ["Nobu", "76", "Chili's"].forEach(async (name) => {
    await createRestaurant(name);
    console.log("restaurant created: " + name);
  });

  let reservation1 = await createReservation({
    customerName: "Bob",
    restaurantName: "Nobu",
    date: "2025-02-14",
    partyCount: 2,
  });
  console.log("reservation created:", reservation1);

  let reservation2 = await createReservation({
    customerName: "Janice",
    restaurantName: "Chili's",
    date: "2025-02-18",
    partyCount: 6,
  });
  console.log("reservation created:", reservation2);
  // Requires date format of: yyyy-mm-dd
};

//Allowing the init function to be exported:
module.exports = {
  init,
  createCustomer,
  createRestaurant,
  createReservation,
  fetchCustomers,
  fetchRestaurants,
  fetchReservations,
  destroyReservation,
};
