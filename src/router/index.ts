import type { App } from 'vue'
import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router'
import { constantRoutes } from './modules/constants'


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
