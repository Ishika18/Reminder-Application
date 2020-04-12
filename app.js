const express = require("express");
const app = express();
const ejsLayouts = require("express-ejs-layouts");
const reminderController = require("./controllers/reminderController");

app.use(express.json());

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));

app.use(ejsLayouts);

app.set("view engine", "ejs");

// Routes start here

// bm landing page
app.get("/", reminderController.landingPage);

// bm standard home page for reminder app
app.get("/reminder/home", reminderController.createReminderPage);

// bm create reminder page
app.get("/reminder/createReminderPage", reminderController.createReminderPage);

// bm edit reminder page
app.get("/reminder/editReminderPage", reminderController.editReminderPage);

// rl query darkSky
app.post("/darkSky", reminderController.darkSky);

// bm create reminder
app.post("/reminder/createReminder", reminderController.createReminder);

// bm delete reminder
app.get("/reminder/deleteReminder", reminderController.deleteReminder);

app.listen(3000, function(){
  console.log("Server running. Visit: localhost:3000/reminder in your browser 🚀");
});
