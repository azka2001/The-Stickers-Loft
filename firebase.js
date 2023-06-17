import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPnCIT-Gd1fVGN0VE5O4vyEEwSlw6VI2M",
  authDomain: "thestickersloft.firebaseapp.com",
  databaseURL: "https://thestickersloft-default-rtdb.firebaseio.com",
  projectId: "thestickersloft",
  storageBucket: "thestickersloft.appspot.com",
  messagingSenderId: "583627301597",
  appId: "1:583627301597:web:2d0a0dff3887a51acc7134",
  measurementId: "G-Z3G2FJQX0T"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
export default firebaseApp;
