// useUserStore.js
import { createGlobalState } from '@vueuse/core';

  import { addDoc, collection, doc, getDoc} from 'firebase/firestore';
import { db } from '../utils/firebase'; // Import your Firebase configuration

export const useUserStore = createGlobalState(() => {
  const usersCollection = collection(db, 'users');
  // const { data: users } = useFirestore(usersCollection);

  const addUser = async (userData) => {
    try {
      await addDoc(usersCollection, userData);
      console.log('User added to Firestore successfully');
    } catch (error) {
      console.error('Error adding user to Firestore:', error);
      throw error;
    }
  };


  const doesUserExist = async (user) => {
    try {
      if (!user || !user.uid) {
        console.log('Invalid user object');
        return false;
      }
      const userRef = doc(db, 'users', user.uid);
      const userDoc = await getDoc(userRef);
      
      const rsult =  userDoc.exists();
      console.log('User exists check: ', rsult);
      return rsult;
      
    } catch (error) {
      console.error('Error checking user exists in Firestore:', error);
      throw error;
    }
  };

  return {
    // users,
    addUser,
    doesUserExist,
  };
});