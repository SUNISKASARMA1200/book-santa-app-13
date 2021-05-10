import firebase from 'firebase';
require('@firebase/firestore')

// var firebaseConfig = {
//   apiKey: "AIzaSyAzlFchWiuacttIbemeeMjaBqaqoNzgaBg",
//   authDomain: "book-santa-a6c82.firebaseapp.com",
//   projectId: "book-santa-a6c82",
//   storageBucket: "book-santa-a6c82.appspot.com",
//   messagingSenderId: "605452969606",
//   appId: "1:605452969606:web:606965a93780f00645d307"
// };
var firebaseConfig = {
  apiKey: "AIzaSyAzlFchWiuacttIbemeeMjaBqaqoNzgaBg",
  authDomain: "book-santa-a6c82.firebaseapp.com",
  projectId: "book-santa-a6c82",
  storageBucket: "book-santa-a6c82.appspot.com",
  messagingSenderId: "605452969606",
  appId: "1:605452969606:web:606965a93780f00645d307"
};


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
