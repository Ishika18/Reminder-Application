# Breakdown of work

## Team Member: Shagun
### Tasks Worked On:

#### General
- Documentation.
- Researched firebase authentication, realtime database, firebase firestore.
- Reaserched how to persist the authentication state of the user.
- Created a database to store user information and their reminders.
- Made functions to add data to database and edit that data.
- Made functions to retrieve data.

#### Implemented firebase authentication ( user state doesn't persist if the page changes)
- Learnt to implement user login with email and password.
- Integrated the login functionality with the database to retrieve user specific information.
- Used auth.onAuthStateChanged to get the state of the user.
- Used auth.Auth.Persistence.SESSION to persist the state of the user.

#### Implemented firebase firestore 
- Store the user reminders with all the fields.
- Made functions to edit the reminders.
- Made functions to add new reminders.
- For now the data is just console logged in the login page as the auth state doesn't persist.

#### Reaserched about the ejs structure
- To solve the issue of state persistence, user information and state has to passed on every page that is loaded.
- A post request should be made to from the landing page to get user information and login state.

#### Researched about good practices of NoSQL database
- Learnt to make modular data fields.
- Learnt that user information should be stored seperately to make it easier to loop.

#### Learnt to work with git
- Learnt to solve merge conflicts
- Learnt to use VS code source control

#### Familiarised myself with bootstrap4
- Used bootstarp to make a main page (not used, changed when integrated with Armaan's base)

Task Name: (Ex - Designing Landing Page in Figma)
Explanation - I spent time learning how to use figma and design a beautiful landing page for our application.

## Team Member: David Wang
### Tasks Worked On:
#### General
- Documentation (Added how-to guide for working with the program).
- Assisted with project Trello Board.

#### Research
- Researched and familiarzied myself with bootstrap4.
- Researched and familiarized myself with JSON data structure.
- Researched and familiarized myself with EJS templates.
- Researched and understand the importance of webservers.
- Researched and understand the importance of licensing.

#### Git
- Learned how to use GitBash.
- Understand Git braching and merging concepts.

## Team Member: Ronald Liang
### Tasks Worked On:
#### General
- Documentation.
- Researched EJS generally in order to integrate backend with the front end.
- Researched how code works with url directories and file directories.
- Assisted in general ideation of front-end, database format.

#### Created project wireframe
- Researched similar application user interfaces.

#### Resolved Git merge/push conflicts
- Learned how to use GitBash.
- Learned how to use VSCode Source control.
- Learned how to use SourceTree.
- Monitored git commits to locate sources of error.

#### Implemented HTML5 Geolocation
- Researched and implemented HTTP client/server data transfer methods.

#### Worked with asynchronous Javascript/HTTP
- In the context of browser side geolocation communicating with the server and DarkSky API querying.
- Researched and implemented both Node-Fetch and Axios.
- Researched and worked with promise handling.
- Researched and worked with cors method, various headers options, JSON string conversion.
- Researched PostMan in order to debug HTTP.

#### Implemented DarkSky API querying
- Signed up for an darkSky account.
- Researched the JSON data format of the request.
- Researched how to configure fetch parameters for the API.
- Configured the code to read from and write to a database rather than store data locally.
- Researched UNIX time conversions in order to calculate reminder dates relative to the current date.

## Team Member: Silvana Kalliny
### Tasks Worked On:
#### Documentation
- Created and edited wiki pages containing documentation, with support from the rest of the team

#### Research
- Learned about EJS files 
- Learned how to pull data from databases to ejs pages

#### Git
- Learned to use VS code source control
- Learned to solve merge conflicts

#### Landing/Promotional Page
- Used bootstrap concepts to create promotional/landing page layout (most was not used in final version of landing page)
- Watched YouTube videos on making carousels in bootstrap and using bootstrap for responsiveness
- Made mockups of app UI in figma (not used)
- Made slides for landing page carousel (not used)
- Made cards for landing page
- Made jumbotron for landing page(not used)
- Found icons for use on landing page


## Team Member: Blake Michalzik

### Tasks Worked On:

#### Assisted in initial app sketch prototyping

- See reminder_app_prototype.jpg in Reminder-Application root for example, sketched prototype. 
- Contributed design and layout ideas.

#### Created Figma designs for app prototyping

- Refined sketched prototype into a Figma prototype. Designed color, layout and icon usage.
- Design for both Desktop and Mobile.

#### Created mockup's for landing site to showcase app design

- Used Figma designs to create realistic usecase image mockups for landing page display.
- Mockups can be found on landing page carousel or in /public/imgs
- Mockups generated via https://mockuper.net/

#### Extensive EJS / Express server relationship research

- On going understanding ejs files and how express will server them to the user.

#### Incorporated core files from Armaan's example project into Reminder-Application

- Merging code into our code base.
- Major use was the setup between express server and ejs files.

#### Created Remindr Logo

- Built in gimp.
- Used for branding, used in app navbar and landing navbar.

#### Selected and Imported Icons for tags reminders

- Sourced from https://www.iconfinder.com/
- Icons mainly for tag display.

#### Generated EJS pages

- Initially generated all EJS files and file structure.
- This was to give a base structure of how the app will fit together, what pages we would be working with, and the purpose of those pages.

#### Familiarized myself with BootStrap4

- Used to assist in styling landing page.
- Used to style reminderSidebar / reminderCreatePage / reminderEditPage / appNavbar / landingNavbar

#### Created and Styled appNavbar.ejs

- Navbar partial view used in the Remindr application.
- Created buttons, and implemented form post wrappers for server interaction.

#### Created and Styled landingNavbar.ejs

- Navbar partial view used for the landing page.
- Login modal I styled from a standard boostrap4 login modal example.
- Functionality for the modal as in login was handled by Shagun.

#### Created and Styled reminderSidebar.ejs

- Partial for all in app pages. List of reminders of the user.
- Created listed labels for user reminders to be displayed.
- Dynamically displays tag icons.
- Displays date and time of the reminder.
- Displays title of the reminder.
- Displays details of the reminder.
- Displays rain condition as an icon. Red X for no data. Black for rain. Greyed our for no rain.

#### Assisted in Styling landing page

- Built landing page layout.
- Incorporated the landingNavbar.ejs partial into layoutPage.ejs.
- Incorporated Remindr app prototype mockups into carousel.

#### Wrote functions in reminderController.js for page renders

- landingPage to render landingPage.ejs to the client
- createReminderPage to render createReminderPage.ejs to the client.
- editReminderPage to render editReminderPage.ejs to the client.

#### Wrote createReminder in reminderController.js

- Generates a new reminder object to be appended to the user reminder database.

#### Wrote GET/POST requests in app.js

- Redirects for landingPage/createReminderPage/editReminderPage
- createReminder POST receive from a form to create new reminder

#### Assisted in team coordination of tasks and responsibilities

- Kept informed about the project as a whole for task allocation.
- Assisted in coordinated integration of code from team members.

#### Wrote github README.md

- Updated project READEME file with sprint information and goals.

#### Researched appropriate license for our application

- Read over 2 - 3 software licensing comparison pages.
- Watched 2 YouTube lectures on software licensing.
- Initiate discussion with team for licensing and came to decision for MIT license.

#### Added github LICENCE.mb

- Created LICENCE.md
- Initialed MIT license for the project.
