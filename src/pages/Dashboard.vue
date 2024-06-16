<template>
  <div class="flex h-[100dvh] overflow-hidden">
    <!-- Sidebar -->
    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />

    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
      <!-- Site header -->
      <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />
      <div class="m-1.5">
                    <!-- Start -->
                    <!-- <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white" aria-controls="news-modal" @click.stop="newsModalOpen = true">What's New</button> -->
                    
                    <ModalBlank id="news-modal" :modalOpen="newsModalOpen" @close-modal="newsModalOpen = false">
                      <div class="relative">
                        <img class="w-full" src="../../images/modal-image.jpg" width="460" height="200" alt="New on Mosaic" />
                        <!-- Close button -->
                        <button class="absolute top-0 right-0 mt-5 mr-5 text-slate-50 hover:text-white" @click.stop="newsModalOpen = false">
                          <div class="sr-only">Close</div>
                          <iframe 
                            width="560" 
                            height="315" 
                            :src="youtubeEmbedUrl" 
                            frameborder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                            allowfullscreen>
                          </iframe>
                          <!-- <svg class="w-4 h-4 fill-current">
                            <path d="M7.95 6.536l4.242-4.243a1 1 0 111.415 1.414L9.364 7.95l4.243 4.242a1 1 0 11-1.415 1.415L7.95 9.364l-4.243 4.243a1 1 0 01-1.414-1.415L6.536 7.95 2.293 3.707a1 1 0 011.414-1.414L7.95 6.536z" />
                          </svg> -->
                        </button>
                      </div>
                      <div class="p-5">
                        <!-- Modal header -->
                        <div class="mb-2">
                          <!-- <div class="mb-3">
                            <div class="text-xs inline-flex font-medium bg-indigo-100 dark:bg-indigo-500/30 text-indigo-600 dark:text-indigo-400 rounded-full text-center px-2.5 py-1">New on Mosaic</div>
                          </div> -->
                          <div class="text-lg font-semibold text-slate-800 dark:text-slate-100">Help your team work faster with X 🏃‍♂️</div>
                        </div>
                        <!-- Modal content -->
                        <div class="text-sm mb-5">
                          <div class="space-y-2">
                            <p>You might not be aware of this fact, but every frame, digital video, canvas, responsive design, and image often has a rectangular shape that is exceptionally precise in proportion (or ratio).</p>
                            <p>The ratio has to be well-defined to make shapes fit into different and distinct mediums, such as computer, movies, television and camera screens.</p>
                          </div>
                        </div>
                        <!-- Modal footer -->
                        <div class="flex flex-wrap justify-end space-x-2">
                          <button class="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white" @click.stop="newsModalOpen = false">Cool, I Got it</button>
                        </div>
                      </div>                      
                    </ModalBlank>
                    <!-- End -->
                  </div>



      <main class="grow">
        <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">
          <!-- Page header -->
          <div class="sm:flex sm:justify-between sm:items-center mb-5">
            <!-- Left: Title -->
            <div class="mb-4 sm:mb-0">
              <h1 class="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold">Audit Insights Hub</h1>
            </div>

            <!-- Right: Actions  -->
            <div
              class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2"
            >
              <!-- Search form -->
              <SearchForm placeholder="Search by client name…" />
              <!-- Create audit button -->
              <router-link
                to="/audits/scratch/start"
                class="btn bg-indigo-500 hover:bg-indigo-600 text-white"
              >
                <svg class="w-4 h-4 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                  <path
                    d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z"
                  />
                </svg>
                <span class="hidden xs:block ml-2">New Client</span>
              </router-link>
            </div>
          </div>

          <!-- More actions -->
          <div class="sm:flex sm:justify-between sm:items-center mb-5">
            <!-- Left side -->
            <div class="mb-4 sm:mb-0">
               <ul class="flex flex-wrap -m-1">
                <li class="m-1">
                  <button
                    class="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-transparent shadow-sm bg-indigo-500 text-white duration-150 ease-in-out"
                  >
                    All <span class="ml-1 text-indigo-200">67</span>
                  </button>
                </li>
                <!--<li class="m-1">
                  <button
                    class="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out"
                  >
                    Type <span class="ml-1 text-slate-400 dark:text-slate-500">14</span>
                  </button>
                </li>
                <li class="m-1">
                  <button
                    class="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out"
                  >
                    Priority
                    <span class="ml-1 text-slate-400 dark:text-slate-500">34</span>
                  </button>
                </li>
                <li class="m-1">
                  <button
                    class="inline-flex items-center justify-center text-sm font-medium leading-5 rounded-full px-3 py-1 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 duration-150 ease-in-out"
                  >
                    Status <span class="ml-1 text-slate-400 dark:text-slate-500">19</span>
                  </button>
                </li>
              </ul> -->
              <!-- <div class="flex flex-wrap mx-1"> -->
              <li class="font-medium text-slate-800 dark:text-slate-100 mx-5">Priority
              <DropdownFilter :filters="['High', 'Medium', 'Low']"></DropdownFilter>
              </li>
            <li class="font-medium text-slate-800 dark:text-slate-100">Status
              <DropdownFilter :filters="['Overdue', 'In Progress', 'Awaiting Information', 'Not yet started', 'Completed']" ></DropdownFilter>
            </li>
            <!-- </div> -->

          </ul> 

            </div>

            <!-- Right side -->
            <div
              class="grid grid-flow-col sm:auto-cols-max justify-start sm:justify-end gap-2"
            >
              <!-- Delete button -->
              <DeleteButton :selectedItems="selectedItems" />
              <!-- Dropdown -->
              <DropdownClassicAuditPeriods />
              <!-- Filter button -->
              <!-- <FilterButton align="right" /> -->
              
            </div>
          </div>

          <!-- Table -->
          <AuditsTable @change-selection="updateSelectedItems($event)" />

          <!-- Pagination -->
          <div class="mt-8">
            <PaginationClassic />
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import Sidebar from "../partials/Sidebar.vue";
import Header from "../partials/Header.vue";
import ModalBlank from '../components/ModalBlank.vue'
import SearchForm from "../components/SearchForm.vue";
import DeleteButton from "../partials/actions/DeleteButton.vue";
// import DateSelect from '../components/DateSelect.vue'
import DropdownFilter from '../components/DropdownFilter.vue'
import AuditsTable from '../partials/audits/AuditsTable.vue'
import PaginationClassic from '../components/PaginationClassic.vue'
import DropdownClassicAuditPeriods from '../components/DropdownClassicAuditPeriods.vue'

const sidebarOpen = ref(false);
const selectedItems = ref([]);
const newsModalOpen = ref(true);
const youtubeEmbedUrl = ref("https://www.youtube.com/embed/wBp6B5rmOKU");
// const isFirstLoad = ref(true);


const updateSelectedItems = (selected) => {
  selectedItems.value = selected;
};

// onMounted(() => {
//   // Set isFirstLoad to false after the first page load
//   isFirstLoad.value = false;
// });
</script>
