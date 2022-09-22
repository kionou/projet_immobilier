
import { initializeApp } from "firebase/app";
import 'firebase/auth'
import { getFirestore,collection} from 'firebase/firestore'
import { getStorage } from "firebase/storage";
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBuKg5Fu0b9Sb1q9FMGFQm9qIm-yzScVX0",
  authDomain: "immobilier-edcbb.firebaseapp.com",
  databaseURL:"gs://immobilier-edcbb.appspot.com",
  projectId: "immobilier-edcbb",
  storageBucket: "immobilier-edcbb.appspot.com",
  messagingSenderId: "723496084451",
  appId: "1:723496084451:web:8cfb5c98306cc55bc236d6"
};


const app = initializeApp(firebaseConfig);
const data = getFirestore(app)
export const storage = getStorage(app);


export const bienCollection = collection(data,'bien')
export const usercollection = collection(data,'users')
export const agentcollection = collection(data,'agents')
