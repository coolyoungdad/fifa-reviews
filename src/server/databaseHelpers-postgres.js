require('dotenv').config()
const { Pool, Client } = require('pg')

const connectionString =  process.env.DATABASE_URL 
console.log(connectionString)

const pool = new Pool({
    connectionString: connectionString,
  })
  

const client = new Client ({
    connectionString: connectionString,
})

function createTables() {
    pool.query('CREATE TABLE players (id SERIAL PRIMARY KEY, img TEXT NOT NULL, player_json TEXT NOT NULL, ts BIGINT NOT NULL)');
    pool.query('CREATE TABLE reviews (player_id INTEGER NOT NULL, ratings TEXT NOT NULL, review TEXT NOT NULL, comparisons TEXT NOT NULL, ts BIGINT NOT NULL)');
    }
createTables()

// Get all posts query
function getPosts() {
    return new Promise((resolve, reject) => {
        pool.query('SELECT reviews.ratings AS ratings, reviews.review AS review, reviews.comparisons AS comparisons, players.player_json AS player_json, players.img AS img FROM players, reviews WHERE players.id = reviews.player_id ORDER BY reviews.ts DESC', (err, rows) => {
            if (err) {
                reject(err);
            }
            console.log(rows.rows);
            resolve(rows.rows.map(row => {
                return {
                    img: row['img'],
                    ratings: row['ratings'],
                    review: row['review'],
                    comparisons: row['comparisons'],
                    player_json: JSON.parse(row['player_json'])
                }
            }));
        });
    })
}


function addPlayer(img, player_json, date) {
        return new Promise((resolve, reject) => {
        pool.query("INSERT INTO players(img, player_json, ts) VALUES($1, $2, $3) RETURNING *", [img, player_json, date], (error, results) => {
            if (error) {
                reject(error);
            }
            console.log(`player data added to players`)
            resolve(results);
          })
        })
    }


function addReview(player_id, ratings, review, comparisons, date) {      
    return new Promise((resolve, reject) => { 
    pool.query("INSERT INTO reviews (player_id, ratings, review, comparisons, ts) VALUES ($1, $2, $3, $4, $5)", [player_id, ratings, review, comparisons, date], (error, results) => {
        if (error) {
            reject(error);
        }
        console.log(`review data added to reviews`)
        resolve(results);
        })
      })
    }


module.exports = {
    addPlayer: addPlayer,
    addReview: addReview,
    getPosts: getPosts
}
