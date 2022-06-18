import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCZl5YNLGjJhIQpcvq3D07pGZbe-3hVgMg",
  authDomain: "fir-auth-demo-354c4.firebaseapp.com",
  projectId: "fir-auth-demo-354c4",
  storageBucket: "fir-auth-demo-354c4.appspot.com",
  messagingSenderId: "893990031319",
  appId: "1:893990031319:web:5549d175a5be49a15c0592",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
