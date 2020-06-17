const siteUrl = "https://www.futbin.com/20/player/45417/ronaldo";
const axios = require("axios");
const cheerio = require("cheerio");


const fetchData = async () => {
  const result = await axios.get(siteUrl);
  return cheerio.load(result.data);
};


const getResults = async () => {
  const $ = await fetchData();
  const playerStats = $('.stat_val').text();

  console.log(playerStats)
};

getResults();