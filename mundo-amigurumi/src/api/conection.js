import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
     apiKey: process.env.REACT_APP_APIKEY,
     authDomain: process.env.REACT_APP_authDomain,
     projectId: process.env.REACT_APP_projectId,
     storageBucket: process.env.REACT_APP_storageBucket,
     messagingSenderId: process.env.REACT_APP_messagingSenderId,
     appId: process.env.REACT_APP_appId
}

const instanceApp = firebase.initializeApp(firebaseConfig);

export function firestoreExport() {
    return firebase.firestore(instanceApp)
}

