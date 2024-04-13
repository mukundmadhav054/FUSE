import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAiEzjtNkJUBBe-vDfdM2vCuqkSy0TpU50",
  authDomain: "fir-authentication-cfa82.firebaseapp.com",
  projectId: "fir-authentication-cfa82",
  storageBucket: "fir-authentication-cfa82.appspot.com",
  messagingSenderId: "900372189890",
  appId: "1:900372189890:web:1ca7a561b34ad0182fa15b",
  measurementId: "G-KCZ0PZFB1B"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();

export {auth,provider};