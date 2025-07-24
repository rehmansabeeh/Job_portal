import { createRouter,createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import JobsView from "@/views/JobsView.vue";
import NotFound from "@/views/notFound.vue";
import JobView from "@/views/jobView.vue";
import AddJobView from "@/views/AddJobView.vue";
import EditJobs from "@/views/EditJobs.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
    {
    path: '/jobs',
    name: 'jobs',
    component: JobsView
  },
  {
    path: '/:catchAll(.*)',
    name: 'notFound',
    component: NotFound
  },
  {
    path: '/jobs/:id',
    name: 'job',
    component: JobView
  },
  {
    path: '/jobs/add',
    name: 'add-job',
    component: AddJobView
  },
  {
    path: '/jobs/edit/:id',
    name: 'edit-job',
    component: EditJobs
  },
]
});

export default router;