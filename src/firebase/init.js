import firebase from 'firebase'
import firestore from 'firebase/firestore'

// All copied from firebase website
var firebaseConfig = {
    apiKey: "AIzaSyCXoXyvbt1tq1CRa0eQdoeBxr-1RkVYhOM",
    authDomain: "smoothie-demo.firebaseapp.com",
    databaseURL: "https://smoothie-demo.firebaseio.com",
    projectId: "smoothie-demo",
    storageBucket: "smoothie-demo.appspot.com",
    messagingSenderId: "15473651709",
    appId: "1:15473651709:web:5a1fabba0ea84b3d"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  firebaseApp.firestore().settings({ timestampsInSnapshots: true })
 
  // expore firestore database
  export default firebaseApp.firestore()