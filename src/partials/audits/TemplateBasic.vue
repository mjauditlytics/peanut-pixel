<template>
  <!--https://editor-tw.fouita.com/?ref=madewithsvelte.com -->
  <div class="flex justify-center items-center min-h-screen bg-gray-800">
    <div class="bg-white rounded shadow-lg w-1/2 h-full overflow-auto p-4 word-document">

      <div class="p-2 text-4xl"></div>

      <div class="p-2  text-center text-base"></div>

      <div class="p-2 text-4xl text-left">
        <span style="font-size: 16px;">{{ report_logo }}</span>
      </div>

      <div class="p-2 text-4xl text-center"></div>

      <div class="p-2 text-2xl text-center">
        <span class="text-black font-bold">{{ projectSettings.orgName }}</span>
      </div>

      <div class="p-2 text-1xl text-center">
        <span class="text-black">{{ projectSettings.projectName }}
        </span>
        <div v-if="projectSettings.projectName"> Review </div>
      </div>

      <div class="p-2 text-3xl text-center">
        <br>
      </div>

      <div class="p-2 text-3xl text-center">
        <br>
      </div>
      <div class="p-2 text-3xl text-center">
        <br>
      </div>

      <div class="p-2 text-3xl text-center">
        <br>
      </div>


      <div class="p-2 text-3xl"> <br></div>
      <div class="p-2 text-3xl text-center">
        <br>
      </div>
      <div class="p-2 text-3xl text-center">
        <br>
      </div>
      <div class="p-2 text-3xl text-center">
        <br>
      </div>
      <div class="p-2 text-base"></div>

      <div v-if="projectSettings.reviewStartDate" class="p-4 text-sm ">
        <span class="font-bold">Review
          Period:&nbsp;</span>{{ projectSettings.reviewStartDate }}&nbsp;to&nbsp;{{ projectSettings.reviewEndDate }}
      </div>

      <div v-if="projectSettings.issueDate" class="p-2 text-base">
        <span class="font-bold">Issue Date:</span>&nbsp;July 2023
      </div>

      <div class="p-2 text-4xl"></div>


    </div>
  </div>
</template>



<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  projectSettings: Object,
});
// const reviewName = computed () => projectSettings.projectName + " Review"

const report_logo = ref("")
// const org_name =ref("SPIC")
// const project_name =ref("SPic Audit 1")


</script>

<style>
.word-document {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}
</style>
