import firebase from "firebase/app";
import 'firebase/database';
import 'firebase/functions';

const firebaseConfig = {
    apiKey: "AIzaSyD2_kZtwpnT5SMqLKReKuAAkmRpEXJl71k",
    authDomain: "kex-scanner-project.firebaseapp.com",
    databaseURL: "https://kex-scanner-project.firebaseio.com",
    projectId: "kex-scanner-project",
    storageBucket: "kex-scanner-project.appspot.com",
    messagingSenderId: "856325795738"
}

firebase.initializeApp(firebaseConfig);
firebase.functions()

export const databaseRef = firebase.database();