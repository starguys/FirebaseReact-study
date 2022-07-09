import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCX9xVu28DlJMSLMDR1XurPnObF_pYgJgk",
  authDomain: "nwitter-872d1.firebaseapp.com",
  projectId: "nwitter-872d1",
  storageBucket: "nwitter-872d1.appspot.com",
  messagingSenderId: "570003902939",
  appId: "1:570003902939:web:df558d1e605855e300d7fe",
};

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);
