const auth = firebase.auth();
const database = firebase.firestore();

function login() {
    let userId = document.getElementById("inputEmail");
    let password = document.getElementById("inputPassword");
    const id = userId.value;
    const pass = password.value;
    // logic for user login
    const promise = auth.signInWithEmailAndPassword(id.trim(), pass);
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
}

function realtimeListener() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            // if the user is logged in.
            // get the data from firestore
            database.collection('users').get().then(snapshot => {
                setUpReminders(snapshot.docs);
            })
            //document.location = "/reminder/single";
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