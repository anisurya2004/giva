// db.js

import { Pool } from 'pg';

// Create a PostgreSQL connection pool
const pool = new Pool({
  user: 'postgres',          // Replace with your PostgreSQL username
  host: 'localhost',         // Database host
  database: 'productdb',     // Replace with your PostgreSQL database name
  password: 'pepsi', // Replace with your PostgreSQL password
  port: 5432,                // Default PostgreSQL port
});

export default pool;
