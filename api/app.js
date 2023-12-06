import express from 'express'
const app = express()

import { 
  getPaintings, 
  getSubject, 
  getColor, 
  getMonth } from '../api/queries.js'

// route handler to retrieve all paintings info
app.get('/paintings_data', async(req, res) => {
  const paintings = await getPaintings()
  res.send(paintings)
})

// route handler to retrieve subject
app.get('/paintings_data/subject', async(req, res) => {
  const { subject } = req.query
  const paintings = await getSubject(subject)
  res.send(paintings)
})

// route handler to retrieve color
app.get('/paintings_data/colors', async (req, res) => {
  const { colors } = req.query;
  const paintings = await getColor(colors);
  res.send(paintings);
});

// route handler to retrieve subject
app.get('/paintings_data/Month', async(req, res) => {
  const { month } = req.query
  const paintings = await getMonth(month)
  res.send(paintings)
})

// Endpoint to filter episodes based on multiple criteria
app.get('/episodes', async (req, res) => {
  const { colors, subjects, months, matchType } = req.query;

  // Use the received parameters to form the query
  // Based on the matchType, construct the query accordingly
  const episodes = await filterEpisodes(colors, subjects, months, matchType);

  res.json(episodes);
});

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

/* using port 8080, because it is less 
  likely to be occupied by other services or 
  applications */
app.listen(8080, () => {
  console.log('Server is running on port 8080')
})