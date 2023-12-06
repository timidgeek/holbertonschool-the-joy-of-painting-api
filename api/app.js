import express from 'express'
const app = express()

import { 
  getPaintings, 
  getSubject, 
  getColor, 
  getMonth } from '../api/queries.js'

app.get('/paintings_data', async(req, res) => {
  const paintings = await getPaintings()
  res.send(paintings)
}) 


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