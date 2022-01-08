import firebase from "firebase";

import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyClpjgALI80KDJMtxFqmDUIDSZ9kMO_tZs",
    authDomain: "work-assignment-a4b01.firebaseapp.com",
    projectId: "work-assignment-a4b01",
    storageBucket: "work-assignment-a4b01.appspot.com",
    messagingSenderId: "180845408024",
    appId: "1:180845408024:web:125813de89c875bf58386d"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };