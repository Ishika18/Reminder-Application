let Database = require("../database");
const fetch = require('node-fetch');
const firebase = require("firebase/app");

// add the firebase products that you want to use
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

    // bm - direct to landing page
  landingPage: (req, res) => {
    //authSstate = ﻿realtimeListener();
    //req.authsstate
    res.render("reminder/landingPage")
  },

    // bm - direct to create a new reminder page
  createReminderPage: (req, res) => {

    res.render('reminder/createReminderPage', {reminders: Database.randomUserIdCindy.reminders})
  },

    // bm - direct to edit current reminder page
  editReminderPage: (req, res) => {
    res.render('reminder/editReminderPage', {reminders: Database.randomUserIdCindy.reminders})
  },

  createReminder: (req, res) => {
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
      res.render('reminder/createReminderPage', {reminders: Database.randomUserIdCindy.reminders})
    },

    // bm - to be implemented - edit reminder
  editReminder: (req, res) => {
    // To get the id of the reminder and render the edit reminder page

  },

    // bm - to be implemented - update firestore database with reminder data
  updateReminder: (req, res) => {

    },

    // bm - does not have full functionality - commented out to prevent crash
  deleteReminder: (req, res) => {
      console.log(req.body);
      console.log(req.params.id);
      console.log(req.params);
      // let reminderToFind = req.params.id;
      // let reminderIndex = Database.randomUserIdCindy.reminders.findIndex(function(reminder) {
      //   return reminder.id === reminderToFind;
      // });
      // Database.randomUserIdCindy.reminders.splice(reminderIndex, 1);
    },

  // rl darkSky query
  darkSky: async (req, res) => {
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
    const darkData = await fetchDarkData.json();
    for(let i = 0; i < 8; i++){
      rainChance[i] = darkData.daily.data[i].precipProbability;
    }
    console.log(rainChance);

    // database stuff
    let today = new Date();
    let this_year = today.getFullYear();
    let this_month = today.getMonth();
    let this_day = today.getDate();
    let today_unix = new Date(this_year, this_month, this_day).getTime();
    // unix time for todays year month and day
    Object.keys(Database.randomUserIdCindy.reminders).forEach((reminder_key) => {
      //unix time for reminder's year month and day
      let reminder = Database.randomUserIdCindy.reminders[reminder_key];
      let reminder_date_unix = new Date(reminder.datetime[0], reminder.datetime[1]-1, reminder.datetime[2]).getTime();
      let unix_time_difference = reminder_date_unix - today_unix;
      let days_from_today = unix_time_difference/86400000;
      // reminder date is from from today's date until one week from today
      if(days_from_today >= 0 && days_from_today <= 7){
        reminder.rain = rainChance[days_from_today];
      }

    });
      res.send("1")
  },

  // bm - For Shagun read Firestore database
  writeFirestore: (req, res) => {
    // can't be integrated if the user log in state is not persistant through all the pages.
  },

  // bm - For Shagun read Firestore database
  readFirestore: (req, res) => {
    // can't be integrated if the user log in state is not persistant through all the pages.
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