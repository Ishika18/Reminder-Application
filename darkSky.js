const axios = require('axios');
const express = require('express');
const app = express();
const port = 6969;

app.get('/', (req, res) => res.send("Server Communicating")) // req allows you to handle input to server
app.listen(port, () => console.log("listening on port" + port))
//express server above

let lat = 49.3; // van
let long = -123.1; // van
let darksky = 'https://api.darksky.net/forecast/';
let key = '55a1b0aafc740393ca2506b2ab5311dc';
let uri = darksky + key + '/' + lat +','+ long;
uri = uri.concat('?units=ca&exclude=minutely,hourly,alerts,flags,currently');
    
var rainChance = [];

async function getDarkSkyData() {
    try {
        const darkData = await axios(uri);
        return darkData   
    } catch (error) {
      console.error(error);
    }
  }

function darkSkyDataToArray() {
    let rainChance = [];
    getDarkSkyData().then(function(myJsonData) {
        
        for(let i = 0; i < 8; i++){
            console.log(myJsonData.data.daily.data[i].precipProbability);
            rainChance[i] = myJsonData.data.daily.data[i].precipProbability;
            //console.log works but inserting floats into the array doesnt
        }
        
    });
    return(rainChance)
    //doesn't return anything
}

darkSkyDataToArray();