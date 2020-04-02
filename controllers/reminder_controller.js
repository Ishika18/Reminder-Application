let Database = require("../database");

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

};

module.exports = remindersController;
