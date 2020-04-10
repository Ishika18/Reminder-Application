let Database = require("../database");
const fetch = require('node-fetch');
const firebase = require("firebase/app");

// add the fireabse products that you want to use
require("firebase/auth");
require("firebase/firestore");

// app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDIkicA6DLOcEJBsiZLY1dYDj4ZwJPm7OI",
  authDomain: "reminder-application-aaa3e.firebaseapp.com",
  databaseURL: "https://reminder-application-aaa3e.firebaseio.com",
  projectId: "reminder-application-aaa3e",
  storageBucket: "reminder-application-aaa3e.appspot.com",
  messagingSenderId: "916884371168",
  appId: "1:916884371168:web:6dd600a1862d43a5c04285",
  measurementId: "G-T008V8S165"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const auth = firebase.auth();
const database = firebase.firestore();

let remindersController = {

  landing_page: (req, res) => {
    //authSstate = ﻿realtimeListener();
    //req.authsstate
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
      });
      if (searchResult != undefined) {
        res.render('reminder/single-reminder', { reminderItem: searchResult })
      } else {
        res.render('reminder/index', { reminders: Database.cindy.reminders })
      }
    },

  create_reminder: (req, res) => {
      console.log();
      let year = parseInt(req.body.date.slice(0,4));
      let month = parseInt(req.body.date.slice(5,7));
      let day = parseInt(req.body.date.slice(8,));
      let hour = req.body.time.slice(0,2);
      let minute = req.body.time.slice(3,);


    let reminder = {
          datetime: [year, month, day, hour, minute],
          heading: req.body.heading,
          details: req.body.details,
          tags: [],
          rain: -1
      };

      for(let i = 0; i < req.body.length; i++) {
          if (res.body[i] === "on") {
              reminder.tags.push(req.body.key[i])
          }
      }

    // bm add tag strings to tag list
    for (let i = 0; i < req.body.length; i++) {
        if (req.body[i] === "on") {
            reminder["tags"].push(i)
        }
    }
      // bm Shagun write to FS database here
      Database.randomUserIdCindy.reminders[Date.now()] = reminder;
      res.render('reminder/create_reminder_page', {reminders: Database.randomUserIdCindy.reminders})
    },

  edit_reminder: (req, res) => {
    // To get the id of the reminder and render the edit reminder page

    let reminderToFind = req.params.id;
    let searchResult = Database.cindy.reminders.find(function(reminder) {
      return reminder.id == reminderToFind; // Why do you think I chose NOT to use === here?
    })
    res.render('reminder/edit', { reminderItem: searchResult });

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
      });
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

    // database stuff
    let today = new Date();
    let this_year = today.getFullYear();
    let this_month = today.getMonth();
    let this_day = today.getDate();
    let today_unix = new Date(this_year, this_month, this_day).getTime();
    // unix time for todays year month and day
    Object.keys(Database.randomUserIdCindy.reminders).forEach((reminder_key) => {
      //unix time for reminder's year month and day
      reminder = Database.randomUserIdCindy.reminders[reminder_key]
      reminder_date_unix = new Date(reminder.datetime[0], reminder.datetime[1]-1, reminder.datetime[2]).getTime()
      unix_time_difference = reminder_date_unix - today_unix
      days_from_today = unix_time_difference/86400000
      // reminder date is from from todays date until one week from today
      if(days_from_today >= 0 && days_from_today <= 7){
        reminder.rain = rainChance[days_from_today];
      }
    })
    // not yet functional res.redirect('/reminder/home');
  },

  // bm - For Shagun read Firestore database
  write_firestore: (req, res) => {

  },

  // bm - For Shagun read Firestore database
  read_firestore: (req, res) => {

  }
};

module.exports = remindersController;

function realtimeListener() {
  firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
          return true;
      } else {
          console.log("user not logged in.");
          return false;
      }
  })
}

function logInSessionUser() {
  //console.log(cookies.get('session'))
}

//logInSessionUser();
realtimeListener();