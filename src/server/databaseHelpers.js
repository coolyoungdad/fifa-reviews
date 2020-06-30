const sqlite3 = require('sqlite3');
// connect to sqlite db
const DATABASE = new sqlite3.Database('./futdb.db');
// create tables within the DB off top. first time you run it it still might fail due to the insert
// commands running before the table's actually done being created
createTables();

module.exports = {
    addPost: addPost,
    getPosts: getPosts
}

/**
 * This creates a table for posts within the DB, if it does not already exist.
 */
function createTables() {
    DATABASE.run('CREATE TABLE IF NOT EXISTS posts (ratings TEXT NOT NULL, review TEXT NOT NULL, comparisons TEXT NOT NULL, player_json TEXT NOT NULL, ts INTEGER NOT NULL)');
}

/**
 * Inserts post data into the reviews table
 * @param {string} ratings 
 * @param {string} review
 * @param {string} comparisons 
 * @param {string} player_json 
 */
function addPost(ratings, review, comparisons, player_json) {
    DATABASE.run('INSERT INTO posts VALUES (?, ?, ?, ?, ?)', ratings, review, comparisons, player_json, (new Date()).getTime());
}

/**
 * Get all posts
 * Returns a Promise containing an array of an array of strings, each sub-array being a row in the table and a complete post. Each array will include values in the order they were defined in the
 * CREATE TABLE statement above, as of writing: [ratings, reviews, comparisons, player_json, ts]
 * (returns Promise<string[][]>)
 */
function getPosts() {
    return new Promise((resolve, reject) => {
        DATABASE.all('SELECT * from posts ORDER BY ts DESC', (err, rows) => {
            if (err) {
                reject(err);
            }
            console.log(rows);
            resolve(rows.map(row => {
                return {
                    ratings: row['ratings'],
                    review: row['review'],
                    comparisons: row['comparisons'],
                    player_json: JSON.parse(row['player_json'])
                }
            }));
        });
    })
}