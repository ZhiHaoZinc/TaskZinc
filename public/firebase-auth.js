// // Initialize Firebase
// const firebaseConfig = {
//     apiKey: "AIzaSyA1K4jk1YUkByW7x6hIKcDxBy-ieRCwvq0",
//     authDomain: "taskzincdemo.firebaseapp.com",
//     projectId: "taskzincdemo",
//     storageBucket: "taskzincdemo.appspot.com",
//     messagingSenderId: "548108512084",
//     appId: "1:548108512084:web:a80337916eea71df8bb6c1",
//     measurementId: "G-QGKXP0MZ3V"
// };
//   // Initialize Firebase
//   firebase.initializeApp(firebaseConfig);
  
//   // Register
//   function register(email, password) {
//     firebase.auth().createUserWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Signed in
//         var user = userCredential.user;
//         // You can do something after successful registration
//       })
//       .catch((error) => {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // Handle errors here
//       });
//   }
  
//   // Login
//   function login(email, password) {
//     firebase.auth().signInWithEmailAndPassword(email, password)
//       .then((userCredential) => {
//         // Signed in
//         var user = userCredential.user;
//         // You can do something after successful login
//       })
//       .catch((error) => {
//         var errorCode = error.code;
//         var errorMessage = error.message;
//         // Handle errors here
//       });
//   }

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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
