import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/database"
import "firebase/compat/storage"

const firebaseConfig = {
  apiKey: "AIzaSyBQj9cjlXXgTZiXdYgTVAxS0JLSON_95UY",
  authDomain: "fir-541a7.firebaseapp.com",
  databaseURL: "https://fir-541a7-default-rtdb.firebaseio.com",
  projectId: "fir-541a7",
  storageBucket: "fir-541a7.appspot.com",
  messagingSenderId: "997982141554",
  appId: "1:997982141554:web:eab0bb7b21e0168d4e56eb"
  };
const app=firebase.initializeApp(firebaseConfig)
export default app.database().ref()
export const storage= app.storage().ref()
export const auth=app.auth()