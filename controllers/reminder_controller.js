let Database = require("../database");

let remindersController = {

  landing_page: (req, res) => {
    res.render("reminder/landing")
  },

  list: (req, res) => {
    res.render('reminder/single_reminder', { reminders: Database.cindy.reminders })
  },

  create_reminder: (req, res) => {
    res.render('reminder/create_reminder')
  },

  edit_reminder: (req, res) => {
    res.render('reminder/edit_reminder')
  },

  single_reminder: (req, res) => {
    let reminderToFind = req.params.id;
    let searchResult = Database.cindy.reminders.find(function(reminder) {
      return reminder.id == reminderToFind; // good test question for students what happens if I put ===
    });
    if (searchResult != undefined) {
      res.render('reminder/single_reminder', { reminderItem: searchResult })
    } else {
      res.render('reminder/single_reminder', { reminders: Database.cindy.reminders })
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
    });
    Database.cindy.reminders.splice(reminderIndex, 1);
    res.redirect('/reminder');
  }
};

module.exports = remindersController;
