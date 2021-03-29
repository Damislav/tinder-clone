import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC2Vn3ntMceBsrASZRLxrYijLw9WYgcIyc",
  authDomain: "tinder-clone-52e31.firebaseapp.com",
  projectId: "tinder-clone-52e31",
  storageBucket: "tinder-clone-52e31.appspot.com",
  messagingSenderId: "973320849061",
  appId: "1:973320849061:web:cd5f7adf2ac97b2cbe2f4c",
  measurementId: "G-NT533FN0Q2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
