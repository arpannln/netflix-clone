import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyAI5fvhCJM6n13X6GuFmrGXx5aERlfUOu4",
  authDomain: "netflix-5d4b9.firebaseapp.com",
  databaseURL: "https://netflix-5d4b9.firebaseio.com",
  projectId: "netflix-5d4b9",
  storageBucket: "netflix-5d4b9.appspot.com",
  messagingSenderId: "672829929343",
  appId: "1:672829929343:web:c8c7b1aa03c38bd9884c4a"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase);

export {firebase};
