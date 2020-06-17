const siteUrl = "https://www.futbin.com/20/player/48282/jadon-sancho";
const axios = require("axios");
const cheerio = require("cheerio");


const fetchData = async () => {
  const result = await axios.get(siteUrl);
  return cheerio.load(result.data);
};


const getResults = async () => {
  const $ = await fetchData();
  const playerStats = $('.stat_val > .stat_val').text();
  

  for (var i = 0; i < playerStats.length; i++) {
    str = playerStats[i];
    const jsonString = JSON.stringify(str);
    console.log(jsonString)
  }

 
};

getResults(); 