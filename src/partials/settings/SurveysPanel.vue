<template>
  <div class="grow">

    <!-- Panel body -->
    <div class="p-6 space-y-6">
      <h2 class="text-2xl text-slate-800 dark:text-slate-100 font-bold mb-5">ATOM Settings</h2>

      <!-- General -->
      <section>
        <h3 class="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-1">General</h3>
        <ul>
          <li class="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
            <!-- Left -->
            <div>
              <div class="text-slate-800 dark:text-slate-100 font-semibold">Prefill Answers</div>
              <div class="text-sm">Choose the questions for you would like to populate the answers from the previous assessment </div>
            </div>
            <!-- Right -->
              <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white" aria-controls="prefill-modal" @click.stop="prefillModalOpen = true">Manage</button>
              <ModalBasic id="prefill-modal" :modalOpen="prefillModalOpen" @close-modal="prefillModalOpen = false" title="Prefill Settings">
                <!-- Modal content -->
                <div class="px-5 py-4">
                  <div class="text-sm">
                    <div class="font-medium text-slate-800 dark:text-slate-100 mb-3">Let us know what you think 🙌</div>
                  </div>
                  <div class="space-y-3">
                    <div>
                        <input
                          type="text"
                          v-model="searchText"
                          placeholder="Search..."
                          @input="filterResults"
                        />
                        <div class="filters">
                          <label v-for="category in categories" :key="category">
                            <input
                              type="checkbox"
                              :value="category"
                              v-model="selectedCategories"
                              @change="filterResults"
                            />
                            {{ category }}
                          </label>
                        </div>
                        <ul>
                          <li v-for="item in filteredItems" :key="item.name">
                            {{ item.name }} ({{ item.category }})
                          </li>
                        </ul>
                      </div>
                    <!-- <div>
                      <label class="block text-sm font-medium mb-1" for="name">Name <span class="text-rose-500">*</span></label>
                      <input id="name" class="form-input w-full px-2 py-1" type="text" required />
                    </div>
                    <div>
                      <label class="block text-sm font-medium mb-1" for="email">Email <span class="text-rose-500">*</span></label>
                      <input id="email" class="form-input w-full px-2 py-1" type="email" required />
                    </div>
                    <div>
                      <label class="block text-sm font-medium mb-1" for="feedback">Message <span class="text-rose-500">*</span></label>
                      <textarea id="feedback" class="form-textarea w-full px-2 py-1" rows="4" required></textarea>
                    </div> -->
                  </div>
                </div>
                <!-- Modal footer -->
                <div class="px-5 py-4 border-t border-slate-200 dark:border-slate-700">
                  <div class="flex flex-wrap justify-end space-x-2">
                    <button class="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300" @click.stop="feedbackModalOpen = false">Cancel</button>
                    <button class="btn-sm bg-indigo-500 hover:bg-indigo-600 text-white">Send</button>
                  </div>
                </div>
              </ModalBasic>

            <div class="flex items-center ml-4">
              <div class="text-sm text-slate-400 dark:text-slate-500 italic mr-2">{{comments}}</div>
              <div class="form-switch">
                <input type="checkbox" id="comments" class="sr-only" v-model="comments" true-value="On" false-value="Off" />
                <label class="bg-slate-400 dark:bg-slate-700" for="comments">
                  <span class="bg-white shadow-sm" aria-hidden="true"></span>
                  <span class="sr-only">Enable smart sync</span>
                </label>
              </div>
            </div>
          </li>
          <li class="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
            <!-- Left -->
            <div>
              <div class="text-slate-800 dark:text-slate-100 font-semibold">Messages</div>
              <div class="text-sm">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</div>
            </div>
            <!-- Right -->
            <div class="flex items-center ml-4">
              <div class="text-sm text-slate-400 dark:text-slate-500 italic mr-2">{{messages}}</div>
              <div class="form-switch">
                <input type="checkbox" id="messages" class="sr-only" v-model="messages" true-value="On" false-value="Off" />
                <label class="bg-slate-400 dark:bg-slate-700" for="messages">
                  <span class="bg-white shadow-sm" aria-hidden="true"></span>
                  <span class="sr-only">Enable smart sync</span>
                </label>
              </div>
            </div>
          </li>
          <li class="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
            <!-- Left -->
            <div>
              <div class="text-slate-800 dark:text-slate-100 font-semibold">Mentions</div>
              <div class="text-sm">Excepteur sint occaecat cupidatat non in culpa qui officia deserunt mollit.</div>
            </div>
            <!-- Right -->
            <div class="flex items-center ml-4">
              <div class="text-sm text-slate-400 dark:text-slate-500 italic mr-2">{{mentions}}</div>
              <div class="form-switch">
                <input type="checkbox" id="mentions" class="sr-only" v-model="mentions" true-value="On" false-value="Off" />
                <label class="bg-slate-400 dark:bg-slate-700" for="mentions">
                  <span class="bg-white shadow-sm" aria-hidden="true"></span>
                  <span class="sr-only">Enable smart sync</span>
                </label>
              </div>
            </div>
          </li>
        </ul>
      </section>

      <!-- Shares -->
      <section>
        <h3 class="text-xl leading-snug text-slate-800 dark:text-slate-100 font-bold mb-1">Shares</h3>
        <ul>
          <li class="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
            <!-- Left -->
            <div>
              <div class="text-slate-800 dark:text-slate-100 font-semibold">Shares of my content</div>
              <div class="text-sm">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit.</div>
            </div>
            <!-- Right -->
            <div class="flex items-center ml-4">
              <button class="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm">Manage</button>
            </div>
          </li>
          <li class="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
            <!-- Left -->
            <div>
              <div class="text-slate-800 dark:text-slate-100 font-semibold">Team invites</div>
              <div class="text-sm">Excepteur sint occaecat cupidatat non in culpa qui officia deserunt mollit.</div>
            </div>
            <!-- Right -->
            <div class="flex items-center ml-4">
              <button class="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm">Manage</button>
            </div>
          </li>
          <li class="flex justify-between items-center py-3 border-b border-slate-200 dark:border-slate-700">
            <!-- Left -->
            <div>
              <div class="text-slate-800 dark:text-slate-100 font-semibold">Smart connection</div>
              <div class="text-sm">Excepteur sint occaecat cupidatat non in culpa qui officia deserunt mollit.</div>
            </div>
            <!-- Right -->
            <div class="flex items-center ml-4">
              <div class="text-sm text-slate-400 dark:text-slate-500 italic mr-2 hidden md:block">Active</div>
              <button class="btn-sm border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 shadow-sm text-rose-500">Disable</button>
            </div>
          </li>
        </ul>
      </section>
    </div>

    <!-- Panel footer -->
    <footer>
      <div class="flex flex-col px-6 py-5 border-t border-slate-200 dark:border-slate-700">
        <div class="flex self-end">
          <button class="btn dark:bg-slate-800 border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-600 dark:text-slate-300">Cancel</button>
          <button class="btn bg-indigo-500 hover:bg-indigo-600 text-white ml-3">Save Changes</button>
        </div>
      </div>
    </footer>

  </div>
</template>

<script>
import { ref, computed } from 'vue'
import ModalBasic from '../../components/ModalBasic.vue'

export default {
  name: 'SurveysPanel',
  components: {
    ModalBasic
  },
  setup() {
    const prefillModalOpen = ref(false)
    const searchText = ref('');
    const selectedCategories = ref([]);
    const categories = ref(['category1', 'category2', 'category3']);
    const data = [
      { name: 'Item 1', category: 'category1' },
      { name: 'Item 2', category: 'category2' },
      { name: 'Item 3', category: 'category1' },
      { name: 'Item 4', category: 'category3' },
      { name: 'Item 5', category: 'category2' },
      { name: 'Item 6', category: 'category3' },
    ];
    const filteredItems = computed(() => {
      return data.filter(item => {
        const nameMatch = item.name.toLowerCase().includes(searchText.value.toLowerCase());
        const categoryMatch = selectedCategories.value.length === 0 || selectedCategories.value.includes(item.category);
        return nameMatch && categoryMatch;
      });
    });
  // const comments = ref('On')
  // const messages = ref('On')
  // const mentions = ref('Off')


    return {
      searchText,
      selectedCategories,
      categories,
      filteredItems,
      
      prefillModalOpen,
    }
  }
}
</script>