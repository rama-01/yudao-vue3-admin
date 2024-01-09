import request from '@/config/axios'

export const getCode = (data:any) =>
  request.postOriginal({ url: '/admin-api/system/captcha/get', data })
