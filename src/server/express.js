var express = require('express')
var app = express()
var helpers = require('./databaseHelpers')
var scraper = require('./scraper')
var bodyParser = require('body-parser')
var cors = require('cors')

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())



// GET method route
app.get('/', async function (req, res) {
    res.send(await helpers.getPosts())
    console.log('getting the posts')
})

// POST method route
app.post('/', async function (req, res) {
    let playerInfo = await scraper.getResults(req.body.FutbinURL)
    helpers.addPost(req.body.Rating, req.body.Review, req.body.Comparison, playerInfo)
    res.send('POST request to the homepage')
    console.log('posting the posts')
})

app.listen(3001, () => console.log(`Example app listening at http://localhost:${3001}`))