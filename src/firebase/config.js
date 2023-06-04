import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAYGJq9qZBrgYK-IjivzkqIRtDlN4RmT3A",
    authDomain: "olxclone-48fbb.firebaseapp.com",
    projectId: "olxclone-48fbb",
    storageBucket: "olxclone-48fbb.appspot.com",
    messagingSenderId: "731665482758",
    appId: "1:731665482758:web:94e5d128e1776d27856f87"
};

export default firebase.initializeApp(firebaseConfig);