<template>
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
          <textarea id="feedback" class="form-textarea w-full px-2 py-1" rows="4" required>{{ item.risk }}</textarea>
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
</template>

<script setup>
import { ref } from 'vue'
import ModalBasic from '../components/ModalBasic.vue'
const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
  // index: {
  //   type: Number,
  //   required: true,
  // },
});

const auditModalOpen = ref(false);

</script>