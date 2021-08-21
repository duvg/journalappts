import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyC9_baeXBelVxTSClGzLZZcRt37kvwfGTw",
    authDomain: "react-app-portfolio-27f7e.firebaseapp.com",
    projectId: "react-app-portfolio-27f7e",
    storageBucket: "react-app-portfolio-27f7e.appspot.com",
    messagingSenderId: "302249108944",
    appId: "1:302249108944:web:9c6e7a9210e42589f9c5d5"
};
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}