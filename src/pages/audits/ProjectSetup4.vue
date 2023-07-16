<template>
  <div class="px-4 py-8">
    <div class="max-w-md mx-auto">


      <!-- Form -->
      <form>
        <div class="space-y-3 mb-8">
          <label class="text-1xl text-slate-800 dark:text-slate-100 font-bold mb-6">
            What is the review period?
            <!-- <span class="text-rose-500">*</span> -->
          </label>
          <div>
            <!-- <div class="flex items-center justify-between"> -->

            <!-- <Tooltip class="ml-2" bg="dark" size="md">
                    <div class="text-sm text-slate-200">The company for which this audit is being done.</div>
                  </Tooltip> -->
            <table class="mt-4">
              <tr>
                <th>
                  <label class="text-sm text-slate-700 dark:text-slate-100 font-semibold mb-6" for="startdate">Start date
                  </label>
                </th>
                <th>
                  <label class="text-sm text-slate-700 dark:text-slate-100 font-semibold mb-6" for="enddate">End date
                  </label>
                </th>
              </tr>
              <tr>
                <!-- </div> -->
                <td>
                  <flat-pickr id="startdate" v-model="startDate" class="form-input" :config="datePickerConfig">
                  </flat-pickr>
                </td>
                <td>
                  <flat-pickr id="enddate" v-model="endDate" class="form-input" :config="datePickerConfig">
                  </flat-pickr>
                </td>
              </tr>
            </table>
          </div>
          <!-- <input id="reviewPeriod" class="form-input mandatory w-full text-1xl" type="text" /> -->
        </div>


      </form>

    </div>
  </div>
</template>


<script setup>
import { ref, watch } from 'vue';
import flatPickr from 'vue-flatpickr-component'

const emit = defineEmits(["update-data"]);
const startDate = ref(null);
const endDate = ref(null);

const props = defineProps({
  projectSettings: Object,
});

watch(startDate, () => {
  const key = 'reviewStartDate'; // key to update
  const newValue = startDate.value; // new value
  emit('update-data', { key, newValue });
});

watch(endDate, () => {
  const key = 'reviewEndDate'; // key to update
  const newValue = endDate.value; // new value
  emit('update-data', { key, newValue });
});



const datePickerConfig = {
  // // mode: 'range',
  // static: true,
  // monthSelectorType: 'static',
  // dateFormat: 'j-M-Y',
  // inline: true,
  // allowInput: true,
  // defaultDate: [] , //new Date().setDate(new Date().getDate() - 6)],
  // prevArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M5.4 10.8l1.4-1.4-4-4 4-4L5.4 0 0 5.4z" /></svg>',
  // nextArrow: '<svg class="fill-current" width="7" height="11" viewBox="0 0 7 11"><path d="M1.4 10.8L0 9.4l4-4-4-4L1.4 0l5.4 5.4z" /></svg>',
  // // onReady: (selectedDates, dateStr, instance) => {
  // //   instance.element.value = dateStr.replace('to', '-');
  // //   const customClass = (props.align) ? props.align : '';
  // //   instance.calendarContainer.classList.add(`flatpickr-${customClass}`);            
  // // },
  // // onChange: (selectedDates, dateStr, instance) => {
  // //   instance.element.value = dateStr.replace('to', '-');
  // // }
}

// }
</script>