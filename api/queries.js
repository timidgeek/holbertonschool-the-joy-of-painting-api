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
  WHERE Month LIKE ?
  `, [`%${Month}%`])
  return rows
}

// handle filter for searching
export async function filterEpisodes(colors, subject, Month, matchType) {
  // Construct the SQL query based on the received parameters and matchType
  let query = `SELECT * FROM paintings_data`;
  
  const conditions = [];
  const values = [];
  
  if (colors && colors.length) {
    conditions.push('colors IN (?)');
    values.push(colors);
  }

  if (subject && subject.length) {
    conditions.push('subject IN (?)');
    values.push(subject);
  }

  if (Month && Month.length) {
    conditions.push('Month IN (?)');
    values.push(Month);
  }

  // Add WHERE clause if conditions exist
  if (conditions.length > 0) {
    query += ' WHERE ';
    query += conditions.join(matchType === 'all' ? ' AND ' : ' OR ');
    }
  
  const [rows] = await pool.query(query, values.flat()); 
  return rows;
}
