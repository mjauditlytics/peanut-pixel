<template>
  <div
    class="bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 p-4 hover:border-slate-300 dark:hover:border-slate-600">
    <!--  draggable="true" prevents copy and paste -->

    <div class="sm:flex sm:justify-between sm:items-start">
      <!-- Left side -->
      <div class="grow mt-0.5 mb-3 sm:mb-0 space-y-3">
        <div class="flex items-center">
          <!-- Drag button -->
          <button class="cursor-move mr-2">
            <span class="sr-only">Drag</span>
            <svg class="w-3 h-3 fill-slate-300 dark:fill-slate-600" viexBox="0 0 12 12"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M0 1h12v2H0V1Zm0 4h12v2H0V5Zm0 4h12v2H0V9Z" fill-rule="evenodd" />
            </svg>
          </button>
          <!-- Checkbox button -->
          <label class="flex items-center">
            <!-- <input type="checkbox" class="form-checkbox w-5 h-5 rounded-full peer" /> -->
            <span class="font-medium text-slate-800 dark:text-slate-100  ml-2">{{ index + 1 }}. Finding: {{
              item.finding
            }}</span>
          </label>



        </div>
        <!-- Nested checkboxes -->
        <div class="px-4">


          <label class="flex items-center">
            <!-- <input type="checkbox" class="form-checkbox w-5 h-5 rounded-full peer" checked /> -->
            Detailed Finding:
            <span @click="isEditing = true" @blur="isEditing = false" :contenteditable="isEditing"
              class="text-sm text-slate-800 dark:text-slate-100  ml-3"> {{ item.detailed_finding
              }}</span>
          </label>


          <label class="flex items-center">
            Risks:
            <!-- <input type="checkbox" class="form-checkbox w-5 h-5 rounded-full peer" checked /> -->
            <span class="text-sm text-slate-800 dark:text-slate-100  ml-3"> {{ item.risk
            }}</span>
          </label>


          <label class="flex items-center">
            Recommendations:
            <!-- <input type="checkbox" class="form-checkbox w-5 h-5 rounded-full peer" checked /> -->
            <span class="text-sm text-slate-800 dark:text-slate-100  ml-3"> {{ item.recommendation
            }}</span>
          </label>
        </div>

      </div>
      <!-- Right side -->

      <div class="flex items-center justify-end space-x-3">
        <!-- {{ item.detailed_finding_status }} -->
        <div v-if="item.riskRating" :class="riskClass"
          class="text-xs inline-flex font-medium rounded-full text-center px-2.5 py-1">
          {{ item.riskRating }}
        </div>
        <div class="m-1.5">

          <button @click.stop="auditModalOpen = true"
            class="btn dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300">
            <svg class="w-4 h-4 fill-current text-slate-500 dark:text-slate-400 shrink-0" viewBox="0 0 16 16">
              <path
                d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z" />
            </svg>
            <span class="ml-2">Edit</span>
          </button>

          <ModalBasic id="audit-modal" :modalOpen="auditModalOpen" @close-modal="auditModalOpen = false"
            title="Edit Finding Details">
            <!-- Modal content -->
            <div class="px-5 py-4">
              <div class="text-sm">
                <div class="font-medium text-slate-800 dark:text-slate-100 mb-3">Make changes...</div>
              </div>
              <div class="space-y-3">

                <div>
                  <label class="block text-sm font-medium mb-1" for="feedback">Detailed Finding </label>
                  <textarea id="feedback" class="form-textarea w-full px-2 py-1" rows="4"
                    required>{{ item.detailed_finding }}</textarea>
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1" for="feedback">Risk</label>
                  <textarea id="feedback" class="form-textarea w-full px-2 py-1" rows="4"
                    required>{{ item.risk }}</textarea>
                </div>
                <div>
                  <label class="block text-sm font-medium mb-1" for="feedback">Recommendation</label>
                  <textarea id="feedback" class="form-textarea w-full px-2 py-1" rows="4"
                    required>{{ item.recommendation }}</textarea>
                </div>
              </div>
            </div>
            <!-- Modal footer -->
            <div class="px-5 py-4 border-t border-slate-200 dark:border-slate-700">
              <div class="flex flex-wrap justify-end space-x-2">
                <button
                  class="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300"
                  @click.stop="auditModalOpen = false">Cancel</button>
                <button class="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">Save</button>
              </div>
            </div>
          </ModalBasic>
          <!-- Start -->
          <!-- <ModalAudit :item="item" /> -->
          <!-- <button
            class="btn dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300">
            <svg class="w-4 h-4 fill-current text-slate-500 dark:text-slate-400 shrink-0" viewBox="0 0 16 16">
              <path
                d="M11.7.3c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7v4c0 .6.4 1 1 1h4c.3 0 .5-.1.7-.3l10-10c.4-.4.4-1 0-1.4l-4-4zM4.6 14H2v-2.6l6-6L10.6 8l-6 6zM12 6.6L9.4 4 11 2.4 13.6 5 12 6.6z" />
            </svg>
            <span class="ml-2">Edit</span>
          </button> -->
          <!-- End -->
        </div>
        <!-- Attach button -->
        <button class="text-slate-400 dark:text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-500">
          <svg class="w-4 h-4 shrink-0 fill-current mr-1.5" viewBox="0 0 16 16">
            <path
              d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0zM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2z" />
          </svg>
        </button>

        <div class="m-1.5">
          <!-- Start -->
          <button
            class="btn dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-rose-800 dark:text-rose-400 hover:bg-rose-400 dark:hover:bg-rose-100">
            <svg class="w-4 h-4 fill-current shrink-0" viewBox="0 0 16 16">
              <path
                d="M5 7h2v6H5V7zm4 0h2v6H9V7zm3-6v2h4v2h-1v10c0 .6-.4 1-1 1H2c-.6 0-1-.4-1-1V5H0V3h4V1c0-.6.4-1 1-1h6c.6 0 1 .4 1 1zM6 2v1h4V2H6zm7 3H3v9h10V5z" />
            </svg>
            <!-- <span class="ml-2">Delete</span> -->
          </button>
          <!-- End -->
        </div>


      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed } from 'vue';
// import ModalAudit from '../../components/ModalAudit.vue';
import ModalBasic from '../../components/ModalBasic.vue'
// Define 'item' prop
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
});

const text = 'Click to edit me';
const isEditing = ref(false);
const auditModalOpen = ref(false);

const riskClass = computed(() => {
  switch (props.item.riskRating) {

    case 'Very High':
      return "text-xs inline-flex font-medium bg-rose-100 dark:bg-rose-500 text-slate-700 dark:text-rose-200 rounded-full text-center px-2.5 py-1";
    case 'High':
      return "text-xs inline-flex font-medium bg-amber-100 dark:bg-yellow-300 text-slate-700 dark:text-yellow-600 rounded-full text-center px-2.5 py-1";
    case 'Medium':
      return "text-xs inline-flex font-medium bg-orange-700 text-orange-300 dark:text-slate-100 rounded-full text-center px-2.5 py-1"
    case 'Low':
      return "text-xs inline-flex font-medium bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400 rounded-full text-center px-2.5 py-1"
    default:
      return "text-xs inline-flex font-medium bg-blue-100 dark:bg-blue-500/30 text-blue-600 dark:text-blue-500 rounded-full text-center px-2.5 py-1"
  }
});

</script>

<style scoped>
[contenteditable="true"]:empty:before {
  content: attr(placeholder);
  color: #a9a9a9;
}
</style>