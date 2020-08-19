const axios = require("axios");
const cheerio = require("cheerio");
const puppeteer = require('puppeteer');




const fetchImg = async (url) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: 'domcontentloaded' });
  const data = await page.evaluate(() => {
    const scrapedPlayerImg = {}

    //gets background image
    const bgElement = document.body.querySelector("#panel > div.main-content.background-dark > div > div.playerprofile-head > div.playerprofile-itemblock > div.playerprofile-item > div:nth-child(1) > div");
    const bgImg = window.getComputedStyle(bgElement).getPropertyValue("background-image");
    scrapedPlayerImg['bgimage'] = bgImg;

    //gets player image
    const playerPicElement = document.body.querySelector("#panel > div.main-content.background-dark > div > div.playerprofile-head > div.playerprofile-itemblock > div.playerprofile-item > div:nth-child(1) > div > div.card-20-face-alt > img");
    const playerImg = playerPicElement.getAttribute('src')
    scrapedPlayerImg['playerimage'] = playerImg;

    //gets player overall rating for image
    const playerRatImg = document.body.querySelector("#panel > div.main-content.background-dark > div > div.playerprofile-head > div.playerprofile-itemblock > div.playerprofile-item > div:nth-child(1) > div > div.card-20-rating").textContent;
    scrapedPlayerImg['playerRatImg'] = playerRatImg;

    //gets player name for image
    const playerNameCard = document.body.querySelector("#panel > div.main-content.background-dark > div > div.playerprofile-head > div.playerprofile-itemblock > div.playerprofile-item > div:nth-child(1) > div > div.card-20-name").textContent;
    scrapedPlayerImg['playerNameCard'] = playerNameCard;

    //gets player position for image
    const playerPositionCard = document.body.querySelector("#panel > div.main-content.background-dark > div > div.playerprofile-head > div.playerprofile-itemblock > div.playerprofile-item > div:nth-child(1) > div > div.card-20-position").textContent;
    scrapedPlayerImg['playerPositionCard'] = playerPositionCard;

    //gets player country image
    const playerCountry = document.body.querySelector("#panel > div.main-content.background-dark > div > div.playerprofile-head > div.playerprofile-itemblock > div.playerprofile-item > div:nth-child(1) > div > div.card-20-flag > img");
    const playerCountryImg = playerCountry.getAttribute('src')
    scrapedPlayerImg['playerCountryImage'] = playerCountryImg;

    //gets player club image
    const playerClub = document.body.querySelector("#panel > div.main-content.background-dark > div > div.playerprofile-head > div.playerprofile-itemblock > div.playerprofile-item > div:nth-child(1) > div > div.card-20-badge > img");
    const playerClubImg = playerClub.getAttribute('src')
    scrapedPlayerImg['playerClubImg'] = playerClubImg;

    //gets player pace
    const playerPaceStat = document.body.querySelector("#panel > div.main-content.background-dark > div > div.playerprofile-head > div.playerprofile-itemblock > div.playerprofile-item > div:nth-child(1) > div > div.card-20-atts > div.card-20-atts1 > div.card-20-attnum.card-20-attnum1").textContent;
    scrapedPlayerImg['playerPaceStat'] = playerPaceStat;
    const playerPAC = document.body.querySelector("#panel > div.main-content.background-dark > div > div.playerprofile-head > div.playerprofile-itemblock > div.playerprofile-item > div:nth-child(1) > div > div.card-20-atts > div.card-20-atts1 > div.card-20-attlabel.card-20-attlabel1").textContent;
    scrapedPlayerImg['playerPAC'] = playerPAC;

    //gets player shooting
    const playerShootingStat = document.body.querySelector("#panel > div.main-content.background-dark > div > div.playerprofile-head > div.playerprofile-itemblock > div.playerprofile-item > div:nth-child(1) > div > div.card-20-atts > div.card-20-atts2 > div.card-20-attnum.card-20-attnum2").textContent;
    scrapedPlayerImg['playerShootingStat'] = playerShootingStat;
    const playerSHO = document.body.querySelector("#panel > div.main-content.background-dark > div > div.playerprofile-head > div.playerprofile-itemblock > div.playerprofile-item > div:nth-child(1) > div > div.card-20-atts > div.card-20-atts2 > div.card-20-attlabel.card-20-attlabel2").textContent;
    scrapedPlayerImg['playerSHO'] = playerSHO;

    //gets player passing
    const playerPassingStat = document.body.querySelector("#panel > div.main-content.background-dark > div > div.playerprofile-head > div.playerprofile-itemblock > div.playerprofile-item > div:nth-child(1) > div > div.card-20-atts > div.card-20-atts3 > div.card-20-attnum.card-20-attnum3").textContent;
    scrapedPlayerImg['playerPassingStat'] = playerPassingStat;
    const playerPAS = document.body.querySelector("#panel > div.main-content.background-dark > div > div.playerprofile-head > div.playerprofile-itemblock > div.playerprofile-item > div:nth-child(1) > div > div.card-20-atts > div.card-20-atts3 > div.card-20-attlabel.card-20-attlabel3").textContent;
    scrapedPlayerImg['playerPAS'] = playerPAS;

     //gets player dribbling
     const playerDribblingStat = document.body.querySelector("#panel > div.main-content.background-dark > div > div.playerprofile-head > div.playerprofile-itemblock > div.playerprofile-item > div:nth-child(1) > div > div.card-20-atts > div.card-20-atts1 > div.card-20-attnum.card-20-attnum4").textContent;
     scrapedPlayerImg['playerDribblingStat'] = playerDribblingStat;
     const playerDRI = document.body.querySelector("#panel > div.main-content.background-dark > div > div.playerprofile-head > div.playerprofile-itemblock > div.playerprofile-item > div:nth-child(1) > div > div.card-20-atts > div.card-20-atts1 > div.card-20-attlabel.card-20-attlabel4").textContent;
     scrapedPlayerImg['playerDRI'] = playerDRI;

      //gets player defense
    const playerDefenseStat = document.body.querySelector("#panel > div.main-content.background-dark > div > div.playerprofile-head > div.playerprofile-itemblock > div.playerprofile-item > div:nth-child(1) > div > div.card-20-atts > div.card-20-atts2 > div.card-20-attnum.card-20-attnum5").textContent;
    scrapedPlayerImg['playerDefenseStat'] = playerDefenseStat;
    const playerDEF = document.body.querySelector("#panel > div.main-content.background-dark > div > div.playerprofile-head > div.playerprofile-itemblock > div.playerprofile-item > div:nth-child(1) > div > div.card-20-atts > div.card-20-atts2 > div.card-20-attlabel.card-20-attlabel5").textContent;
    scrapedPlayerImg['playerDEF'] = playerDEF;

     //gets player physical
     const playerPhysicalStat = document.body.querySelector("#panel > div.main-content.background-dark > div > div.playerprofile-head > div.playerprofile-itemblock > div.playerprofile-item > div:nth-child(1) > div > div.card-20-atts > div.card-20-atts3 > div.card-20-attnum.card-20-attnum6").textContent;
     scrapedPlayerImg['playerPhysicalStat'] = playerPhysicalStat;
     const playerPHY = document.body.querySelector("#panel > div.main-content.background-dark > div > div.playerprofile-head > div.playerprofile-itemblock > div.playerprofile-item > div:nth-child(1) > div > div.card-20-atts > div.card-20-atts3 > div.card-20-attlabel.card-20-attlabel6").textContent;
     scrapedPlayerImg['playerPHY'] = playerPHY;
    
     return JSON.stringify(scrapedPlayerImg);  
    
  });
  return data
  await browser.close();
};




const fetchData = async (url) => {
  const result = await axios.get(url);
  return cheerio.load(result.data);
};

const getResults = async (url) => {
  const $ = await fetchData(url);

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
 
//  console.log(JSON.stringify(scrapedPlayerInfo));
 return JSON.stringify(scrapedPlayerInfo); 
};

module.exports = {
  getResults: getResults,
  fetchImg: fetchImg
}
