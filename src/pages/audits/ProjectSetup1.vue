<template>
  <div class="px-4 py-8">
    <div class="max-w-md mx-auto">

      <h1 class="text-3xl text-slate-800 dark:text-slate-100 font-bold mb-6">Tell us what’s your situation ✨</h1>
      <!-- Form -->
      <form>
        <div class="space-y-3 mb-8">
          <div class="flex items-center justify-between">
            <label class="text-1xl text-slate-800 dark:text-slate-100 font-bold mb-6" for="orgName">
              Enter the name of the organisation (client)
              <span class="text-rose-500">*</span>
            </label>
            <!-- <label class="block text-sm font-medium mb-1 mx" for="tooltip">Enter the name of the company (client)</label> -->
            <Tooltip class="ml-2" bg="dark" size="md">
              <div class="text-sm text-slate-200">The company for which this audit is being done.</div>
            </Tooltip>
          </div>

          <input id="orgName" v-model="orgName" class="form-input mandatory w-full text-1xl" type="text" />
        </div>

      </form>
    </div>
  </div>
</template>


<script setup>
import { ref, watch } from 'vue';
import _ from 'lodash'; // make sure to install lodash
const emit = defineEmits(["update-data"]);
// import { useRouter } from 'vue-router'
import Tooltip from '../../components/Tooltip.vue'

const props = defineProps({
  projectSettings: Object,
});

const orgName = ref(''); // initialize to an empty string or a default value

watch(orgName, _.debounce(() => {
  const key = 'orgName'; // key to update
  const newValue = orgName.value; // new value
  emit('update-data', { key, newValue });
}, 500)); // delay in milliseconds, adjust to your needs



</script>