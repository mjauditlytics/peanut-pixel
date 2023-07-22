// src/services/messageService.js
import axios from 'axios';
import { doc, onSnapshot, updateDoc, deleteDoc, collection, getDocs } from 'firebase/firestore';
import { db } from '../../utils/firebase'

const cloudFunctionURL = 'http://127.0.0.1:5001/iaai-a4d22/us-central1/queryAI'

export default {
  async createMessage(messageObj, requestType) {
    // POST request to your Firebase Cloud Function
    const response = await axios.post(cloudFunctionURL, { ...messageObj, requestType });
    return response.data;  // This should include the documentId and documentPath
  },

  subscribeToMessage(documentId, callback) {
    // Setup a Firestore listener for a specific document
    const docRef = doc(db, 'messages', documentId);
    return onSnapshot(docRef, (doc) => {
      callback(doc.data());
    });
  },

  async updateMessage(documentId, message) {
    // Update a specific document in Firestore
    const docRef = doc(db, 'messages', documentId);
    await updateDoc(docRef, { message });
  },

  async deleteMessage(documentId) {
    // Delete a specific document in Firestore
    const docRef = doc(db, 'messages', documentId);
    await deleteDoc(docRef);
  },

  async listMessages(callback) {
    // Fetch all documents in the "messages" collection
    const querySnapshot = await getDocs(collection(db, 'messages'));

    // Setup a Firestore listener for each document
    const unsubscribes = querySnapshot.docs.map((doc) => {
      return this.subscribeToMessage(doc.id, callback);
    });

    // Return a function that unsubscribes all listeners
    return () => {
      unsubscribes.forEach(unsubscribe => unsubscribe());
    };
  }

};
