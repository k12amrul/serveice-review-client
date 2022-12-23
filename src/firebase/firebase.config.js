// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyByKht6KYXE4SWJTurbAP6CDhCfkSOHGHE",
  authDomain: "assignment-11-418c4.firebaseapp.com",
  projectId: "assignment-11-418c4",
  storageBucket: "assignment-11-418c4.appspot.com",
  messagingSenderId: "184247898467",
  appId: "1:184247898467:web:50b35a4df9ebfd78a20356"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app