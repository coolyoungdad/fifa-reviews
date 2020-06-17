const siteUrl = "https://www.futbin.com/20/player/45417/ronaldo";
const axios = require("axios");
const cheerio = require("cheerio");


const fetchData = async () => {
  const result = await axios.get(siteUrl);
  return cheerio.load(result.data);
};


const getResults = async () => {
  const $ = await fetchData();
  const playerStats = $('div.stat_val > div.stat_val');
  const playerMeta = $('#info_content > table > tbody > tr > td > a');
  const playerMetaToo = $('#info_content > table > tbody > tr > td');
  const playerTraits = $('#traits_content > div');


  playerMeta.each(function(){
    console.log(JSON.stringify($(this).text()));
  })

  playerMetaToo.each(function(){
    console.log(JSON.stringify($(this).text()));
  })

  playerTraits.each(function(){
    console.log(JSON.stringify($(this).text()));
  })  
  
  playerStats.each(function(){
    console.log(JSON.stringify($(this).text()));
  })
};

getResults(); 