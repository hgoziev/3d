import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUFLfrjK9waGPbH-m1mAEvZWSQ4r7Frwg",
  authDomain: "dmarket-e6787.firebaseapp.com",
  projectId: "dmarket-e6787",
  storageBucket: "dmarket-e6787.appspot.com",
  messagingSenderId: "373780366255",
  appId: "1:373780366255:web:a85fe5d8ee0f39cc6c255a",
  measurementId: "G-99YVCFHEE9",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebaseApp.auth();

export default auth;
