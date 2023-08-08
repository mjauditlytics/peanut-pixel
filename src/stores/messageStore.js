import { ref
    // , watchEffect 
  } from "vue";
import { defineStore
  // , storeToRefs 
} from "pinia";
// import { db } from "@/db";
import { useSessionStorage } from '@vueuse/core';
import messageService from '../services/messages/fakeMessageService2';

// import { useAuthStore } from "./useAuthStore";

export const useMessageStore = defineStore("messages", () => {
  // const firestoreUnsubscribe = ref(null);
  
  // const userStore = useAuthStore();
  // const { user: storeUser } = storeToRefs(userStore);
  // const { user: storeUser } = storeToRefs(userStore);
  const storeUser = ref({uid: 'rdwKsGrQnyZfPq77xvaFov5mcjR2'});
  const messages = useSessionStorage('messages', []);
  const messagesRef = ref(messages.value);

  const addMessage = async (message) => {
    messagesRef.value.push(message);
    messages.value = messagesRef.value;
    const data = await messageService.createMessage(newFinding.value);
    // Call your API to update the backend
  };
  const fetchMessages = async () => {
    const messagesFromBackend = await messageService.listMessages();    
    messagesRef.value = messagesFromBackend;
    messages.value = messagesRef.value;
    return messagesFromBackend
    // console.table(messages.value)
  };
  const deleteMessage = async () => {

  }
  const updateMessage = async () => {
  }

  // watchEffect(() => {
  //   // If the user is logged out, call the Firestore unsubscribe function
  //   if (!storeUser) {
  //     if (firestoreUnsubscribe.value) {
  //       firestoreUnsubscribe.value();
  //     }
  //     messages.value = [];
  //     return;
  //   }

  //   // If the user is logged in, set up the Firestore listener again
  //   if (firestoreUnsubscribe.value) {
  //     firestoreUnsubscribe.value();
  //   }
  //   firestoreUnsubscribe.value = fetchMessages();
  // });

  // function getCollectionRef() {
  //   return collection(db, `messages/${storeUser.value.uid}/active`);
  // }

  // async function addMessage1({ finding, status }) {
  //   const data = await messageService.createMessage(newFinding.value);
  //   // const message = {
  //   //   // findingTitle: messageName,
  //   //   finding: finding,
  //   //   // detailedFinding:
  //   //   // risk: risks,
  //   //   // recommendation: recommendations,
  //   //   status: status,
  //   //   created: Date.now()
  //   // };
  //   // // messages.value.push(message);
  //   // return await addDoc(getCollectionRef(), message);
  // }

  // async function updateMessage(message) {
  //   const docRef = doc(
  //     db,
  //     `messages/${storeUser.value.uid}/active`,
  //     message.id
  //   );
  //   console.log(" docRef ", docRef);

  //   const docRef1 = await updateDoc(docRef, {
  //     finding: message.finding,
  //     // detailedFinding: message.detailedFinding,
  //     risks: message.risks,
  //     recommendations: message.recommendations,
  //     lastModified: serverTimestamp()
  //   });
  //   return docRef1;
  // }

  // function deleteMessage(messageId) {
  //   deleteDoc(doc(getCollectionRef(), messageId));
  // }

  // function fetchMessages() {
  //   console.log(" user ", storeUser);
  //   if (storeUser == undefined || !storeUser.value) return;

  //   const q = query(getCollectionRef(), orderBy("created", "desc"));

  //   const unsub = onSnapshot(q, querySnapshot => {
  //     const docs = [];
  //     querySnapshot.forEach(doc => {
  //       docs.push({ id: doc.id, ...doc.data() });
  //     });
  //     messages.value = docs;
  //   });

  //   return unsub;
  // }

  return {
    messages,
    fetchMessages,
    addMessage,
    deleteMessage,
    updateMessage
  };
});

/*
    TODO: Modify this to use a query to get the last n messages by LastModifiedTime
    which may be created/lastmodified time
  */
// function getRecentNMessagesSorted(n) {
//   const todosQuery = query(
//     getCollectionRef(),
//     orderBy("created", "desc"),
//     limit(n)
//   );
//   const unsub = onSnapshot(todosQuery, querySnapshot => {
//     const docs = [];
//     querySnapshot.forEach(doc => {
//       docs.push({ id: doc.id, ...doc.data() });
//     });
//     // console.log("adding messages to messages.value");
//     messages.value = docs;
//   });
//   return unsub;
// }
