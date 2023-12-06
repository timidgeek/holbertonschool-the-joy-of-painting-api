import express from 'express'
const app = express()

app.get('/paintings_data', (req, res) => {
  res.send("This should be the paintings data")
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