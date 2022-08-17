// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAqPrbIRJd1PatuhZ_XyvPC16NbGLhKFFg",
    authDomain: "employee-management-e92bd.firebaseapp.com",
    projectId: "employee-management-e92bd",
    storageBucket: "employee-management-e92bd.appspot.com",
    messagingSenderId: "372488774994",
    appId: "1:372488774994:web:ce4af9081bc4bc009a468b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth