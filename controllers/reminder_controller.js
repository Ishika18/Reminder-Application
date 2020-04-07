let Database = require("../database");
const fetch = require('node-fetch');

let remindersController = {

  landing_page: (req, res) => {
    res.render("reminder/landing_page")
  },

  create_reminder_page: (req, res) => {
    res.render('reminder/create_reminder_page', {reminders: Database.randomUserIdCindy.reminders})
  },

  edit_reminder_page: (req, res) => {
    res.render('reminder/edit_reminder_page', {reminders: Database.randomUserIdCindy.reminders})
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

  create_reminder: (req, res) => {
    console.log(req);
    let reminder = {
          datetime: [req.body.date, req.body.time],
          heading: req.body.heading,
          details: req.body.details,
          tags: [req.body],
          rain: 30
      };
      Database.randomUserIdCindy.reminders[Date.now()] = reminder;
      res.redirect(200, '/reminder/create_reminder_page');
    },

  edit_reminder: (req, res) => {
    // To get the id of the reminder and render the edit reminder page

    let reminderToFind = req.params.id;
    let searchResult = Database.cindy.reminders.find(function(reminder) {
      return reminder.id == reminderToFind; // Why do you think I chose NOT to use === here?
    })
    res.render('reminder/edit', { reminderItem: searchResult })

    res.render("reminder/edit_reminder_page", {reminder: Database.randomUserIdCindy.reminders})
  },

  update_reminder: (req, res) => {
      let reminderToFind = req.params.id;
      let searchResult = Database.cindy.reminders.find(function(reminder) {
        if(reminder.id == reminderToFind) {
          reminder.title = req.body.title,
              reminder.description = req.body.description,
              // Why do you think I had to do req.body.completed == "true" below?
              reminder.completed = req.body.completed == "true"
        }
      });

    },

  delete_reminder: (req, res) => {
      let reminderToFind = req.params.id;
      let reminderIndex = Database.cindy.reminders.findIndex(function(reminder) {
        return reminder.id == reminderToFind;
      })
      Database.cindy.reminders.splice(reminderIndex, 1);

    },

  // rl darkSky query
  dark_sky: async (req, res) => {

    //darkSky query string
    let lat = req.body.lat;
    let long = req.body.long;
    let darksky = 'https://api.darksky.net/forecast/';
    let key = '55a1b0aafc740393ca2506b2ab5311dc';
    let uri = darksky + key + '/' + lat +','+ long;
    uri = uri.concat('?units=ca&exclude=minutely,hourly,alerts,flags,currently');

    //append 8 days of rain chance as float to array
    let rainChance = [];
    const fetchDarkData = await fetch(uri);
    const darkData = await fetchDarkData.json()
    for(let i = 0; i < 8; i++){
      rainChance[i] = darkData.daily.data[i].precipProbability;
    }
    console.log(rainChance)
    // write to database, waiting on ejs implementation
    // res.redirect('/reminder/home');
  }
};

module.exports = remindersController;
