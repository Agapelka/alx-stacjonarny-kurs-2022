// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAzGSzBCYyQXlA3w4nQKL9BXYbeowrHMMg",
    authDomain: "chatalxstacjonarnyaga.firebaseapp.com",
    projectId: "chatalxstacjonarnyaga",
    storageBucket: "chatalxstacjonarnyaga.appspot.com",
    messagingSenderId: "1033268159725",
    appId: "1:1033268159725:web:5b6269098a6df48c5a18e4",
    databaseURL: "https://chatalxstacjonarnyaga-default-rtdb.europe-west1.firebasedatabase.app/"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const database = getDatabase(app);




//   ------ CONFIG ROGALA --------

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getDatabase } from "firebase/database";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyC8UFxkicPTdvRXsRS-8Mkeii_o8wqPxb0",
//   authDomain: "chatdamianalxstacjonarny.firebaseapp.com",
//   projectId: "chatdamianalxstacjonarny",
//   storageBucket: "chatdamianalxstacjonarny.appspot.com",
//   messagingSenderId: "414910309701",
//   appId: "1:414910309701:web:d1c39eca7f2ac833338a2c",
//   databaseURL: "https://chatdamianalxstacjonarny-default-rtdb.europe-west1.firebasedatabase.app/",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// export const database = getDatabase(app);