import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/login',
      component: () => import('@/views/login/index.vue')
    },
    {
      path: '',  //空路径，表示根路径的直接子路径，会匹配到rootPath,rootPath/,以及rootPath的所有子路径
      component: Layout,
      redirect: 'index',
      children: [
        {
          path: 'index',
          component: () => import('@/views/dashboard/index.vue')
        }
      ]
    }
  ]
})

export default router
