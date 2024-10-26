import { pool } from "../config/database.js"


export const getData = async () => {
  const result = await pool.query("SELECT * FROM example")
  return result.rows;
}


export const addData = async (name, description, price, quantity) => {
  const query = `
    INSERT INTO example (name, description, price, quantity)
    VALUES ($1, $2, $3, $4)
    RETURNING *;
  `;
  const values = [name, description, price, quantity];

  const result = await pool.query(query, values);
  return result.rows[0];  // Return the newly added row
};

export const deleteData = async (id) => {
  const query = `DELETE FROM example WHERE id = $1 RETURNING *;`;
  const values = [id];

  const result = await pool.query(query, values);
  return result.rows[0];  // Return the deleted row
};

export const editData = async (id, name, description, price, quantity) => {
  const query = `
    UPDATE example
    SET name = $2, description = $3, price = $4, quantity = $5
    WHERE id = $1
    RETURNING *;
  `;
  const values = [id, name, description, price, quantity];

  const result = await pool.query(query, values);
  return result.rows[0];  // Return the updated row
};
