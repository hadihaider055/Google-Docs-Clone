import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAjt9AcoVN89zBuXr3qBUPNh5hBQ1KQ25I",
  authDomain: "docs-clone-6f4ee.firebaseapp.com",
  projectId: "docs-clone-6f4ee",
  storageBucket: "docs-clone-6f4ee.appspot.com",
  messagingSenderId: "569113260206",
  appId: "1:569113260206:web:5b0b9e2cd6d3d265dafd3f",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
