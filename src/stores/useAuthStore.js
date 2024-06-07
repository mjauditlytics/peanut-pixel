import { ref } from "vue";
import { defineStore } from "pinia";
import { auth } from "../utils/firebase-auth.js";
import { useUserStore } from "./useUserStore"
// import { getAuth } from "firebase/auth";

export const useAuthStore = defineStore("auth", () => {
  const userStore = useUserStore();
  const user = ref(null);
  // const auth = getAuth();

  function setUser(newUser) {
    user.value = newUser;
  }

  async function createAndSetUser(newUser){
    //console.log(not yet creatung  user)
    try {
      // Register the user with Firebase Authentication
      // ...
      console.log("Going to create new user in collection: ", newUser)
      // Add the user data to Firestore
      const userData = {
        uid: newUser.uid,
        displayName: newUser.providerData[0].displayName,
        email: newUser.providerData[0].email,
        phoneNumber: newUser.providerData[0].phoneNumber,
        photoURL: newUser.providerData[0].photoURL,
        providerId: newUser.providerData[0].providerId,
      };
      await userStore.addUser(userData);

      // Perform any additional actions or routing
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle the error scenario
    }
    setUser(newUser)
  }

  
  const waitForAuthInitialized = () => {
    return new Promise(resolve => {
      const unsubscribe = auth.onAuthStateChanged(() => {
        unsubscribe();
        resolve();
      });
    });
  };
  const getCurrentUser = async () => {
    if (user.value !== null) return user.value;
    await waitForAuthInitialized();
    return auth.currentUser;
  };

  async function signOut() {
    try {
      await auth.signOut();
      this.setUser(null);
    } catch (error) {
      console.error(error);
    }
  }

  function watchAuthState() {
    auth.onAuthStateChanged(currentUser => {
      setUser(currentUser);
    });
  }

  return {
    user,
    watchAuthState,
    getCurrentUser,

    setUser,
    createAndSetUser,
    signOut
  };
});
