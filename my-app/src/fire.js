import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyDKWg9QRX3uAyRwzUSbc1Wc50OIuGk5GMw",
  authDomain: "course-d0c67.firebaseapp.com",
  projectId: "course-d0c67",
  storageBucket: "course-d0c67.appspot.com",
  messagingSenderId: "1054393486236",
  appId: "1:1054393486236:web:e6fffbd845ed386d409659"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
