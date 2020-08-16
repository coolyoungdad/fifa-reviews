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
    const bgElement = document.body.querySelector("#Player-card");
    const bgImg = window.getComputedStyle(bgElement).getPropertyValue("background-image");
    scrapedPlayerImg['bgimage'] = bgImg;

    //gets player image
    const playerPicElement = document.body.querySelector("#player_pic");
    const playerImg = playerPicElement.getAttribute('src')
    scrapedPlayerImg['playerimage'] = `url("${playerImg}")`;

    //gets player overall rating for image
    const playerRatImg = document.body.querySelector("#Player-card > div.pcdisplay-rat").textContent;
    scrapedPlayerImg['playerRatImg'] = playerRatImg;

    //gets player name for image
    const playerNameCard = document.body.querySelector("#Player-card > div.pcdisplay-name").textContent;
    scrapedPlayerImg['playerNameCard'] = playerNameCard;

    //gets player position for image
    const playerPositionCard = document.body.querySelector("#Player-card > div.pcdisplay-pos").textContent;
    scrapedPlayerImg['playerPositionCard'] = playerPositionCard;

    //gets player country image
    const playerCountry = document.body.querySelector("#player_nation");
    const playerCountryImg = playerCountry.getAttribute('src')
    scrapedPlayerImg['playerCountryImage'] = playerCountryImg;

    //gets player club image
    const playerClub = document.body.querySelector("#player_club");
    const playerClubImg = playerClub.getAttribute('src')
    scrapedPlayerImg['playerClubImg'] = playerClubImg;

    //gets player pace
    const playerPaceStat = document.body.querySelector("#Player-card > div.ovrhover > div.pcdisplay-ovr1.stat-val").textContent;
    scrapedPlayerImg['playerPaceStat'] = playerPaceStat;
    const playerPAC = document.body.querySelector("#Player-card > div.ovrhover > div.pcdisplay-card-pace").textContent;
    scrapedPlayerImg['playerPAC'] = playerPAC;

    //gets player shooting
    const playerShootingStat = document.body.querySelector("#Player-card > div.ovrhover > div.pcdisplay-ovr2.stat-val").textContent;
    scrapedPlayerImg['playerShootingStat'] = playerShootingStat;
    const playerSHO = document.body.querySelector("#Player-card > div.ovrhover > div.pcdisplay-card-shoo").textContent;
    scrapedPlayerImg['playerSHO'] = playerSHO;

    //gets player passing
    const playerPassingStat = document.body.querySelector("#Player-card > div.ovrhover > div.pcdisplay-ovr3.stat-val").textContent;
    scrapedPlayerImg['playerPassingStat'] = playerPassingStat;
    const playerPAS = document.body.querySelector("#Player-card > div.ovrhover > div.pcdisplay-card-pas").textContent;
    scrapedPlayerImg['playerPAS'] = playerPAS;

     //gets player dribbling
     const playerDribblingStat = document.body.querySelector("#Player-card > div.ovrhover > div.pcdisplay-ovr4.stat-val").textContent;
     scrapedPlayerImg['playerDribblingStat'] = playerDribblingStat;
     const playerDRI = document.body.querySelector("#Player-card > div.ovrhover > div.pcdisplay-card-dri").textContent;
     scrapedPlayerImg['playerDRI'] = playerDRI;

      //gets player defense
    const playerDefenseStat = document.body.querySelector("#Player-card > div.ovrhover > div.pcdisplay-ovr5.stat-val").textContent;
    scrapedPlayerImg['playerDefenseStat'] = playerDefenseStat;
    const playerDEF = document.body.querySelector("#Player-card > div.ovrhover > div.pcdisplay-card-def").textContent;
    scrapedPlayerImg['playerDEF'] = playerDEF;

     //gets player physical
     const playerPhysicalStat = document.body.querySelector("#Player-card > div.ovrhover > div.pcdisplay-ovr6.stat-val").textContent;
     scrapedPlayerImg['playerPhysicalStat'] = playerPhysicalStat;
     const playerPHY = document.body.querySelector("#Player-card > div.ovrhover > div.pcdisplay-card-phy").textContent;
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
