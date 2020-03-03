//var geo = require("./Geolocation.js")

//let coords = geo.getLocation

const axios = require('axios');
const express = require('express');
const app = express();
const port = 6969;

app.get('/', (req, res) => res.send("Server Communicating")) // req allows you to handle input to server
app.listen(port, () => console.log("listening on port" + port))

// Geolocation API below for html5
let lat = 49.3; // van
let long = -123.1; // van
/*

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setPosition);
    } else { 
        console.log("Geolocation is not supported by this browser.")
    }
}
function setPosition(position) {
    lat = position.coords.latitude;
    long = position.coords.longitude;
    return [latitude, longitude]
}
*/

let darksky = 'https://api.darksky.net/forecast/';
let key = '55a1b0aafc740393ca2506b2ab5311dc';
////let lat = coords[0]
//let long = coords[1]

//let time = 1582992000 // feb 29 2020 4pm
let uri = darksky + key + '/' + lat +','+ long; // + "," + time;
uri = uri.concat('?units=ca&exclude=minutely,hourly,alerts,flags,currently');
    
var rainChance = []

async function getRainProbability() {
    rainChance = [];
    try {
        const darkData = await axios(uri);
      //  let dataJson = await darkData.json();
        //console.log(dataJson)
        for(let i = 0; i < 8; i++){
            rainChance[i] = darkData.data.daily.data[i].precipProbability;
        }
        console.log(rainChance)
        return darkData   
    } catch (error) {
      console.error(error);
    }
  }

function myFunc2() {
    let rainChance = [];
    let x = getRainProbability().then(function(myJsonData) {
        
        for(let i = 0; i < 8; i++){
            console.log(myJsonData.data.daily.data[i].precipProbability)
            rainChance[i] = myJsonData.data.daily.data[i].precipProbability;
        }
        console.log("hello")
        console.log(rainChance)
        console.log("hello")
    })
    
}


//getLocation()
myFunc2()
