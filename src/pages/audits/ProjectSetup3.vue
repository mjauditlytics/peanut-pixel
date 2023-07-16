<template>
  <div class="px-4 py-8">
    <div class="max-w-md mx-auto">
      <!-- Form -->
      <form>
        <div class="space-y-3 mb-8">
          <div class="flex items-center justify-between">
            <label class="text-1xl text-slate-800 dark:text-slate-100 font-bold mb-6" for="reviewName">
              Please enter the name for the review.
              <span class="text-rose-500">*</span>
            </label>
            <!-- <label class="block text-sm font-medium mb-1 mx" for="tooltip">Enter the name of the company (client)</label> -->
            <!-- <Tooltip class="ml-2" bg="dark" size="md">
                    <div class="text-sm text-slate-200">The company for which this audit is being done.</div>
                  </Tooltip> -->
          </div>

          <input id="reviewName" v-model="projectName" class="form-input mandatory w-full text-1xl" type="text" />
        </div>
        <!-- 
        <ul class="flex items-center justify-between">
          <li class="ml-3 first:ml-0">
            <router-link to="/audits/scratch/step-2">
              <span
                class="btn bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200">&lt;-
                Previous</span>
            </router-link>
          </li>
          <li class="ml-3 first:ml-0">
            <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-auto" @click.stop="saveAndGoToPath">Next
              Step -&gt;</button>
          </li>
        </ul> -->
      </form>

    </div>
  </div>
</template>


<script setup>
import { ref, watch } from 'vue';
import _ from 'lodash'; // make sure to install lodash
const emit = defineEmits(["update-data"]);


const props = defineProps({
  projectSettings: Object,
});

const projectName = ref(''); // initialize to an empty string or a default value

watch(projectName, _.debounce(() => {
  const key = 'projectName'; // key to update
  const newValue = projectName.value; // new value
  emit('update-data', { key, newValue });
}, 500)); // delay in milliseconds, adjust to your needs

</script>