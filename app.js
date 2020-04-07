const express = require("express");
const app = express();
const ejsLayouts = require("express-ejs-layouts");
const reminderController = require("./controllers/reminder_controller");
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static(__dirname + "/public"));

app.use(express.urlencoded({ extended: true }));

app.use(ejsLayouts);

app.set("view engine", "ejs");

// Routes start here

// bm landing page
app.get("/", reminderController.landing_page);

// bm create reminder page
app.get("/reminder/create_reminder_page", reminderController.create_reminder_page);

// bm edit reminder page
app.get("/reminder/edit_reminder_page", reminderController.edit_reminder_page);

// rl query darkSky
app.post("/darkSky", reminderController.dark_sky);

// bm create reminder
app.post("/reminder/create_reminder", reminderController.create_reminder);


app.listen(3000, function(){
  console.log("Server running. Visit: localhost:3000/reminder in your browser 🚀");
});
