<template>


       <!-- Progress bar -->
       <div class="px-4 pt-12 pb-8">
              <div class="max-w-md mx-auto w-full">
                <div class="relative">
                  <div class="absolute left-0 top-1/2 -mt-px w-full h-0.5 bg-slate-200 dark:bg-slate-700" aria-hidden="true"></div>
                  <ul class="relative flex justify-between w-full">
                    <li>
                 <router-link class="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400" to="/audits/scratch/step-1">1</router-link>
               </li>
               <li>
                 <router-link class="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-indigo-500 text-white" to="/audits/scratch/step-2">2</router-link>
               </li>
               <li>
                 <router-link class="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400" to="/audits/scratch/step-3">3</router-link>
               </li>
               <li>
                 <router-link class="flex items-center justify-center w-6 h-6 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-700 text-slate-500 dark:text-slate-400" to="/audits/scratch/step-4">4</router-link>
               </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div class="px-4 py-8">
       <div class="max-w-md mx-auto">

         
         <!-- Form -->
         <form>
              <div class="space-y-3 mb-8">       
                <div class="flex items-center justify-between">
                  <label class="text-1xl text-slate-800 dark:text-slate-100 font-bold mb-6" for="sectorType">
                   What sector are you auditing?
                    <span class="text-rose-500">*</span>
                  </label>
                  <!-- <label class="block text-sm font-medium mb-1 mx" for="tooltip">Enter the name of the company (client)</label> -->
                  <Tooltip class="ml-2" bg="dark" size="md">
                    <div class="text-sm text-slate-200">The company for which this audit is being done.</div>
                  </Tooltip>
                </div>
                
                <input id="sectorType" class="form-input mandatory w-full text-1xl" type="text" />
              </div>
    
              <ul class="flex items-center justify-between">
              
                  <li class="ml-3 first:ml-0">
                    <router-link to="/audits/scratch/step-1">
                      <span class="btn bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200">&lt;- Previous</span>
                    </router-link>
                  </li>
                  <li class="ml-3 first:ml-0">
                    <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-auto" @click.stop="saveAndGoToPath">Next Step -&gt;</button>
                  </li>
                </ul>
         </form>

       </div>
     </div>
</template>

<script setup>

import { useRouter } from 'vue-router'
import Tooltip from '../../components/Tooltip.vue'

  
const router = useRouter()

const saveAndGoToPath = () => {
  router.push('/audits/scratch/step-3')
}

// }
</script>