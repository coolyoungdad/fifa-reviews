var express = require('express')
var app = express()
var helpers = require('./databaseHelpers-postgres') //was ./databaseHelpers before
var scraper = require('./scraper')
var bodyParser = require('body-parser')
var cors = require('cors')
var axios = require('axios')
var path = require('path');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const PORT = process.env.PORT || 3001;

// GET method route
app.get('/api', async function (req, res) {
    res.send(await helpers.getPosts())
    console.log('getting the posts')
})

// POST method route
app.post('/api', async function (req, res) {
    let playerInfo = await scraper.getResults(req.body.FutbinURL) //gets player stats
    let playerImage = await scraper.fetchImg(req.body.FutwizURL) //gets images to make player image 
    let player =  helpers.addPlayer(playerImage, playerInfo, (new Date()).getTime())
    await helpers.addReview(await player.rows[0], req.body.Rating, req.body.Review, req.body.Comparison, (new Date()).getTime())
    res.send('POST request to the homepage') 
    console.log('posting the posts')
})

app.use(express.static(path.join(__dirname, '/../../build')));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/../../build', 'index.html'));
});

app.listen(PORT, () => console.log(`Example app listening at http://localhost:${PORT}`))