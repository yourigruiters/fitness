import {
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
  updatePassword,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

// SIGNUP
const authSignup = async (email: string, password: string) => {
  const result = await createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return { user };
    })
    .catch((error) => {
      return error.code;
    });

  return result;
};

// SIGNIN
const authSignin = async (email: string, password: string) => {
  const result = await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return { user };
    })
    .catch((error) => {
      return error.code;
    });

  return result;
};

// SIGNOUT
const authSignout = async () => {
  const result = await signOut(auth)
    .then(() => {
      return true;
    })
    .catch((error) => {
      return error.code;
    });

  return result;
};

const auhtUpdatePassword = async () => {
  const user = auth.currentUser;
  const newPassword = "randomSecretPassword";

  if (user) {
    const result = await updatePassword(user, newPassword)
      .then(() => {
        return true;
      })
      .catch((error) => {
        return error.code;
      });

    return result;
  }

  return false;
};

const authResetPassword = async (email: string) => {
  const result = await sendPasswordResetEmail(auth, email)
    .then(() => {
      return true;
    })
    .catch((error) => {
      return error.code;
    });

  return result;
};

export {
  authSignup,
  authSignin,
  authSignout,
  auhtUpdatePassword,
  authResetPassword,
};
