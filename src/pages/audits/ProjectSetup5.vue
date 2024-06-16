<template>
  <div class="px-4 py-8">
    <div class="max-w-md mx-auto">

      <h1 class="text-3xl text-slate-800 dark:text-slate-100 font-bold mb-12">Team/Personnel Responsible</h1>
      <!-- Form -->
      <form>
        <div class="space-y-3 mb-8">
          <label class="text-1xl text-slate-800 dark:text-slate-100 font-bold mb-6">
            Auditor Name/ Team/Division
            <!-- <span class="text-rose-500">*</span> -->
          </label>
          <div>
            <div class="flex items-center justify-between my-8"> 

                <div class="text-sm font-semibold text-slate-200">Staff Name</div>               
                <input id="staffName" v-model="staffName" class="form-input mandatory w-2/3 text-1xl" type="text" />
            </div>
            <div class="flex items-center justify-between my-8"> 

              <div class="text-sm font-semibold text-slate-200">Team/Branch Name</div>               
              <input id="teamName" v-model="teamName" class="form-input mandatory w-2/3 text-1xl" type="text" />
            </div>            
          <!-- <input id="reviewPeriod" class="form-input mandatory w-full text-1xl" type="text" /> -->
        </div>
       </div>
      </form>
    </div>
  </div>

</template>

<script setup>
import { ref , watch} from 'vue';
import _ from 'lodash';
const emit = defineEmits(["update-data"]);
const staffName = ref('');
const teamName = ref('');
const props = defineProps({
  projectSettings: Object,
});
watch(staffName, _.debounce(() => {
  const key = 'staffName'; // key to update
  const newValue = staffName.value; // new value
  emit('update-data', { key, newValue });
}, 500)); // delay in milliseconds, adjust to your needs


watch(teamName, _.debounce(() => {
  const key = 'teamName'; // key to update
  const newValue = teamName.value; // new value
  emit('update-data', { key, newValue });
}, 500)); // delay in milliseconds, adjust to your needs



</script>