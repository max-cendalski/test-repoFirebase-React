//import app from 'firebase/compat/app'
import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getDatabase} from "firebase/database"
import {getStorage} from "firebase/storage"


const firebaseConfig = {
  apiKey:process.env.REACT_APP_API_KEY,
  authDomain:process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.EACTP_APP_PROJECT_ID,
  storageBucket: 'test-firebasereact.appspot.com',
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
  databaseURL: "https://test-firebasereact-default-rtdb.firebaseio.com"
};

const app = initializeApp(firebaseConfig)


export const storage = getStorage(app);
export const database = getDatabase(app)
export const auth = getAuth(app)
export default app
