import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from "./stores/useAuthStore";
import Dashboard from './pages/Dashboard.vue'

import FromScratchContainer from './pages/audits/FromScratchContainer.vue'
import CreateAudit from './pages/audits/CreateAudit.vue'

// import Invoices from './pages/ecommerce/Invoices.vue'
import ReportTemplates from './pages/audits/ReportTemplates.vue'
import AuditList from './pages/audits/AuditList.vue'

// import Campaigns from './pages/Campaigns.vue'
// import UsersTabs from './pages/community/UsersTabs.vue'
// import UsersTiles from './pages/community/UsersTiles.vue'
// import Profile from './pages/community/Profile.vue'
// import ForumPost from './pages/community/ForumPost.vue'
import CreditCards from './pages/finance/CreditCards.vue'
import Transactions from './pages/finance/Transactions.vue'
import JobListing from './pages/job/JobListing.vue'
// import JobPost from './pages/job/JobPost.vue'
// import CompanyProfile from './pages/job/CompanyProfile.vue'
// import Messages from './pages/Messages.vue'
// import TasksList from './pages/tasks/TasksList.vue'
import Account from './pages/settings/Account.vue'
import Surveys from './pages/settings/Surveys.vue'
import Apps from './pages/settings/Apps.vue'
import Feedback from './pages/settings/Feedback.vue'
// import Roadmap from './pages/utility/Roadmap.vue'
// import Faqs from './pages/utility/Faqs.vue'
// import EmptyState from './pages/utility/EmptyState.vue'
import PageNotFound from './pages/utility/PageNotFound.vue'
// import KnowledgeBase from './pages/utility/KnowledgeBase.vue'
import Signin from './pages/Signin.vue'
import Signup from './pages/Signup.vue'
import ResetPassword from './pages/ResetPassword.vue'
import Onboarding01 from './pages/onboarding/Onboarding01.vue'
import Onboarding02 from './pages/onboarding/Onboarding02.vue'
import OnboardingCompany from './pages/onboarding/Company.vue'
import OnboardingIndividual from './pages/onboarding/Individual.vue'
import Onboarding04 from './pages/onboarding/Onboarding04.vue'
import ButtonPage from './pages/component/ButtonPage.vue'
import FormPage from './pages/component/FormPage.vue'
import DropdownPage from './pages/component/DropdownPage.vue'
import AlertPage from './pages/component/AlertPage.vue'
import ModalPage from './pages/component/ModalPage.vue'
import PaginationPage from './pages/component/PaginationPage.vue'
import TabsPage from './pages/component/TabsPage.vue'
import BreadcrumbPage from './pages/component/BreadcrumbPage.vue'
import BadgePage from './pages/component/BadgePage.vue'
// import AvatarPage from './pages/component/AvatarPage.vue'
import TooltipPage from './pages/component/TooltipPage.vue'
import AccordionPage from './pages/component/AccordionPage.vue'
import IconsPage from './pages/component/IconsPage.vue'

const routerHistory = createWebHistory()

const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      component: Dashboard,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: '/dashboard',
      component: Dashboard,
      // meta: {
      //   requiresAuth: true
      // }
    },
    {
      path: '/audits/create',
      component: CreateAudit
    },
    {
      path: '/audits/from-scratch',
      component: FromScratchContainer
    },
    {
      path: '/audits/report-templates',
      component: ReportTemplates
    },
    {
      path: '/signin',
      component: Signin
    },
    {
      path: '/signup',
      component: Signup
    },
    {
      path: '/reset-password',
      component: ResetPassword
    },
    {
      path: '/audits',
      component: AuditList

    },
    {
      path: '/onboarding-01',
      component: Onboarding01
    },
    {
      path: '/onboarding-02',
      component: Onboarding02
    },
    {
      path: '/onboarding-individual',
      component: OnboardingIndividual
    },
    {
      path: '/onboarding-company',
      component: OnboardingCompany
    },
    {
      path: '/onboarding-04',
      component: Onboarding04
    },
    // {
    //   path: '/ecommerce/invoices',
    //   component: Invoices
    // },
    // {
    //   path: '/ecommerce/shop-2',
    //   component: Shop2
    // },
   
    // {
    //   path: '/campaigns',
    //   component: Campaigns
    // },
    // {
    //   path: '/community/users-tabs',
    //   component: UsersTabs
    // },
    // {
    //   path: '/community/users-tiles',
    //   component: UsersTiles
    // },
    // {
    //   path: '/community/profile',
    //   component: Profile
    // },
    // {
    //   path: '/community/forum-post',
    //   component: ForumPost
    // },
    {
      path: '/finance/cards',
      component: CreditCards
    },
    {
      path: '/finance/transactions',
      component: Transactions
    },
    {
      path: '/job/job-listing',
      component: JobListing
    },
    // {
    //   path: '/job/job-post',
    //   component: JobPost
    // },
    // {
    //   path: '/job/company-profile',
    //   component: CompanyProfile
    // },
    // {
    //   path: '/messages',
    //   component: Messages
    // },
    // {
    //   path: '/tasks/list',
    //   component: TasksList
    // },
    {
      path: '/settings/account',
      component: Account
    },
    {
      path: '/settings/surveys',
      component: Surveys
    },
    {
      path: '/settings/apps',
      component: Apps
    },
    {
      path: '/settings/feedback',
      component: Feedback
    },
    // {
    //   path: '/utility/roadmap',
    //   component: Roadmap
    // },
    // {
    //   path: '/utility/faqs',
    //   component: Faqs
    // },
    // {
    //   path: '/utility/empty-state',
    //   component: EmptyState
    // },
    {
      path: '/utility/404',
      component: PageNotFound
    },
    // {
    //   path: '/utility/knowledge-base',
    //   component: KnowledgeBase
    // },


    {
      path: '/component/button',
      component: ButtonPage
    },
    {
      path: '/component/form',
      component: FormPage
    },
    {
      path: '/component/dropdown',
      component: DropdownPage
    },
    {
      path: '/component/alert',
      component: AlertPage
    },
    {
      path: '/component/modal',
      component: ModalPage
    },
    {
      path: '/component/pagination',
      component: PaginationPage
    },
    {
      path: '/component/tabs',
      component: TabsPage
    },
    {
      path: '/component/breadcrumb',
      component: BreadcrumbPage
    },
    {
      path: '/component/badge',
      component: BadgePage
    },
    // {
    //   path: '/component/avatar',
    //   component: AvatarPage
    // },
    {
      path: '/component/tooltip',
      component: TooltipPage
    },
    {
      path: '/component/accordion',
      component: AccordionPage
    },
    {
      path: '/component/icons',
      component: IconsPage
    },
    {
      path: '/:pathMatch(.*)*',
      component: PageNotFound
    }
  ]
})


// router.beforeEach(async (to) => {
//   const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
//   if (requiresAuth && !await getCurrentUser()) {
//     return '/signin';
//   } 
// })

router.beforeEach(async (to, from, next) => {
  let currentUser = await useAuthStore().getCurrentUser();

  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  //page does not require auth and user is not logged in
  if (requiresAuth && !currentUser) next("/signIn");
  // else if (!requiresAuth && currentUser) next("/generator");
  else next();
});

export default router
