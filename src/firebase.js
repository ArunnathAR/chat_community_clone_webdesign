import firebase from 'firebase/compat/app';
/*import 'firebase/compat/auth';
import 'firebase/comapt/firestore';*/
import {initializeApp} from "firebase/app";
import {GoogleAuthProvider} from "firebase/auth";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";



const firebaseConfig = {            
  apiKey: "yyyyyyyyyyyyyyyyyyy",
  authDomain: "slack-6a926.firebaseapp.com",
  projectId: "slack-6a926",
  storageBucket: "slack-6a926.appspot.com",
  messagingSenderId: "617621957591",
  appId: "1:617621957591:web:dd650591faa070f6363992",
  measurementId: "G-WD5SMS1FEW"
};
const fireBaseapp=initializeApp(firebaseConfig);
const database=getFirestore(fireBaseapp);
const auth= getAuth(fireBaseapp);
const provider=new GoogleAuthProvider();

export {auth,provider,database};