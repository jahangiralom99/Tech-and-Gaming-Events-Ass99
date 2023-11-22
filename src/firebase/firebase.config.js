import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCrwhA3_r4BLdikSTpy__s-7PWeLt62FVo",
  authDomain: "tech-and-gaming-auth.firebaseapp.com",
  projectId: "tech-and-gaming-auth",
  storageBucket: "tech-and-gaming-auth.appspot.com",
  messagingSenderId: "816103353249",
  appId: "1:816103353249:web:60c04008da0b22769239e0"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);