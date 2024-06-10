<template>
  <div class="flex h-[100dvh] overflow-hidden">

    <!-- Sidebar -->
    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />

    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

      <!-- Site header -->
      <!-- <AppHeader :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" /> -->

      <main class="grow">
        <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

          <!-- Page header -->
          <div class="sm:flex sm:justify-between sm:items-center mb-5">

            <!-- Left: Title -->
            <div class="mb-4 sm:mb-0">
              <h1 class="text-xl md:text-2xl text-slate-800 dark:text-slate-100 font-semibold ">Project Risks &
                Recommendations ✨</h1>
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
          <!-- <ModalAudit  :mode="'add'" @addItem="addNewItem"  /> -->
          <!-- Page content -->
          <div
            class="flex flex-col space-y-10 sm:flex-row sm:space-x-6 sm:space-y-0 md:flex-col md:space-x-0 md:space-y-10 xl:flex-row xl:space-x-6 xl:space-y-0 mt-9">

            <!-- Sidebar -->
            <!-- <AuditSidebar /> -->

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

              <!-- header -->
              <!-- <div class="flex justify-between items-center mb-4">
                <div class="text-sm text-slate-500 dark:text-slate-400 italic">Showing 2 results</div>
              
                <div class="text-sm">
                  <span>Sort by </span>
                  <DropdownSort align="right" />
                </div>
              </div> -->

              <!-- Audit Items list -->
              <div class="space-y-2">
                
                <AuditListItem v-for="(item, index) in auditItems" :key="item.id" :item="item" :index="index"
                 
                  />
                  <!-- @update="updateItem" @delete="deleteItem"   -->
                  <!-- :audit-modal-open="auditModalOpen"                  -->
                  <!-- @close="handleModalClose"     -->
              </div>

              <!-- <div ref="editorContainer" class="border border-gray-300 rounded p-3"></div> -->
              <!-- <button @click.stop="save">Save</button> -->

            </div>

          </div>

        </div>
      </main>

    </div>


  </div>
</template>

<script setup>

import { onMounted, onUnmounted, ref } from 'vue';
import { useMessageStore } from '../../stores/messageStore';

// import { useModalStore } from '../../stores/useModalStore';

// const modalStore = useModalStore();
// const auditModalOpen = ref(false);


// import { useSessionStorage } from '@vueuse/core';
// import EditorJS from '@editorjs/editorjs';
// import List from '@editorjs/list';
// import Header from '@editorjs/header';

// import messageService from '../../services/messages/messageService';
// import messageService from '../../services/messages/fakeMessageService';

import Sidebar from '../../partials/Sidebar.vue'
// import ModalAudit from '../../components/ModalAudit.vue'
// import AuditSidebar from '../../partials/audits/AuditSidebar.vue'
// import AppHeader from '../../partials/Header.vue'
// import DropdownSort from '../../components/DropdownSort.vue'
import AuditListItem from '../../components/AuditListItem.vue'

const sidebarOpen = ref(false)
const messageStore = useMessageStore();
const auditItems = ref(messageStore.items); //useSessionStorage('auditItems', []);

const newFinding = ref('school buildings have asbestos');
const isLoading = ref(false);
// const status = ref('');
// const response = ref('');
// let unsubscribe;


// const handleModalClose = () => {
//   modalStore.closeModal();
// };

// const closeModal = () => {
//   console.log(" parent close")
//   auditModalOpen.value = false;
//   console.log(" parent modal valyue" ,auditModalOpen.value  )
// }

const deleteItem = (index) => {
  console.log("delete was clicled");
  // auditModalOpen.value = false;
  // auditItems.value.splice(index, 1);
}
const updateItem = (item) => {
  // auditItems.value.splice(index, 1);
  console.log("update was clicled")
  // auditModalOpen.value = false;
}

// async function addItemsWithDelay(data, auditItems, delay, newList = false) {
//   if (newList) {
//     auditItems.value = [];
//   }
//   for (let item of data) {
//     auditItems.value.push(item);
//     await new Promise(resolve => setTimeout(resolve, delay));
//   }
// }
async function addNewItem(item) {
  isLoading.value = true;
  const item3 = {
    id: 3,
    audit_answers: {
      finding: "cc333c c ",
      detailed_finding: "CC333 BBC",
      risk: "risk 333333333 CC BBC",
      recommendation: "BBC 333333333 CC recommendation",
      riskRating: "Very High",
    },
    
    detailed_finding_status: "complete",

    timestamp: new Date()
  }
  messageStore.addMessage(item2);
  // const data = await messageService.createMessage(newFinding.value);

}

/**
 *  //convert this data to My app's structure that MessageService can understand
  // headings are keys
 */
// data.blocks[0].data
// {text: 'Detailed Findings', level: 2}

