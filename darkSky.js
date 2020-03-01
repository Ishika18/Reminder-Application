const axios = require('axios');
let darksky = 'https://api.darksky.net/forecast/';
let key = '55a1b0aafc740393ca2506b2ab5311dc';
let lat = 49.3; // van
let long = -123.1; // van
//let time = 1582992000 // feb 29 2020 4pm
let uri = darksky + key + '/' + lat +','+ long; // + "," + time;
uri = uri.concat('?units=ca&exclude=minutely,hourly,alerts,flags,currently');
    
var rainChance = []

async function getRainProbability() {
    rainChance = [];
    try {
        const darkData = await axios(uri);
        for(let i = 0; i < 8; i++){
            rainChance[i] = darkData.data.daily.data[i].precipProbability;
        }
        return rainChance;     
    } catch (error) {
      console.error(error);
    }
  } 


async function myFunc() {
    let x = await getRainProbability()
    console.log(x)
}

myFunc()
