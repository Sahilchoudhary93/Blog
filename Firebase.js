import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/database'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAtbKTRPM2O_YHU1FXezDf57Vu8sTnTaGI",
    authDomain: "bloggingweb-7e097.firebaseapp.com",
    projectId: "bloggingweb-7e097",
    storageBucket: "bloggingweb-7e097.appspot.com",
    messagingSenderId: "7042042279",
    appId: "1:7042042279:web:e4423ce6c73e3ec5634e82"
  };

  const app= firebase.initializeApp(firebaseConfig)
  export default app.database().ref()
  export const storage= app.storage().ref()
  export const auth= app.auth()
  