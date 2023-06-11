import { getAuth
//, signInWithEmailAndPassword, onAuthStateChanged, signOut 
} from "firebase/auth";
import { firebaseApp } from "./firebase";

export const auth = getAuth(firebaseApp);

// export function getCurrentUser() {
//   return new Promise((resolve, reject) => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       unsubscribe();
//       resolve(user);
//     }, reject);
//   });
// };

// export async function login() {
//     await signInWithEmailAndPassword(auth, 'user@mail.com', 'password')
// }

// export async function logout() {
//     await signOut(auth)
// }