import request from '@/config/axios'
import { UserLoginVO } from './types'

export const getCode = (data: Object) =>
  request.postOriginal({ url: '/admin-api/system/captcha/get', data })

// 滑动或者点选验证
export const reqCheck = (data) =>
  request.postOriginal({ url: '/admin-api/system/captcha/check', data })

// 登录
export const login = (data: UserLoginVO) =>
  request.post({ url: '/admin-api/system/auth/login', data })

// 获取登录用户权限信息
export const getPermissionInfo = () =>
  request.get({
    url: '/admin-api/system/auth/get-permission-info'
  })
