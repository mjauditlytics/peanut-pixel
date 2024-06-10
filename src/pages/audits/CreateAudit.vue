<template>

  <div class="flex h-[100dvh] overflow-hidden">

    <!-- Sidebar -->
    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />

    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white dark:bg-slate-900">

      <!-- Site header -->
      <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />

      <main class="grow">

        <div class="lg:relative lg:flex">

          <!-- Content -->
          <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            <!-- Page header -->
            <div class="sm:flex sm:justify-between sm:items-center mb-5">

              <!-- Left: Title -->
              <div class="mb-4 sm:mb-0">
                <h1 class="text-2xl md:text-3xl text-slate-800 dark:text-slate-100 font-bold"> Choose a starting point  ✨</h1>


              
                  <!-- Start -->
                  <router-link to="/audits/from-scratch" custom v-slot="{ navigate }">
                  <button  @click="navigate" class="btn m-2.5 md:px-4 md:py-4 md:mt-8 lg:mt-16 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold">
                    <svg  width="50px" height="50px" viewBox="0 0 24 24"  class="fill-current opacity-90 shrink-0">
                      <path
                        d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg>
                    <span class="ml-8 mx-4">Create from Scratch</span>
                  </button>
                </router-link>


                <router-link to="/audits/report-templates" custom v-slot="{ navigate }">
                  <button  @click="navigate" class="btn m-2.5 md:px-4 md:py-4 md:mt-8 lg:mt-16 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold">
                    <!-- <svg class="w-8 h-8 fill-current opacity-50 shrink-0" viewBox="0 0 16 16">
                      <path
                        d="M15 7H9V1c0-.6-.4-1-1-1S7 .4 7 1v6H1c-.6 0-1 .4-1 1s.4 1 1 1h6v6c0 .6.4 1 1 1s1-.4 1-1V9h6c.6 0 1-.4 1-1s-.4-1-1-1z" />
                    </svg> -->

                    <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 13H14M8 17H16M13 3H5V5M13 3H14L19 8V9M13 3V7C13 8 14 9 15 9H19M19 9V12M5 10V21H19V16" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                    <span class="ml-8 mx-4">Choose a template</span>
                  </button>
                </router-link>

            </div>
          </div>

        </div>
        </div>
        

      </main>

    </div>

  </div>
  
</template>

<script setup>
import { ref } from 'vue'
import Sidebar from '../../partials/Sidebar.vue'
import Header from '../../partials/Header.vue'
// Your script logic goes here
const sidebarOpen = ref(false)
</script>