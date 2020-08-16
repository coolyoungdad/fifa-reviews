const sqlite3 = require('sqlite3');
// connect to sqlite db
const DATABASE = new sqlite3.Database('./futdb.db');

// create tables within the DB off top. first time you run it it still might fail due to the insert
// commands running before the table's actually done being created
createTables();

module.exports = {
    addPlayer: addPlayer,
    addReview: addReview,
    getPosts: getPosts
}

/**
 * This creates a table for posts within the DB, if it does not already exist.
 */
function createTables() {
    DATABASE.run('CREATE TABLE IF NOT EXISTS players ( img TEXT NOT NULL, player_json TEXT NOT NULL, ts INTEGER NOT NULL)');
    DATABASE.run('CREATE TABLE IF NOT EXISTS reviews ( player_id INTEGER NOT NULL, ratings TEXT NOT NULL, review TEXT NOT NULL, comparisons TEXT NOT NULL, ts INTEGER NOT NULL)');
}



 /**
 * Inserts a player row and returns a promise containing the ID of that row
 * @param {string} img - url to img
 * @param {object} player_json 
 * @param {Date} date 
 * @returns promise that resolves to the rowId of the player just inserted
 */

function addPlayer(img, player_json, date) {
        return new Promise((resolve, reject) => {
            DATABASE.run('INSERT INTO players VALUES (?, ?, ?)', img, player_json, date, function(err) {
                if (err) reject(err);
                resolve(this.lastID);
                console.log(this.lastID)
            })
        }).catch(error => { console.log('caught', error.message); })
    }




function addReview(player_id, ratings, review, comparisons, date) {       
           DATABASE.run('INSERT INTO reviews VALUES (?, ?, ?, ?, ?)', player_id, ratings, review, comparisons, date);   
}

        /**
 * Inserts post data into the players & reviews table
 * @param {string} img
 * @param {string} ratings 
 * @param {string} review
 * @param {string} comparisons 
 * @param {string} player_json 
 */

// function addPost(ratings, review, comparisons, player_json, img, date) {
//     DATABASE.run('INSERT INTO players VALUES (?, ?, ?, ?)',  img, player_json, date);
//     DATABASE.run('INSERT INTO reviews VALUES (?, ?, ?, ?, ?, ?)', ratings, review, comparisons, date);
// }

// ------------------------------

/**
 * Get all posts
 * Returns a Promise containing an array of an array of strings, each sub-array being a row in the table and a complete post. Each array will include values in the order they were defined in the
 * CREATE TABLE statement above, as of writing: [ratings, reviews, comparisons, player_json, ts]
 * (returns Promise<string[][]>)
 */
function getPosts() {
    return new Promise((resolve, reject) => {
        DATABASE.all('SELECT reviews.ratings AS ratings, reviews.review AS review, reviews.comparisons AS comparisons, players.player_json AS player_json, players.img AS img FROM players, reviews WHERE players.rowid = reviews.player_id ORDER BY reviews.ts DESC', (err, rows) => {
            if (err) {
                reject(err);
            }
            console.log(rows);
            resolve(rows.map(row => {
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


// SELECT reviews.ratings AS ratings, reviews.review AS review, reviews.comparisons AS comparisons, players.player_json AS player_json, players.img AS img FROM players, reviews WHERE players.id = reviews.player_id ORDER BY reviews.ts DESC