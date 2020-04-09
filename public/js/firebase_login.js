const auth = firebase.auth();
const database = firebase.firestore();

function login() {
    let userId = document.getElementById("inputEmail");
    let password = document.getElementById("inputPassword");
    const id = userId.value;
    const pass = password.value;
    // logic for user login
    const promise = auth.setPersistence(firebase.auth.Auth.Persistence.SESSION).then(function() {
        return auth.signInWithEmailAndPassword(id.trim(), pass);
    })
    .catch(function(error) {
        console.log(error.code);
        console.log(error.message);
    })
    // if their is a user log them in if not catch the error
    promise.catch(e => console.log(e.message));

    realtimeListener();
}

function signUp() {
    let userId = document.getElementById("inputEmail");
    let password = document.getElementById("inputPassword");
    const id = userId.value;
    const pass = password.value;
    // Creates the user and sign in
    const promise = auth.createUserWithEmailAndPassword(id.trim(), pass);
    // if their is a user log them in if not catch the error
    promise.catch(e => console.log(e.message));

    // login the user after creating the id.
    login();

    // add the user to database
    // if the user is logged in now, add the user information to database
    if( realtimeListener ) {
        addUser(id);
    }
}

function realtimeListener() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            userEmail = firebaseUser.email;
            // if the user is logged in.
            // get the data from firestore
            database.collection('users').where("email", "==", userEmail).get().then(snapshot => {
                setUpReminders(snapshot.docs);
            })
            //document.location = "/reminder/single";
            return true;
        } else {
            console.log("user not logged in.");
        }
    })
}

function logout() {
    auth.signOut().then(() => {
        console.log("user signed out.");
    });
}

realtimeListener();

// add the user email to database when the user sign up
function addUser(userEmail) {
    database.collection("users").doc(userEmail).set({
        email: userEmail.toLowerCase(),
    });
}

// SS - database part
// function to add a new reminder to database
function addReminder(heading, datetime, details, tags, rainChance, userEmail) {
    let userData = database.collection("users").doc(userEmail);
    let correctDate = true; // will change later (acc to current date)
    // update the reminder dictionary

    let reminders = {};
    reminders[heading] = {
        heading: heading,
        datetime: datetime,
        details: details,
        tags: tags
    }

    // add rainChance if reminder date < 7 days from current date
    if (correctDate) {
        reminders[heading].rain = rainChance;
    }
    userData.set({
        reminders
    }, {merge: true})
}

heading = "randomReminer";
datetime = [2020, 3, 31, 12, 30, 0, 0];
details = ["random detail"];
rainChance = 15;
tags = ["priority", "physical"];

userEmail = "randomId@gmail.com"
addReminder(heading, datetime, details, tags, rainChance, userEmail)