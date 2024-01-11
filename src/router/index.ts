import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '', //空路径，表示根路径的直接子路径，会匹配到rootPath,rootPath/,以及rootPath的所有子路径
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

const router = createRouter({
  history: createWebHistory(), // createWebHashHistory URL带#，createWebHistory URL不带#
  strict: true, //严格匹配路径，不会忽略末尾的/
  routes: constantRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 }) //切换路由时总是将页面滚动到顶部
})

export default router
