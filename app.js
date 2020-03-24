const auth = firebase.auth();

function login() {
    let userId = document.getElementById("emailId");
    let password = document.getElementById("password");
    const id = userId.value;
    const pass = password.value;
    // logic for user login
    const promise = auth.signInWithEmailAndPassword(id.trim(), pass);
    // if their is a user log them in if not catch the error
    promise.catch(e => console.log(e.message));

    //location.href = "index.html";
    realtimeListener();
}

function signUp() {
    let userId = document.getElementById("emailId");
    let password = document.getElementById("password");
    const id = userId.value;
    const pass = password.value;
    // Creates the user and sign in
    const promise = auth.createUserWithEmailAndPassword(id.trim(), pass);
    // if their is a user log them in if not catch the error
    promise.catch(e => console.log(e.message));

    // login the user after creating the id.
}

function realtimeListener() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            // if the user is logged in.
            console.log(firebaseUser);
        } else {
            console.log('not logged in');
        }
    })
}