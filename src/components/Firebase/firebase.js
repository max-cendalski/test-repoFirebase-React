
import {initializeApp} from "firebase/app"
import { getFirestore } from "firebase/firestore";


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

export const firestore = getFirestore(app)
export default app
