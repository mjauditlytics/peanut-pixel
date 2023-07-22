<template>
  <div class="flex h-[100dvh] overflow-hidden">

    <!-- Sidebar -->
    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />

    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

      <!-- Site header -->
      <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />

      <main class="grow">
        <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

          <!-- Smaller container -->
          <div class="max-w-3xl mx-auto">

            <!-- Page header -->
            <div class="sm:flex sm:justify-between sm:items-center mb-8">

              <!-- Left: Title -->
              <div class="mb-4 sm:mb-0">
                <h1 class="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Project Risks &
                  Recommendations ✨</h1>
              </div>


              <!-- <div id="todoApp" class="container mx-auto p-4">
                
                <div class="flex mb-4">
                  <input type="text" id="taskInput" v-model="newMessage" placeholder="Enter new Finding"
                    class="flex-grow p-2 border border-gray-300 rounded-l">
                  <button @click="createMessage" class="bg-green-500 hover:bg-green-600 text-white px-4 rounded-r">Add
                    Finding</button>
                  <p>Status: {{ status }}</p>
                  <p>Response: {{ response }}</p>
                </div>
                
              </div> -->



              <!-- Right: Actions -->
              <div class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-4">

                <input type="text" id="taskInput" v-model="newFinding" placeholder="Enter new Finding"
                  class="flex-grow p-2 border border-gray-300 rounded-l">
                <!-- Add taks button -->
                <button @click="addFinding" class="btn bg-indigo-500 hover:bg-indigo-600 text-white">

                  <svg v-if="isLoading" class="animate-spin w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
                    <path
                      d="M8 16a7.928 7.928 0 01-3.428-.77l.857-1.807A6.006 6.006 0 0014 8c0-3.309-2.691-6-6-6a6.006 6.006 0 00-5.422 8.572l-1.806.859A7.929 7.929 0 010 8c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
                  </svg>


                  <svg v-else class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                    <path
                      d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                  </svg>
                  <span class="ml-2">Add a Finding</span>
                </button>

              </div>

            </div>

            <!-- Tasks -->
            <div class="space-y-6">
              <!-- Group 2 -->
              <div>
                <h2 class="grow font-semibold text-slate-800 dark:text-slate-100 truncate mb-4">Findings✌️</h2>
                <div class="space-y-2">

                  <!-- Task -->
                  <AuditListItem v-for="(item, index) in auditItems" :key="item.id" :item="item" :index="index" />


                  <!-- Task -- >
                  <div class="bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 p-4" draggable="true">
                    <div class="sm:flex sm:justify-between sm:items-start">
                      < !-- Left side -- >
                      <div class="grow mt-0.5 mb-3 sm:mb-0 space-y-3">
                        <div class="flex items-center">
                          < !-- Drag button -- >
                          <button class="cursor-move mr-2">
                            <span class="sr-only">Drag</span>
                            <svg class="w-3 h-3 fill-slate-300 dark:fill-slate-600" viexBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                              <path d="M0 1h12v2H0V1Zm0 4h12v2H0V5Zm0 4h12v2H0V9Z" fill-rule="evenodd" />
                            </svg>
                          </button>
                          < !-- Checkbox button -- >
                          <label class="flex items-center">
                            <input type="checkbox" class="form-checkbox w-5 h-5 rounded-full peer" />
                            <span class="font-medium text-slate-800 dark:text-slate-100 peer-checked:line-through ml-2">Product Update - Q4 2021</span>
                          </label>
                        </div>
                      </div>
                      < !-- Right side -- >
                      <div class="flex items-center justify-end space-x-3">
                        <! -- Date -- >
                        <div class="flex items-center text-amber-500">
                          <svg class="w-4 h-4 shrink-0 fill-current mr-1.5" viewBox="0 0 16 16">
                            <path d="M15 2h-2V0h-2v2H9V0H7v2H5V0H3v2H1a1 1 0 00-1 1v12a1 1 0 001 1h14a1 1 0 001-1V3a1 1 0 00-1-1zm-1 12H2V6h12v8z" />
                          </svg>
                          <div class="text-sm text-amber-600">Mar 27</div>
                        </div>
                        < !-- Attach button -- >
                        <button class="text-slate-400 dark:text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-500">
                          <svg class="w-4 h-4 shrink-0 fill-current mr-1.5" viewBox="0 0 16 16">
                            <path d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0zM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div> -->


                </div>
              </div>

            </div>

          </div>

        </div>
      </main>

    </div>

  </div>
</template>

<script setup>

import { onMounted, onUnmounted, ref } from 'vue';
import { useSessionStorage } from '@vueuse/core';
import messageService from '../../services/messages/messageService';

import Sidebar from '../../partials/Sidebar.vue'
import Header from '../../partials/Header.vue'
import AuditListItem from './AuditListItem.vue'
const sidebarOpen = ref(false)

// const auditItems = ref([]); // id , response, status
const auditItems = useSessionStorage('auditItems', []);
const newFinding = ref('school buildings have asbestos');
const isLoading = ref(false);
// const status = ref('');
// const response = ref('');
let unsubscribe;



const addFinding = async () => {
  isLoading.value = true;
  const { documentId } = await messageService.createMessage({ text: newFinding.value, riskRating: 'Low' }, 'detailed_finding');
  unsubscribe = messageService.subscribeToMessage(documentId, (data) => {
    // console.log("data id " + data + " " + data.id);
    console.dir(data, { depth: null });
    const index = auditItems.value.findIndex(item => item.timestamp === data.timestamp);

    // TODO: Check if the finding is already in the array, create new version in the backend and maintain V1 and 2 in frontend.
    //const index = auditItems.value.findIndex(item => item.detailed_finding_prompt === data.detailed_finding_prompt);

    if (index !== -1) {
      auditItems.value[index] = data;
    } else {
      auditItems.value.push(data);
    }

    // Set loading state to false
    isLoading.value = false;
  });


  // unsubscribe = messageService.subscribeToMessage(documentId, (data) => {
  //   data['id'] = documentId;
  //   data['finding'] = newFinding.value;
  //   data['riskRating'] = 'Low';
  //   console.log(data);

  //   // Make a shallow copy of the data and remove the timestamp
  //   // const dataWithoutTimestamp = { ...data };
  //   // delete dataWithoutTimestamp.timestamp;
  //   auditItems.value = [...auditItems.value, data];
  // });
  // Store the unsubscribe function somewhere if you want to stop listening later
};

// onMounted(async () => {
//   // Fetch current state from Firestore and subscribe to changes
//   unsubscribe = await messageService.listMessages((data) => {
//     // Make a shallow copy of the data and remove the timestamp
//     const dataWithoutTimestamp = { ...data };
//     delete dataWithoutTimestamp.timestamp;
//     auditItems.value = [...auditItems.value, dataWithoutTimestamp];
//     // auditItems.value = [...auditItems.value, data];
//   });
// });

onMounted(async () => {
  // Fetch current state from Firestore and subscribe to changes
  unsubscribe = await messageService.listMessages((data) => {
    // console.log(data)
    // Check if the document is already in the array
    const index = auditItems.value.findIndex(item => item.timestamp === data.timestamp);
    if (index !== -1) {
      // If the document is already in the array, update it
      auditItems.value[index] = data;
    } else {
      // If the document is not in the array, add it
      auditItems.value.push(data);
    }
  });
});


onUnmounted(() => {
  if (unsubscribe) {
    unsubscribe();
  }
});

// const createMessage = async () => {
//   const { documentId } = await messageService.createMessage(newFinding.value, 'detailed_finding');
//   unsubscribe = messageService.subscribeToMessage(documentId, (data) => {
//     status.value = data.status;
//     response.value = data.response;
//   });
// };



</script>