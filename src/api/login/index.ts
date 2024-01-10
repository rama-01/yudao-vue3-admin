import request from '@/config/axios'

export const getCode = (data: Object) =>
  request.postOriginal({ url: '/admin-api/system/captcha/get', data })

// 滑动或者点选验证
export const reqCheck = (data) => {
  return request.postOriginal({ url: '/admin-api/system/captcha/check', data })
}
