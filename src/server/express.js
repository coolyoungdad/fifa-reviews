var express = require('express')
var app = express()

// GET method route
app.get('/', function (req, res) {
    res.send('GET request to the homepage')
    console.log('pee')
})
  
  // POST method route
app.post('/', function (req, res) {
    res.send('POST request to the homepage')
    console.log('butts')
})