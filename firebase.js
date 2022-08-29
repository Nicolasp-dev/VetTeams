import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC4pgX5b3-MMwBkqhcq4K-WsDJ5k-2FhgA",
  authDomain: "vetteams-72e2a.firebaseapp.com",
  databaseURL: "https://vetteams-72e2a-default-rtdb.firebaseio.com",
  projectId: "vetteams-72e2a",
  storageBucket: "vetteams-72e2a.appspot.com",
  messagingSenderId: "738913816906",
  appId: "1:738913816906:web:ec10a2de12797928ca71b3",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
