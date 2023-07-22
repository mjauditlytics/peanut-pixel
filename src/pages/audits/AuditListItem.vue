<template>
  <div class="bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700 p-4"
    draggable="true">
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
            <input type="checkbox" class="form-checkbox w-5 h-5 rounded-full peer" />
            <span class="font-medium text-slate-800 dark:text-slate-100  ml-2">{{ index + 1 }}. Finding: {{
              item.detailed_finding_prompt
            }}</span>
          </label>
          <div v-if="item.riskRating" :class="riskClass"
            class="text-xs inline-flex font-medium rounded-full text-center px-2.5 py-1">
            {{ item.riskRating }}
          </div>
        </div>
        <!-- Nested checkboxes -->
        <ul class="pl-12 space-y-3">
          <li>

            <!-- Start -->
            <!-- <div v-if="item.riskRating" :class="riskClass"
              class="text-xs inline-flex font-medium rounded-full text-center px-2.5 py-1">
              {{ item.riskRating }}
            </div> -->
            <!-- 
            <div
              class="text-xs inline-flex font-medium bg-blue-100 dark:bg-blue-500/30 text-blue-600 dark:text-blue-500 rounded-full text-center px-2.5 py-1">
              Very Low</div>
            <div
              class="text-xs inline-flex font-medium bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400 rounded-full text-center px-2.5 py-1">
              Low</div>

            <div
              class="text-xs inline-flex font-medium bg-orange-700 text-orange-300 dark:text-slate-100 rounded-full text-center px-2.5 py-1">
              Medium</div>

            <div
              class="text-xs inline-flex font-medium bg-amber-100 dark:bg-yellow-300 text-slate-700 dark:text-slate-700 rounded-full text-center px-2.5 py-1">
              High</div>

            <div
              class="text-xs inline-flex font-medium bg-rose-100 dark:bg-rose-600 text-slate-700 dark:text-slate-100 rounded-full text-center px-2.5 py-1">
              Very High</div> -->

            <label class="flex items-center">
              <input type="checkbox" class="form-checkbox w-5 h-5 rounded-full peer" checked />
              <span class="text-sm text-slate-800 dark:text-slate-100  ml-3">Detailed Finding: {{ item.detailed_finding
              }}</span>
            </label>
          </li>
          <!-- <li>
            <label class="flex items-center">
              <input type="checkbox" class="form-checkbox w-5 h-5 rounded-full peer" />
              <span class="text-sm text-slate-800 dark:text-slate-100 peer-checked:line-through ml-3">Finish
                the design</span>
            </label>
          </li>
          <li>
            <label class="flex items-center">
              <input type="checkbox" class="form-checkbox w-5 h-5 rounded-full peer" />
              <span class="text-sm text-slate-800 dark:text-slate-100 peer-checked:line-through ml-3">Publish
                the content</span>
            </label>
          </li> -->
        </ul>
      </div>
      <!-- Right side -->
      <div class="flex items-center justify-end space-x-3">
        <!-- Avatars -->
        <!-- <div class="flex shrink-0 -space-x-3 -ml-px">
          <a class="block" href="#0">
            <img class="rounded-full border-2 border-white dark:border-slate-800 box-content"
              src="../../images/user-32-05.jpg" width="24" height="24" alt="User 05" />
          </a>
        </div> -->
        <!-- To-do info -->
        <div class="flex items-center text-slate-400 dark:text-slate-500 ml-3">
          <svg class="w-4 h-4 shrink-0 fill-current mr-1.5" viewBox="0 0 16 16">
            <path
              d="M6.974 14c-.3 0-.7-.2-.9-.5l-2.2-3.7-2.1 2.8c-.3.4-1 .5-1.4.2-.4-.3-.5-1-.2-1.4l3-4c.2-.3.5-.4.9-.4.3 0 .6.2.8.5l2 3.3 3.3-8.1c0-.4.4-.7.8-.7s.8.2.9.6l4 8c.2.5 0 1.1-.4 1.3-.5.2-1.1 0-1.3-.4l-3-6-3.2 7.9c-.2.4-.6.6-1 .6z" />
          </svg>
          <div class="text-sm text-slate-500 dark:text-slate-400">1/3</div>
        </div>
        <!-- Attach button -->
        <button class="text-slate-400 dark:text-slate-500 hover:text-indigo-500 dark:hover:text-indigo-500">
          <svg class="w-4 h-4 shrink-0 fill-current mr-1.5" viewBox="0 0 16 16">
            <path
              d="M11 0c1.3 0 2.6.5 3.5 1.5 1 .9 1.5 2.2 1.5 3.5 0 1.3-.5 2.6-1.4 3.5l-1.2 1.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l1.1-1.2c.6-.5.9-1.3.9-2.1s-.3-1.6-.9-2.2C12 1.7 10 1.7 8.9 2.8L7.7 4c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4l1.2-1.1C8.4.5 9.7 0 11 0zM8.3 12c.4-.4 1-.5 1.4-.1.4.4.4 1 0 1.4l-1.2 1.2C7.6 15.5 6.3 16 5 16c-1.3 0-2.6-.5-3.5-1.5C.5 13.6 0 12.3 0 11c0-1.3.5-2.6 1.5-3.5l1.1-1.2c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4L2.9 8.9c-.6.5-.9 1.3-.9 2.1s.3 1.6.9 2.2c1.1 1.1 3.1 1.1 4.2 0L8.3 12zm1.1-6.8c.4-.4 1-.4 1.4 0 .4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3-.4-.4-.4-1 0-1.4l4.2-4.2z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
<script setup>
import { computed } from 'vue';
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

const riskClass = computed(() => {
  switch (props.item.riskRating) {

    case 'Very High':
      return "text-xs inline-flex font-medium bg-rose-100 dark:bg-rose-600 text-slate-700 dark:text-slate-100 rounded-full text-center px-2.5 py-1";
    case 'High':
      return "text-xs inline-flex font-medium bg-amber-100 dark:bg-yellow-300 text-slate-700 dark:text-slate-700 rounded-full text-center px-2.5 py-1";
    case 'Medium':
      return "text-xs inline-flex font-medium bg-orange-700 text-orange-300 dark:text-slate-100 rounded-full text-center px-2.5 py-1"
    case 'Low':
      return "text-xs inline-flex font-medium bg-emerald-100 dark:bg-emerald-400/30 text-emerald-600 dark:text-emerald-400 rounded-full text-center px-2.5 py-1"
    default:
      return "text-xs inline-flex font-medium bg-blue-100 dark:bg-blue-500/30 text-blue-600 dark:text-blue-500 rounded-full text-center px-2.5 py-1"
  }
});

</script>