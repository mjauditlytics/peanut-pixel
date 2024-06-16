<template>
  <div class="px-4 py-8">
    <div class="max-w-md mx-auto">

      <h1 class="text-3xl text-slate-800 dark:text-slate-100 font-bold mb-12">Audit Details</h1>
      <!-- Form -->
      <form>
  <div class="space-y-3 mb-8">
    <label class="text-1xl text-slate-800 dark:text-slate-100 font-bold mb-6">
      Provide brief details if possible
    </label>
    <div>
      <div class="items-center justify-between my-8"> 
        <div>
          <label class="block text-sm font-medium mb-1" for="execSummary">Executive Summary</label>
          <input id="execSummary" v-model="form.execSummary" class="form-input w-full" type="textbox" placeholder="exec Summary.." />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1" for="background">Background and Context</label>
          <input id="background" v-model="form.background" class="form-input w-full" type="textbox" placeholder="background and context.." />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1" for="objective">Audit Objective</label>
          <input id="objective" v-model="form.objective" class="form-input w-full" type="textbox" placeholder="What is the objective ?.." />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1" for="scope">Audit Scope</label>
          <input id="scope" v-model="form.scope" class="form-input w-full" type="textbox" placeholder="Scope." />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1" for="strengths">Summary of Strengths</label>
          <input id="strengths" v-model="form.strengths" class="form-input w-full" type="textbox" placeholder="Strengths..." />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1" for="weaknesses">Summary of Weaknesses</label>
          <input id="weaknesses" v-model="form.weaknesses" class="form-input w-full" type="textbox" placeholder="weaknesses..." />
        </div>
        <div>
          <label class="block text-sm font-medium mb-1" for="recommendations">Summary of Recommendations</label>
          <input id="recommendations" v-model="form.recommendations" class="form-input w-full" type="textbox" placeholder="Recommendations..." />
        </div>
      </div>
    </div>
  </div>
</form>
    </div>
  </div>

</template>

<script setup>
import { ref , watch} from 'vue';
import _ from 'lodash';

const emit = defineEmits(["update-data-form"]);

const props = defineProps({
  projectSettings: Object,
});

const form = ref({
  execSummary: '',
  background: '',
  objective: '',
  scope: '',
  strengths: '',
  weaknesses: '',
  recommendations: ''
});

const debouncedEmit = _.debounce(() => {
  emit('update-data-form', form.value);
}, 500);

// watchEffect( debouncedEmit );
watch(form, (newVal, oldVal) => {
  debouncedEmit();
}, { deep: true });

// watch(staffName, _.debounce(() => {
//   const key = 'staffName'; // key to update
//   const newValue = staffName.value; // new value
//   emit('update-data', { key, newValue });
// }, 500)); // delay in milliseconds, adjust to your needs


// watch(teamName, _.debounce(() => {
//   const key = 'teamName'; // key to update
//   const newValue = teamName.value; // new value
//   emit('update-data', { key, newValue });
// }, 500)); // delay in milliseconds, adjust to your needs



</script>