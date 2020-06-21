
const axios = require("axios");
const cheerio = require("cheerio");

const siteUrl = "https://www.futbin.com/20/player/45417/ronaldo";

const fetchData = async () => {
  const result = await axios.get(siteUrl);
  return cheerio.load(result.data);
};

const getResults = async () => {
  const $ = await fetchData();

  const scrapedPlayerInfo = {}
  
  const playerMetadata = $('tr')
  playerMetadata.each((i, element) => {
    const metadataName = $(element).find('th').text().trim()
    const metadataValue = $(element).find('td').text().trim()
    scrapedPlayerInfo[metadataName] = metadataValue;
  })

  const mainStats = $('.main_stat')
  mainStats.each((i, element) => {
    const statName = $(element).find('.left_stat_name').text().trim()
    const statVal = $(element).find('.stat_val > .stat_val').text().trim()
    scrapedPlayerInfo[statName] = statVal;
  })


  const subStats = $('.sub_stat')
  subStats.each((i, element) => {
    const statName = $(element).find('.left_stat_name').text().trim()
    const statVal = $(element).find('.stat_val > .stat_val').text().trim()
    scrapedPlayerInfo[statName] = statVal;
  })
 
 console.log(JSON.stringify(scrapedPlayerInfo));
 return JSON.stringify(scrapedPlayerInfo); 
};

module.exports = {
  getResults: getResults,
  fetchData: fetchData
}
