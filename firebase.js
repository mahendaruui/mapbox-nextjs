// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {GoogleAuthProvider, getAuth} from 'firebase/auth';
// import { GoogleAuthProvider, getAuth } from 'firebase';
// import * as firebase from 'firebase';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBCmdQ9vEjCSGRsCBJpQqSrZXc9d97amCw',
  authDomain: 'moda-mahendar-next.firebaseapp.com',
  projectId: 'moda-mahendar-next',
  storageBucket: 'moda-mahendar-next.appspot.com',
  messagingSenderId: '252444622176',
  appId: '1:252444622176:web:47cdb3a7afb9e4d9387205'
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
// const provider = new firebase.auth.GoogleAuthProvider();
const auth = getAuth();  

// export { app, provider, auth }const firebaseApp = firebase.initializeApp(firebaseConfig);

// export { firebaseApp, provider, auth};
export { firebaseApp, provider, auth};
