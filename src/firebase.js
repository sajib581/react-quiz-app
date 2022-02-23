
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.React_APP_API_KEY,
  authDomain: process.env.React_APP_AUTH_DOMAIN ,
  projectId: process.env.React_APP_PROJECT_ID,
  storageBucket: process.env.React_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.React_APP_MESSAGING_ID,
  appId: process.env.React_APP_ID,
  databaseURL:process.env.React_APP_DATABASE_URL
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app