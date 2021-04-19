import  firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBkNlRsZqjpGIkgDYOrk7GcY4GjCSIs-CM",
    authDomain: "frb-qsn-blog-example.firebaseapp.com",
    databaseURL: "https://frb-qsn-blog-example-default-rtdb.firebaseio.com",
    projectId: "frb-qsn-blog-example",
    storageBucket: "frb-qsn-blog-example.appspot.com",
    messagingSenderId: "731682202635",
    appId: "1:731682202635:web:1f51cd980b7f40331d130e"
  };
  export const app = firebase.initializeApp(firebaseConfig);
