import firebase from "firebase/app";
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyD2_kZtwpnT5SMqLKReKuAAkmRpEXJl71k",
    authDomain: "kex-scanner-project.firebaseapp.com",
    databaseURL: "https://kex-scanner-project.firebaseio.com",
    projectId: "kex-scanner-project",
    storageBucket: "kex-scanner-project.appspot.com",
    messagingSenderId: "856325795738"
}

firebase.initializeApp(firebaseConfig);

export const databaseRef = firebase.database();