const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const parser = require('body-parser')
const cors = require('cors')

app.disable('x-powered-by')
app.use(parser.json())
app.use(cors())

const routes = require('./routes/routes')
app.use('/events', routes)

app.use((err, req, res, next) => {
  const status = err.status || 500
  res.status(status).json({ error: { message: 'Server error' }})
})

app.use((req, res, next) => {
  res.status(404).json({ error: { message: 'Not found' }})
})

const listener = () => `Listening on port ${port}!`
app.listen(port, listener)

module.exports = app
