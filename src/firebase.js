import firebase from 'firebase/compat/app';
/*import 'firebase/compat/auth';
import 'firebase/comapt/firestore';*/
import {initializeApp} from "firebase/app";
import {GoogleAuthProvider} from "firebase/auth";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


//yourown firebase api key and values here
const firebaseConfig = {            
  apiKey: "yyyyyyyyyyyyyyyyyyy",
  authDomain: "slack-6a926.firebaseapp.com",
  projectId: "slack-6a926",
  storageBucket: "slack-6a926.appspot.com",
  messagingSenderId: "617621957591",
  appId: "1:617621957ojrjfejr591:web:dd65lkjkfjkgsdgghuh",
  measurementId: "G-WD5SlrhfioheihjojW"
};
const fireBaseapp=initializeApp(firebaseConfig);
const database=getFirestore(fireBaseapp);
const auth= getAuth(fireBaseapp);
const provider=new GoogleAuthProvider();

export {auth,provider,database};
