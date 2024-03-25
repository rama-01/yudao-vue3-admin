import router from './router'
import { getAccessToken } from './utils/auth'
import { useUserStoreWithOut } from '@/store/modules/user'
import { usePermissionStoreWithOut } from '@/store/modules/permission'
import { RouteRecordRaw } from 'vue-router'

// 添加路由白名单
const whiteList = ['/login']

router.beforeEach(async (to, from, next) => {
  // debugger
  if (getAccessToken()) {
    if (to.path === '/login') {
      next('/')
    } else {
      /* 设置字典，用户和权限相关的store */
      // 获取并设置字典
      const userStore = useUserStoreWithOut()
      const permissionStore = usePermissionStoreWithOut()
      if (!userStore.getIsSetUser) {  //error
        // 设置用户信息
        await userStore.setUserInfoAction()
        // 后端过滤菜单,设置权限路由
        await permissionStore.generateRoutes()
        // 动态添加可访问路由表
        permissionStore.getAddRouters.forEach((route) => {
          router.addRoute(route as unknown as RouteRecordRaw)
        })
        const redirectPath = from.query.redirect || to.path
        const redirect = decodeURIComponent(redirectPath as string)
        const nextData = to.path === redirect ? { ...to, replace: true } : { path: redirect }
        next(nextData)
      } else {
        next()
      }
    }
  } else {
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})
