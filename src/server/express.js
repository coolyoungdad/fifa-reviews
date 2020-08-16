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
    let playerInfo = await scraper.getResults(req.body.FutbinURL) //gets player stats
    let playerImage = await scraper.fetchImg(req.body.FutwizURL) //gets images to make player image

   
    let player = helpers.addPlayer(playerImage, playerInfo, (new Date()).getTime())
    

    await helpers.addReview(await player, req.body.Rating, req.body.Review, req.body.Comparison, (new Date()).getTime())
    res.send('POST request to the homepage') 
    console.log('posting the posts')
})

app.listen(3001, () => console.log(`Example app listening at http://localhost:${3001}`))



// helpers.addPost(req.body.Rating, req.body.Review, req.body.Comparison, playerInfo, playerImage, (new Date()).getTime())