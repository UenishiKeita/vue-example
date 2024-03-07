import { createRouter, createWebHistory } from 'vue-router'
import AppTop from '@/pages/AppTop.vue'
import StoreCounterView from '@/pages/StoreCounterView.vue'
import TheWelcome from '@/pages/TheWelcome.vue'

const routes = [
  {
    path: '/',
    name: 'top',
    component: AppTop
  },
  {
    path: '/animation',
    name: 'animation',
    // lazy-loaded (遅延読み込み) を行う
    component: () => import('@/pages/AnimationView.vue')
  },
  {
    path: '/store',
    name: 'store',
    component: StoreCounterView
  },

  {
    path: '/welcome',
    name: 'welcome',
    component: TheWelcome
  },
  {
    path: '/appsync',
    name: 'appsync',
    component: () => import('@/pages/AppSyncDisplay.vue')
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
