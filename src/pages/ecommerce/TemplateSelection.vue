<template>
  <div class="flex h-[100dvh] overflow-hidden">

    <!-- Sidebar -->
    <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />

    <!-- Content area -->
    <div class="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden bg-white dark:bg-slate-900">
      
      <!-- Site header -->
      <Header :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />

      <main class="grow">



               <div class="lg:relative lg:flex">

                <!-- Content -->
                <div class="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">



                          <!-- Cards -->
                          <div class="grid grid-cols-12 gap-6">
                            <UsersTabsCard
                              v-for="item in items"
                              :key="item.id"
                              :item="item"
                            />
                          </div>

                  </div>

                </div>


          <!-- Sidebar -->
          <div>
            <div class="lg:sticky lg:top-16 bg-slate-50 dark:bg-gradient-to-b dark:from-slate-800 dark:to-slate-900 lg:overflow-x-hidden lg:overflow-y-auto no-scrollbar lg:shrink-0 border-t lg:border-t-0 lg:border-l border-slate-200 dark:border-slate-700 lg:w-[390px] lg:h-[calc(100dvh-64px)]">
              <div class="py-8 px-4 lg:px-8">
                <div class="max-w-sm mx-auto lg:max-w-none">

                  <div class="text-slate-800 dark:text-slate-100 font-semibold text-center mb-6">Physical Metal Card Summary</div>

                  <!-- Credit Card -->
                  <div class="relative aspect-[7/4] bg-gradient-to-tr from-slate-600 to-slate-800 p-5 rounded-xl shadow-lg overflow-hidden">
                    <!-- Illustration on card -->
                  </div>  

                </div>
              </div>
            </div>
          </div>


          
          <!-- Pagination -->
          <!-- <div class="mt-8">
            <PaginationNumeric />
          </div>            -->


      </main>

    </div> 

  </div>
</template>

<script>
import { ref } from 'vue'
import Sidebar from '../../partials/Sidebar.vue'
import Header from '../../partials/Header.vue'
import SearchForm from '../../components/SearchForm.vue'
import UsersTabsCard from '../../partials/community/UsersTabsCard.vue'
import PaginationNumeric from '../../components/PaginationNumeric.vue'

import Image01 from '../../images/template-previews/Template1-Basic/exec-summary.png'
import Image02 from '../../images/user-64-02.jpg'
import Image03 from '../../images/user-64-03.jpg'
import Image04 from '../../images/user-64-04.jpg'
import Image05 from '../../images/user-64-05.jpg'
import Image06 from '../../images/user-64-06.jpg'
// import Image07 from '../../images/user-64-07.jpg'
// import Image08 from '../../images/user-64-08.jpg'
// import Image09 from '../../images/user-64-09.jpg'
// import Image10 from '../../images/user-64-10.jpg'
// import Image11 from '../../images/user-64-11.jpg'
// import Image12 from '../../images/user-64-12.jpg'

export default {
  name: 'UsersTabs',
  components: {
    Sidebar,
    Header,
    SearchForm,
    UsersTabsCard,
    PaginationNumeric,
  },
  setup() {

    const sidebarOpen = ref(false)

    const items = ref([
      {
        id: 0,
        name: 'Basic Template',
        image: Image01,
        link: '#0',
        content: 'Findings, Risks & Recommendations',
      },
      {
        id: 1,
        name: 'Ivan Mesaros',
        image: Image02,
        link: '#0',
        content: 'Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.',
      },
      {
        id: 2,
        name: 'Tisha Yanchev',
        image: Image03,
        link: '#0',
        content: 'Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.',
      },
      {
        id: 3,
        name: 'Sergio Gonnelli',
        image: Image04,
        link: '#0',
        content: 'Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.',
      },
      {
        id: 4,
        name: 'Jerzy Wierzy',
        image: Image05,
        link: '#0',
        content: 'Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.',
      },
      {
        id: 5,
        name: 'Mirko Grubisic',
        image: Image06,
        link: '#0',
        content: 'Fitness Fanatic, Design Enthusiast, Mentor, Meetup Organizer & PHP Lover.',
      }     
    ])

    return {
      sidebarOpen,
      items,
    }  
  }
}
</script>