// data.blocks[3].data -> {style: 'unordered', items: Array(3)}
// data.blocks[3].data.items -> (3) ["This inclusion is in direct violation of..",
          // 'There is no clear documentation or justification provided for the \
          // inclusion of this late fee.', 'The late fee..']

// async function save() {
//   const data = await editor.save();
//   //convert this data to My app's structure that MessageService can understand
//   // headings are keys
//   console.log(data);
// }
onMounted(async () => {
 
  auditItems.value =await messageStore.fetchMessages();
  console.log("onMounted AudLisat");
  console.table(auditItems.value )
   // only if data has changed in backend
  // const timestamps = auditItems.value.map(item => item.timestamp);
  // const maxTimestamp = Math.max(...timestamps);
  
  // Fetch current state from Firestore and subscribe to changes
  // unsubscribe = await messageService.listMessages((data) => {
  //   addItemsWithDelay(data, auditItems, 1000, true); 
  // });


  // auditItems.value = messageStore.messages;
  // editor = new EditorJS({
  //   holder: editorContainer.value,
  //   tools: {
  //     list: {
  //       class: List,
  //       inlineToolbar: true, 
  //     },
  //     header: Header,
  //   },
  //   data: b //JSON.parse(a)
  // });
  

});


onUnmounted(() => {
  // if (unsubscribe) {
  //   unsubscribe();
  // }
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


// const editor = new EditorJS('editorjs');

// const editor = EditorJS({
//   holder: 'editorjs',

//   tools: {
    
//     header: {
//       class: Header,
//       shortcut: 'CMD+SHIFT+H',
//     },
//     list: {
//       class: List,
//       inlineToolbar: true,
//       config: {
//         defaultStyle: 'unordered'
//       }
//     },
//   },

// });


// let editorContainer = ref(null);
// let editor = null;

// const a = "{\n  \"time\": 1621340388122,\n  \"blocks\": [\n    {\n      \"type\": \"header\",\n      \"data\": {\n        \"text\": \"Detailed Findings\",\n        \"level\": 2\n      }\n    },\n    {\n      \"type\": \"list\",\n      \"data\": {\n        \"style\": \"unordered\",\n        \"items\": [\n          \"The cost model currently in use includes a late fee.\",\n          \"This late fee inclusion is in direct violation of the company's established policies.\",\n          \"The late fee has been applied indiscriminately across all transactions, regardless of their nature or timing.\",\n          \"There is no clear documentation or justification provided for the inclusion of this late fee.\",\n          \"The late fee has led to an inflation of costs in the cost model.\"\n        ]\n      }\n    },\n    {\n      \"type\": \"header\",\n      \"data\": {\n        \"text\": \"Risks\",\n        \"level\": 2\n      }\n    },\n    {\n      \"type\": \"list\",\n      \"data\": {\n        \"style\": \"unordered\",\n        \"items\": [\n          \"The inclusion of the late fee could lead to inaccurate financial reporting.\",\n          \"The company may face reputational damage for violating its own policies.\",\n          \"Potential legal and regulatory implications if the late fees are deemed unfair or excessive.\"\n        ]\n      }\n    },\n    {\n      \"type\": \"header\",\n      \"data\": {\n        \"text\": \"Recommendations\",\n        \"level\": 2\n      }\n    },\n    {\n      \"type\": \"list\",\n      \"data\": {\n        \"style\": \"unordered\",\n        \"items\": [\n          \"Immediate removal of the late fee from the cost model to ensure compliance with company policy.\",\n          \"Conduct a thorough review of all transactions where the late fee was applied and make necessary adjustments.\",\n          \"Implement stronger internal controls to prevent such deviations from company policy in the future.\",\n          \"Provide training to relevant staff about company policies and the importance of adherence.\"\n        ]\n      }\n    }\n  ],\n  \"version\": \"2.19.0\"\n}"
// const b = {
//   "time": 1621340388122,
//   "blocks": [
//     {
//       "type": "header",
//       "data": {
//         "text": "Detailed Findings",
//         "level": 2
//       }
//     },
//     {
//       "type": "list",
//       "data": {
//         "style": "unordered",
//         "items": [
//           "The cost model currently in use includes a late fee."
//         ]
//       }
//     },
//     {
//       "type": "list",
//       "data": {
//         "style": "unordered",
//         "items": [
//           "This late fee inclusion is in direct violation of the company's established policies.",
//           "There is no clear documentation or justification provided for the inclusion of this late fee.",
//           "The late fee has led to an inflation of costs in the cost model."
//         ]
//       }
//     },
//     {
//       "type": "list",
//       "data": {
//         "style": "unordered",
//         "items": [
//           "The late fee has been applied indiscriminately across all transactions, regardless of their nature or timing."
//         ]
//       }
//     }
//   ],
//   "version": "2.19.0"
// }
 

</script>

