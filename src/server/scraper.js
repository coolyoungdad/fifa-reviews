const axios = require("axios");
const cheerio = require("cheerio");
const puppeteer = require('puppeteer');


let req_url = "https://www.futbin.com/20/player/45417/ronaldo";

const fetchImg = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(req_url, { waitUntil: 'domcontentloaded' });
  const data = await page.evaluate(() => {
    const scrapedPlayerImg = {}

    //gets background image
    const bgelement = document.body.querySelector("#Player-card");
    const bgimage = window.getComputedStyle(bgelement).getPropertyValue("background-image");
    scrapedPlayerImg['bgimage'] = bgimage;

    //gets player image
    const playerPicElement = document.body.querySelector("#player_pic");
    const playerImg = playerPicElement.getAttribute('src')
    scrapedPlayerImg['playerimage'] = playerImg;

    //gets player overall rating for image
    const playerRatImg = document.body.querySelector("#Player-card > div.pcdisplay-rat").textContent;
    scrapedPlayerImg['playerRatImg'] = playerRatImg;

    //gets player name for image
    const playerNameCard = document.body.querySelector("#Player-card > div.pcdisplay-name").textContent;
    scrapedPlayerImg['playerNameCard'] = playerNameCard;

    //gets player position for image
    const playerPositionCard = document.body.querySelector("#Player-card > div.pcdisplay-pos").textContent;
    scrapedPlayerImg['playerPositionCard'] = playerPositionCard;


    return JSON.stringify(scrapedPlayerImg);   
  });

  console.log(data)
  await browser.close();
};

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
