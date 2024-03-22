import type { App } from 'vue'
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import Layout from '@/layout/index.vue'

export const constantRoutes: AppRouteRecordRaw[] = [
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'Login',
    meta: {}
  },
  {
    path: '', //空路径，表示根路径的直接子路径，会匹配到rootPath,rootPath/,以及rootPath的所有子路径
    component: Layout,
    redirect: 'index',
    name: 'Home',
    meta: {},
    children: [
      {
        path: 'index',
        component: () => import('@/views/home/index.vue'),
        name: 'Index',
        meta: {}
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(), // createWebHashHistory URL带#，createWebHistory URL不带#
  strict: true, //严格匹配路径，不会忽略末尾的/
  routes: constantRoutes as RouteRecordRaw[],
  scrollBehavior: () => ({ left: 0, top: 0 }) //切换路由时总是将页面滚动到顶部
})

export const setupRouter = (app: App<Element>) => {
  app.use(router)
}

export default router
