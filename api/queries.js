import mysql from 'mysql2';

import dotenv from 'dotenv'
dotenv.config()

// create collection of connections to database
const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise()

export async function getPaintings() {
  const [rows] = await pool.query("SELECT * FROM paintings_data")
  return rows
}

export async function getSubject(subject) {
  const query = `
    SELECT * 
    FROM paintings_data
    WHERE subject LIKE ?
  `;
  const [rows] = await pool.query(query, [`%${subject}%`]);
  return rows;
}

export async function getColor(colors) {
  // const [rows] = await pool.query(`
  // SELECT * 
  // FROM paintings_data
  // WHERE colors LIKE ?
  // `, [`%${colors}%`])
  // return rows

  const query = `
  SELECT * 
  FROM paintings_data
  WHERE colors LIKE ?
  `;
  const [rows] = await pool.query(query, [`%${colors}%`]);
  return rows;
}

export async function getMonth(Month) {
  const [rows] = await pool.query(`
  SELECT * 
  FROM paintings_data
  WHERE month = ?
  `, [`%${Month}%`])
  return rows
}

// handle filter for searching
export async function filterEpisodes(colors, subjects, months, matchType) {
  // Construct the SQL query based on the received parameters and matchType
  let query = `SELECT * FROM paintings_data WHERE `;
  
  // Modify the WHERE clause to include selected filters
  const conditions = [];
  
  if (colors && colors.length) {
    conditions.push(`colors IN (${colors.map(color => pool.escape(color)).join(',')})`);
  }
  
  if (subjects && subjects.length) {
    conditions.push(`subject IN (${subjects.map(subject => pool.escape(subject)).join(',')})`);
  }
  
  if (months && months.length) {
    conditions.push(`Month IN (${months.map(month => pool.escape(month)).join(',')})`);
  }

  if (matchType === 'all') {
    query += conditions.join(' AND ');
  } else if (matchType === 'any') {
    query += conditions.join(' OR ');
  }
  
  const [rows] = await pool.query(query);
  return rows;
}
