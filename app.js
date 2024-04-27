const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/app2', (req, res) => {
  res.send('Lets fucking go! Finally got it to work!')
})

app.listen(port, () => {
  console.log(`Sean's epic app is listening on port ${port}`)
})