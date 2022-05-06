// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBcuXfLUHanyo1aFvDvVV7PCHei4iNZkI",
    authDomain: "spicy-kart.firebaseapp.com",
    projectId: "spicy-kart",
    storageBucket: "spicy-kart.appspot.com",
    messagingSenderId: "22479502091",
    appId: "1:22479502091:web:ab51dd01247feec2b1000e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth

