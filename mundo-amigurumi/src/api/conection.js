import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDwuCLb4bi3_NflDJr1PnnjHl8ShEkaRkM",
    authDomain: "mundo-amigurumi-c95c8.firebaseapp.com",
    projectId: "mundo-amigurumi-c95c8",
    storageBucket: "mundo-amigurumi-c95c8.appspot.com",
    messagingSenderId: "64408539472",
    appId: "1:64408539472:web:77d3da014189535ebb1c55"
}

const instanceApp = firebase.initializeApp(firebaseConfig);

export function firestoreExport() {
    return firebase.firestore(instanceApp)
}

