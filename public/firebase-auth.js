// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyA1K4jk1YUkByW7x6hIKcDxBy-ieRCwvq0",
    authDomain: "taskzincdemo.firebaseapp.com",
    databaseURL: "https://taskzincdemo-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "taskzincdemo",
    storageBucket: "taskzincdemo.appspot.com",
    messagingSenderId: "548108512084",
    appId: "1:548108512084:web:a80337916eea71df8bb6c1",
    measurementId: "G-QGKXP0MZ3V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//Initialize DB and authentication
const database = getDatabase(app);
const auth = getAuth(app);

function register() {
    // Get all our input fields
    email = document.getElementById('email').value
    password = document.getElementById('password').value
    name = document.getElementById('name').value
    contactno = document.getElementById('contactno').value
    department = document.getElementById('department').value

    // Validate input fields
    if (validate_email(email) == false || validate_password(password) == false) {
        alert('Email or Password is Outta Line!!')
        return
        // Don't continue running the code
    }
    if (validate_field(name) == false || validate_field(contactno) == false || validate_field(department) == false) {
        alert('One or More Extra Fields is Outta Line!!')
        return
    }

    // Move on with Auth
    auth.createUserWithEmailAndPassword(email, password)
        .then(function () {
            // Declare user variable
            var user = auth.currentUser

            // Add this user to Firebase Database
            var database_ref = database.ref()

            // Create User data
            var user_data = {
                email: email,
                name: name,
                contactno: contactno,
                department: department,
                status: "Active",
                last_login: Date.now()
            }

            // Push to Firebase Database
            database_ref.child('users/' + user.uid).set(user_data)

            // DOne
            alert('User Created!!')
        })
        .catch(function (error) {
            // Firebase will use this to alert of its errors
            var error_code = error.code
            var error_message = error.message

            alert(error_message)
        })
}
// Validate Functions
function validate_email(email) {
    expression = /^[^@]+@\w+(\.\w+)+\w$/
    if (expression.test(email) == true) {
        // Email is good
        return true
    } else {
        // Email is not good
        return false
    }
}

function validate_password(password) {
    // Firebase only accepts lengths greater than 6
    if (password < 6) {
        return false
    } else {
        return true
    }
}

function validate_field(field) {
    if (field == null) {
        return false
    }

    if (field.length <= 0) {
        return false
    } else {
        return true
    }
}