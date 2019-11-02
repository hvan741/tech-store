import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

var firebaseConfig = {
    apiKey: "AIzaSyCAPETYmJDyPrikdXfSiS4yNEzI-lO6ZAg",
    authDomain: "teach-project-510f9.firebaseapp.com",
    databaseURL: "https://teach-project-510f9.firebaseio.com",
    projectId: "teach-project-510f9",
    storageBucket: "teach-project-510f9.appspot.com",
    messagingSenderId: "750114300500",
    appId: "1:750114300500:web:09b4e79edb42c77a7903c1",
    measurementId: "G-QRZPFJZGD1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase