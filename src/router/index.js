import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/views/LoginView.vue'
import StartView from '@/views/StartView.vue'
import ProductListView from '@/views/ProductListView.vue'
import AddProductView from '@/views/AddProductView.vue'
import CategoryListView from '@/views/CategoryListView.vue'
import AddCategoryView from '@/views/AddCategoryView.vue'
import ProfileView from '@/views/ProfileView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      path: '/login',
      component: LoginView
    },
    {
      path: '/start',
      name: '/start',
      component: StartView, 
      // meta: { requiresAuth: true }
    },
    {
      path: '/products',
      name: '/products',
      component: ProductListView,
      // meta: { requiresAuth: true }
    },
    {
      path: '/products/add',
      name: '/products/add',
      component: AddProductView,
      // meta: { requiresAuth: true }
    },
    {
      path: '/categories',
      name: '/categories',
      component: CategoryListView,
      // meta: { requiresAuth: true }
    },
    {
      path: '/categories/add',
      name: '/categories/add',
      component: AddCategoryView,
      // meta: { requiresAuth: true }
    },
    {
      path: '/profile',
      name: '/profile',
      component: ProfileView,
      // meta: { requiresAuth: true }
    }
  ],
})

export default router
