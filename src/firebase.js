import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDy5CRIlMPFi6DDWqm-4GD3I6dhSHwiJ_A",
    authDomain: "netflix-clone-8418a.firebaseapp.com",
    projectId: "netflix-clone-8418a",
    storageBucket: "netflix-clone-8418a.appspot.com",
    messagingSenderId: "511079315672",
    appId: "1:511079315672:web:b52c30f3888e2b3285ffad"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

 
  export  {auth, db};