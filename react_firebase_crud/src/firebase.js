import firebase from "firebase/app";
import "firebase/database";

const firebaseConfig = {
  
};

// Initialize Firebase
var fireDb = firebase.initializeApp(firebaseConfig);

export default fireDb.database().ref();
