<template>
  <ModalBasic id="audit-modal"  @close-modal="close()" :modal-open="auditModalOpen"
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
            required>{{ myItem.detailed_finding }}</textarea>
        </div>
        <div>
          <label class="block text-sm font-medium mb-1" for="feedback">Risk</label>
          <textarea id="feedback" class="form-textarea w-full px-2 py-1" rows="4" required>{{ myItem.risk }}</textarea>
        </div>
        <div>
          <label class="block text-sm font-medium mb-1" for="feedback">Recommendation</label>
          <textarea id="feedback" class="form-textarea w-full px-2 py-1" rows="4"
            required>{{ myItem.recommendation }}</textarea>
        </div>
      </div>
    </div>
    <!-- Modal footer -->
    <div class="px-5 py-4 border-t border-slate-200 dark:border-slate-700">
      <div class="flex flex-wrap justify-end space-x-2">
        <button
          class="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300"
         
          >
          <!-- @click.prevent="$emit('close-audit-modal')" -->
          Cancel</button>
        <button @click.prevent="handleSubmit" class="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">Save</button>
      </div>
    </div>
  </ModalBasic>
</template>

<script setup>
import { ref, onMounted } from 'vue'
// import { useModalStore } from '../stores/useModalStore';
import ModalBasic from '../components/ModalBasic.vue'

// const modalStore = useModalStore();
// let auditModalOpen = undefined;// ref(modalStore.$state.auditModalOpen)
// const auditModalOpen = useModalStore((state) => state.auditModalOpen);


// // Watch for changes to the prop
// watch(
//   () => auditModalOpen,
//   (newVal, oldVal) => {
//     console.log(`New : ${newVal}, Old : ${oldVal}`);
//     //auditModalOpen.value = newVal; // Update the local state if needed
//   }
// );

// watch(
//   () => auditModalOpen.value,
//   (newVal, oldVal) => {
//     console.log(`New value: ${newVal}, Old value: ${oldVal}`);
//     //auditModalOpen.value = newVal; // Update the local state if needed
//   }
// );

const emit = defineEmits(['close'])//,'close-audit-modal', 'addItem', 'updateItem'])
const myItem = ref({
  detailed_finding: '',
  risk: '',
  recommendation: '',
});
const props = defineProps({
  item: {
    type: Object,
    // required: true,
  },
  mode: {
    type: String,
    default: 'add' // add or edit

  },
  auditModalOpen: {
    type: Boolean,
    default: false
  },
  // index: {
  //   type: Number,
  //   required: true,
  // },
});

const close = () =>{
  console.log('ModalAudit: close modal');
  // modalStore.closeModal();
  // emit('close-audit-modal')
  emit('close', false)
}

onMounted(() => {
  // auditModalOpen = ref(modalStore.$state.auditModalOpen)
  if (props.item)
    myItem.value = props.item;
  // console.log(myItem.value);
})

const handleSubmit = () => {
  if (props.mode === 'edit') {
    emit('updateItem', myItem.value);
    
  } else {
    emit('addItem', myItem.value);
    
  }
};

</script>