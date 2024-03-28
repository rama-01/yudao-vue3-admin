import { Layout } from '@/utils/routerHelper'

export const constantRoutes: AppRouteRecordRaw[] = [
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
        meta: {
          title: '首页'
        }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    name: 'Login',
    meta: {
      hidden: true
    }
  },
  {
    path: '/403',
    component: () => import('@/views/Error/403.vue'),
    name: 'NoAccess',
    meta: {
      hidden: true,
      title: '403'
    }
  },
  {
    path: '/404',
    component: () => import('@/views/Error/404.vue'),
    name: 'NotFound',
    meta: {
      hidden: true,
      title: '404'
    }
  },
  {
    path: '/500',
    component: () => import('@/views/Error/500.vue'),
    name: 'ServerError',
    meta: {
      hidden: true,
      title: '500'
    }
  }
]
