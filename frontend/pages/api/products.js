import pool from '../../db';

export default async function handler(req, res) {
  try {
    const result = await pool.query('SELECT * FROM products ORDER BY id');
    res.status(200).json(result.rows);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Failed to fetch products' });
  }
}
