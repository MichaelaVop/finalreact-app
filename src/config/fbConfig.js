import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //firebase.firestore().settings({ timestampsInSnapshots: true})

  export const auth = firebase.auth()
  export const db = firebase.firestore()
  export const provider = new firebase.auth.GoogleAuthProvider()


  export default firebase;