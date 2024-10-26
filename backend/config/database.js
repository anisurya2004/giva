import pg from 'pg'
import { config } from "dotenv";

const { Pool } = pg

config()

export const pool = new Pool({
  connectionString: process.env.DB_URL
})


const createTableQuery = `
CREATE TABLE IF NOT EXISTS example (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  description TEXT,
  price FLOAT NOT NULL,
  quantity INTEGER NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
`;

async function createTable() {
  try {
    await pool.query(createTableQuery);
    console.log('Table "example" created successfully.');
  } catch (err) {
    console.error('Error creating table:', err);
  }
}

createTable();

