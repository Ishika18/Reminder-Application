let userId = document.getElementById('userID');
let password = document.getElementById('password');
let addBtn = document.getElementById('signUp');
let firstname = document.getElementById('firstName');
let lastname = document.getElementById('lastname');

// instance of firebase database
const database = firebase.database();
const rootRef = database.ref('users');


addBtn.addEventListener('click', (e) => {
    e.preventDefault();
    // add the information of users in database
    rootRef.child(userId.value).set({
        userId: userId.value,
        firstname: firstname.value,
        lastname: lastname.value,
        password: password.value
    });

    const id = userId.value;
    const pass = password.value;
    const auth = firebase.auth();
    // Sign in
    const promise = auth.createUserWithEmailAndPassword(id, pass);
    // if their is a user log them in if not catch the error
    promise.catch(e => console.log(e.message));

    location.href = "index.html";
});