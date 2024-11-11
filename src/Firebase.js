import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDcb_AzOW6GozHRaqo3fUFFFfip1AtxYC8",
  authDomain: "first-proj-b46aa.firebaseapp.com",
  projectId: "first-proj-b46aa",
  storageBucket: "first-proj-b46aa.firebasestorage.app",
  messagingSenderId: "526248057342",
  appId: "1:526248057342:web:f8f87440923551aabec8af",
  measurementId: "G-3SY6YTY9DW"
  };

  const app= firebase.initializeApp(firebaseConfig)
  export default app.database().ref()
  export const storage= app.storage().ref()
  export const auth= app.auth()
  