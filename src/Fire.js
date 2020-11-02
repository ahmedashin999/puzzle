import firebase from 'firebase';
// const firebaseConfig = {
//     apiKey: "AIzaSyCFH1_wi6LcSWicrQywpDJgX8DdNLqENPc",
//     authDomain: "practice-c4e4f.firebaseapp.com",
//     databaseURL: "https://practice-c4e4f.firebaseio.com",
//     projectId: "practice-c4e4f",
//     storageBucket: "practice-c4e4f.appspot.com",
//     messagingSenderId: "59124895493",
//     appId: "1:59124895493:web:d89a1113da10e9ad2df16c",
//     measurementId: "G-64S3RCCDWJ"
//   };


const firebaseApp =firebase.initializeApp({
    apiKey: "AIzaSyCFH1_wi6LcSWicrQywpDJgX8DdNLqENPc",
    authDomain: "practice-c4e4f.firebaseapp.com",
    databaseURL: "https://practice-c4e4f.firebaseio.com",
    projectId: "practice-c4e4f",
    storageBucket: "practice-c4e4f.appspot.com",
    messagingSenderId: "59124895493",
    appId: "1:59124895493:web:d89a1113da10e9ad2df16c",
    measurementId: "G-64S3RCCDWJ"
})

const db =firebaseApp.firestore();
export  default db;