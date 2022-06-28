// Import the functions you need from the SDKs you need
import app from 'firebase/compat/app';


const config = {
  apiKey: process.env.REACT_API_KEY,
  authDomain:process.env.REACT_AUTH_DOMAIN,
  projectId: process.env.EACTP_PROJECT_ID,
  storageBucket: process.env.REACT_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
};



class Firebase {
  constructor() {
    app.initializeApp(config)
  }
}

export default Firebase;
