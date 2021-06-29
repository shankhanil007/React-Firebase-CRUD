import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDo7OYhAL5yZXJuI35bRLNJJVo5wKAe1J0",
  authDomain: "react-crud-165b3.firebaseapp.com",
  databaseURL:
    "https://react-crud-165b3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "react-crud-165b3",
  storageBucket: "react-crud-165b3.appspot.com",
  messagingSenderId: "648821193660",
  appId: "1:648821193660:web:36c90c4cc5c531c699c9b9",
  measurementId: "G-4QEB5J70D5",
};

// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
