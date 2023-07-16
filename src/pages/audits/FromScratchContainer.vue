<template>
  <main class="bg-white dark:bg-slate-900">

    <div class="relative flex">

      <!-- Content -->
      <div class="w-full md:w-1/2">

        <div class="min-h-[100dvh] h-full flex flex-col after:flex-1">

          <div class="flex-1 ">

            <!-- Header -->
            <div class="flex items-center justify-between h-16 mt-4 px-4 sm:px-6 lg:px-8">
              <!-- Logo -->
              <router-link class="block" to="/">
                <img src="../../images/logo_2.jpg" width="128" height="128" />
                <!-- <svg width="32" height="32" viewBox="0 0 32 32">
                  <defs>
                    <linearGradient x1="28.538%" y1="20.229%" x2="100%" y2="108.156%" id="logo-a">
                      <stop stop-color="#A5B4FC" stop-opacity="0" offset="0%" />
                      <stop stop-color="#A5B4FC" offset="100%" />
                    </linearGradient>
                    <linearGradient x1="88.638%" y1="29.267%" x2="22.42%" y2="100%" id="logo-b">
                      <stop stop-color="#38BDF8" stop-opacity="0" offset="0%" />
                      <stop stop-color="#38BDF8" offset="100%" />
                    </linearGradient>
                  </defs>
                  <rect fill="#6366F1" width="32" height="32" rx="16" />
                  <path
                    d="M18.277.16C26.035 1.267 32 7.938 32 16c0 8.837-7.163 16-16 16a15.937 15.937 0 01-10.426-3.863L18.277.161z"
                    fill="#4F46E5" />
                  <path
                    d="M7.404 2.503l18.339 26.19A15.93 15.93 0 0116 32C7.163 32 0 24.837 0 16 0 10.327 2.952 5.344 7.404 2.503z"
                    fill="url(#logo-a)" />
                  <path
                    d="M2.223 24.14L29.777 7.86A15.926 15.926 0 0132 16c0 8.837-7.163 16-16 16-5.864 0-10.991-3.154-13.777-7.86z"
                    fill="url(#logo-b)" />
                </svg> -->
              </router-link>
              <!-- <div class="text-sm">
            Have an account? <router-link class="font-medium text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400" to="/signin">Sign In</router-link>
          </div> -->
            </div>

            <!-- Progress bar -->
            <div class="px-4 pt-12 pb-8">
              <div class="max-w-md mx-auto w-full">
                <div class="relative">
                  <div class="absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-slate-200 dark:bg-slate-700"
                    aria-hidden="true"></div>
                  <ul class="relative flex justify-between w-full">
                    <li v-for="number in projectSetupSteps" :key="number">
                      <button :class="progressBarClass(number)" @click.stop="goToForm(number)">{{ number }}</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


          <!-- Form 1 -->
          <div v-if="currentStep === 1">
            <ProjectSetup1 :projectSettings="projectSettings" @update-data="updateData" />
          </div>

          <!-- Form 2 -->
          <div v-if="currentStep === 2">
            <ProjectSetup2 :projectSettings="projectSettings" @update-data="updateData" />
          </div>

          <!-- Form 3 -->
          <div v-if="currentStep === 3">
            <ProjectSetup3 :projectSettings="projectSettings" @update-data="updateData" />
          </div>

          <!-- Form 4 -->
          <div v-if="currentStep === 4">
            <ProjectSetup4 :projectSettings="projectSettings" @update-data="updateData" />
          </div>


          <div class="px-4 py-8">
            <div class="max-w-md mx-auto">
              <ul class="flex items-center justify-between">

                <li class="ml-3 first:ml-0">
                  <button
                    class="btn bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200"
                    @click.stop="previousForm">&lt;-
                    Previous</button>
                </li>
                <li class="ml-3 first:ml-0">
                  <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-auto" @click.stop="nextForm">Next
                    Step -&gt;</button>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      <div class="hidden md:block absolute top-0 bottom-0 right-0 md:w-1/2" aria-hidden="true">

        <TemplateBasic :projectSettings="projectSettings" />

      </div>

    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import ProjectSetup1 from './ProjectSetup1.vue'
import ProjectSetup2 from './ProjectSetup2.vue'
import ProjectSetup3 from './ProjectSetup3.vue'
import ProjectSetup4 from './ProjectSetup4.vue'
import TemplateBasic from '../../partials/audits/TemplateBasic.vue'

// const sidebarOpen = ref(false)
const currentStep = ref(1)
const minStep = 1
const maxSteps = 4
const projectSetupSteps = [1, 2, 3, 4]
const projectSettings = ref({
  projectName: '',
  orgName: '',
  sectorName: '',
  reviewStartDate: null,
  reviewEndDate: null,
  issueDate: null
})

const updateData = ({ key, newValue }) => {
  console.log(`update date ${key} , ${newValue}`)
  projectSettings.value[key] = newValue;
};

const nextForm = () => {
  if (currentStep.value < maxSteps) {
    currentStep.value++
  }
}

const previousForm = () => {
  if (currentStep.value >= minStep) {
    currentStep.value--
  }
}
const goToForm = (formNum) => {
  currentStep.value = formNum

}


const progressBarClass = (step) => {
  if (step === currentStep.value) {
    return "flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-indigo-500 text-white"
  }
  return "flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400"

};


</script>