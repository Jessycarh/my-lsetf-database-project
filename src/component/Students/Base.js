import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore";
import {getStorage} from "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyCNrBfM1J8FFVSyBvsklImUS9zZ_N6Iak0",
    authDomain: "lsetf-project-7d17b.firebaseapp.com",
    projectId: "lsetf-project-7d17b",
    storageBucket: "lsetf-project-7d17b.appspot.com",
    messagingSenderId: "517200735719",
    appId: "1:517200735719:web:1e2a05dcf54cb6c1a22142"
  };

  const app= initializeApp(firebaseConfig)

  export const database= getFirestore(app);
  export const storage =getStorage(app);