import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAfpv-5ZXC347Q90NVd8rg83eTNUrevnU",
  authDomain: "fitness-63238.firebaseapp.com",
  projectId: "fitness-63238",
  storageBucket: "fitness-63238.appspot.com",
  messagingSenderId: "204968595945",
  appId: "1:204968595945:web:752f885f2b238f8db9bb78",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
