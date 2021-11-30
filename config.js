import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyCTyL0YLGXr7NeG9Q2HVIO8hbU-pDxBdlE",
    authDomain: "project-67-d746c.firebaseapp.com",
    projectId: "project-67-d746c",
    storageBucket: "project-67-d746c.appspot.com",
    messagingSenderId: "454076516951",
    appId: "1:454076516951:web:602c1b494779500dc67112"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();