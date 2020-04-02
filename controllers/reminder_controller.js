let Database = require("../database");
const axios = require('axios');

let remindersController = {

  landing_page: (req, res) => {
    res.render("reminder/landing")
  },

  create_reminder: (req, res) => {
    res.render('reminder/create_reminder', {reminders: Database.randomUserIdCindy.reminders})
  },

  edit_reminder: (req, res) => {
    res.render('reminder/edit_reminder', {reminders: Database.randomUserIdCindy.reminders})
  },

  single_reminder: (req, res) => {
    let userId = "randomUserIdCindy";
    if (userId === "randomUserIdCindy") {
      res.render('reminder/single_reminder', {reminders: Database.randomUserIdCindy.reminders})}
    }
  
  delete: (req, res) => {
    let reminderToFind = req.params.id;
    let reminderIndex = Database.cindy.reminders.findIndex(function(reminder) {
      return reminder.id == reminderToFind; 
    });
    Database.cindy.reminders.splice(reminderIndex, 1);
    res.redirect('/reminder');
  },

  // rl darkSky query
  dark_sky: async (req, res) => {

    //darkSky query string
    let lat = 49.3; // van
    let long = -123.1; // van

    // code below needs to go into ejs page, navigator is only runnable in browser
    /*
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(setLocation);
    } else {
      alert("Geolocation is not supported by this browser.");
    }
    
    function setLocation(location) {
      coords["latitude"] = location.coords.latitude;
      coords["longitude"] = location.coords.longitude;
    }  
    */

    //darkSky query string cont
    let darksky = 'https://api.darksky.net/forecast/';
    let key = '55a1b0aafc740393ca2506b2ab5311dc';
    let uri = darksky + key + '/' + lat +','+ long;
    uri = uri.concat('?units=ca&exclude=minutely,hourly,alerts,flags,currently');

    //append 8 days of rain chance as float to array
    let rainChance = []
    const darkData = await axios(uri);
    for(let i = 0; i < 8; i++){
        console.log(darkData.data.daily.data[i].precipProbability);
        rainChance[i] = darkData.data.daily.data[i].precipProbability;
    }
    console.log(rainChance)
  }
};

module.exports = remindersController;
