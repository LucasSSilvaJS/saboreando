import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyD6th5-T5hFHB5TW3RJGdmsCqMvJtPic0U",
    authDomain: "saboreando-banco.firebaseapp.com",
    projectId: "saboreando-banco",
    storageBucket: "saboreando-banco.appspot.com",
    messagingSenderId: "908805485171",
    appId: "1:908805485171:web:276ebd22f53e8e5da2b006"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };