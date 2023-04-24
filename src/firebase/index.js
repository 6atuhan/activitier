import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyAT8drxkWzIDcM-715BSjrYxQf_WBTR2zg",
    authDomain: "activitier-3d946.firebaseapp.com",
    projectId: "activitier-3d946",
    storageBucket: "activitier-3d946.appspot.com",
    messagingSenderId: "248339974728",
    appId: "1:248339974728:web:e745bae5d8f989bccd267d",
  databaseURL: "https://activitier-3d946-default-rtdb.firebaseio.com/",

  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);




// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);
export { db }     



// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
export { storage }     
