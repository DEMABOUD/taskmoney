import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDMIlqjDY5JD5EP3ZlzQ1iMf_701VoToLM",
  authDomain: "clickfric.firebaseapp.com",
  projectId: "clickfric",
  storageBucket: "clickfric.firebasestorage.app",
  messagingSenderId: "75943300179",
  appId: "1:75943300179:web:5c4f60123069032ebd0aa6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const loginScreen = document.getElementById("loginScreen");
const appScreen = document.getElementById("app");
const btn = document.getElementById("googleLogin");

btn.addEventListener("click", async () => {
  const result = await signInWithPopup(auth, provider);
  if (result.user) {
    loginScreen.style.display = "none";
    appScreen.style.display = "block";
  }
});
