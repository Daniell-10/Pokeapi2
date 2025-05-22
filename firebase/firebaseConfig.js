// firebase/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDAmKULDR7moY7eghVRIxHFzZ45yJGpHK8",
  authDomain: "pokeapii2.firebaseapp.com",
  projectId: "pokeapii2",
  storageBucket: "pokeapii2.firebasestorage.app",
  messagingSenderId: "1054020704113",
  appId: "1:1054020704113:web:47a18ed59c27857ed708d0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };