<template>
  <div class="flex h-[100dvh] overflow-hidden">

    <!-- Sidebar -->
    <!-- <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" /> -->

    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

      <!-- Site header -->
      <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />

      <main class="grow">
        <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

          <!-- Page header -->
          <div class="sm:flex sm:justify-between sm:items-center mb-5">

            <!-- Left: Title -->
            <div class="mb-4 sm:mb-0">
              <h1 class="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Project Risks &
                Recommendations ✨ ✨</h1>
            </div>

            <!-- Post a job button -->
            <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white">
              <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                <path
                  d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
              </svg>
              <span class="hidden xs:block ml-2">Add a finding</span>
            </button>

          </div>

          <!-- Page content -->
          <div
            class="flex flex-col space-y-10 sm:flex-row sm:space-x-6 sm:space-y-0 md:flex-col md:space-x-0 md:space-y-10 xl:flex-row xl:space-x-6 xl:space-y-0 mt-9">

            <!-- Sidebar -->
            <AuditSidebar />

            <!-- Content -->
            <div class="w-full">

              <!-- Search form -->
              <div class="mb-5">
                <form class="relative">
                  <label for="job-search" class="sr-only">Search</label>
                  <input id="job-search" class="form-input w-full pl-9 bg-white dark:bg-slate-800" type="search"
                    placeholder="Search job title or keyword…" />
                  <button class="absolute inset-0 right-auto group" type="submit" aria-label="Search">
                    <svg
                      class="w-4 h-4 shrink-0 fill-current text-slate-400 dark:text-slate-500 group-hover:text-slate-500 dark:group-hover:text-slate-400 ml-3 mr-2"
                      viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 14c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7zM7 2C4.243 2 2 4.243 2 7s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5z" />
                      <path
                        d="M15.707 14.293L13.314 11.9a8.019 8.019 0 01-1.414 1.414l2.393 2.393a.997.997 0 001.414 0 .999.999 0 000-1.414z" />
                    </svg>
                  </button>
                </form>
              </div>

              <!-- Jobs header -->
              <div class="flex justify-between items-center mb-4">
                <div class="text-sm text-slate-500 dark:text-slate-400 italic">Showing 2 results</div>
                <!-- Sort -->
                <div class="text-sm">
                  <span>Sort by </span>
                  <DropdownSort align="right" />
                </div>
              </div>

              <!-- Job list -->
              <div class="space-y-2">
                <!-- <Editor api-key='your-api-key' :init="{ /* your other settings */ }" /> -->
                <AuditListItem v-for="(item, index) in auditItems" :key="item.id" :item="item" :index="index" />
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
// import Editor from '@tinymce/tinymce-vue'

// import messageService from '../../services/messages/messageService';
import messageService from '../../services/messages/fakeMessageService';

// import Sidebar from '../../partials/Sidebar.vue'
import AuditSidebar from '../../partials/audits/AuditSidebar.vue'
import Header from '../../partials/Header.vue'
import DropdownSort from '../../components/DropdownSort.vue'
import AuditListItem from './AuditListItem.vue'
const sidebarOpen = ref(false)

// const auditItems = ref([]); // id , response, status
const auditItems = useSessionStorage('auditItems', []);
const newFinding = ref('school buildings have asbestos');
const isLoading = ref(false);
// const status = ref('');
// const response = ref('');
let unsubscribe;

async function addItemsWithDelay(data, auditItems, delay) {
  for (let item of data) {
    auditItems.value.push(item);
    await new Promise(resolve => setTimeout(resolve, delay));
  }
}
onMounted(async () => {
  // Fetch current state from Firestore and subscribe to changes
  unsubscribe = await messageService.listMessages((data) => {
    addItemsWithDelay(data, auditItems, 1000);
    // console.log(data)
    // // Check if the document is already in the array
    // const index = auditItems.value.findIndex(item => item.timestamp === data.timestamp);
    // if (index !== -1) {
    //   // If the document is already in the array, update it
    //   auditItems.value[index] = data;
    // } else {
    //   // If the document is not in the array, add it
    //   auditItems.value.push(data);
    // }
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



// const addFinding = async () => {
//   isLoading.value = true;
//   const { documentId } = await messageService.createMessage({ text: newFinding.value, riskRating: 'Low' }, 'detailed_finding');
//   unsubscribe = messageService.subscribeToMessage(documentId, (data) => {
//     // console.log("data id " + data + " " + data.id);
//     console.dir(data, { depth: null });
//     const index = auditItems.value.findIndex(item => item.timestamp === data.timestamp);

//     // TODO: Check if the finding is already in the array, create new version in the backend and maintain V1 and 2 in frontend.
//     //const index = auditItems.value.findIndex(item => item.detailed_finding_prompt === data.detailed_finding_prompt);

//     if (index !== -1) {
//       auditItems.value[index] = data;
//     } else {
//       auditItems.value.push(data);
//     }

//     // Set loading state to false
//     isLoading.value = false;
//   });


//   // unsubscribe = messageService.subscribeToMessage(documentId, (data) => {
//   //   data['id'] = documentId;
//   //   data['finding'] = newFinding.value;
//   //   data['riskRating'] = 'Low';
//   //   console.log(data);

//   //   // Make a shallow copy of the data and remove the timestamp
//   //   // const dataWithoutTimestamp = { ...data };
//   //   // delete dataWithoutTimestamp.timestamp;
//   //   auditItems.value = [...auditItems.value, data];
//   // });
//   // Store the unsubscribe function somewhere if you want to stop listening later
// };

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

// <div class="sm:flex sm:justify-between sm:items-center mb-8">

//   <!-- Left: Title -->
//   <div class="mb-4 sm:mb-0">
//     <h1 class="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Project Risks &
//       Recommendations ✨</h1>
//   </div>



// </div>


// <div class="flex">

// <input type="text" id="taskInput" placeholder="Enter new Finding"
//   class="w-full p-2 border border-gray-300 rounded-l">


// <!-- Add taks button -->
// <button @click="addFinding" class="btn bg-indigo-500 hover:bg-indigo-600 text-white justify-end">

//   <svg v-if="isLoading" class="animate-spin w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
//     <path
//       d="M8 16a7.928 7.928 0 01-3.428-.77l.857-1.807A6.006 6.006 0 0014 8c0-3.309-2.691-6-6-6a6.006 6.006 0 00-5.422 8.572l-1.806.859A7.929 7.929 0 010 8c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z" />
//   </svg>


//   <svg v-else class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
//     <path
//       d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
//   </svg>
//   <span class="ml-2">Add a Finding</span>
// </button>

// </div>

// <AuditListItem v-for="(item, index) in auditItems" :key="item.id" :item="item" :index="index" />
</script>

