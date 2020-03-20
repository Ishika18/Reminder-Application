let userId = document.getElementById("username");
let password = document.getElementById("password");

function mainPage() {
    // logic for user login
    const id = userId.value;
    const pass = password.value;
    const auth = firebase.auth();
    // Sign in
    const promise = auth.signInWithEmailAndPassword(id, pass);
    // if their is a user log them in if not catch the error
    promise.catch(e => console.log(e.message));

    location.href = "index.html";
    realtimeListener();
}

function realtimeListener() {
    firebase.auth().onAuthStateChanged(firebaseUser => {
        if(firebaseUser) {
            console.log(firebaseUser);
        } else {
            console.log('not logged in');
        }
    })
}