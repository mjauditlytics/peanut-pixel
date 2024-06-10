// store.js
import { defineStore } from 'pinia';

export const useModalStore = defineStore({
  id: 'modal',
  state: () => ({
    auditModalOpen: false,
  }),
  actions: {
    openModal() {
      console.log('open modal...');
      this.auditModalOpen = true;
    },
    closeModal() {
      console.log('close modal...');
      this.auditModalOpen = false;
    },
  },
});
