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
// const paintings = await getPaintings()

export async function getSubject(subject) {
  const [rows] = await pool.query(`
  SELECT * 
  FROM paintings_data
  WHERE subject LIKE ?
  `, [subject])
  return rows[0]
}
// const subjectResult = await getSubject('%tree%')

export async function getColor(colors) {
  const [rows] = await pool.query(`
  SELECT * 
  FROM paintings_data
  WHERE colors LIKE ?
  `, [colors])
  return rows[0]
}
// const colorsResult = await getColor('%Prussian Blue%')

export async function getMonth(Month) {
  const [rows] = await pool.query(`
  SELECT * 
  FROM paintings_data
  WHERE colors = ?
  `, [Month])
  return rows[0]
}
// const month = await getMonth('%September%')

// console.log(subjectResult)