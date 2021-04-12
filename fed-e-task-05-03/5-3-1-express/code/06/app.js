const express = require('express')

const app = express()

// app.use(function (req, res, next) {
//   console.log('Time:', Date.now())
//   next()
// })

/* app.use('/user/:id', function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
}) */

app.use('/user/:id', function (req, res, next) {
  console.log('Request URL:', req.originalUrl)
  next()
}, function (req, res, next) {
  console.log('Request Type:', req.method)
  next()
})

app.get('/user/:id', function (req, res, next) {
  console.log('ID:', req.params.id)
  next()
})

// handler for the /user/:id path, which prints the user ID
app.get('/user/:id', function (req, res, next) {
  res.end(req.params.id)
})
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(3000, () => {
  console.log(`Server running at http://localhost:3000/`)
})
