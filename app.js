const express = require('express')
const history = require('connect-history-api-fallback')
const app = express()
// Heroku dynamically sets a port
const PORT = process.env.PORT || 5000
app.use(history())
app.use(express.static('dist'))

app.listen(PORT, () => {
  console.log('server started on port 5000 ')
})
app.get('/health', (req, res) => {
  res.send('ok')
})
app.get('/version', (req, res) => {
  res.send('1')
})
