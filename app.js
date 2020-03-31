const express = require("express");
const app = express();
const ejsLayouts = require("express-ejs-layouts");
const reminderController = require("./controllers/reminder_controller");

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: false }));

app.use(ejsLayouts);

app.set("view engine", "ejs");

// Routes start here

// landing page
app.get("/", reminderController.landing_page);

// single reminder
app.get("/reminder/single", reminderController.single_reminder);

// create a new reminder
app.get("/reminder/create", reminderController.create_reminder);

// edit a reminder
app.get("/reminder/edit", reminderController.edit_reminder);


app.listen(3000, function(){
  console.log("Server running. Visit: localhost:3000/reminder in your browser 🚀");
});
