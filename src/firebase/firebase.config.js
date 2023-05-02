// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBinx0GB4Ed8baHLyGhvpkBQ9lw3WsfQ_Y",
    authDomain: "cheaf-a7238.firebaseapp.com",
    projectId: "cheaf-a7238",
    storageBucket: "cheaf-a7238.appspot.com",
    messagingSenderId: "741084849682",
    appId: "1:741084849682:web:71115efd255bd5415edacb",
    measurementId: "G-L6JX4QJ9KC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export default app;