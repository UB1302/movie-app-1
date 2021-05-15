

import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBn8ynQKfn9ctMdQe13bv-Os7Hm7IpsPrc",
    authDomain: "movie-app-4eb47.firebaseapp.com",
    projectId: "movie-app-4eb47",
    storageBucket: "movie-app-4eb47.appspot.com",
    messagingSenderId: "437013973823",
    appId: "1:437013973823:web:9f7e8f7a7b80f6574ea18a"

}


firebase.initializeApp(firebaseConfig);


const projectFirestore = firebase.firestore();
const timeStamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectFirestore, timeStamp };
