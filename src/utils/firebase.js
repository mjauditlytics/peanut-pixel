import { initializeApp } from "firebase/app";

import {
  getFirestore
  // initializeFirestore
  // persistentLocalCache,
  // persistentSingleTabManager
} from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: "AIzaSyCkZPJsYdh7-4mcsuiPszvVERSwDOBKb74",
//   authDomain: "vue-routes-authentication.firebaseapp.com",
//   databaseURL: "https://vue-routes-authentication.firebaseio.com",
//   projectId: "vue-routes-authentication",
//   storageBucket: "vue-routes-authentication.appspot.com",
//   messagingSenderId: "680655489437",
//   appId: "1:680655489437:web:9d66d2b0f438e3e9014774",
//   measurementId: "G-CGL0FS2DVQ",
// };

const firebaseConfig = {
  apiKey: "AIzaSyDIE2zCgP1mCRrxXFf-UjqTn_dpoPeD-Ew",
  authDomain: "iaai-a4d22.firebaseapp.com",
  projectId: "iaai-a4d22",
  storageBucket: "iaai-a4d22.appspot.com",
  messagingSenderId: "452447997044",
  appId: "1:452447997044:web:c130d19379fc136101d521"
};
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { firebaseApp, db };


