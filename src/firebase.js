import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyDe0sshuYPR8Pwlt8h5dFu-f5cEqPqH-GQ",
  authDomain: "twitter-clone-6b5b5.firebaseapp.com",
  databaseURL: "https://twitter-clone-6b5b5.firebaseio.com",
  projectId: "twitter-clone-6b5b5",
  storageBucket: "twitter-clone-6b5b5.appspot.com",
  messagingSenderId: "939740575179",
  appId: "1:939740575179:web:a4989dc53ea40ae391724e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

export default db