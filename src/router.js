import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./Views/Index.vue')
    },
    {
      path: '/admin',
      name: 'Admin',
      component: () => import('./Views/Admin.vue')
    }
  ]
})
export default router