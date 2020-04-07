let Database = require("../database");
const axios = require('axios');

let remindersController = {

  selectReminder: (req, res) => {
    console.log(req);
    res.render("reminder/edit_reminder", {reminder: Database.randomUserIdCindy.reminders.req})
  },

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
      res.render('reminder/single_reminder', {reminders: Database.randomUserIdCindy.reminders})
    }
  },

  list: (req, res) => {
      res.render('reminder/index', { reminders: Database.cindy.reminders })
  },

  new: (req, res) => {
      res.render('reminder/create')
  },

  listOne: (req, res) => {
      let reminderToFind = req.params.id;
      let searchResult = Database.cindy.reminders.find(function(reminder) {
        return reminder.id == reminderToFind; // good test question for students what happens if I put ===
      })
      if (searchResult != undefined) {
        res.render('reminder/single-reminder', { reminderItem: searchResult })
      } else {
        res.render('reminder/index', { reminders: Database.cindy.reminders })
      }
    },

  create: (req, res) => {
    let reminder = {
        id: Database.cindy.reminders.length+1,
        title: req.body.title,
        description: req.body.description,
        completed: false
      }
      Database.cindy.reminders.push(reminder);
      res.redirect('/reminder');
    },

        edit: (req, res) => {
      let reminderToFind = req.params.id;
      let searchResult = Database.cindy.reminders.find(function(reminder) {
        return reminder.id == reminderToFind; // Why do you think I chose NOT to use === here?
      })
      res.render('reminder/edit', { reminderItem: searchResult })

    },

        update: (req, res) => {
      let reminderToFind = req.params.id;
      let searchResult = Database.cindy.reminders.find(function(reminder) {
        if(reminder.id == reminderToFind) {
          reminder.title = req.body.title,
              reminder.description = req.body.description,
              // Why do you think I had to do req.body.completed == "true" below?
              reminder.completed = req.body.completed == "true"
        }
      });
      res.redirect('/reminder/' + reminderToFind)
    },

        delete: (req, res) => {
      let reminderToFind = req.params.id;
      let reminderIndex = Database.cindy.reminders.findIndex(function(reminder) {
        return reminder.id == reminderToFind;
      })
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
