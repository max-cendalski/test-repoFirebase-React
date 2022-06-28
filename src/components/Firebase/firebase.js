// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA0MSi1LtnYKGmzZWoJ014C0a7wxQeg6nw",
  authDomain: "test-firebasereact.firebaseapp.com",
  projectId: "test-firebasereact",
  storageBucket: "test-firebasereact.appspot.com",
  messagingSenderId: "104330345851",
  appId: "1:104330345851:web:c505740532e83f766c91de",
  measurementId: "G-XVPS8QY4KG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
