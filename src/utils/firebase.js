import { initializeApp } from "firebase/app";

import {
  getFirestore
  // initializeFirestore
  // persistentLocalCache,
  // persistentSingleTabManager
} from "firebase/firestore";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCER0UOfAMTg73n36vUJQ8KpXJ73h2Dx2M",
  authDomain: "saasproject2024-e91a4.firebaseapp.com",
  projectId: "saasproject2024-e91a4",
  storageBucket: "saasproject2024-e91a4.appspot.com",
  messagingSenderId: "679377082208",
  appId: "1:679377082208:web:351b6778e727ff16aff005",
  // measurementId: "G-8H7P5GHTS8"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
// const analytics = getAnalytics(app);
export { firebaseApp, db };

