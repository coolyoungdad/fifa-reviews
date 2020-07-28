const axios = require("axios");
const cheerio = require("cheerio");
const got = require('got');
const request = require('request')
const { JSDOM } = require( "jsdom" );
// const { window } = new JSDOM( "" );
// const $ = require( "jquery" )( window );


const req_url= 'https://www.futbin.com/20/player/48746/arthur-masuaku';
const fetchImg = async () => {
request({uri: req_url}, function(error, response, body){
	if(!error && response.statusCode === 200){
    let {window} = new JSDOM(response.body);
    window.onload = () => {
    let img = window.document.querySelector('#Player-card')
    console.log(img)
    console.log(window.getComputedStyle(img, null))
    }
    // let text = dom.window.getComputedStyle(imgFinder, null);
    // console.log(imgFinder)
    // const img = dom.window.getComputedStyle(imgFinder, null).getPropertyValue('display');
		// console.log(img);
	}
});
}
fetchImg();




const fetchData = async (url) => {
  const result = await axios.get(url);
  return cheerio.load(result.data);
};

const getResults = async (url) => {
  const $ = await fetchData(url);

  const scrapedPlayerInfo = {}
  
  const playerMetadata = $('tr')
  playerMetadata.each((i, element) => {w
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
 
//  console.log(JSON.stringify(scrapedPlayerInfo));
 return JSON.stringify(scrapedPlayerInfo); 
};

module.exports = {
  getResults: getResults,
}
